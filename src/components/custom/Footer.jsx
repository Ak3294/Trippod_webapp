import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footor() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-1">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">About the Project</h3>
            <p className="text-sm">
              Explore curated travel itineraries, discover breathtaking
              destinations, and create unforgettable memories with our travel
              guides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:scale-110 transition text-white color-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:scale-110 transition text-white">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:scale-110 transition text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:scale-110 transition text-white">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-6 text-white">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition text-white"
              >
                <FaFacebook className="w-6 h-6 text-white" />
              </a>
              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaTwitter className="w-6 h-6 text-white" />
              </a>
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <BsInstagram className="w-6 h-6 text-white" />
              </a>
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaLinkedin className="w-6 h-6 text-white" />
              </a>
              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition"
              >
                <FaGithub className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/50 my-2"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm">
          © {new Date().getFullYear()} Atobtech Solutions. All rights reserved.
        </div>
        <div>Designed and Develop by Akshay Kumar Hiran & Team</div>
      </div>
    </footer>
  );
}

export default Footor;
