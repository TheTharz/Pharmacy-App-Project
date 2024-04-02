import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderPlacedAdmin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch orders from the backend api
    axios
      .get('http://localhost:8080/api/admin/get-all-orders')
      .then((response) => {
        setOrders(response.data.data);
      });
  }, []);

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-4'>Order Details - Admin View</h2>
      <div className='overflow-x-auto'>
        <table className='table-auto w-full'>
          <thead className='bg-blue-900 text-white'>
            <tr>
              <th className='px-4 py-2'>Order ID</th>
              <th className='px-4 py-2'>Name</th>
              <th className='px-4 py-2'>NIC Number</th>
              <th className='px-4 py-2'>Date of Birth</th>
              <th className='px-4 py-2'>Address</th>
              <th className='px-4 py-2'>Medicines</th>
              <th className='px-4 py-2'>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr
                key={order._id}
                className={index % 2 === 0 ? 'bg-blue-100' : 'bg-blue-200'}
              >
                <td className='px-4 py-2'>{order._id}</td>
                <td className='px-4 py-2'>{`${order.firstName} ${order.lastName}`}</td>
                <td className='px-4 py-2'>{order.nicNumber}</td>
                <td className='px-4 py-2'>
                  {new Date(order.DOB).toLocaleDateString()}
                </td>
                <td className='px-4 py-2'>{order.address}</td>
                <td className='py-2 overflow-y-scroll max-h-2'>
                  <ul className='flex flex-col justify-center items-center list-inside max-h-16'>
                    {order.medicines.map((medicine) => (
                      <li key={medicine._id}>
                        {medicine.medicine} - Quantity: {medicine.quantity}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className='px-4 py-2'>${order.totalAmount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPlacedAdmin;
