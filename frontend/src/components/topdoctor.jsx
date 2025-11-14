import React from 'react'
import { AppContext } from '../context/AppContextProvider'
import { useNavigate } from 'react-router-dom'

const TopDoctor = () => {
  const navigate = useNavigate()
  const { doctors } = React.useContext(AppContext)

  if (!doctors || doctors.length === 0) {
    return <p className='text-center mt-10'>No doctors available right now.</p>
  }

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-5 px-3 sm:px-0'>
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-sm'
          >
            <img
              className='w-full h-48 object-cover bg-blue-50'
              src={item.image}
              alt={item.name}
            />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-green-500 mb-2'>
                <span className='w-2 h-2 bg-green-500 rounded-full inline-block'></span>
                <span>Available</span>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-sm text-gray-600'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/services')
          scrollTo(0, 0)
        }}
        className='mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition'
      >
        More
      </button>
    </div>
  )
}

export default TopDoctor
