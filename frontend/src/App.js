import { Route, Routes, Navigate } from 'react-router-dom';
import Main from './components/Main';
import Signup from './components/Signup';
import Login from './components/Login';
import Admin from './components/Admin';
import Dashboard from './pages/Dashboard';
import AdminDashboard from './pages/AdminDashboard';
import AddItemPage from './pages/AddItems';
import Prescription from './pages/Prescription';



function App() {
  const userRole = localStorage.getItem('role');

  return (
    <Routes>
      {/* For Admin */}
      {userRole === 'admin' ? (
        <>
          <Route path='/admindashboard' element={<AdminDashboard />} />
          
        </>
      ) : null}

      {/* For User */}
      {userRole === 'user' ? (
        <>
          <Route path='/userdashboard' element={<Dashboard />} />
          
        </>
      ) : null}

      {/* Common Routes */}
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />

      {/* Redirect to login for unauthorized access */}
      <Route path='*' element={<Navigate replace to='/login' />} />
    </Routes>
  );
}

export default App;
