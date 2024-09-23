import React from "react";
import GetInTouch from "../components/getInTouch";

export default function AboutPage() {
  return (
    <section className="text-gray-900  bg-gradient-to-br from-zinc-900 via-slate-900 to-black py-16 px-6">
      <div className="container mt-30 mx-auto flex flex-col items-center">
        {/* Company Overview */}
        <div className="mb-12 max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-gray-100 my-8">About JaTTo Constructions</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            At Jatto Constructions, we specialize in aluminum fabrications, structural cladding, suspended ceiling installation, and general contracting. 
            With over 10 years of experience, our mission is to provide top-quality services that meet your aesthetic and functional needs.
          </p>
        </div>

        {/* Founder's Profile */}
        <div className="flex flex-col md:flex-row items-center gap-12 mt-12 ring p-10">
          {/* Founder Image */}
          <div className="flex-shrink-0">
            <img
              src="/asset/base/jatto_worker-kit.jpg"
              alt="Founder"
              className="rounded-lg shadow-xl w-60 h-60 object-cover"
            />
          </div>

          {/* Founder Details */}
          <div className="text-center md:text-left max-w-lg">
            <h2 className="text-4xl font-semibold text-gray-100 mb-4">Joshua Jatto</h2>
            <h3 className="text-xl text-gray-400 mb-4">Founder & CEO</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              With almost a decade of experience in the construction industry, Jatto has led Jatto Constructions from a small startup of grpup of boys
              to experts leading provider of aluminum fabrications and contracting services. His passion for quality, innovation, and client 
              satisfaction drives everything we do.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Jato and his team  are committed to ensuring that every project, no matter the size, is handled with precision and professionalism. His 
              leadership and expertise have earned Jatto Constructions a reputation for excellence.
            </p>
          </div>
          <br />
          <GetInTouch/>
        </div>
      </div>
    </section>
  );
}
