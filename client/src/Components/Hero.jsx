
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="min-h-screen text-center py-10 md:py-20 bg-gray-900 text-white flex flex-col items-center justify-center">
    <h2 className="text-4xl font-bold mb-4">Guess the Movie, Have Fun!</h2>
    <p className="mt-2 text-lg mb-6 max-w-lg">
      Challenge your friends in an exciting Bollywood guessing game.
    </p>

    {/* Buttons Section */}
    <div className="flex flex-col md:flex-row gap-4">
      <Link
        to="/guestplay"
        className="bg-green-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-green-600"
      >
        Play as Guest
      </Link>
      <Link
        to="/login"
        className="bg-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600"
      >
        Login
      </Link>
      <Link
        to="/signup"
        className="bg-purple-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-purple-600"
      >
        Sign Up
      </Link>
    </div>
  </section>
);

export default Hero;
