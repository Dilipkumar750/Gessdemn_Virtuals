import React from "react";
import ReactCompareImage from "react-compare-image";
import beforeImage from "../../assets/virualrenovationbefore.jpg";
import afterImage from "../../assets/virualrenovationafter.jpg";
import { CheckCircle } from "lucide-react";
import kitchenrenovation from "../../assets/kitchenrenovation.jpg";
import floor from "../../assets/floorandwall.jpg";
import furniture from "../../assets/furniture.jpg";
import OurServices from "../OurServices";
import exterior from "../../assets/exterior.jpeg";
import { useNavigate } from "react-router-dom";

const VirtualRenovation = () => {

    const navigate = useNavigate();

    const handleScrollToSection = (id) => {
        navigate("/"); // Navigate to home
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 500); // Delay to allow navigation to complete
    };

    const renovationFeatures = [
        "Complete Interior Remodeling",
        "Wall & Floor Upgrades",
        "Modern Furniture Replacement",
        "Kitchen & Bathroom Renovation",
        "Ceiling & Lighting Enhancements",
        "Exterior Home Facelifts",
        "Outdoor Landscaping Improvements",
        "Virtual Staging & Decor Changes"
    ];

    const benefits = [
        {
            title: "Visualize a Modern Home",
            desc: "Transform outdated spaces into stylish, market-ready properties.",
        },
        {
            title: "Save on Physical Renovations",
            desc: "Showcase property potential without expensive real-world renovations.",
        },
        {
            title: "Increase Property Value",
            desc: "Modernized listings attract more buyers and boost market value.",
        },
        {
            title: "Attract More Buyers",
            desc: "Help buyers see a home’s true potential before making a decision.",
        },
        {
            title: "Customization Options",
            desc: "Tailor the design to match buyer preferences and styles.",
        }
    ];

    const featureCards = [
        {
            title: "Kitchen & Bathroom Upgrades",
            desc: "Transform outdated kitchens and bathrooms with modern fixtures and finishes.",
            image: kitchenrenovation
        },
        {
            title: "Floor & Wall Redesign",
            desc: "Replace dull flooring and walls with fresh, stylish designs.",
            image: floor
        },
        {
            title: "Furniture & Decor Changes",
            desc: "Enhance interior spaces with virtual furniture and decor.",
            image: furniture
        },
        {
            title: "Exterior Home Renovations",
            desc: "Upgrade curb appeal with landscaping, new paint, and architectural enhancements.",
            image: exterior
        }
    ];

    return (
        <div className="py-20 px-6 bg-gray-100 min-h-screen mt-5">
            <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
                Virtual Renovation
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
                Transform empty or outdated spaces into stunning, fully furnished interiors with realistic virtual renovation, helping buyers visualize the true potential of a property.
            </p>
            {/* Before & After Comparison */}
            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-12">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-full md:w-3/4 lg:w-full">
                        <ReactCompareImage leftImage={beforeImage} rightImage={afterImage} />
                    </div>
                </div>

                {/* Item Removal Features */}
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {renovationFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-md">
                                <span className="text-orange-600 font-bold text-md mr-3">{index + 1}.</span>
                                <p className="text-gray-700 font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                        <button
                            className="px-8 py-3 text-lg font-medium leading-tight inline-block bg-orange-600 text-white rounded-full shadow-xl border border-transparent hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mb-5"
                            onClick={() => handleScrollToSection("contact")}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

            </div>


            {/* Why Choose Item Removal? */}
            <div className="max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-4xl font-bold text-black text-center mb-8">
                    Why Choose Item Removal?
                </h2>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {benefits.map((item, index) => (
                        <div key={index} className="flex items-start">
                            <CheckCircle className="text-orange-600 w-8 h-8 mr-4" />
                            <div>
                                <h3 className="text-xl font-bold text-orange-600">{item.title}</h3>
                                <p className="text-gray-700">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Features */}
            <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-black text-center mb-10">
                        Key Item Removal Features
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {featureCards.map((feature, index) => (
                            <div key={index} className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                                <img className="w-full h-60 object-fit" src={feature.image} alt={feature.title} />
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-orange-600">{feature.title}</h3>
                                    <p className="mt-2 text-gray-700">{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-10">
                    <button
                        className="px-8 py-3 text-lg font-medium leading-tight inline-block bg-orange-600 text-white rounded-full shadow-xl border border-transparent hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        onClick={() => handleScrollToSection("contact")}
                    >
                        Get Started
                    </button>
                </div>
                </div>
            </div>
            <OurServices />
        </div>
    );
};

export default VirtualRenovation;
