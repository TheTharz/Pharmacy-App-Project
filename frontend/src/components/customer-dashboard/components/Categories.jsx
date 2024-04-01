import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MedicineCard from '../../MedicineCard/MedicineCard.jsx';

const Categories = () => {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categoryHeader, setCategoryHeader] = useState('All Medicine');

  useEffect(() => {
    const fetchMedicines = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/user/get-all-medicine'
        );
        console.log(response.data);
        setMedicines(response.data.data);
        setFilteredMedicines(response.data.data);
      } catch (error) {
        console.error('Error fetching medicines:', error);
      }
    };

    fetchMedicines();
  }, []);

  // Function to filter medicines based on the selected category
  const filterMedicines = (category) => {
    if (category === 'All') {
      setFilteredMedicines(medicines);
      setCategoryHeader('All Medicine');
    } else {
      const filtered = medicines.filter(
        (medicine) => medicine.category === category
      );
      setFilteredMedicines(filtered);
      setCategoryHeader(`${category} Medicine`);
    }
    setSelectedCategory(category);
  };

  const categories = ['All', 'Tablet', 'Syrups', 'Balm'];

  return (
    <div className='container mx-auto mt-8'>
      <h1 className='text-2xl font-bold mb-4'>{categoryHeader}</h1>
      <div className='flex mb-4'>
        {categories.map((category) => (
          <button
            key={category}
            className={`mr-4 px-4 py-2 rounded-md ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-800'
            }`}
            onClick={() => filterMedicines(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {filteredMedicines.map((medicine, index) => (
          <MedicineCard key={index} medicine={medicine} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
