import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaClipboardList, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../pages/image/logo.png';

const Navbar = ({ handleNavClick }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/login';
  };
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex items-center flex-col min-h-screen overflow-hidden'>
        {/* Your brand logo */}
        <Link
          onClick={() => handleNavClick('dashboard')}
          className='text-white text-xl font-bold flex items-center mb-4'
        >
          <img src={Logo} alt='Logo' className='w-auto h-auto mr-2' />
        </Link>

        {/* Navigation links */}
        <ul className='flex flex-col items-center space-y-4'>
          {/* Dashboard link */}
          <li>
            <Link
              className='flex items-center text-white hover:text-gray-300 transition duration-300'
              onClick={() => handleNavClick('dashboard')}
            >
              <FaHome className='w-5 h-5 mr-2' />
              Dashboard
            </Link>
          </li>
          {/* Categories link */}
          <li>
            <Link
              className='flex items-center text-white hover:text-gray-300 transition duration-300'
              onClick={() => handleNavClick('categories')}
            >
              <FaClipboardList className='w-5 h-5 mr-2' />
              Categories
            </Link>
          </li>
          {/* Place Order link */}
          <li>
            <Link
              className='flex items-center text-white hover:text-gray-300 transition duration-300'
              onClick={() => handleNavClick('placeorder')}
            >
              <FaShoppingCart className='w-5 h-5 mr-2' />
              Place Order
            </Link>
          </li>
        </ul>
        <button
          className=' rounded-full w-[60 px] text-white bg-blue-500 hover:bg-blue-700 py-2 px-4  ml-auto mr-5'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
