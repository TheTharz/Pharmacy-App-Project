import React from 'react';
import cat1 from '../../pages/image/cat1.png';
import cat2 from '../../pages/image/cat2.png';
import cat3 from '../../pages/image/cat3.png';
import {
  FaPrescriptionBottleAlt,
  FaClinicMedical,
  FaShoppingCart,
} from 'react-icons/fa';

const CustomerDashboard = ({ setActiveComponent }) => {
  return (
    <div className='bg-gray-100 min-h-screen flex flex-col justify-center items-center'>
      <div className='max-w-4xl w-full px-4 py-8 bg-white rounded-lg shadow-md'>
        <h1 className='text-4xl font-bold mb-6'>
          Welcome to <span className=' text-blue-500'>RxBit</span>
        </h1>

        {/* Services Section */}
        <section className='mb-8'>
          <h2 className='text-2xl font-bold mb-4'>Our Services</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='flex flex-col items-center justify-center bg-blue-100 p-4 rounded-lg shadow-md gap-2'>
              <FaPrescriptionBottleAlt className=' text-blue-900' />
              <p className='text-lg font-semibold'>Search Medicines</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-green-100 p-4 rounded-lg shadow-md gap-2'>
              <FaClinicMedical className='text-green-900 mr-3' />
              <p className='text-lg font-semibold'>Browse By Categories</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-yellow-100 p-4 rounded-lg shadow-md gap-2'>
              <FaShoppingCart className='text-yellow-900 mr-3' />
              <p className='text-lg font-semibold'>Online Orders</p>
            </div>
          </div>
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
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='bg-purple-100 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Medicines</h3>
              <p>Explore a wide range of prescription and OTC medicines.</p>
            </div>
            <div className='bg-pink-100 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Health Supplements</h3>
              <p>Discover quality supplements for your health needs.</p>
            </div>
            <div className='bg-orange-100 p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-semibold mb-2'>Personal Care</h3>
              <p>Shop for personal care products for your well-being.</p>
            </div>
          </div>
        </section>

        {/* Place Order Section */}
        <section>
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
        </section>
      </div>
    </div>
  );
};

export default CustomerDashboard;
