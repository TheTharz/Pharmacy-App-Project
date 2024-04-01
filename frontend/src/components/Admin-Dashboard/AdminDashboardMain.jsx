import React, { useState, useEffect } from 'react';
import cat1 from '../../pages/image/cat1.png';
import cat2 from '../../pages/image/cat2.png';
import cat3 from '../../pages/image/cat3.png';
import { FaCapsules, FaSyringe, FaMedkit, FaTablets } from 'react-icons/fa';

const AdminDashboardMain = ({ handleNavClick, setActiveComponent }) => {


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cat1, cat2, cat3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);



  return (
    <div className='bg-gray-100 min-h-screen flex flex-col ' style={{ backgroundColor: '#D7ECFF' }}>
       <div className='max-w-8xl ml-1.5  w-full px-5 py-10 mt-20 bg-white rounded-lg shadow-md justify-center items-center'>
      {/* Main content */}
      <div className='container mx-auto px-2 flex flex-col '>
      <h1 className='text-4xl font-bold mb-4 flex justify-between'>
        <span className='text-blue-500'>Admin Dashboard</span>
          <span>
            <span className="text- mr-2">Hello!</span><br></br>
            <span className="text-lg">Welcome Back</span>
          </span>
        </h1>

               {/* Images Section */}
               <section className='mb-8'>
            <h2 className='text-2xl font-bold mb-4'>Our Services</h2>
            <img
              src={images[currentImageIndex]}
              alt={`Cat ${currentImageIndex + 1}`}
              className='w-full rounded-lg shadow-md object-cover'
              style={{ height: '280px' }}
            />
          </section>

        <div
          onClick={() => handleNavClick('AddItemAdmin')}
          className='cursor-pointer w-full bg-gray-200 rounded-lg p-4 mb-8 hover:bg-gray-300 transition duration-300'>
          <div className='flex flex-row items-center justify-between mb-4'>
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
        
        <section className='flex mb-8'>
                <div className='w-full'>
                  <h2 className='text-2xl font-bold mb-4'>Place Your Order</h2>
                  <p className='mb-6'>
                    Browse our products and place your order securely online.
                  </p>
                  <button
                    className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md'
                    onClick={() => handleNavClick('OrderPlacedAdmin')}
                  >
                    View Orders
                  </button>
                </div>
                {/* <div className='w-full sm:w-auto ml-auto'>
                  <img src={cat1} alt='Your Image' className='' />
                </div> */}
              </section>




      </div>
    </div>
    </div>
  );
};

export default AdminDashboardMain;
