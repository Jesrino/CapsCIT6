import React, { useState, useRef, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu, setShowMenu] = useState(false)
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
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt='Dents City Logo' />
      <ul className='hidden md:flex item-start gap-5 font-medium'>
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
                <div className='flex items-center gap-2 cursor-pointer' onClick={() => setShowMenu(s => !s)} aria-expanded={showMenu}>
                  <img className='w-8 h-8 rounded-full' src={assets.profile_pic} alt="profile" />
                  <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                </div>

                {/* dropdown - click toggles visibility */}
                <div className={(showMenu ? 'block' : 'hidden') + ' absolute top-full left-0 mt-2 z-20'}>
                  <div className='w-48 bg-stone-100 rounded-md shadow-md flex flex-col gap-3 p-3'>
                    <button onClick={() => navigate('/myprofile')} className='text-left hover:text-black text-gray-700 py-1'>My Profile</button>
                    <button onClick={() => navigate('/myappointments')} className='text-left hover:text-black text-gray-700 py-1'>My Appointments</button>
                    <button onClick={() => setToken(false)} className='text-left hover:text-black text-gray-700 py-1'>Logout</button>
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