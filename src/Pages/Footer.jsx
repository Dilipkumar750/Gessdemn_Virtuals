import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigateToSection = (sectionId) => {
    navigate("/", { state: { scrollTo: sectionId } });
  };

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 pt-12 pb-6 px-10 tracking-wide font-semibold">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo & Social Media Section */}
          <div>
            <Link to="/">
              <img src={logo} alt="Company Logo" className="w-48" />
            </Link>

            <div className="mt-4">
              <ul className="flex space-x-6">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="text-gray-300 hover:text-white w-7 h-7" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="text-gray-300 hover:text-white w-7 h-7" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-gray-300 hover:text-white w-7 h-7" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h4 className="text-lg mb-6 text-white font-semibold">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                📍 25, Lakshmipuram, 4th Street, <br /> Peelamedu, Coimbatore
              </li>
              <li>
                ✉️ <a href="mailto:info@gessdemnvirtuals.com" className="hover:text-white">
                  info@gessdemnvirtuals.com
                </a>
              </li>
              <li>
                📞 <a href="tel:+1234567890" className="hover:text-white">
                  +1 234 567 890
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h4 className="text-lg mb-6 text-white font-semibold">Useful Links</h4>
            <ul className="space-y-4">
              <li>
                <button onClick={() => handleScrollToSection("home")} className="text-gray-400 hover:text-white text-sm">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigateToSection("about")} className="text-gray-400 hover:text-white text-sm">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => handleNavigateToSection("services")} className="text-gray-400 hover:text-white text-sm">
                  Our Services
                </button>
              </li>
              <li>
               <Link to={"/termsandcondition"}>
                  <button className="text-gray-400 hover:text-white text-sm">
                    Terms And Conditions
                  </button>
               </Link>
              </li>
              <li>
                <Link to={"/privacypolicy"}>
                  <button  className="text-gray-400 hover:text-white text-sm">
                    Privacy Policy
                  </button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg mb-6 text-white font-semibold">Our Services</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/ourservices/imageenhancement" className="text-gray-400 hover:text-white text-sm">
                  Image Enhancement
                </Link>
              </li>
              <li>
                <Link to="/ourservices/VirtualStaging" className="text-gray-400 hover:text-white text-sm">
                  Virtual Staging
                </Link>
              </li>
              <li>
                <Link to="/ourservices/ItemRemoval" className="text-gray-400 hover:text-white text-sm">
                  Item Removal
                </Link>
              </li>
              <li>
                <Link to="/ourservices/DayToDusk" className="text-gray-400 hover:text-white text-sm">
                  Day To Dusk
                </Link>
              </li>
              <li>
                <Link to="/ourservices/FloorPlan" className="text-gray-400 hover:text-white text-sm">
                  Floor Plans
                </Link>
              </li>
              <li>
                <Link to="/ourservices/VirtualRenovation" className="text-gray-400 hover:text-white text-sm">
                  Virtual Renovation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <p className="text-gray-400 text-sm mt-10 text-center">
          © {new Date().getFullYear()} Gessdemn Virtuals. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
