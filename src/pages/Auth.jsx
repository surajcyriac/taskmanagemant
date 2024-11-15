import React from 'react';
import { Link } from 'react-router-dom';
import AuthImg from '../assets/login.png';

const Auth = ({ insideRegister }) => {
  return (
    <div style={{ minHeight: '100vh', width: '100%' }} className='flex justify-center items-center'>
      <div className='container w-3/4'>
        <div className='shadow-lg p-4 bg-white rounded-lg'>
          <div className='flex items-center'>
            <div className='w-full lg:w-1/2 mr-3'>
              <img className='img-fluid' src={AuthImg} alt="Authentication" />
            </div>
            <div className='w-full lg:w-1/2'>
              <h1 className='mt-2 text-3xl font-bold text-teal-600'>
                task 
              </h1>
              <h5 className='text-lg text-gray-700'>
                Sign {insideRegister ? 'Up' : 'In'} to your Account
              </h5>

              <form>
                {insideRegister && 
                  <div className='mb-4'>
                    <label htmlFor="username" className="block text-gray-700 text-sm font-medium">Username</label>
                    <input
                      type="text"
                      id="username"
                      placeholder="Username"
                      className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                }

                <div className='mb-4'>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="name@example.com"
                    className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                <div className='mb-4'>
                  <label htmlFor="password" className="block text-gray-700 text-sm font-medium">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="mt-2 p-3 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>

                {insideRegister ? 
                  <div className='mt-3'>
                    <button className='w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-500 focus:outline-none'>
                      Register
                    </button>
                    <p className='mt-3 text-sm'>
                      Existing User?{' '}
                      <Link to={'/login'} className='text-teal-600 hover:underline'>
                        Login
                      </Link>
                    </p>
                  </div>
                 : 
                  <div className='mt-3'>
                    <button className='w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-500 focus:outline-none'>
                      Login
                    </button>
                    <p className='mt-3 text-sm'>
                      New User?{' '}
                      <Link to={'/register'} className='text-teal-600 hover:underline'>
                        Register
                      </Link>
                    </p>
                  </div>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
