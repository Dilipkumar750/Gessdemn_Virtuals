import React from "react";
import ReactCompareImage from "react-compare-image";
import floorplan from "../../assets/floorplan.png"
import { CheckCircle } from "lucide-react";
import blackWhiteFloorPlan from "../../assets/blackwhite.jpg"
import coloredFloorPlan from "../../assets/color.avif";
import plan from "../../assets/plan.jpg";
import blueprint from "../../assets/color-floor-plan-black.jpg";
import commercial from "../../assets/efficient-floor-plans.jpg";
import OurServices from "../OurServices";

const FloorPlan = () => {
    const floorplanFeatures = [
        "Accurate Floor Plan Redraws",
        "High-Resolution Black & White Plans",
        "Colored & Textured Floor Plans",
        "2D & 3D Floor Plan Options",
        "Furniture & Room Labeling",
        "Clear & Professional Layouts",
        "Fast Turnaround & High Accuracy"
    ];

    const benefits = [
        {
            title: "Better Property Understanding",
            desc: "Visualize room layouts and dimensions accurately for potential buyers.",
        },
        {
            title: "Professional & Clean Design",
            desc: "Enhance property listings with high-quality, easy-to-read floor plans.",
        },
        {
            title: "Increase Buyer Confidence",
            desc: "Help buyers understand the flow and space distribution before visiting the property.",
        },
        {
            title: "Boost Listing Engagement",
            desc: "Properties with detailed floor plans attract more interest and inquiries.",
        },
        {
            title: "Flexible Customization",
            desc: "Choose from black & white, colored, or 3D floor plans tailored to your needs.",
        }
    ];

    const featureCards = [
        {
            title: "Black & White Floor Plans",
            desc: "Simple, clean, and professional layouts for real estate listings.",
            image: blackWhiteFloorPlan
        },
        {
            title: "Colored & Textured Floor Plans",
            desc: "Visually appealing floor plans with color-coded rooms and detailed textures.",
            image: coloredFloorPlan
        },
        {
            title: "3D Floor Plans",
            desc: "Transform traditional 2D layouts into interactive, easy-to-visualize 3D models.",
            image: plan
        },
        {
            title: "Blueprint to Digital",
            desc: "Convert scanned blueprints into precise, high-quality digital floor plans.",
            image: blueprint
        },
        {
            title: "Multi-Unit & Commercial Plans",
            desc: "Detailed layouts for apartments, office spaces, and multi-unit properties.",
            image: commercial
        }
    ];


    return (
        <div className="py-20 px-6 bg-gray-100 min-h-screen mt-5">
            <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
                Floor Plan Redrawing Services
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
                Convert rough sketches or outdated floor plans into clean, professional, and high-quality visuals for property listings.
            </p>

            {/* Before & After Comparison */}
            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-12">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-full md:w-3/4 lg:w-full">
<img src={floorplan} alt="" />                    </div>
                </div>

                {/* Floor Plan Features */}
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {floorplanFeatures.map((feature, index) => (
                            <div key={index} className="flex items-center bg-white p-3 rounded-lg shadow-md">
                                <span className="text-orange-600 font-bold text-md mr-3">{index + 1}.</span>
                                <p className="text-gray-700 font-medium">{feature}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Floor Plan Redraw? */}
            <div className="max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-4xl font-bold text-black text-center mb-8">
                    Why Choose Our Floor Plan Services?
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

            {/* Key Features Section */}
            {/* Key Features Section */}
            <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-black text-center mb-10">
                        Key Floor Plan Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </div>
            </div>

            <OurServices />
        </div>
    );
};

export default FloorPlan;
