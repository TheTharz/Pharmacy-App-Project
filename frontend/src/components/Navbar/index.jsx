import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex items-center flex-col min-h-screen overflow-hidden'>
        <Link to='/' className='text-white text-xl font-bold'>
          Your Brand Logo
        </Link>
        <ul className='flex space-x-4 flex-col justify-evenly items-center'>
          <li>
            <Link
              to='/dashboard'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className='text-white hover:text-gray-300 transition duration-300'
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
