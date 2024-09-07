import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FiFacebook } from "react-icons/fi";
import logo from '@/assets/Logo-footer.png'
import us from '@/assets/united-states.png'

const Footer = () => {
  return (
    <div className='bg-black text-white p-5 lg:px-10 space-y-8'>
      <footer className=" flex flex-col lg:flex-row justify-center w-full gap-4 lg:gap-20 items-start  ">
        <aside className='w-full lg:w-1/3'>
          <img src={logo} alt="FurniFlex" />
        </aside>
        <div className='flex flex-col md:flex-row gap-8 items-start justify-between w-full lg:w-2/3 '>
          <nav className='flex flex-col  '>
            <h6 className="footer-title font-semibold pb-2 ">About Us</h6>
            <a className="link link-hover">Master Plan</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Invest</a>
            <a className="link link-hover">Pressroom</a>
            <a className="link link-hover">Blog</a>
            <a className="link link-hover">Contact</a>
          </nav>
          <nav className='flex flex-col  '>
            <h6 className="footer-title font-semibold pb-2 ">Explore EEVE</h6>
            <a className="link link-hover">Unlock my Robot Power</a>
            <a className="link link-hover">Starlight</a>
            <a className="link link-hover">Robot Platform</a>
            <a className="link link-hover">EEVE Roadmap</a>
          </nav>
          <nav className='flex flex-col '>
            <h6 className="footer-title font-semibold pb-2 ">Community & Support</h6>
            <a className="link link-hover">Willow X Community</a>
            <a className="link link-hover">Developer & Maker Access</a>
            <a className="link link-hover">Special Cases</a>
          </nav>

        </div>
      </footer>

      <div className=' pt-4 flex items-start lg:items-center justify-center flex-col gap-6 border-t '>

        <div className='flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 py-2'>
          <div className='flex items-start lg:items-center justify-center gap-2'>
            <a href='https://www.facebook.com/md.masum.ahmed.mk'><FiFacebook  /></a>
            <a href='https://www.instagram.com/masum362ig'><FaInstagram  /></a>
            <a href='https://www.twitter.com/'><FaXTwitter  />
            </a>
            <a href='wa.link/oi9fwi'><SlSocialLinkedin  /></a>

          </div>
          <ul className='flex flex-col md:flex-row flex-wrap items-start md:items-center md:gap-2'>
            <li>March22 Recap</li>
            <li>Privacy Policy</li>
            <li>General Terms</li>
            <li>Contact</li>
          </ul>
          <div className='flex items-center gap-2'>
            <img src={us} alt="united states" />
            <span>United States (English)</span>
          </div>
        </div>
        <p>EEVE © 2024. All rights reserved.</p>
      </div>
    </div>


  )
}

export default Footer