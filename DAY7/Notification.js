import ApplyCard from "../Components/ApplyCard";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../Asserts/landing.css";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import "../Asserts/Sidebar.css";
import Sidebar from "../Components/Sidebar";
import {IoMdNotifications} from "react-icons/io";
import React from "react";
import Footer from "../Components/Footer";
function Notification(){
    const Notification = [
        {
        },
        {

        }
            
        
              
          ];
    
          const user = useSelector((state)=>state.user);
    return (
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
        <Link to="/notification" ><IoMdNotifications color="white" fontSize="50px" class=" mt-2" /></Link>
        <Link to="/profile"> <CgProfile color="white" fontSize="50px" class=" my-2 mx-2" />  </Link>
        <h2 class="nav-item text-white mt-3"  >  {user.username}</h2>
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
        <Link to="/dashboard" class="nav-link" >Dashboard</Link>
        </div>
      </div>
    </div>
  </div>
  </nav>

<div class="container-len">
  <div class="container apply-container border my-5 px-5">
<div class="row">
              <div class="col">
            {Notification.map((job) =>(
        <div class="card my-5 shadow">
            <div class="card-header border-0">
                <h3 class="card-title">Reminder</h3>
                <h5 class="ms-auto">- 2 hrs Ago</h5>
                
            </div>
                <Link to="#" class="reset">  
            <div class="card-body pt-0">
                <div class="card-cust">
                    <div class="card-cust-title-wrapper">
                        <div class="comp-prof">
                            
                        </div>
                        <div class="card-cust-position">
                            <span class="card-cust-title">Job Rec</span>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <ol class="requirements list-unstyled">
                        <li class="req-point"><p class="p-1"><span>Job Descriptions: </span></p></li>
                        <li class="req-point"><p><span> Nostrud reprehenderit enim aliqua adipisicing in reprehenderit  sit Lorem elit. Incididunt et cupidatat do nulla est nulla ullamco ad in anim laboris. Aliqua ea consequat exercitation ut ad esse nulla nulla minim eiusmod laborum adipisicing exercitation laboris.</span></p></li>    
                    </ol>
                </div>
            </div>
</Link>
        </div>
        ))}
    </div>
    </div>
    </div>
    </div>
    <Footer/>
    </div>

    )
}
export default Notification;