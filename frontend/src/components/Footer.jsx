import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
       <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        {/* --- left Side --- */}
        <div className="">
            <img src={assets.logo} alt="" className="mb-5 w-40" />
            <p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ea veniam aliquam tempore fugiat, nobis laudantium pariatur, quas ratione sit, magni consequuntur facere maxime numquam! Exercitationem minima error veritatis odio.</p>
        </div>

        {/* --- Center Section --- */}
        <div className="">
            <p className="text-xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* --- right Side --- */}
        <div className="">
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
                <li className="">+263-773-914-992</li>
                <li className="">therealmukanya@gmail.com</li>
            </ul>
        </div>

       </div>
       {/* --- Copyright Text --- */}
       <div className="">
            <hr className="" />
            <p className=" py-5 text-sm text-center">Copyright © 2024@ Prescripto - All rights reserved.</p>
       </div>
    </div>
  )
}

export default Footer
