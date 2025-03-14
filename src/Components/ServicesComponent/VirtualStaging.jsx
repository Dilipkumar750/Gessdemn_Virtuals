import React from "react";
import ReactCompareImage from "react-compare-image";
import beforeImage from "../../assets/virtualbefore.jpg";
import afterImage from "../../assets/virtualafter.jpg";
import { CheckCircle } from "lucide-react";
import stagingExample from "../../assets/virtualstaging.jpg";
import furniturePlacement from "../../assets/furniturevirtual.png";
import OurServices from "../OurServices";
import { useNavigate } from "react-router-dom";

const Virtualstaging = () => {
  const navigate = useNavigate();

  const handleScrollToSection = (id) => {
    navigate("/"); // Navigate to home
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 500); // Delay to allow navigation to complete
  };

  const stagingFeatures = [
    "Furniture & Decor Placement",
    "Room Customization (Modern, Luxury, Classic)",
    "Lighting & Ambiance Enhancement",
    "Wall & Floor Improvements",
    "Decluttering & Depersonalization",
    "Exterior & Landscaping Enhancements",
    "Twilight & Virtual Day-to-Dusk Effects",
  ];

  const benefits = [
    {
      title: "Sell Listings Faster",
      desc: "Homes with virtual staging sell up to 73% quicker than vacant listings.",
    },
    {
      title: "Boost Buyer Interest",
      desc: "Attract more potential buyers with beautifully staged interiors.",
    },
    {
      title: "Reduce Marketing Costs",
      desc: "A cost-effective alternative to traditional home staging.",
    },
    {
      title: "Enhance Online Listings",
      desc: "Stand out on MLS platforms with premium, high-quality images.",
    },
    {
      title: "Help Buyers Visualize",
      desc: "Showcase a property with stylish furnishings, helping buyers connect emotionally.",
    },
  ];

  const featureCards = [
    {
      title: "Furniture & Decor Placement",
      desc: "Enhance empty spaces with stylish, modern, and luxurious furniture settings.",
      image: furniturePlacement,
    },
    {
      title: "Room Customization",
      desc: "Customize rooms with different themes to match buyer preferences.",
      image: stagingExample,
    },
  ];

  return (
    <div className="py-20 px-6 bg-gray-100 min-h-screen mt-5">
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
        Virtual Staging for Real Estate
      </h1>
      <p className="text-lg text-center max-w-3xl mx-auto mb-10">
        Transform empty listings into stunning, fully furnished spaces that
        attract buyers and boost property value.
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

        {/* Virtual Staging Features */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stagingFeatures.map((feature, index) => (
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

          {/* Button Below the Last Feature */}
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

      {/* Why Choose Virtual Staging? */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-black text-center mb-8">
          Why Choose Virtual Staging?
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
            Key Virtual Staging Features
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
        {/* Get Started Button Below Key Features */}
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

export default Virtualstaging;
