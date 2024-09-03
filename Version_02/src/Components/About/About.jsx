import React from 'react'
import { LiaHomeSolid } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import Link from "react-scroll"
function About() {
  return (
    <div id="about" className="p-3 md:px-10 lg:px-16 xl:px-20  2xl:px-32 my-[50px] ">
        <div>
            <h2 className="text-2xl">My Personal Information & Social Media Links</h2>
            <h4 className="text-xl text-center pt-20 pb-10">Below are the details to reach out to me</h4>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='text-center'>
                <LiaHomeSolid  size={35} className='m-auto hover:scale-105 duration-500' />
                <h3 className="text-xl">Address</h3>
                <h4 className="text-xl">Nagpur,Maharashtra</h4>

            </div>
            <div className='text-center'>
                <MdOutlineMail  size={35} className='m-auto hover:scale-105 duration-500' />
                <h3 className="text-xl">Email</h3>
                <h4 className="text-xl">prajwalkamdi18@gmail.com</h4>

            </div>
            <div className='text-center'>
                <MdOutlineLocalPhone  size={30} className='m-auto hover:scale-105 duration-500' />
                <h3 className="text-xl">Phone</h3>
                <h4 className="text-xl">+91 9970255658</h4>

            </div>
            <div className='text-center'>
                <FaLinkedinIn  size={30} className='m-auto hover:scale-105 duration-500' />
                <h3 className="text-xl">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/prajwal-kamdi-b016b3286/">Click Here</a>
            </div>
            <div className='text-center'>
                <IoLogoGithub  size={35} className='m-auto hover:scale-105 duration-500' />
                <h3 className="text-xl">GitHub</h3>
                <a href="https://github.com/PrajwalKamdi">Click Here</a>
            </div>
        </div>
    </div>
  )
}

export default About