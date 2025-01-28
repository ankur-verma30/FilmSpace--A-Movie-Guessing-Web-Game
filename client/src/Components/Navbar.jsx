import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-4 flex justify-between items-center shadow-lg">
    <h1 className="text-3xl font-extrabold">FilmSpace</h1>
    <ul className="flex gap-6 text-lg">
      <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
      <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
      <li><Link to="/play" className="hover:text-gray-300">Play</Link></li>
    </ul>
    <Link to="/profile" className="ml-auto bg-gray-800 px-5 py-2 rounded-full hover:bg-gray-700">Profile</Link>
  </div>
  )
}

export default Navbar