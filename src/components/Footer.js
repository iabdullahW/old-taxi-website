import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="relative bg-gray-900 text-white py-8"
      style={{
        backgroundImage: `url('/photo.avif')`, // Correct path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="relative max-w-6xl mx-auto px-4 flex justify-between">
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">AK Taxis</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-yellow-400">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-yellow-400">
                <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-yellow-400">
                <span>Fleet</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-yellow-400">
                <span>Special Offers</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center space-x-2 hover:text-yellow-400">
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-400" />
              <a href="mailto:bookings@aktaxis.co.uk" className="hover:text-yellow-400">
                bookings@aktaxis.co.uk
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-yellow-400" />
              <span>07904651397</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaPhone className="text-yellow-400" />
              <span>07365809732</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Saint Mary Street Wallingford, OX10 0EL</span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr/>
      </div>
      {/* Copyright */}
      <div className="relative text-center mt-8 text-sm">
        © 2024 AK Taxis Copyright Reserved.
      </div>
    </footer>
  );
}

export default Footer;
