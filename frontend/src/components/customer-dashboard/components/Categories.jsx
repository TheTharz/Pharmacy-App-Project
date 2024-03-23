import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you have Axios installed

const Categories = () => {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/user/get-all-medicine'
        );
        console.log(response.data);
        setMedicines(response.data.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    fetchMedicines();
  }, []);

  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-2xl font-bold mb-4'>Categories</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {medicines.map((medicine, index) => (
          <div key={index} className='bg-white rounded-lg shadow-md p-6'>
            <img
              src={medicine.image}
              alt={medicine.name}
              className='w-full h-auto mt-4'
            />
            <h2 className='text-xl font-semibold mb-2'>{medicine.name}</h2>
            <div className='text-gray-600 mb-2'>Price: ${medicine.price}</div>
            <div className='text-gray-600 mb-2'>
              Quantity: {medicine.quantity}
            </div>
            <div className='text-gray-600 mb-2'>
              Description: {medicine.description}
            </div>
            <div className='text-gray-600 mb-2'>
              Category: {medicine.category}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
