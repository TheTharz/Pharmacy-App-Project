import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlaceOrder = () => {
  const [nic, setNic] = useState('');
  const [dob, setDob] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [medicines, setMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [receipt, setReceipt] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantity, setQuantity] = useState(1); // Default quantity is 1

  useEffect(() => {
    // Fetch all medicines from the API endpoint
    axios
      .get('http://localhost:8080/api/user/get-all-medicine')
      .then((response) => {
        setMedicines(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching medicines:', error);
      });
  }, []);

  useEffect(() => {
    // Calculate total amount when receipt changes
    const amount = receipt.reduce((total, item) => total + item.subtotal, 0);
    setTotalAmount(amount);
  }, [receipt]);

  const handleAddMedicine = (medicine) => {
    // Check if the medicine is already in the receipt
    const existingItem = receipt.find((item) => item.id === medicine.id);

    // If the medicine is not in the receipt, add it with the specified quantity and subtotal
    const newMedicine = {
      ...medicine,
      quantity: quantity,
      subtotal: quantity * medicine.price,
    };
    setReceipt([...receipt, newMedicine]);

    // Reset quantity back to 1 after adding medicine
    setQuantity(1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredMedicines(filtered.slice(0, 5)); // Limit to the first 5 items
  };

  const handlePlaceOrder = () => {
    // Prepare order data
    const orderData = {
      nicNumber: nic,
      DOB: dob,
      firstName: firstName,
      lastName: lastName,
      address: address,
      medicines: receipt.map((item) => ({
        medicine: item.name,
        quantity: item.quantity,
      })),
      totalAmount: totalAmount,
    };
    // console.log('Order data:', orderData);

    // Send the order data to the backend
    axios
      .post('http://localhost:8080/api/user/place-order', orderData)
      .then((response) => {
        console.log('Order placed successfully:', response.data);
        // Clear the form after successful order placement
        setNic('');
        setDob('');
        setFirstName('');
        setLastName('');
        setAddress('');
        setReceipt([]);
        setTotalAmount(0);
      })
      .catch((error) => {
        console.error('Error placing order:', error);
      });
  };

  return (
    <div className='container mx-auto px-4 py-8 grid grid-cols-2 gap-8'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Place Order</h2>
        <div className='mb-4'>
          <label className='block mb-2'>NIC:</label>
          <input
            type='text'
            className='w-full border rounded py-2 px-3'
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Date of Birth:</label>
          <input
            type='date'
            className='w-full border rounded py-2 px-3'
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>First Name:</label>
          <input
            type='text'
            className='w-full border rounded py-2 px-3'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Last Name:</label>
          <input
            type='text'
            className='w-full border rounded py-2 px-3'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2'>Address:</label>
          <input
            type='text'
            className='w-full border rounded py-2 px-3'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>
      <div>
        {/* Rest of your component */}
        <h3 className='text-lg font-semibold mb-2'>Search Medicines</h3>
        <input
          type='text'
          className='w-full border rounded py-2 px-3 mb-4'
          placeholder='Search...'
          value={searchTerm}
          onChange={handleSearch}
        />
        <ul>
          {filteredMedicines.map((medicine) => (
            <li
              key={medicine.id}
              className='flex items-center justify-between mb-2'
            >
              <span>
                {medicine.name} - {medicine.price}
              </span>
              <input
                type='number'
                min='1'
                className='border rounded py-1 px-2'
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              />
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => handleAddMedicine(medicine)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
        <h3 className='text-lg font-semibold mt-8 mb-2'>Receipt</h3>
        <ul>
          {receipt.map((item) => (
            <li
              key={item.id}
              className='flex items-center justify-between mb-2'
            >
              <span>
                {item.name} - {item.price} - Quantity: {item.quantity} -
                Subtotal: ${item.subtotal}
              </span>
            </li>
          ))}
        </ul>
        <div className='mt-4'>
          <strong>Total Amount:</strong> ${totalAmount}
        </div>
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
