import AdminNavbar from '../components/AdminNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';
import AdminDashboard from '../components/Admin-Dashboard/AdminDashboard';
import OrderPlacedAdmin from '../components/Admin-Dashboard/Components/OrdersPlacedAdmin';
import AddItemAdmin from '../components/Admin-Dashboard/Components/AddItemAdmin';

const admindashboard = () => {
  return (
    <div className='w-full flex flex-row max-h-screen'>
      <div className='col-auto overflow-hidden'>
        <AdminNavbar />
      </div>
      <div className='w-full overflow-scroll'>
        <AddItemAdmin />
      </div>
    </div>
  );
};

export default admindashboard;
