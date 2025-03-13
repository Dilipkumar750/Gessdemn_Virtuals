import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleScrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Close mobile menu after clicking
    };

    return (
        <nav className="bg-black text-white fixed w-full top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center space-x-2">
                        <div className="bg-orange-600 p-2 rounded">
                            <span className="text-white font-bold text-xl">GV.</span>
                        </div>
                        <span className="text-orange-600 font-bold text-lg">Gessdemn Virtuals</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 uppercase text-sm font-bold">
                    <Link to="/">
                        <button onClick={() => handleScrollToSection("home")} className="hover:text-orange-500">Home</button>
                    </Link>
                    <button onClick={() => handleScrollToSection("about")} className="hover:text-orange-500">About Us</button>
                    {/* Services Dropdown */}
                    <div
                        className="relative"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        <button className="flex items-center text-md  hover:text-orange-500">
                            Our Services <IoIosArrowDown className="ml-1" />
                        </button>
                        {dropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="fixed top-[60px] left-0 w-screen bg-gray-800 text-white shadow-lg p-4 flex justify-center space-x-8 uppercase text-sm font-bold"
                            >
                                <Link to="/ourservices/ImageEnhancement" className="block hover:text-orange-500">Image Enhancement</Link>
                                <Link to="/ourservices/VirtualStaging" className="block hover:text-orange-500">Virtual Staging</Link>
                                <Link to="/ourservices/ItemRemoval" className="block hover:text-orange-500">Item Removal</Link>
                                <Link to="/ourservices/DayToDusk" className="block hover:text-orange-500">Day to Dusk</Link>
                                <Link to="/ourservices/FloorPlan" className="block hover:text-orange-500">Floor Plans</Link>
                                <Link to="/ourservices/VirtualRenovation" className="block hover:text-orange-500">Virtual Renovation</Link>


                            </motion.div>
                        )}
                    </div>

                    <button onClick={() => handleScrollToSection("contact")} className="hover:text-orange-500">Contact</button>
                </div>

                {/* Mobile Menu Icon */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="text-2xl text-orange-600" /> : <FaBars className="text-2xl text-orange-600" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <motion.div
                initial={{ x: "100%" }}
                animate={{ x: isOpen ? "0%" : "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 w-3/4 h-full bg-gray-900 text-white shadow-lg p-6 z-50 flex flex-col"
            >
                {/* Close Button */}
                <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
                    <FaTimes className="text-2xl text-orange-600" />
                </button>

                {/* Mobile Menu Links */}
                <nav className="flex flex-col space-y-6 mt-10 uppercase text-lg font-bold">
                    <button onClick={() => handleScrollToSection("home")} className="hover:text-orange-500">Home</button>
                    <button onClick={() => handleScrollToSection("about")} className="hover:text-orange-500">About Us</button>

                    {/* Services Dropdown Inside Drawer */}
                    <div>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center justify-between w-full text-left hover:text-orange-500"
                        >
                            Our Services <IoIosArrowDown className="ml-1" />
                        </button>

                        {dropdownOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-3 bg-gray-800 rounded p-3 space-y-2"
                            >
                                <Link to="/ourservices/ImageEnhancement" className="block hover:text-orange-500">Image Enhancement</Link>
                                <Link to="/ourservices/VirtualStaging" className="block hover:text-orange-500">Virtual Staging</Link>
                                <Link to="/ourservices/ItemRemoval" className="block hover:text-orange-500">Item Removal</Link>
                                <Link to="/ourservices/DayToDusk" className="block hover:text-orange-500">Day to Dusk</Link>
                                <Link to="/ourservices/FloorPlan" className="block hover:text-orange-500">Floor Plans</Link>
                                <Link to="/ourservices/VirtualRenovation" className="block hover:text-orange-500">Virtual Renovation</Link>
                            </motion.div>
                        )}
                    </div>

                    <button onClick={() => handleScrollToSection("contact")} className="hover:text-orange-500">Contact</button>
                </nav>
            </motion.div>
        </nav>
    );
};

export default Navbar;
