import React from "react";
import { Link } from "react-router-dom";
import before1 from "../assets/image1Before.jpg";
import after1 from "../assets/image1After.jpg";
import before2 from "../assets/image2Before.jpg";
import after2 from "../assets/image2After.jpg";
import before3 from "../assets/image3Before.jpg";
import after3 from "../assets/image3After.jpg";
import before4 from "../assets/image4Before.jpg";
import after4 from "../assets/image4After.jpg";
import before5 from "../assets/image5Before.jpg";
import after5 from "../assets/image5After.jpg";
import before6 from "../assets/image6Before.jpg";
import after6 from "../assets/image6After.jpg";

const services = [
    {
        title: "IMAGE ENHANCEMENT",
        path: "/ourservices/imageenhancement",
        description: "Perfect for real estate photo editing so you can present your listing with top-notch, retouched professional-looking photos.",
        beforeImage: before1,
        afterImage: after1,
    },
    {
        title: "VIRTUAL STAGING",
        path: "/ourservices/virtualstaging",
        description: "Our team can add furniture to real estate photography to show potential buyers just how versatile the space is.",
        beforeImage: before2,
        afterImage: after2,
    },
    {
        title: "ITEM REMOVAL & VIRTUAL CLEANING",
        path: "/ourservices/itemremoval",
        description: "Declutter and enhance real estate images by removing unwanted objects and virtually cleaning spaces for a polished, professional look.",
        beforeImage: before4,
        afterImage: after4,
    },
    {
        title: "DAY TO DUSK",
        path: "/ourservices/daytodusk",
        description: "Transform your real estate photos from daytime to a stunning dusk setting, enhancing the ambiance and appeal of the property.",
        beforeImage: before3,
        afterImage: after3,
    },
    {
        title: "FLOOR PLAN REDRAW",
        path: "/ourservices/floorplan",
        description: "Convert rough sketches or outdated floor plans into clean, accurate, and visually appealing floor plan redraws for real estate listings.",
        beforeImage: before5,
        afterImage: after5,
    },
    {
        title: "VIRTUAL RENOVATIONS",
        path: "/ourservices/virtualrenovation",
        description: "Convert rough sketches or outdated floor plans into clean, accurate, and visually appealing floor plan redraws for real estate listings.",
        beforeImage: before6,
        afterImage: after6,
    },
];

const OurServices = () => {
    return (
        <section id="services" className="bg-gray-800 text-orange-500 py-12">
            <div className="mx-auto px-4 max-w-7xl">
                <h2 className="text-3xl font-bold text-center mb-8">What We Specialize In</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <Link to={service.path} key={index}>
                            <div className="bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform">
                                <h3 className="text-xl font-bold text-orange-500 mb-2">{service.title}</h3>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <img src={service.beforeImage} alt="Before" className="w-full h-60 object-cover rounded-lg" />
                                        <p className="bg-orange-600 w-1/2 text-white text-sm font-bold p-1 text-center mt-2">BEFORE</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <img src={service.afterImage} alt="After" className="w-full h-60 object-cover rounded-lg" />
                                        <p className="bg-orange-600 text-white text-sm font-bold p-1 text-center mt-2 w-1/2 ml-auto">AFTER</p>
                                    </div>
                                </div>

                                <p className="text-black font-semibold mt-4">{service.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurServices;
