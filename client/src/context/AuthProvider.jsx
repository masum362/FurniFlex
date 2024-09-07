import React, { createContext } from 'react'

const AuthContext = createContext(null);


const AuthProvider = ({children}) => {
  return (
    <AuthContext.Provider value={''}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider