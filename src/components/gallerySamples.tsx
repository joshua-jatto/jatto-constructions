import React, { useState } from "react";
import { windowSamples } from "../gallery-samples";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // React Icons for heart icons
import GetInTouch from "./getInTouch";

const WindowSamples: React.FC = () => {
  const [favourites, setFavourites] = useState<number[]>([]);

  // Function to toggle favourite status
  const toggleFavourite = (id: number) => {
    setFavourites(
      (prevFavourites) =>
        prevFavourites.includes(id)
          ? prevFavourites.filter((favId) => favId !== id) // remove from favourites
          : [...prevFavourites, id] // add to favourites
    );
  };

  return (
    <section className=" ring text-gray-400 p-10 py-12">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <h2 className=" text-2xl md:text-4xl font-bold text-center mb-8">
            Gallery
          </h2>

          <h2 className="text-2xl font-bold text-center mb-8 flex flex-row items-center gap-3">
           <span className="hidden md:flex text-blue-500"> Favourites{" "}</span>
            <span>
              <AiFillHeart className="text-blue-500 ring" />
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {windowSamples.map((sample) => (
            <div
              key={sample.id}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center relative"
            >
              {/* Sample Title */}
              <h3 className="text-xl text-gray-900  relative -top-[10px] font-semibold mb-2">{sample.title}</h3>

              {/* Dummy Image */}
              <img src={sample?.image} className="w-full max-h-64 rounded-lg mb-4"></img>
              {/* Sample Type */}
              <p className="text-gray-600 font-semibold mb-4">
                <span className="font-bold ">Type:</span> {sample.type}
              </p>
              {/* Sample Description */}
              <p className="text-gray-900 text-center font-semibold mb-6">
                {sample.description}
              </p>

              {/* Favourite Icon */}
              <div
                className="absolute top-4 right-4 cursor-pointer text-2xl"
                onClick={() => toggleFavourite(sample.id)}
              >
                {favourites.includes(sample.id) ? (
                  <AiFillHeart className="text-red-500" />
                ) : (
                  <AiOutlineHeart className="text-gray-500 hover:text-red-500" />
                )}
              </div>

              

              {/* Add to Favourites Text */}
              {/* <button
                onClick={() => toggleFavourite(sample.id)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  favourites.includes(sample.id)
                    ? "bg-red-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {favourites.includes(sample.id)
                  ? "Remove from Favourites"
                  : "Add to Favourites"}
              </button> */}
            </div>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default WindowSamples;
