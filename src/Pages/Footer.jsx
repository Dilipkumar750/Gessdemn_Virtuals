import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-20 xl:mt-32 mx-auto w-full relative bg-black text-white">
      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12 flex flex-col md:flex-row md:items-start">
        <div className="md:w-1/3 text-left">
          <img src={logo} alt="Company Logo" className="w-32 h-32" />
          <p className="mt-4 text-sm">Email: info@gessdemnvirtuals.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
          <p className="text-sm">Address: 123 Main St, City, Country</p>
        </div>
        <div className="md:w-2/3 text-center md:text-left md:ml-auto">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            Enhance Your Listings with Professional Real Estate Photo Editing
          </h2>
          <a
            className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-orange-500 rounded-full shadow-xl border border-transparent hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            href="#contact"
          >
            Get Started
          </a>
          <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center md:justify-start text-lg font-medium">
              <div className="px-5 py-2">
                <button onClick={() => scrollToSection("services")} className="hover:underline">Services</button>
              </div>
              <div className="px-5 py-2">
                <button onClick={() => scrollToSection("portfolio")} className="hover:underline">Portfolio</button>
              </div>
              <div className="px-5 py-2">
                <button onClick={() => scrollToSection("pricing")} className="hover:underline">Pricing</button>
              </div>
              <div className="px-5 py-2">
                <button onClick={() => scrollToSection("contact")} className="hover:underline">Contact</button>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="hover:underline">Instagram</a>
              </div>
              <div className="px-5 py-2">
                <a href="#" className="hover:underline">Facebook</a>
              </div>
            </nav>
            <p className="mt-7 text-base">© 2025 Gessdemn Virtuals, LLC</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;