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
function Home(){
 const user=useSelector(selectUser);
    return(

        <div class="container-fluid px-0">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow py-3 my-0 h3 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ATS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse flex-md-column " id="navbarNavAltMarkup">
      <div class="navbar-nav ms-auto">
        <p class="nav-item my-0 p-2 text-white" >  {user.username}</p>
        <Link to="/"> <img src={profile} height="65px" width="30px"></img> </Link>
        <Link to="/"> <img src={signout} height="65px" width="30px"></img> </Link>  
      </div>
      <div class="navbar-nav ms-auto h4">
        <Link to="/home" class="nav-link active" aria-current="page">Home</Link>
        <Link to="/apply" class="nav-link" >Apply for Job</Link>
        <Link to="/dashboard" class="nav-link">Dashboard</Link>
          <button class="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#collapseside" aria-expanded="false" aria-controls="collapseside">
          <img src={menu} height="24px" ></img>
          </button>

      </div>
    </div>
  </div>
    </nav>
      <div class="collapse float-end shadow " id= "collapseside">
    <nav class="navbar-nav  flex-column  h4" >
        <Link to="#" class="nav-link border-bottom px-3" >Active</Link>
        <Link to="#" class="nav-link border-bottom px-3" >Link</Link>
        <Link to="#" class="nav-link border-bottom px-3" >Link</Link>
        <Link to="/help" class="nav-link border-bottom px-3">Help</Link>
    </nav>
      </div>
      <div class="container-home">
      
      </div>
<ApplyCard/>
    <Footer/>


</div>
    )
}
export default Home;
