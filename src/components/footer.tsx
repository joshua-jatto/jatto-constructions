import React from "react";
import { Link } from "react-router-dom";
import { whatsappUrl } from "./getInTouch";

export default function Footer() {
  return (
    <footer className="relative bottom-0  text-white py-5  px-4" style={{
      backgroundImage: `url(/public/asset/landing/art-tools-mini.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="container opacity-90 p-10 bg-gray-900 rounded-md mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">JaTTo Constructions</h3>
          <p className="mb-4">
            Aluminum fabrication and general contracting company.
          </p>
          <p>© {new Date().getFullYear()} JaTTo Constructions. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Our Services
              </Link>
            </li>
            <li>
              <Link to="gallery" className="hover:underline">
                Projects
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Contact Us</h3>
          <p className="mb-2">Phone: +234 812 7967 257</p>
          <p className="mb-2">Email: j.j.jatto@gmail.com</p>

          <p  className="mb-2"> <a
              href= {whatsappUrl}
             target="_blank"
            >
              WhatsApp
            </a></p>
          <p className="mb-4">Location: One Touch Aluminum opposite FGC Jos.</p>
          <p className="text-xs text-right font-semibold text-blue-400 mb-4">Powered by <a href='https://joshua-jatto.github.io/JLABS-Portfolio/' target='_blank'>JLABS</a></p>
          
          {/* Social Media Icons */}
          {/* <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
