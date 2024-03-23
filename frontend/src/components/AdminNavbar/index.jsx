import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <nav className='navbar-sidebar'>
      <div
        className='container-fluid d-flex flex-column justify-content-between'
        style={{ height: '100%' }}
      >
        <div>
          <Link className='navbar-brand' to='/'>
            {/* Your Brand Logo */}
          </Link>
          <ul className='navbar-nav flex-column mt-3'>
            <div className='header'>New Pharmacy</div>
            <div className='space'></div>
            <div className='space'></div>
            <div className='space'></div>
            <li className='nav-item'>
              <Link
                className={`btn nav-link ${
                  location.pathname === '/admindashboard' ? 'active' : ''
                }`}
                to='/AdminDashboard'
              >
                <i className='fas fa-home-alt icon'></i> Dashboard
              </Link>
            </li>

            <div className='space'></div>
            <li className='nav-item'>
              <Link
                className={`btn nav-link ${
                  location.pathname === '/about' ? 'active' : ''
                }`}
                to='/about'
              >
                <i className='fas fa-list-alt icon'></i> Categories
              </Link>
            </li>
            <div className='space'></div>
            <li className='nav-item'>
              <Link
                className={`btn nav-link ${
                  location.pathname === '/contact' ? 'active' : ''
                }`}
                to='/contact'
              >
                <i className='fas fa-shopping-cart icon'></i> Orders
              </Link>
            </li>
            <div className='space'></div>
            <li className='nav-item'>
              <Link
                className={`btn nav-link ${
                  location.pathname === '/additem' ? 'active' : ''
                }`}
                to='/additem'
              >
                <i className='fas fa-shopping-cart icon'></i> Add item
              </Link>
            </li>
          </ul>
        </div>
        <div>{/* Additional content at the bottom of the sidebar */}</div>
      </div>
    </nav>
  );
};

export default AdminSidebar;
