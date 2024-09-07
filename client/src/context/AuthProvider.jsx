import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import { auth } from "@/firebase/firebase.init"
// import useAxiosPublic from "../hooks/useAxiosPublic"

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const gogleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const RegisterUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGogle = () => {
        return signInWithPopup(auth, gogleProvider)
    }

    const updateUser = (user, displayName, photoURL) => {
        setLoading(true)
        return updateProfile(user, {
            displayName, photoURL
        })
    }


    const logOut = () => {
        setUser(null)
        setLoading(true)
        localStorage.removeItem('access_token')
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                console.log(currentUser)
                setUser(currentUser);
                setLoading(false);
            }

            else {
                setLoading(false)
            }
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        RegisterUser,
        LoginUser,
        updateUser,
        loginWithGogle,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider