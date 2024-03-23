import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import CustomerDashboard from '../components/customer-dashboard';

const dashboard = () => {
  return (
    <div className='d-flex'>
      <div className='col-auto'>
        <Navbar />
      </div>
      <CustomerDashboard />
    </div>
  );
};

export default dashboard;
