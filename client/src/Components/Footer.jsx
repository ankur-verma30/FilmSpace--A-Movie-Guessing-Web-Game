import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap- my-10 mt-40 text-sm  items-center">
        <div className="">
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            laborum quaerat suscipit necessitatibus asperiores nesciunt quasi?
            Veritatis, aliquid corrupti.
          </p>
        </div>
       
        <div>
            <p className="text-xl font-medium mb-5">
                GET IN TOUCH
            </p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1234567890</li>
                <li>ankurverma7619@gmail.com</li>
            </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright@ 2025 FilmSpace  All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
