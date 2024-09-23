import React from "react";
import Swippa from "./Swiper";
import GetInTouch from "./getInTouch";

export default function OurServices() {
  return (
    <section className=" text-white py-8 transition-all ease-in duration-300">
      <div className=" container mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Services Card */}
        <div
          className=" relative bg-gray-800 bg-opacity-70 rounded-lg shadow-lg p-8 transition-all ease-in"
            style={{
              backgroundImage: `url(/asset/servicesBkg/stircase_handrail.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-70 rounded-lg"></div>

          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-6 text-gray-100 ring ring-white p-3 w-auto">
              Our Services
            </h1>
            <ul className="space-y-4 text-lg">
              <li className="text-2xl ">
                Aluminium Fabrications
              </li>
              <li className="text-2xl ">
                Stainless Steel Installation
              </li>
              <li className="text-2xl ">
                Suspended Ceiling Installation
              </li>
              <li className="text-2xl ">
                Structural Cladding
              </li>
              <li className="text-2xl ">
                General Contracting and Consultations
              </li>
            </ul>
          </div>
        </div>

        {/* Customization Options Card */}
        <div
          className="relative bg-gray-800 bg-opacity-70 rounded-lg shadow-lg p-8 transition-all ease-in"
          style={{
            backgroundImage: `url(/asset/servicesBkg/casement_fabrication.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 opacity-70 rounded-lg"></div>

          <div className="relative z-10 ">
            <h3 className="text-3xl font-bold mb-6 text-gray-100 ring ring-white p-3 w-auto">
              Customization Options
            </h3>
            <ul className="space-y-4 text-lg">
              {/* <li className="hover:text-gray-400 transition-all ease-in">
                Colors, finishes, and designs to match your style.
              </li> */}
              <li className="text-2xl ">
                Cutting wall / Frameless windows
              </li>
              <li className="text-2xl ">
                Double-hung casement
              </li>
              <li className="text-2xl ">
                Single-hung casement
              </li>
              <li className="text-2xl ">
                Sliding windows
              </li>
              <li className="text-2xl ">
                Projected windows
              </li>
              <li className="text-2xl ">
                Arches, Curves finishing, and more...
              </li>
            </ul>
        

          </div>
          
        </div>
      </div>
    </section>
  );
}
