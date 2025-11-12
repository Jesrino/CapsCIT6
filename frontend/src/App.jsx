import React from 'react'
import { Routes, Route} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import Services from './pages/services'
import Login from './pages/login'
import About from './pages/about'
import Contact from './pages/contact'
import Myprofile from './pages/myprofile'
import MyAppointments from './pages/myappointments'
import Appointment from './pages/appointment'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]' >
      <Navbar />
    <Routes>
      <Route  path='/' element={<Home />}  />
      <Route  path='/services' element={<Services />}  />
      <Route  path='/services/:speciality' element={<Services />}  />
      <Route  path='/login' element={<Login />}  />
      <Route  path='/about' element={<About />}  />
      <Route  path='/contact' element={<Contact />}  />
      <Route  path='/myprofile' element={<Myprofile />}  />
      <Route  path='/myappointments' element={<MyAppointments />}  />
      <Route  path='/appointment/:serID' element={<Appointment />}  />

    </Routes>

    </div>
  )
}

export default App
