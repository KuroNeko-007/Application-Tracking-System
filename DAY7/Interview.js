
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Dashcard from "../Components/Dashcard";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import { useDispatch } from "react-redux";
import "../Asserts/Sidebar.css";
import Sidebar from "../Components/Sidebar";
import {IoMdNotifications} from "react-icons/io";

import "../Asserts/landing.css";
function Interview(){
    const user = useSelector((state)=>state.user);

    const dispatch =useDispatch();

    const handleLogout =()=>{
      dispatch({type:"LOGOUT"});
    };

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
        <Link to="/notification" ><IoMdNotifications color="white" fontSize="50px" class=" mt-2" /></Link>
        <Link to="/profile"> <CgProfile color="white" fontSize="50px" class=" my-2 mx-2" />  </Link>
        <h2 class="nav-item text-white mt-3"  >  {user.username}</h2>
        <Link to="/"  onClick={handleLogout}>  <BiPowerOff color="white" fontSize="40px" class=" my-3 mx-2" />  </Link>  
      </div>
      </div>
      <div class=" navbar-nav container-fluid h4">
      <div class="  nav-link me-auto"> 
        <Sidebar/>
      </div>
        <div class=" navbar-nav ms-auto">   
        <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
        <Link to="/apply" class="nav-link" >Apply for Job</Link>
        <Link to="/dashboard" class="nav-link" >Dashboard</Link>
        </div>
      </div>
    </div>
  </div>
    </nav>

<div className="cont">
  <div class="container border my-5 px-5">
    <div class="row">
              <div class="col">
        <div class="card my-5 shadow">
            <div class="card-header border-0">
                <h3 class="card-title">Company name</h3>
            </div>
                <Link to="/jobdesc" class="reset">  
            <div class="card-body pt-0">
                <div class="card-cust">
                    <div class="card-cust-title-wrapper">
                        {/* <div class="comp-prof">
                            
                        </div> */}
                        <div class="card-cust-position">
                            <span class="card-cust-title">Date : 23/4/23</span>
                            <span class="card-cust-date">Time : 14:00</span>
                            <span class="card-cust-date">Link : asughaogiuhaoijas/sagj/asg/agj</span>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <ol class="requirements list-unstyled">
                        <li class="req-point"><p class="p-1 mb-0"><span>Interviewer : Gowtham G</span></p></li>
                        <li class="req-point"><p class="p-1"><span>Position : WEB Developer</span></p></li>
                        
                    </ol>
                </div>
            </div>
</Link>
        </div>
    </div>
</div>
</div>
</div>
</div>

    )
    }

export default Interview;