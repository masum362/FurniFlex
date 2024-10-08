import React, { useContext, useState } from 'react'
import loginBanner from '@/assets/chair.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { AuthContext } from '@/context/AuthProvider'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@/components/ui/button'
import CustomInput from '@/components/customInput/CustomInput'
import { Checkbox } from '@/components/ui/checkbox'
import googleIcon from '@/assets/google-icon.png'
import appleIcon from '@/assets/apple-icon.png'
import logo from '@/assets/icon.png'


const SignUp = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { RegisterUser, loginWithGithub, loginWithGogle,updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate();
    const location = useLocation();


    const handleOnSubmit = ({ email, password, firstName, lastName }) => {
        console.log(email, password)
        RegisterUser(email, password).then(res => {
            const displayName = firstName + " " + lastName
            updateUser(res.user, displayName).then(res=>{
                console.log("user register successfully")
                toast.success('Successfully register user', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                })
                setTimeout(() => {
                    navigate(location.state ? location.state : "/products");
                }, 2000);
            }).catch(err =>console.log(err));

           
        }).catch(err => {
            toast.error(err.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        })
    }


    const handleGogleLogin = () => {
        loginWithGogle().then(res => {
            toast.success('Successfully looged in user', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
            setTimeout(() => {
                navigate(location.state ? location.state : "/")
            }, 2000);
        }).catch(err => console.log(err));
    }

    return (
        <div className='flex flex-col md:flex-row w-full  min-h-screen '>
            <ToastContainer />
            <div className='w-full lg:w-3/5 bg-[#fff] dark:bg-[#000] p-2 flex flex-col lg:flex-row items-center justify-center '>
                <form onSubmit={handleSubmit(handleOnSubmit)} className='w-full p-2 py-12 md:px-4 rounded-l-lg  md:max-w-md lg:max-w-lg 2xl:max-w-2xl space-y-4 bg-[#FAFAFA]'>
                    <div className='flex flex-col text-center'>
                        <span className='text-3xl font-semibold pb-4'>Welcome To</span>
                        <h1 className='text-3xl font-bold '>Furni<span className='text-theme'>Flex</span></h1>
                        <p className=''>Signup for purchase your desire products</p>
                        {/* <FloatingLabelInput  id="email" label="email address" placeholder={"enter your email"} className="w-full h-16 " /> */}
                        <div className='flex flex-col gap-4 pt-8 text-start'>
                            <div className='flex items-center w-full justify-between gap-4'>
                                <div className='w-full'>
                                    <CustomInput id={'firstName'} label={'First name (optional)'} type={"text"} placeholder={'Jordan'} {...register("firstName", {
                                        required: {
                                            value: true,
                                            message: "first name must be required."
                                        }
                                    })} />
                                    {errors.firstName && <span className='text-red-500'>{errors.firstName?.message}</span>}
                                </div>
                                <div className='w-full'>
                                    <CustomInput id={'lastName'} label={'Last name (optional)'} type={"text"} placeholder={'Ken'} {...register("lastName", {
                                        required: {
                                            value: true,
                                            message: "last name must be required."
                                        }
                                    })} />
                                    {errors.lastName && <span className='text-red-500'>{errors.lastName?.message}</span>}
                                </div>
                            </div>
                            <div>
                                <CustomInput id={'email'} label={'Email address'} type={"email"} placeholder={'Enter your email...'} {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email must be required."
                                    }
                                })} />
                                {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
                            </div>

                            <div className='relative'>
                                <CustomInput id={'password'} label={'Password'} type={isOpen ? "text" : "password"} placeholder={'Enter your password...'} {...register("password", {
                                    required: {
                                        value: true,
                                        message: "password must be required."
                                    }
                                })} />
                                <span className="absolute top-0 right-0 cursor-pointer  w-10 h-full rounded-r-full text-[#707070] dark:text-black flex items-center justify-center" onClick={() => setIsOpen(!isOpen)} >{isOpen ? <FaEyeSlash size={25} /> : <FaEye size={25} />}</span>
                                {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                            </div>
                        </div>
                        <div className='flex justify-end'>
                            <Link to={"/#"} className=' text-theme font-medium py-2'>Forgot Password</Link>
                        </div>
                        <div className="flex items-center space-x-2 pb-4  ">
                            <Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                I agree to the <a href='#' target='_blank' className=' underline'>Terms & Policy</a>
                            </label>
                        </div>
                        <Button type={'submit'} size="lg" className="" >Sign Up</Button>
                    </div>

                    <div className='flex flex-col'>
                        <div className='flex items-center justify-center gap-2'>
                            <hr className='w-full ' />
                            <span >or</span>
                            <hr className='w-full' />
                        </div>

                        <div className='flex flex-col sm:flex-row gap-2 items-center justify-between py-4'>
                            <Button onClick={handleGogleLogin} variant={"outline"} className='flex items-center justify-center gap-2 sm:w-full h-12 px-8 text-sm'>
                                <span ><img src={googleIcon} alt='gogle icon' /></span><span >Sign in with gogle</span>
                            </Button>
                            <Button variant={"outline"} className='flex items-center sm:w-full justify-center gap-2 h-12 px-8 text-sm'>
                                <span ><img src={appleIcon} alt="apple icon" /></span><span>Sign in with apple</span>
                            </Button>


                        </div>
                        <span className=' font-medium text-center'>have an account ? <Link to={"/signin"} className='text-theme dark:text-theme font-medium'>Sign In</Link></span>
                    </div>
                </form>



            </div>

            <div className='w-full lg:w-2/5 relative min-h-screen flex justify-end '>
                <img src={loginBanner} alt="chair" className='object-cover w-full  ' />
                <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full flex-col p-2'>
                    <img src={logo} alt="furniflex" />
                    <h1 className='text-3xl font-bold text-white'>Furni<span className='text-theme'>Flex</span></h1>
                    <p className='max-w-md text-white font-normal text-center'>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
                </div>

            </div >


        </div >
    )
}

export default SignUp