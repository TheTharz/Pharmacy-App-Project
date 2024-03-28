import React from 'react';
import Front from '../../pages/image/Front.jpg';
import { FaCapsules, FaSyringe, FaMedkit, FaTablets } from 'react-icons/fa';

const AdminDashboardMain = ({ handleNavClick }) => {
  return (
    <div className='max-h-screen flex flex-col justify-between overflow-y-hidden'>
      {/* Main content */}
      <div className='container mx-auto px-4 py-8 flex flex-col items-center overflow-y-hidden'>
        <h1 className='text-2xl font-bold mb-4'>
          Online Medical Store | Admin Dashboard
        </h1>

        <img
          src={Front}
          alt='Front'
          className='w-full h-64 object-cover rounded-lg mb-4'
        />
        <div
          onClick={() => handleNavClick('categories')}
          className='cursor-pointer w-full bg-gray-200 rounded-lg p-4 mb-8 hover:bg-gray-300 transition duration-300'
        >
          <div className='flex flex-row items-center mb-4'>
            <h1 className='text-2xl font-bold mr-4'>CATEGORIES</h1>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
              See More...
            </button>
          </div>
          <div className='flex flex-row justify-between mb-8 gap-8 items-center w-full'>
            <div className='w-1/4 bg-blue-500 rounded-lg p-4 flex items-center justify-center flex-col'>
              <h3 className='text-lg font-semibold text-white mb-4'>
                Pain Killers
              </h3>
              <FaCapsules className='text-5xl text-white' />
            </div>
            <div className='w-1/4 bg-yellow-500 rounded-lg p-4 flex items-center justify-center flex-col'>
              <h3 className='text-lg font-semibold text-white mb-4'>Syrups</h3>
              <FaSyringe className='text-5xl text-white' />
            </div>
            <div className='w-1/4 bg-green-500 rounded-lg p-4 flex items-center justify-center flex-col'>
              <h3 className='text-lg font-semibold text-white mb-4'>Balm</h3>
              <FaMedkit className='text-5xl text-white' />
            </div>
            <div className='w-1/4 bg-orange-500 rounded-lg p-4 flex items-center justify-center flex-col'>
              <h3 className='text-lg font-semibold text-white mb-4'>Tablets</h3>
              <FaTablets className='text-5xl text-white' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardMain;
