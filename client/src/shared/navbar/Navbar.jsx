import logo from '@/assets/logo.png'
import { IoBagOutline } from "react-icons/io5";
import userImage from '@/assets/Account.png'

import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='flex items-center justify-between gap-2 px-2 py-4 border-b  sm:px-8'>
      <div>
        <img src={logo} alt="FurniFlex" />
      </div>
      <ul className='flex items-center justify-center gap-2 lg:gap-4'>
        <li><NavLink to={"/"} className={({isActive}) => `${isActive ? "bg-secondary hover:bg-secondary/50 font-semibold px-4" : " "} p-2 rounded-lg transition-all duration-150 font-medium`}>Home</NavLink></li>
        <li><NavLink to={"/products"} className={({isActive}) => `${isActive ? "bg-secondary hover:bg-secondary/50 font-semibold px-4" : " "} p-2 rounded-lg transition-all duration-150 font-medium`}>Products</NavLink></li>
        <li><NavLink to={"/categories"} className={({isActive}) => `${isActive ? "bg-secondary hover:bg-secondary/50 font-semibold px-4" : " "} p-2 rounded-lg transition-all duration-150 font-medium`}>Categories</NavLink></li>
        <li><NavLink to={"/custom"} className={({isActive}) => `${isActive ? "bg-secondary hover:bg-secondary/50 font-semibold px-4" : " "} p-2 rounded-lg transition-all duration-150 font-medium`}>Custom</NavLink></li>
        <li><NavLink to={"/blog"} className={({isActive}) => `${isActive ? "bg-secondary hover:bg-secondary/50 font-semibold px-4" : " "} p-2 rounded-lg transition-all duration-150 font-medium`}>Blog</NavLink></li>
      </ul>
      <div className='flex items-center justify-center gap-4'>
      <Link to={"/cart"}> 
      <span className='relative'>
       <IoBagOutline  size={30} />
       <p className='h-4 w-4 bg-black text-white text-sm flex items-center justify-center rounded-full absolute bottom-0 right-0'>2</p>
       </span>
       </Link>
        <img src={userImage} alt="user profile pic" />
      </div>
    </nav>
  )
}

export default Navbar