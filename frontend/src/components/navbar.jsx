import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import Header from '../components/header' 

const Navbar = () => {
  const navigate = useNavigate()
  // DEBUG: open dropdown by default so it's visible for inspection. Set to false to restore normal behaviour.
  const [showMenu, setShowMenu] = useState(true)
  const [token, setToken] = useState(true)
  const menuRef = useRef(null)

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleCreateAccount = () => {
    navigate('/login')
  }

  return (
    <div className='flex items-center justify-between text-xs sm:text-sm py-4 mb-5 border-b border-gray-400 px-2 sm:px-4'>
      <img className='w-32 sm:w-44 cursor-pointer' src={assets.logo} alt='Dents City Logo' />
      <ul className='flex item-start gap-2 sm:gap-5 font-medium flex-wrap'>
        <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
        <NavLink to='/services' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'>Services</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? 'active' : ''}>
          <li className='py-1'>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto' />
        </NavLink>
      </ul>
      <div className='flex item-center gap-4'>
        {
            token
            ? (
              <div className='relative' ref={menuRef}>
                <div className='flex items-center gap-2 cursor-pointer' onClick={() => { console.log('avatar clicked, showMenu=', showMenu); setShowMenu(s => !s); }} aria-expanded={showMenu}>
                  <img className='w-8 h-8 rounded-full' src={assets.profile_pic} alt="profile" />
                  <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                </div>

                {/* dropdown - click toggles visibility. Fixed positioning for mobile screens */}
                <div className={(showMenu ? 'block' : 'hidden') + ' absolute top-full right-0 mt-2 z-50 w-48'}>
                  <div className='bg-white border border-red-300 rounded-md shadow-lg flex flex-col gap-3 p-3'>
                    <button onClick={() => navigate('/myprofile')} className='text-left hover:text-black text-gray-700 py-1 text-sm'>My Profile</button>
                    <button onClick={() => navigate('/myappointments')} className='text-left hover:text-black text-gray-700 py-1 text-sm'>My Appointments</button>
                    <button onClick={() => setToken(false)} className='text-left hover:text-black text-gray-700 py-1 text-sm'>Logout</button>
                  </div>
                </div>
              </div>
            ) : (
              <button onClick={() => navigate('/login')} style={{ backgroundColor: '#5f6fff' }} className='text-white px-8 py-3 rounded-full font-light'>Create Account</button>
            )
        }
      </div>
    </div>
  )
}

export default Navbar