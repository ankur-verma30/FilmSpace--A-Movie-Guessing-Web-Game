import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import Notfound from "./Components/Notfound";
import GuestPlay from "./pages/GuestPlay";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
    {/* Navbar */}
    <Navbar />

    {/* Routes */}
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/guestplay" element={<GuestPlay />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>

 
    <Footer />
  </div>
   
  );
}

export default App;
