import React from 'react'
import { assets } from '../assets/assets'

function Banner() {
  return (
    <div className="flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 ">
      {/* --- left Side --- */}
      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5' >
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white ">
            <p className="">Book Appointment</p>
            <p className="">With 100+ Trusted Doctors</p>
        </div>
        <button className="">Create account</button>
      </div>

      {/* --- Ride Side --- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img src={assets.appointment_img} alt="" className="w-full absolute bottom-0 right-0 max-w-md" />
      </div>

    </div>
  )
}

export default Banner