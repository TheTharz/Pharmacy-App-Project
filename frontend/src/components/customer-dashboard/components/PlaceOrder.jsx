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
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [validations, setValidations] = useState({
    nic: true,
    dob: true,
    firstName: true,
    lastName: true,
    address: true,
  });

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

    const newMedicine = {
      ...medicine,
      quantity: quantity,
      subtotal: quantity * medicine.price,
    };
    setReceipt([...receipt, newMedicine]);

    setQuantity(1);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const filtered = medicines.filter((medicine) =>
      medicine.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredMedicines(filtered.slice(0, 5));
  };

  const handlePlaceOrder = () => {
    setShowConfirmation(true);
  };

  const confirmOrder = () => {
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
        setShowConfirmation(false); // Close the confirmation modal
      })
      .catch((error) => {
        console.error('Error placing order:', error);
        alert('Error placing order.' + error);
      });
  };

  const cancelOrder = () => {
    setShowConfirmation(false);
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
        <div className='bg-gray-400 p-2 rounded-md h-auto '>
          <h3 className='text-lg font-semibold mb-2'>Receipt</h3>
          <table className='w-full'>
            <thead className='bg-blue-500 text-white'>
              <tr>
                <th>Medicine Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody className='bg-blue-100 overflow-y-scroll'>
              {receipt.map((item) => (
                <tr key={item.id} className='bg-blue-200'>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>{item.quantity}</td>
                  <td>${item.subtotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='mt-4'>
          <strong>Total Amount:</strong> ${totalAmount.toFixed(2)}
        </div>
        <button
          className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4'
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
        {showConfirmation && (
          <div className='fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white p-4 rounded shadow-lg'>
              <div className='flex justify-between mb-4 items-center'>
                <h2 className='text-lg font-bold'>Pharmacy One</h2>
                <p className='text-sm text-center'>
                  Date: {new Date().toLocaleDateString()}
                </p>
              </div>
              <h3 className='text-md font-semibold mb-2'>Order Receipt</h3>
              <div className='mb-4'>
                <p className='mb-1'>Time: {new Date().toLocaleTimeString()}</p>
                <p className='mb-1'>
                  Customer Name: {firstName} {lastName}
                </p>
                <p className='mb-1'>NIC: {nic}</p>
              </div>
              <table className='w-full mb-4'>
                <thead>
                  <tr>
                    <th>Medicine Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {receipt.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${item.subtotal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <hr className='my-4' />
              <div className='flex justify-between'>
                <span className='font-bold'>Total:</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className='mt-4 flex justify-end'>
                <button
                  className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2'
                  onClick={confirmOrder}
                >
                  Confirm Order
                </button>
                <button
                  className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                  onClick={cancelOrder}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaceOrder;
