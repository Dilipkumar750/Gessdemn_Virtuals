import React from "react";
import ReactCompareImage from "react-compare-image";
import beforeImage from "../../assets/itemremovalbefore.jpg";
import afterImage from "../../assets/itemremovalafter.jpg";
import { CheckCircle } from "lucide-react";
import clutteredRoom from "../../assets/clutteredimage.jpg";
import cleanRoom from "../../assets/space.png";
import OurServices from "../OurServices";

const ItemRemoval = () => {
  const removalFeatures = [
    "Unwanted Object & Clutter Removal",
    "Vehicle & People Elimination",
    "Wall Marks & Stain Cleanup",
    "Power Lines & Pole Removal",
    "Sky & Background Enhancements",
    "Furniture & Large Item Removal",
    "Trash & Debris Elimination",
  ];

  const benefits = [
    {
      title: "Enhance Property Appeal",
      desc: "Make listings look cleaner and more inviting to potential buyers.",
    },
    {
      title: "Improve Listing Photos",
      desc: "Remove distractions and highlight the best features of a property.",
    },
    {
      title: "Boost Buyer Interest",
      desc: "Help buyers visualize the home as their own without unwanted clutter.",
    },
    {
      title: "Increase Sale Potential",
      desc: "Cleaner images lead to more inquiries and faster sales.",
    },
    {
      title: "Cost-Effective Solution",
      desc: "Save money by digitally removing items instead of physical staging.",
    },
  ];

  const featureCards = [
    {
      title: "Clutter & Object Removal",
      desc: "Eliminate unwanted items like furniture, trash, or personal objects to create a cleaner look.",
      image: clutteredRoom,
    },
    {
      title: "Space Enhancement",
      desc: "Improve room aesthetics by removing unnecessary distractions.",
      image: cleanRoom,
    },
  ];

  return (
    <div className="py-20 px-6 bg-gray-100 min-h-screen mt-5">
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
        Real Estate Photo Item Removal
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-10">
        Remove unwanted objects from property photos to create clean,
        professional, and high-impact real estate listings.
      </p>

      {/* Before & After Comparison */}
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-12">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full md:w-3/4 lg:w-full">
            <ReactCompareImage
              leftImage={beforeImage}
              rightImage={afterImage}
            />
          </div>
        </div>

        {/* Item Removal Features */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {removalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-3 rounded-lg shadow-md"
              >
                <span className="text-orange-600 font-bold text-md mr-3">
                  {index + 1}.
                </span>
                <p className="text-gray-700 font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* Get Started Button Below the Main Title */}
          <div className="flex justify-center mt-6 left-0 bottom-0">
            <a
              className="px-12 py-5 text-lg font-medium leading-tight inline-block bg-orange-600 text-white rounded-full shadow-xl border border-transparent hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              href="#"
            >
              Get Started
            </a>
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
                <h3 className="text-xl font-bold text-orange-600">
                  {item.title}
                </h3>
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
              <div
                key={index}
                className="bg-gray-200 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  className="w-full h-60 object-cover"
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

export default ItemRemoval;
