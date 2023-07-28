import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import { useDispatch } from "react-redux";
import HrSidebar from "../Components/HrSidebar";
import { useSelector } from "react-redux";
import React from "react";
import '../Asserts/JobCard.css';
import { Link, useNavigate } from "react-router-dom";
import {BsCurrencyRupee} from "react-icons/bs";
import { useState,useEffect } from "react";
import {TbTextPlus} from "react-icons/tb"
import {TbChecks} from "react-icons/tb";
import {MdLocationPin} from "react-icons/md";

import axios from "axios";
function Applieduser(){

    const user = useSelector((state)=>state.user);

    const dispatch =useDispatch();

    const handleLogout =()=>{
      dispatch({type:"LOGOUT"});
    };

  const [applieduser,setApplieduser]=useState([]);
  const navigate=useNavigate();
  const viewjobid=localStorage.getItem('viewjobid');  
      const token=localStorage.getItem('token');
      
       useEffect(()=>{
        const fetchData=async()=>{
          try{
            const response=await axios.get(
              `http://localhost:8181/api/v1/user/getapplied/${viewjobid}`,
 
              {
                
                headers:{
                  "Authorization":`Bearer ${token}`,
                  "cache-control":"no-cache",
                },
              }
            )
            
            setApplieduser(response.data);
            console.log(response.data)
          }catch(error){
            console.log("Error fetching Data "+error);
          }
        };
        fetchData();
       },[]);
       
      

      

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
        {/* <Link to="/notification" ><IoMdNotifications color="white" fontSize="50px" class=" mt-2" /></Link> */}
        <Link to="/profile"> <CgProfile color="white" fontSize="50px" class=" my-2 mx-2" />  </Link>
        <h2 class="nav-item text-white mt-3"  >  {user.username}</h2>
        <Link to="/"  onClick={handleLogout}>  <BiPowerOff color="white" fontSize="40px" class=" my-3 mx-2" />  </Link>  
      </div>
      </div>
      <div class=" navbar-nav container-fluid h4">
      <div class="  nav-link me-auto"> 
        <HrSidebar/>
      </div>
        <div class=" navbar-nav ms-auto">   
        <Link to="/hrhome" class="nav-link ">Home</Link>
        <Link to="/postjob" class="nav-link" >Post Jobs</Link>
        <Link to="hrdashboard" class="nav-link" >Dashboard</Link>
        </div>
      </div>
    </div>
  </div>
    </nav>
    <div></div>
    <div class="container-len">

  <div class=" apply-container ">
   <h2> Applied Candidate:</h2>
  <div className="container border my-5 px-4">
      <div className="row">
        {applieduser.map((job, index) => (
          <div key={index} className="col-md-6 mb-4 mt-5">
            {/* <h3 class="float-end me-3 mt-2" onClick={() => handleBookmarkToggle(job)}>

                       {job.isSaved ? ( <TbChecks size="35px"/>)
                     :
                      (<TbTextPlus size="35px"/>)
                        
                        }</h3> */}
            <div class="reset" onClick={()=>{
                  localStorage.setItem('viewjobid',job.id)
                  
                  navigate("/applieduser")
                  
                  }}>
            <div className="job-card ">
      <div className="title">{job.email}</div>
      <div className="company">{job.fname}</div>
      <div className="type"><i class="fa fa-solid fa-briefcase mx-2"> </i>Min Experience: {job.jobminiexp}</div>
                
        
      
    </div>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
</div>
</div>
  );
}
export default Applieduser;

