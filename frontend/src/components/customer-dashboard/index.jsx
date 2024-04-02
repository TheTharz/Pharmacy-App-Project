import React, { useState, useEffect } from 'react';
import cat1 from '../../pages/image/cat1.png';
import cat2 from '../../pages/image/cat2.png';
import cat3 from '../../pages/image/cat3.png';
import {
  FaPrescriptionBottleAlt,
  FaClinicMedical,
  FaShoppingCart,
} from 'react-icons/fa';

const CustomerDashboard = ({ setActiveComponent }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cat1, cat2, cat3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className='bg-gray-100 min-h-screen flex flex-col ' style={{ backgroundColor: '#D7ECFF' }}>

      <div className='max-w-8xl ml-1.5  w-full px-5 py-10 mt-20 bg-white rounded-lg shadow-md justify-center items-center'>
      <h1 className='text-4xl font-bold mb-6 flex justify-between'>
        <span className='text-blue-500'>User Dashboard</span>
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


      

              {/* Categories Section */}
      <section className='mb-8'>
        <div className='flex flex-row items-center justify-between mb-4'>
          <h2 className='text-2xl font-bold'>Browse Categories</h2>

          <button
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md'
            onClick={() => setActiveComponent('categories')}
          >
            Try it
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 '>
          <div className='bg-gradient-to-r from-blue-400 to-blue-500 p-6 rounded-lg shadow-md relative'>
            <h3 className='text-xl font-semibold mb-2'>Medicines</h3>
            <p>Explore a wide range of prescription and OTC medicines.</p>
            <img src={cat1} alt='Cat1' className='absolute right-1 bottom-1 h-16 w-16 rounded-full' />
          </div>

          <div className='bg-gradient-to-r from-orange-400 to-orange-500 p-6 rounded-lg shadow-md relative'>
            <h3 className='text-xl font-semibold mb-2'>Health Supplements</h3>
            <p>Discover quality supplements for your health needs.</p>
            <img src={cat2} alt='Cat2' className='absolute right-1 bottom-1 h-16 w-16 rounded-full' />
          </div>

          <div className='bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg shadow-md relative'>
            <h3 className='text-xl font-semibold mb-2'>Personal Care</h3>
            <p>Shop for personal care products for your well-being.</p>
            <img src={cat3} alt='Cat3' className='absolute right-1 bottom-1 h-16 w-16 rounded-full' />
          </div>
        </div>
      </section>


              <section className='flex mb-8'>
                <div className='w-full'>
                  <h2 className='text-2xl font-bold mb-4'>Place Your Order</h2>
                  <p className='mb-6'>
                    Browse our products and place your order securely online.
                  </p>
                  <button
                    className='bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md'
                    onClick={() => setActiveComponent('placeorder')}
                  >
                    Start Shopping
                  </button>
                </div>
                {/* <div className='w-full sm:w-auto ml-auto'>
                  <img src={cat1} alt='Your Image' className='' />
                </div> */}
              </section>


      </div>
    </div>
  );
};

export default CustomerDashboard;
