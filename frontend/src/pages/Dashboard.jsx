import Navbar from "../components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';

const dashboard = () => {
    
    return (
        <div className="d-flex">
            <div className="col-auto">
            <Navbar/>  
           </div >
           <div className="d-flex flex-column">
           <div className="Topbar"></div>
           <h1 className="heading">Dashboard</h1>
           <h1 className="subheading">OUR SERVICES</h1>
           <div className="image"><img src={require('./image/front.jpg')}  />
				</div>
            <h1 className="subheading">CATEGORIES</h1>
            <div className="d-flex flex-row">
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            <div className="box"></div>
            </div>
            <h1 className="heading">Make Your Order Hear</h1>
            <div className="d-flex flex-row">
                <button className="p_button">ORDER</button>
                <div className="image2"><img src={require('./image/downimg.png')}  />
				</div>


        
            </div>
            





           </div>   
           
           
            
        </div>
    );
};


export default dashboard;