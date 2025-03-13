import React from "react";
import ReactCompareImage from "react-compare-image";
import beforeImage from "../../assets/image7Before.jpg";
import afterImage from "../../assets/image7After.jpg";
import { CheckCircle } from "lucide-react";
import sharpening from "../../assets/sharpening.jpg";
import removeminor from "../../assets/removeminor.jpg";
import OurServices from "../OurServices";
const ImageEnhancement = () => {
    const enhancementSteps = [
        "White Balance Correction",
        "Image Sharpening",
        "Straighten Vertical & Horizontal Lines",
        "Remove Minor Imperfections",
        "Fix Lens Distortion",
        "Adjust Brightness & Contrast",
        "Replace Sky & Enhance Lawn",
        "Improve Water Appearance (Ocean/River/Pool)",
        "Adjust Tones & Colors",
        "Replace TV Screens & Add Fire to Fireplaces",
        "Remove Reflections & Dust Spots",
        "HDR Bracketing with Window Adjustments"
    ];

    const benefits = [
        {
            title: "Sell Homes 50% Quicker",
            desc: "High-quality photos have been proven to help properties sell up to 50% faster.",
        },
        {
            title: "Boost Property Value",
            desc: "Using professionally enhanced images can significantly raise the final selling price of a home.",
        },
        {
            title: "Attract More Buyers",
            desc: "Listings with premium-quality visuals receive up to 118% more online views and engagement.",
        },
        {
            title: "Buyers Focus on Stunning Photos",
            desc: "Home buyers dedicate 60% of their browsing time to images, while only 20% goes to reading descriptions.",
        }
    ];

    // Feature cards for specific enhancements
    const featureCards = [
        {
            title: "White Balancing",
            desc: "Achieve accurate color tones by correcting unnatural color shifts, making your photos look natural and realistic.",
            image: "https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
        },
        {
            title: "Image Sharpening",
            desc: "Enhance the clarity and details of your images, making every feature stand out with crisp definition.",
            image: sharpening
        },
        {
            title: "Remove Minor Blemishes",
            desc: "Eliminate dust spots, small imperfections, and unwanted distractions to ensure a clean and professional look.",
            image: removeminor
        }
    ];

    return (
      <div className="py-20 px-6 bg-gray-100 min-h-screen mt-5">
        <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
          Image Enhancement
        </h1>
        <p className="text-lg text-center max-w-3xl mx-auto mb-10">
          Perfect for real estate photo editing, ensuring top-notch, retouched,
          professional-looking photos.
        </p>

        {/* Flex Section: Image Left - Process Right */}
        <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-12">
          {/* Left: Image Comparison */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full md:w-3/4 lg:w-full">
              <ReactCompareImage
                leftImage={beforeImage}
                rightImage={afterImage}
              />
            </div>
          </div>

          {/* Right: Enhancement Process */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enhancementSteps.map((process, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white p-3 rounded-lg shadow-md"
                >
                  <span className="text-orange-600 font-bold text-md mr-3">
                    {index + 1}.
                  </span>
                  <p className="text-gray-700 font-medium">{process}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Improve Your Listing Photos - Card Grid Section */}
        <div className="max-w-6xl mx-auto py-16 px-6">
          <h2 className="text-4xl font-bold text-black text-center mb-8">
            Why Enhance Your Listing Photos?
          </h2>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="text-orange-600 w-8 h-8 mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-orange-600">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Get Started Button Below Key Features */}
        <div className="flex justify-center mt-10">
          <a
            className="px-12 py-5 text-lg font-medium leading-tight inline-block bg-orange-600 text-white rounded-full shadow-xl border border-transparent hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 mb-5"
            href="#"
          >
            Get Started
          </a>
        </div>

        {/* New Feature Cards Section */}
        <div className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
          <div data-theme="teal" className="mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-black text-center mb-10">
              Key Enhancement Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featureCards.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-200 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    className="w-full h-60 object-fit"
                    src={feature.image}
                    alt={feature.title}
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-orange-600">
                      {feature.title}
                    </h3>
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

export default ImageEnhancement;
