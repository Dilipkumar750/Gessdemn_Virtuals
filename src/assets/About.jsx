import React from "react";

import hero2 from "../assets/new2.jpg";
import hero3 from "../assets/img7.jpg";
import hero4 from "../assets/img af.jpg";
import hero5 from "../assets/img be.jpg";


const About = () => {
  return (
    <section id="about">
      <div className="mt-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto min-h-[80vh] px-4">
          {/* Image Grid Section */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3">
              {" "}
              {/* Reduced gap */}
              {[ hero2, hero3, hero4, hero5].map(
                (src, index) => (
                  <div
                    key={index}
                    className="w-[150px] h-[150px] overflow-hidden"
                  >
                    {" "}
                    {/* Set fixed size */}
                    <img
                      className="w-full h-full object-cover rounded-lg"
                      src={src}
                      alt="Gallery"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Text Content Section */}
          <div className="w-full lg:w-1/2 p-4 text-justify flex items-center">
            <p className="text-lg leading-relaxed">
              At <strong className="text-orange-500">Gessdemn Virtuals</strong>,
              we specialize in real estate photo editing, virtual staging, and
              floor plan design to help properties stand out. Our expert team
              enhances images with advanced editing techniques, ensuring
              high-quality, realistic visuals. We provide virtual staging to
              transform empty spaces into beautifully furnished interiors. Our
              floor plan services offer precise, visually appealing layouts for
              better property visualization. With a fast turnaround time and
              competitive pricing, we cater to realtors, photographers, and
              property developers. Our goal is to boost property appeal and
              increase sales through stunning visuals. We use cutting-edge
              technology to deliver accurate, high-resolution images. Customer
              satisfaction and attention to detail are our top priorities.
              Partner with us to make your property listings irresistible. Let’s
              bring your real estate vision to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
