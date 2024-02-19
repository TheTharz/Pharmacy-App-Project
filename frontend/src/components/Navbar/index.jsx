import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Import your CSS file

const Sidebar = () => {
    const location = useLocation();

    return (
        <nav className="navbar-sidebar">
            
            <div className="container-fluid d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                <div>
                    <Link className="navbar-brand" to="/">
                        
                    </Link>
                        <ul className="navbar-nav flex-column mt-3">
                        <div className="header">new pharmisy</div>
                        <div className='space'></div>
                        <div className='space'></div>
                        <div className='space'></div>
                        <div className='space'></div>
                        <li className="nav-item">
                            <Link className={`btn nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`} to="/Dashboard" style={{ borderRadius: '10px' }}>Home</Link>
                        </li>
                        <div className='space'></div>
                        <li className="nav-item">
                            <Link className={`btn nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about" style={{  borderRadius: '10px' }}>About</Link>
                        </li>
                        <div className='space'></div>
                        <li className="nav-item">
                            <Link className={`btn nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact" style={{  borderRadius: '10px' }}>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* Additional content at the bottom of the sidebar */}
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
