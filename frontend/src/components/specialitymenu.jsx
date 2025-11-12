import React from 'react'
import { NavLink } from 'react-router-dom'
import { specialityData } from '../assets/assets'

const Specialitymenu = () => {
  return (
    <div className='flex flex-col gap-4 mb-10 items-center text-center'>
      <h1 className='text-3xl sm:text-3xl md:text-4xl font-medium'>Services Offered</h1>
      <p className='text-gray-600 sm:w-1/3 text-center text-sm'>Simply browse through our list of services offered, schedule your appointment hassle-free.</p>
      <div id="speciality" className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8'>
        {specialityData.map((item, index) => (
          <NavLink onClick={()=>scrollTo(0,0)} key={index} to={`/services/${item.speciality}`} className='flex flex-col items-center gap-2 p-3 sm:p-4 border border-gray-300 rounded-lg hover:shadow-lg hover:border-primary cursor-pointer transition'>
            <img src={item.image} alt={item.speciality} className='w-16 h-12 sm:w-24 mb-2 sm:h-16' />
            <p className='text-xs sm:text-sm text-center'>{item.speciality}</p>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Specialitymenu
