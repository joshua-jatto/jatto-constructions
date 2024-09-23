import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { windowSamples } from "../gallery-samples";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // React Icons for heart icons
const WindowSamples = () => {
    const [favourites, setFavourites] = useState([]);
    // Function to toggle favourite status
    const toggleFavourite = (id) => {
        setFavourites((prevFavourites) => prevFavourites.includes(id)
            ? prevFavourites.filter((favId) => favId !== id) // remove from favourites
            : [...prevFavourites, id] // add to favourites
        );
    };
    return (_jsx("section", { className: " ring text-gray-400 p-10 py-12", children: _jsxs("div", { className: "container mx-auto", children: [_jsxs("div", { className: "flex flex-row justify-between", children: [_jsx("h2", { className: " text-2xl md:text-4xl font-bold text-center mb-8", children: "Gallery" }), _jsxs("h2", { className: "text-2xl font-bold text-center mb-8 flex flex-row items-center gap-3", children: [_jsxs("span", { className: "hidden md:flex text-blue-500", children: [" Favourites", " "] }), _jsx("span", { children: _jsx(AiFillHeart, { className: "text-blue-500 ring" }) })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: windowSamples.map((sample) => (_jsxs("div", { className: "bg-white shadow-lg rounded-lg p-6 flex flex-col items-center relative", children: [_jsx("h3", { className: "text-xl text-gray-900  relative -top-[10px] font-semibold mb-2", children: sample.title }), _jsx("img", { src: sample?.image, className: "w-full max-h-64 rounded-lg mb-4" }), _jsxs("p", { className: "text-gray-600 font-semibold mb-4", children: [_jsx("span", { className: "font-bold ", children: "Type:" }), " ", sample.type] }), _jsx("p", { className: "text-gray-900 text-center font-semibold mb-6", children: sample.description }), _jsx("div", { className: "absolute top-4 right-4 cursor-pointer text-2xl", onClick: () => toggleFavourite(sample.id), children: favourites.includes(sample.id) ? (_jsx(AiFillHeart, { className: "text-red-500" })) : (_jsx(AiOutlineHeart, { className: "text-gray-500 hover:text-red-500" })) })] }, sample.id))) })] }) }));
};
export default WindowSamples;
