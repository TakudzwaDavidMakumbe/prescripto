import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
       <div className="">
        {/* --- left Side --- */}
        <div className="">
            <img src={assets.logo} alt="" className="" />
            <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste ea veniam aliquam tempore fugiat, nobis laudantium pariatur, quas ratione sit, magni consequuntur facere maxime numquam! Exercitationem minima error veritatis odio.</p>
        </div>

        {/* --- Center Section --- */}
        <div className="">
            <p className="">COMPANY</p>
            <ul className="">
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        {/* --- right Side --- */}
        <div className="">
            <p className="">GET IN TOUCH</p>
            <ul className="">
                <li className="">+263-773-914-992</li>
                <li className="">therealmukanya@gmail.com</li>
            </ul>
        </div>

       </div>
    </div>
  )
}

export default Footer
