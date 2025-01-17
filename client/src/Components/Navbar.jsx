import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate=useNavigate();
  return (
     <div className=' flex  justify-between items-center mt-2 mx-2'>

      
      {/* contains the logo section code */}
    <div className='flex gap-4 border p-4 rounded-full bg-slate-400'>
    <img onClick={()=>navigate('/')} src={assets.logo} alt="logo" className='w-12 ' />
    <p onClick={()=>navigate('/')} className='font-semibold text-3xl text-gray-800 '>Film<span className='text-4xl '>Space</span></p>
    </div>
    {/* contains the profile section code */}
    <div className="group relative mr-2">
          <img
            src={assets.profile_icon}
            alt="profile"
            className="w-10 cursor-pointer"
          />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p onClick={()=>navigate('/profile')} className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
     </div>
     
    
  )
}

export default Navbar