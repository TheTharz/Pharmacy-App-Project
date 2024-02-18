import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Admin from "./components/Admin";


function App() {
    const userRole = localStorage.getItem("role");

    return (
        <Routes>
            {userRole === "admin" && <Route path="/" element={<Admin />} />}
            {userRole === "user" && <Route path="/" element={<Main />} />}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
			<Route path="/admin" element={<Admin />} />
			<Route path="/user" element={<Main />} />
         
 

            <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
    );
}

export default App;
