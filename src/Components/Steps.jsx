import React from "react";
import { FaUpload, FaPaintBrush, FaSearch, FaCheckCircle } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Upload Your Images",
    description: "Easily upload your photos from any device to begin the enhancement process.",
    icon: <FaUpload className="text-4xl text-orange-500" />,
  },
  {
    id: 2,
    title: "We Edit",
    description: "Our expert editors will enhance your images with precision and detail.",
    icon: <FaPaintBrush className="text-4xl text-orange-500" />,
  },
  {
    id: 3,
    title: "Quality Check",
    description: "A dedicated team reviews each image to ensure the highest quality standards.",
    icon: <FaSearch className="text-4xl text-orange-500" />,
  },
  {
    id: 4,
    title: "Download & Use",
    description: "Once completed, download your professional-quality images instantly.",
    icon: <FaCheckCircle className="text-4xl text-orange-500" />,
  },
];

const Steps = () => {
  return (
    <div className="bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-orange-100 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
