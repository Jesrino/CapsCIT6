import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-row px-3 sm:px-6 md:px-10 lg:px-20 py-6 sm:py-10 w-full gap-4 sm:gap-6' style={{ backgroundColor: '#5f6fff' }}>
      {/* Header content goes here */}
      <div className='w-1/2 flex flex-col items-start justify-center gap-2 sm:gap-3 md:gap-4 py-6 sm:py-10'>
    <p className='text-lg sm:text-2xl md:text-3xl lg:text-4xl text-black font-semibold leading-snug'>
      Book Appointments <br /> With Trusted Dentists Near You
    </p>
        <div className='flex flex-col items-start gap-1 sm:gap-2'>
            <img className='w-16 sm:w-20 md:w-24' src={assets.group_profiles} alt="Profiles"/>
            <p className='text-white text-xs sm:text-sm font-light leading-snug'>Simply browse through our extensive list of services and offers.</p>
        </div>
        <a href="#speciality" className='inline-flex items-center gap-1 sm:gap-2 bg-white text-primary font-semibold px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded shadow hover:bg-gray-100 transition text-xs sm:text-sm'>
            Book Appointment <img src={assets.arrow_icon} alt="Arrow" className='w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4' />
        </a>
      </div>

      {/* Image section */}
      <div className='w-1/2 flex justify-center items-end'>
        <img src={assets.header_img} alt="Header" className='w-full h-auto' />
      </div>
    </div>
  )
}

export default Header
