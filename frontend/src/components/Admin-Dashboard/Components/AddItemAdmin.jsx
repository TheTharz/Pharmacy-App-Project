import React, { useState } from 'react';
import axios from 'axios';

const AddItemAdmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    quantity: '',
    description: '',
    category: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:8080/api/admin/add-medicine',
        formData
      );
      console.log('Medicine added successfully:', response.data);

      // Clear form data after successful submission
      setFormData({
        name: '',
        price: '',
        quantity: '',
        description: '',
        category: '',
        image: '',
      });
    } catch (error) {
      console.error('Error adding medicine:', error);
    }
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-4'>Add Medicine - Admin</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block mb-2'>Name:</label>
          <input
            type='text'
            className='w-full border rounded py-2 px-3'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Price:</label>
          <input
            type='number'
            className='w-full border rounded py-2 px-3'
            name='price'
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Quantity:</label>
          <input
            type='number'
            className='w-full border rounded py-2 px-3'
            name='quantity'
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Description:</label>
          <input
            type='text'
            className='w-full border rounded py-2 px-3'
            name='description'
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Category:</label>
          <input
            type='text'
            className='w-full border rounded py-2 px-3'
            name='category'
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Image:</label>
          <input
            type='text'
            className='w-full border rounded py-2 px-3'
            name='image'
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Add Medicine
        </button>
      </form>
    </div>
  );
};

export default AddItemAdmin;
