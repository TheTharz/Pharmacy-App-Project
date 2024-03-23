import React from 'react';

const MedicineCard = ({ medicine }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6'>
      <img
        src={medicine.image}
        alt={medicine.name}
        className='w-full h-auto mt-4'
      />
      <h2 className='text-xl font-semibold mb-2'>{medicine.name}</h2>
      <div className='text-gray-600 mb-2'>Price: ${medicine.price}</div>
      <div className='text-gray-600 mb-2'>Quantity: {medicine.quantity}</div>
      <div className='text-gray-600 mb-2'>
        Description: {medicine.description}
      </div>
      <div className='text-gray-600 mb-2'>Category: {medicine.category}</div>
    </div>
  );
};

export default MedicineCard;
