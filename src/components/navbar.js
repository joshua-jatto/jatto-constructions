import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsappUrl } from './getInTouch';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (_jsx("nav", { className: "fixed bg-slate-900 opacity-85 w-full text-white mb-5 shadow-white p-2 z-50", children: _jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "flex justify-between items-center h-12 py-5", children: [_jsx("div", { className: "flex-shrink-0", children: _jsxs(Link, { to: '/', className: 'flex items-center justify-center gap-5', children: [_jsx("img", { src: "/asset/logo/jt_logo_512.png", alt: "Logo", className: "size-[40px] md:size-[60px]" }), _jsx("h1", { className: 'text-sm md:text-xl text-blue-500 font-semibold md:text-md', style: { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }, children: "JaTTo Constructions" })] }) }), _jsxs("div", { className: "hidden md:flex space-x-4", children: [_jsx(Link, { to: "/about", className: "text-white text-sm hover:text-blue-500 cursor-pointer", children: "About Us" }), _jsx(Link, { to: "/gallery", className: "text-white text-sm hover:text-blue-500 cursor-pointer", children: "Gallery" }), _jsx(Link, { to: "https://joshua-jatto.github.io/JLABS-Speedy_ACP/", className: "text-white text-sm hover:text-blue-500  cursor-pointer", children: "Try-Speedy" })] }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: toggleMenu, className: "text-gray-200 hover:text-blue-500 focus:outline-none focus:text-blue-500", children: _jsx("svg", { className: "h-6 w-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 6h16M4 12h16m-7 6h7" }) }) }) })] }), isOpen && (_jsxs("div", { className: "md:hidden mt-4", children: [_jsx(Link, { to: "/about", className: "block py-2 text-white text-lg hover:text-blue-500 cursor-pointer", onClick: toggleMenu, children: "About Us" }), _jsx(Link, { to: "/gallery", className: "block py-2 text-white text-lg hover:text-blue-500 cursor-pointer", onClick: toggleMenu, children: "Gallery" }), _jsx(Link, { to: "https://joshua-jatto.github.io/JLABS-Speedy_ACP/", className: "block py-2 text-white  hover:text-blue-500 cursor-pointer", onClick: toggleMenu, children: "Try-Speedy" }), _jsx("a", { href: whatsappUrl, target: '_blank', className: "block py-2 text-white  hover:text-blue-500 cursor-pointer", onClick: toggleMenu, children: "Contact" })] }))] }) }));
};
export default Navbar;
