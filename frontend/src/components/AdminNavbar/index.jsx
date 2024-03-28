import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaClipboardList,
  FaShoppingCart,
  FaListAlt,
} from 'react-icons/fa';
import Logo from '../../pages/image/logo.png';

const AdminNavbar = ({ handleNavClick }) => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/login';
  };
  return (
    <nav className='bg-gray-800 p-4'>
      <div className='container mx-auto flex items-center flex-col min-h-screen overflow-hidden'>
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
              Admin Dashboard
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
              onClick={() => handleNavClick('additem')}
            >
              <FaShoppingCart className='w-5 h-5 mr-2' />
              Add Items To Inventory
            </Link>
          </li>
          {/* View Orders button */}
          <li>
            <Link
              className='flex items-center text-white hover:text-gray-300 transition duration-300'
              onClick={() => handleNavClick('vieworders')}
            >
              <FaListAlt className='w-5 h-5 mr-2' />
              View Orders
            </Link>
          </li>
        </ul>
        <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
