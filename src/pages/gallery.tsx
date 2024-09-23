import React from "react";
import GetInTouch from "../components/getInTouch";
import WindowSamples from "../components/gallerySamples";

export default function Gallery() {
  return (
    <section className="flex flex-col items-center text-gray-900  bg-gradient-to-br from-zinc-900 via-slate-900 to-black py-16 px-6">
      <div className="container mt-30 mx-auto flex flex-col items-center">
        {/* Company Overview */}
        <div className="mb-12 max-w-4xl text-center">
          <h1 className="text-3xl font-bold text-gray-100 my-8"> Projects Gallery</h1>
         
        </div>
        <WindowSamples/>
        </div>
        <GetInTouch/>
    </section>
  );
}
