import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = () => {
    const { name, email, message } = formData;

    // Validate input fields before submission
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Format message for WhatsApp
    const whatsappMessage = `Hello,\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Replace with your WhatsApp number (Use international format)
    const phoneNumber = "91"; // Example: 91 for India, then number

    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  };

  // Confirmation before sending the message
  const confirmSubmission = () => {
    if (window.confirm("Do you want to send this message to WhatsApp?")) {
      handleSubmit();
    }
  };

  return (
    <section id="contact">
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
              {/* Google Maps Section */}
              <div className="lg:w-2/3 md:w-1/2  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative object-fit">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2488524746354!2d77.01759117504542!3d11.019946489143987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8575c2b644a8d%3A0xc3fcb5c67319679a!2sGESSDEMN%20GLOBAL%20SERVICES!5e0!3m2!1sen!2sin!4v1741781419898!5m2!1sen!2sin"
                  width="750"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Form Section */}
              <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed mb-5 text-gray-600">
                  We appreciate your feedback!
                </p>

                {/* Name Field */}
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                {/* Email Field */}
                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>

                {/* Message Field */}
                <div className="relative mb-4">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>

                {/* Submit Button with Confirmation */}
                <button
                  type="button"
                  onClick={confirmSubmission}
                  className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg"
                >
                  Submit via WhatsApp
                </button>
              </div>
            </div>
          </section>
        </form>
      </div>
    </section>
  );
};

export default Contact;
