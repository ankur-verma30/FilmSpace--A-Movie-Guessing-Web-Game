import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className=" ">
      <div className="flex flex-col items-center justify-center min-h-[720px] gap-20">
        <img src={assets.hero_image} alt="hero_image" className="w-full h-[700px]" />

        <div className="flex flex-col sm:flex-row items-center justify-evenly gap-x-20">
          <button className="border border-gray-500 outline outline-red-600 rounded-full p-4 font-semibold hover:text-orange-600 bg-slate-500">
            Login
          </button>
          <button className="border border-gray-500 outline outline-red-600 rounded-full p-4 font-semibold hover:text-orange-600 bg-slate-500">
            SignUp
          </button>
          <button className="border border-gray-500 outline outline-red-600 rounded-full p-4 font-semibold hover:text-orange-600 bg-slate-500">
            Play as a guest
          </button>
        </div>

        <div>
          <button
            onClick={() => navigate("/settings")}
            className="border border-gray-500 outline outline-red-600 rounded-full p-4 font-semibold hover:text-orange-600 bg-slate-500"
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
