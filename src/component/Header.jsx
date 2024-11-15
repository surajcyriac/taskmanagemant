import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // User icon for profile
import { IoIosLogOut } from 'react-icons/io';  // Log out icon

function Header() {
  return (
    <header className="bg-teal-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          task<span className='text-2xl font-semibold'>manager</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link to="/" className="text-teal-100 hover:text-white">
            Home
          </Link>
          <Link to={"/profile"} className="text-teal-100 hover:text-white">
            <FaUserCircle className="text-2xl" />
          </Link>
          <button className="bg-teal-500 hover:bg-teal-700 text-white p-2 rounded-lg flex items-center">
            <IoIosLogOut className="mr-1" />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
