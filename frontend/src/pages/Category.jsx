import AdminNavbar from "../components/AdminNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminDashboard.css';

const categoriy = () => {
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/login";
	};
    
    return (
        <div className="d-flex">
            <div className="col-auto">
            <AdminNavbar/>  
           </div >
           <div className="d-flex flex-column">
           <div className="Topbar">
           <div className="d-flex flex-row">
           <button className="lout_button"  onClick={handleLogout}>
					Logout
				</button>
            </div>
           </div>
           <div className="d-flex flex-row">
           <h1 className="heading">Admin Dashboard</h1>
           <div className="d-flex flex-column">
           <h3 className="welcome1">Hello!</h3>
           <h3 className="welcome2">welcome back</h3>
           </div>

           </div>
           <h1 className="subheading">OUR SERVICES</h1>
           <div className="imgbox"></div>
           <div className="d-flex flex-row">
            <h1 className="subheading">CATEGORIES</h1>
            <button className="s_button">See More...</button>
            </div>
            <div className="d-flex flex-row">
            <div className="box" style={{ backgroundColor: '#369FFF' }}>
              <h3 className="cat_text">CATEGORIE1</h3>
              <div className="cat_imagbox1"></div>
             
            </div>

            <div className="box" style={{ backgroundColor: '#FF993A' }}>
            <h3 className="cat_text">CATEGORIE1</h3>
            <div className="cat_imagbox2"></div>
            </div>
            <div className="box" style={{ backgroundColor: '#8AC53E' }}>
            <h3 className="cat_text">CATEGORIE1</h3>
            <div className="cat_imagbox3"></div>
            </div>
            <div className="box" style={{ backgroundColor: '#FFD143' }}>
            <h3 className="cat_text">CATEGORIE1</h3>
            <div className="cat_imagbox4"></div>
            </div>
            </div>
            <h1 className="heading">Make Your Order Hear</h1>
            <div className="d-flex flex-row">
                <button className="p_button">Check ORDER</button>
                <h4 className="text">"Experience top-quality pharmacy products with our convenient app.<br />
                    Enjoy quick, hassle-free service and secure transactions. <br /> 
                    Save time and shop confidently from trusted brands.<br />
                    Buy here for a seamless shopping experience!"</h4>

                
                <div className="imgboxlast"></div>


        
            </div>
            





           </div>   
           
           
            
        </div>
    );
};


export default categoriy;