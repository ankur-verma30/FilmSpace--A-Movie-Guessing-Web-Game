import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className="text-center py-20 text-white bg-gray-800">
    <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
    <p className="mt-4">Oops! The page you’re looking for doesn’t exist.</p>
    <Link to="/" className="mt-6 inline-block bg-red-500 px-6 py-3 rounded-full text-white hover:bg-red-600">Go Home</Link>
  </div>
  )
}

export default Notfound