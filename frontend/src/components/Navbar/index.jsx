import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaClipboardList, FaShoppingCart } from 'react-icons/fa';
import Logo from '../../pages/image/logo.png';

const Navbar = ({ handleNavClick }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location = '/login';
  };

  return (
    <nav className='bg-white-800 p-4'>

      <div className='container mx-auto flex flex-col items-center min-h-screen overflow-hidden '>

        <Link
          onClick={() => handleNavClick('dashboard')}
          className='text-white text-xl font-bold flex items-center mb-4'
        >
          <img src={Logo} alt='Logo' className='w-auto h-auto mr-2' />
        </Link>

        <div className='mb-10'></div>
        <ul className='flex flex-col items-center space-y-4 flex-1'>

          <li>
            <Link

              className='flex items-center text-white hover:text-gray-300 transition duration-300 rounded-full px-4 py-2 bg-blue-500 hover:bg-blue-700'
              onClick={() => handleNavClick('dashboard')}
            >
              <FaHome className='w-5 h-5 mr-2' />
              Dashboard
            </Link>
          </li>


          <li>
            <Link

              className='flex items-center text-white hover:text-gray-300 transition duration-300 rounded-full px-4 py-2 bg-blue-500 hover:bg-blue-700'
              onClick={() => handleNavClick('categories')}
            >
              <FaClipboardList className='w-5 h-5 mr-2' />
              Categories
            </Link>
          </li>


          <li>
            <Link

              className='flex items-center text-white hover:text-gray-300 transition duration-300 rounded-full px-4 py-2 bg-blue-500 hover:bg-blue-700'
              onClick={() => handleNavClick('placeorder')}
            >
              <FaShoppingCart className='w-5 h-5 mr-2' />
              Place Order
            </Link>
          </li>
        </ul>

        <button
          className='rounded-full w-[60 px] text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 mt-auto mb-4'
          onClick={handleLogout}
          style={{ marginBottom: '1rem', paddingBottom: '0.75rem' }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
