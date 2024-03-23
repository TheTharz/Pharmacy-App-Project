import React from 'react';
import cat1 from '../../pages/image/cat1.png';
import cat2 from '../../pages/image/cat2.png';
import cat3 from '../../pages/image/cat3.png';

const CustomerDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location = '/login';
  };
  return (
    <div className='d-flex flex-column w-full'>
      <div className=' flex flex-row bg-blue-600 w-full p-2'>
        <button
          className=' rounded-full w-[60 px] text-white bg-blue-500 hover:bg-blue-700 py-2 px-4  ml-auto mr-5'
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
      <div className='flex flex-row justify-between p-4'>
        <h1 className=''>User Dashboard</h1>
        <h1>
          Hello <span>Welcome</span>
        </h1>
      </div>
      <h1 className='subheading'>OUR SERVICES</h1>
      <div className='imgbox'></div>
      <div className='d-flex flex-row'>
        <h1 className='subheading'>CATEGORIES</h1>
        <button className='s_button'>See More...</button>
      </div>
      <div className='d-flex flex-row'>
        <div className='box' style={{ backgroundColor: '#369FFF' }}>
          <h3 className='cat_text'>CATEGORIE1</h3>
          <div className='cat_imagbox1'>
            <img src={cat1} alt='category1' />
          </div>
        </div>

        <div className='box' style={{ backgroundColor: '#FF993A' }}>
          <h3 className='cat_text'>CATEGORIE1</h3>
          <div className='cat_imagbox2'>
            <img src={cat2} alt='category2' />
          </div>
        </div>
        <div className='box' style={{ backgroundColor: '#8AC53E' }}>
          <h3 className='cat_text'>CATEGORIE1</h3>
          <div className='cat_imagbox3'>
            <img src={cat3} alt='category3' />
          </div>
        </div>
        <div className='box' style={{ backgroundColor: '#FFD143' }}>
          <h3 className='cat_text'>CATEGORIE1</h3>
          <div className='cat_imagbox4'>
            <img src={cat1} alt='category4' />
          </div>
        </div>
      </div>
      <h1 className='heading'>Make Your Order Hear</h1>
      <div className='d-flex flex-row'>
        <button className='p_button'>ORDER</button>
        <h4 className='text'>
          "Experience top-quality pharmacy products with our convenient app.
          <br />
          Enjoy quick, hassle-free service and secure transactions. <br />
          Save time and shop confidently from trusted brands.
          <br />
          Buy here for a seamless shopping experience!"
        </h4>

        <div className='imgboxlast'></div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
