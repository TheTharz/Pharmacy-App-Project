import Navbar from '../components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import CustomerDashboard from '../components/customer-dashboard';
import Categories from '../components/customer-dashboard/components/Categories';

const dashboard = () => {
  return (
    <div className='max-h-screen flex flex-row'>
      <div className='col-auto overflow-hidden'>
        <Navbar />
      </div>
      <div className=' overflow-scroll w-full'>
        <Categories />
      </div>
    </div>
  );
};

export default dashboard;
