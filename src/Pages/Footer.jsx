import React from "react";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <footer className="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-black text-white">
        <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
          <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
            Ready to get your productivity back? Start your free trial today.
          </h2>
          <a
            className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500"
            href="Contact"
          >
            Get started
          </a>
          <div className="mt-14 xl:mt-20">
            <nav className="flex flex-wrap justify-center text-lg font-medium">
              <div className="px-5 py-2">
                <button onClick={() => scrollToSection("Contact")}>
                  Contact
                </button>
              </div>
              <div className="px-5 py-2">
                <button onClick={() => scrollToSection("pricing")}>
                  Pricing
                </button>
              </div>
              <div className="px-5 py-2">
                <button onClick={() => scrollToSection("privacy")}>
                  Privacy
                </button>
              </div>
              <div className="px-5 py-2">
                <button onClick={() => scrollToSection("terms")}>Terms</button>
              </div>
              <div className="px-5 py-2">
                <a href="#">Twitter</a>
              </div>
            </nav>
            <p className="mt-7 text-base">© 2023 XYZ, LLC</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
