import React, { useState, useEffect } from "react";
import autoenhance from "../assets/autoenhance.jpeg";
import autoenhance2 from "../assets/autoenhance2.webp";
import autoenhance3 from "../assets/autoenhance3.webp";
import autoenhance4 from "../assets/autoenhance4.webp";
import realestate from "../assets/realestate.jpg"
const images = [autoenhance, autoenhance2, autoenhance3, autoenhance4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="w-full h-[450px] max-w-6xl flex items-center justify-center overflow-hidden relative">
        <img
          src={images[currentIndex]}
          alt="Real Estate Enhancement"
          className="w-full h-[420px] object-cover transition-transform duration-500 ease-in-out mb-2"
        />
      </div>
      <section className="relative bg-gray-100 py-10 px-6 ">
        <div className="max-w-8xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden">

          <div className="p-10 md:w-full text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-900">
              <span className="text-black">Real Estate </span>
              <span className="text-orange-500">Photo Editing</span>
            </h1>
            <p className="text-lg text-gray-700 mt-2">Virtual Staging & Floor Plans</p>
            <p className="text-gray-600 mt-4">
              Transform your real estate listings with professional photo enhancements,
              virtual furniture staging, and precise floor plans to attract more buyers.
            </p>
            <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              Get Started
            </button>
          </div>

          <div className="md:w-1/2 relative flex justify-center items-center p-6 bg-gradient-to-r from-transparent to-orange-500">
            <div className="relative w-64 h-64">
              <img
                src={realestate} 
                alt="Real Estate Editing"
                className="rounded-full border-8 border-white shadow-lg w-full h-full object-fit"
              />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Hero;
