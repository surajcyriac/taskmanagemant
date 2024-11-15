import React from 'react';
import { Link } from 'react-router-dom';

const Landingpage = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navigation Bar with Login and Signup Buttons */}
      <header className="bg-teal-600 text-white py-4">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Task Manager</h1>
          <div className="flex gap-x-6">
            <Link to={'/auth'} className="text-white hover:text-teal-200 font-bold">
              Login
            </Link>
            <Link
              to={"/register"}
              className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold hover:bg-teal-100"
            >
              Signup
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-teal-600 mb-6">Manage Your Tasks Effortlessly</h1>
          <p className="text-lg text-gray-700 mb-8">
            Organize, track progress, and stay on top of your tasks. Create, update, and set reminders with ease.
          </p>
          <Link
            to={"/dashboard"}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-500"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-teal-600 text-white py-4 text-center">
        <p>&copy; 2024 Task Manager. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default Landingpage;
