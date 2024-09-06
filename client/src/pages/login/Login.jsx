import React, { useContext, useState } from 'react'
import loginBanner from '@/assets/chair.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io5'
// import { AuthContext } from '../../context/AuthProvider'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button'
// import useAxiosSecure from '../../hooks/useAxiosSecure'
import { FloatingInput, FloatingLabel, FloatingLabelInput } from '@/components/ui/floating-label-input';

const Login = () => {

  const [isOpen, setIsOpen] = useState(false)
  // // const { LoginUser, loginWithGithub, loginWithGogle } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm()
  // const navigate = useNavigate();
  // const location = useLocation();


  // const handleOnSubmit = ({ email, password }) => {
  //     console.log(email, password)
  //     LoginUser(email, password).then(res => {
  //         console.log("user logged in successfully")
  //         toast.success('Successfully looged in user', {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //             transition: Bounce,
  //         })
  //         setTimeout(() => {
  //             navigate(location.state ? location.state : "/");
  //         }, 2000);
  //     }).catch(err => {
  //         toast.error(err.message, {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //             transition: Bounce,
  //         })
  //     })
  // }


  // const handleGogleLogin = () => {
  //     loginWithGogle().then(res => {
  //         toast.success('Successfully looged in user', {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //             transition: Bounce,
  //         })
  //         setTimeout(() => {
  //             navigate(location.state ? location.state : "/")
  //         }, 2000);
  //     }).catch(err => console.log(err));
  // }
  // const handleGithubLogin = () => {
  //     loginWithGithub().then(res => {
  //         console.log("user logged in successfully")
  //         toast.success('Successfully looged in user', {
  //             position: "top-right",
  //             autoClose: 5000,
  //             hideProgressBar: false,
  //             closeOnClick: true,
  //             pauseOnHover: true,
  //             draggable: true,
  //             progress: undefined,
  //             theme: "light",
  //             transition: Bounce,
  //         })
  //         setTimeout(() => {
  //             navigate(location.state ? location.state : "/")
  //         }, 2000);
  //     }).catch(err => console.log(err));
  // }


  return (
    <div className='flex h-screen overflow-hidden'>
      <ToastContainer />
      <div className='w-3/5 bg-[#fff] dark:bg-[#000] p-2 md:p-14 lg:p-24'>
        <form className='w-full p-2 py-12 md:px-4  flex flex-col rounded-l-lg border border-red-500'>
          <span className='text-3xl font-semibold line-clamp-1 '>Welcome Back!</span>
          <p className=''>Enter your Credentials to access your account</p>
          <FloatingLabelInput  id="name" label="name" />

          <div>
            <input type="text" className="input input-bordered w-full" name="email"  {...register("email", {
              required: {
                value: true,
                message: "email must be required."
              }
            })} placeholder="Email" />
            {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
          </div>
          <div className='relative'>
            <input type={isOpen ? "text" : "password"} name='password' {...register("password", {
              required: {
                value: true,
                message: "password must be required."
              }
            })} className="input input-bordered w-full rounded-r-full" placeholder='password' />
            <span className="absolute top-0 right-0 cursor-pointer bg-black dark:bg-white w-10 h-full rounded-r-full text-white dark:text-black flex items-center justify-center" onClick={() =>setIsOpen(!isOpen)} >{isOpen ? <FaEyeSlash size={25} /> : <FaEye size={25} />}</span>

          </div>
          {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
          <Button type={'submit'} >Login</Button>
        </form>

        <div className='flex flex-col items-center justify-center gap-4 pb-6'>
          <button className='flex items-center justify-center border border-[#4F86EC] bg-white'>
            <span className='px-4'><IoLogoGoogle size={25} /></span><span className='p-4 bg-[#4F86EC] text-white font-medium'>Sign in with gogle</span>
          </button>
          <button className='flex items-center justify-center bg-black text-white rounded-lg border border-white'>
            <span className='px-4'><IoLogoGithub size={25} /></span><span className='p-4 text-white font-medium'>Sign in with github</span>
          </button>

          <p className='dark:text-white'>Don't have an account ? <Link to={"/register"} className='text-themePrimary dark:text-themeSecondary font-medium'>Register</Link></p>
        </div>
        <div className='w-full flex flex-col items-center justify-center gap-2 py-6 p-4'>
          <h1 className='text-white font-bold text-5xl text-center'>Welcome Back!</h1>
          <p className='max-w-sm text-white text-center'>Ready to read? Please Login to your account and start reading today!</p>
        </div>
      </div>

      <div className=' w-2/5 border border-red-500 bg-contain bg-no-repeat relative h-screen flex justify-end '>
        <img src={loginBanner} alt="chair" className='object-cover w-full ' />

      </div >


    </div >
  )
}

export default Login