import ApplyCard from "../Components/ApplyCard";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../Asserts/landing.css";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import "../Asserts/profile.css";
import Sidebar from "../Components/Sidebar";
import {IoMdNotifications} from "react-icons/io";

import Footer from "../Components/Footer";

import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { RiCalendarLine, RiMedalLine, RiUserStarLine } from 'react-icons/ri';

function Profile() {
    const user = useSelector((state)=>state.user);
    const [profileData, setProfileData] = useState({
    firstName: 'Gowtham',
    lastName: 'G',
    address: 'asfjb',
    email: 'asgoanga',
    contactNumber: '123-456-7890',
    college: 'safsagsity',
    degree: 'Bachelor of Science',
    specialization: 'Computer Science',
    cgpa: 8.6,
    workExperience: '4 years',
    skills: ['React, JavaScript, HTML, CSS'],
    passingYear: 2018
    });
    
    const [editMode, setEditMode] = useState(false);
    
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    };
    
    const handleEditClick = () => {
    setEditMode(true);
    };
    
    const handleSaveClick = () => {
    setEditMode(false);
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
            <div class="container container-len">
    
      <div className="profile-container">
        <h1>Profile</h1>
        <div className="profile">
          <div className="profile-section">
            <label><FaUser className="icon" /> First Name:</label>
            {editMode ? (
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.firstName}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaUser className="icon" /> Last Name:</label>
            {editMode ? (
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.lastName}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaMapMarkerAlt className="icon" /> Address:</label>
            {editMode ? (
              <input
                type="text"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.address}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaEnvelope className="icon" /> Email:</label>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.email}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaPhone className="icon" /> Contact Number:</label>
            {editMode ? (
              <input
                type="text"
                name="contactNumber"
                value={profileData.contactNumber}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.contactNumber}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaGraduationCap className="icon" /> College:</label>
            {editMode ? (
              <input
                type="text"
                name="college"
                value={profileData.college}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.college}</span>
            )}
          </div>
          <div className="profile-section">
            <label><FaGraduationCap className="icon" /> Degree:</label>
            {editMode ? (
              <input
                type="text"
                name="degree"
                value={profileData.degree}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.degree}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiUserStarLine className="icon" /> Specialization:</label>
            {editMode ? (
              <input
                type="text"
                name="specialization"
                value={profileData.specialization}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.specialization}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiMedalLine className="icon" /> CGPA:</label>
            {editMode ? (
              <input
                type="number"
                name="cgpa"
                step="0.01"
                min="0"
                max="4"
                value={profileData.cgpa}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.cgpa}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiCalendarLine className="icon" /> Work Experience:</label>
            {editMode ? (
              <input
                type="text"
                name="workExperience"
                value={profileData.workExperience}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.workExperience}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiUserStarLine className="icon" /> Skills:</label>
            {editMode ? (
              <input
                type="text"
                name="skills"
                value={profileData.skills}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.skills.join(', ')}</span>
            )}
          </div>
          <div className="profile-section">
            <label><RiCalendarLine className="icon" /> Passing Year:</label>
            {editMode ? (
              <input
                type="text"
                name="passingYear"
                value={profileData.passingYear}
                onChange={handleInputChange}
              />
            ) : (
              <span>{profileData.passingYear}</span>
            )}
          </div>
          <div className="profile-buttons">
            {editMode ? (
              <button onClick={handleSaveClick}>Save</button>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </div>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Profile;