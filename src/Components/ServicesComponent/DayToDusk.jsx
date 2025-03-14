import React from "react";
import ReactCompareImage from "react-compare-image";
import beforeImage from "../../assets/daytoduskbefore.jpg";
import afterImage from "../../assets/daytoduskafter.jpg";
import { CheckCircle } from "lucide-react";
import twilightHome from "../../assets/twilighthome.jpg";
import sunsetView from "../../assets/skyreplacement.jpg";
import OurServices from "../OurServices";
import { useNavigate } from "react-router-dom";

const DayToDusk = () => {
    const navigate = useNavigate();

    const handleScrollToSection = (id) => {
      navigate("/"); 
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    };
  
    const duskFeatures = [
        "Daylight to Twilight Transformation",
        "Warm & Inviting Sunset Effects",
        "Sky Enhancement & Color Correction",
        "Natural Shadow & Light Adjustments",
        "Highlighting Property Features",
        "Better Visual Appeal for Listings",
        "Faster Sales & Higher Buyer Interest"
    ];

    const benefits = [
        {
            title: "Increase Listing Engagement",
            desc: "Day to Dusk conversions make properties look stunning and attract more buyers.",
        },
        {
            title: "Improve Visual Appeal",
            desc: "Showcase homes in a beautiful twilight setting, making them stand out from competitors.",
        },
        {
            title: "Boost Buyer Interest",
            desc: "Twilight shots create an emotional connection, helping buyers visualize their dream home.",
        },
        {
            title: "Enhance Marketing Impact",
            desc: "Professional dusk images are more shareable on real estate platforms and social media.",
        },
        {
            title: "Cost-Effective Alternative",
            desc: "Avoid the hassle and cost of actual twilight photography by converting daytime images.",
        }
    ];

    const featureCards = [
        {
            title: "Twilight Enhancement",
            desc: "Transform dull daylight images into stunning twilight scenes with natural lighting adjustments.",
            image: twilightHome
        },
        {
            title: "Sunset & Sky Retouching",
            desc: "Add warm hues and breathtaking sunsets to create a more inviting and visually appealing property listing.",
            image: sunsetView
        }
    ];

    return (
        <div className="py-20 px-6 bg-gray-100 min-h-screen mt-5">
            <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
                Day to Dusk Photo Editing
            </h1>
            <p className="text-lg text-center max-w-3xl mx-auto mb-10">
                Transform daytime property photos into stunning twilight scenes to create eye-catching real estate listings.
            </p>

            {/* Before & After Comparison */}
            <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-12">
                <div className="w-full lg:w-1/2 flex justify-center">
                    <div className="w-full md:w-3/4 lg:w-full">
                        <ReactCompareImage leftImage={beforeImage} rightImage={afterImage} />
                    </div>
                </div>

                {/* Features Section */}
                <div className="w-full lg:w-1/2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {duskFeatures.map((feature, index) => (
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


            {/* Why Choose Day to Dusk? */}
            <div className="max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-4xl font-bold text-black text-center mb-8">
                    Why Choose Day to Dusk Editing?
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
            <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold text-black text-center mb-10">
                        Key Day to Dusk Features
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
            <OurServices />
        </div>
    );
};

export default DayToDusk;
