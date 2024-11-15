import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
 
        <footer className="bg-teal-600 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="text-3xl font-bold text-white mb-2">Task manager</h2>
              </div>
    
              <div className="flex flex-col lg:flex-row justify-center gap-8 mb-6 lg:mb-0">
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-lg font-semibold text-teal-100 mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-teal-200">
                    <li><Link to="/" className="hover:text-white">Home</Link></li>
                    <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
                    <li><Link to="/about" className="hover:text-white">About</Link></li>
                    <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                  </ul>
                </div>
    
                <div className="flex flex-col items-center lg:items-start">
                  <h3 className="text-lg font-semibold text-teal-100 mb-4">Support</h3>
                  <ul className="space-y-2 text-teal-200">
                    <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
                    <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
                    <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
                    <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>
    
              <div className="flex justify-center gap-6 mb-6 lg:mb-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-white">
                  <FaFacebookF size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-white">
                  <FaTwitter size={24} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-white">
                  <FaInstagram size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-200 hover:text-white">
                  <FaLinkedinIn size={24} />
                </a>
              </div>
            </div>
    
            <div className="text-center mt-8 border-t border-teal-700 pt-4">
              <p className="text-teal-200 text-sm">
                &copy; {new Date().getFullYear()} Project Fair. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
   
 )
}

export default Footer