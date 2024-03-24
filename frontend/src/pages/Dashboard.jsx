import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import CustomerDashboard from '../components/customer-dashboard';
import Categories from '../components/customer-dashboard/components/Categories';
import PlaceOrder from '../components/customer-dashboard/components/PlaceOrder';

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard'); // Default active component

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className='max-h-screen flex flex-row'>
      <div className='col-auto overflow-hidden'>
        {/* Pass the handleNavClick function to Navbar to handle component toggling */}
        <Navbar handleNavClick={handleNavClick} />
      </div>
      <div className='overflow-scroll w-full'>
        {/* Render components based on activeComponent state */}
        {activeComponent === 'dashboard' && <CustomerDashboard />}
        {activeComponent === 'categories' && <Categories />}
        {activeComponent === 'placeorder' && <PlaceOrder />}
      </div>
    </div>
  );
};

export default Dashboard;
