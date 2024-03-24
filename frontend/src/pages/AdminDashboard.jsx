import React, { useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';
import AdminDashboardMain from '../components/Admin-Dashboard/AdminDashboardMain';
import OrderPlacedAdmin from '../components/Admin-Dashboard/Components/OrdersPlacedAdmin';
import AddItemAdmin from '../components/Admin-Dashboard/Components/AddItemAdmin';
import ViewOrdersAdmin from '../components/Admin-Dashboard/Components/OrdersPlacedAdmin'; // Add this import
import Categories from '../components/customer-dashboard/components/Categories';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard'); // State to track active tab

  const handleNavClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='w-full flex flex-row max-h-screen overflow-y-hidden'>
      <div className='col-auto overflow-hidden'>
        <AdminNavbar handleNavClick={handleNavClick} />
        {/* Pass handleNavClick function */}
      </div>
      <div className='w-full overflow-scroll'>
        {/* Conditionally render components based on activeTab */}
        {activeTab === 'dashboard' && (
          <AdminDashboardMain handleNavClick={handleNavClick} />
        )}
        {activeTab === 'categories' && <Categories />}
        {activeTab === 'vieworders' && <OrderPlacedAdmin />}
        {activeTab === 'additem' && <AddItemAdmin />}

        {/* Add ViewOrdersAdmin */}
      </div>
    </div>
  );
};

export default AdminDashboard;
