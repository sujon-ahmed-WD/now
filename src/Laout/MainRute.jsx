import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
 

 
const MainRute = () => {
 
 

    return (
        <div className="max-w-7xl  mx-auto  border border-red-700">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainRute;