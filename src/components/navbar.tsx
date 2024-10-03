import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { whatsappUrl } from './getInTouch';
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed bg-slate-900 opacity-85 w-full text-white mb-5 shadow-white p-2 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 py-5">

          {/* Logo / Icon */}
          <div className="flex-shrink-0">
            <Link to={'/'} className='flex items-center justify-center gap-5'>
              <img
                src="/asset/logo/jt_logo_512.png"
                alt="Logo"
                className="size-[40px] md:size-[60px]"
              />
              <h1 className='text-sm md:text-xl text-blue-500 font-semibold md:text-md' style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                JaTTo Constructions
              </h1>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/about"
              className="text-white text-sm hover:text-blue-500 cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="text-white text-sm hover:text-blue-500 cursor-pointer"
            >
              Gallery
            </Link>
            <Link
              to="https://joshua-jatto.github.io/JLABS-Speedy_ACP/"
              className="text-white text-sm hover:text-blue-500  cursor-pointer"
            >
             Try Speedy DIY
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-blue-500 focus:outline-none focus:text-blue-500"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <Link
              to="/about"
              className="block py-2 text-white text-lg hover:text-blue-500 cursor-pointer"
              onClick={toggleMenu} // Close menu after click
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="block py-2 text-white text-lg hover:text-blue-500 cursor-pointer"
              onClick={toggleMenu} // Close menu after click
            >
              Gallery
            </Link>
            <Link
              to="https://joshua-jatto.github.io/JLABS-Speedy_ACP/"
              className="block py-2 text-white  hover:text-blue-500 cursor-pointer"
              onClick={toggleMenu} // Close menu after click
            >
              Try Speedy DIY
            </Link>
            <a
              href={whatsappUrl}
              target='_blank'
              className="block py-2 text-white  hover:text-blue-500 cursor-pointer"
              onClick={toggleMenu} // Close menu after click
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
