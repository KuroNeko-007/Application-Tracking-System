import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../Features/userSlice";
import Footer from "../Components/Footer";
import menu from '../Asserts/menu.svg';
import signout from '../Asserts/box-arrow-right.svg';
import profile from "../Asserts/person-square.svg";
import ApplyCard from "../Components/ApplyCard";
import "../Asserts/landing.css";
import Dashcard from "../Components/Dashcard";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";

import "../Asserts/Sidebar.css";
import Sidebar from "../Components/Sidebar";
function Dashboard(){
  const user=useSelector(selectUser);
    return(
      <div class="container-fluid px-0 ">
      <nav class="navbar navbar-expand-lg navbar-dark bg-black shadow py-3 my-0 h3 fixed-top" >
    <div class="container-fluid px-0">
      
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse flex-md-column " id="navbarNavAltMarkup">
      <div class=" navbar-nav container-fluid h4">
        <div class="  nav-link me-auto"> 
          
        <a class="navbar-brand" href="#">ATS</a>
          </div>
        <div class="navbar-nav ms-auto " >
          <p class="nav-item text-white mt-4"  >  {user.username}</p>
          <Link to="/profile"> <CgProfile color="white" fontSize="50px" class=" my-2 mx-2" />  </Link>
          <Link to="/">  <BiPowerOff color="white" fontSize="40px" class=" my-3 mx-2" />  </Link>  
        </div>
        </div>
        <div class=" navbar-nav container-fluid h4">
        <div class="  nav-link me-auto"> 
        <Sidebar/>
      </div>
          <div class=" navbar-nav ms-auto">   
          <Link to="/home" class="nav-link " >Home</Link>
          <Link to="/apply" class="nav-link" >Apply for Job</Link>
          <Link to="/dashboard" class="nav-link active" aria-current="page" >Dashboard</Link>
          </div>
        </div>
      </div>
    </div>
      </nav>
      <div class="container-len d-flex">
        <div>
          <div className="propic mx-5">
          <CgProfile color="black" fontSize="350px" class=" my-2 mx-2" />
          </div>
          <div class="display-3 px-5 mx-5">
            username
          </div>
        </div>
        <Dashcard/>
      </div>
<Footer/>
      </div>

    )
}
export default Dashboard;