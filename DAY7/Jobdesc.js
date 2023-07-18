
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Footer from "../Components/Footer";
import menu from '../Asserts/menu.svg';
import signout from '../Asserts/box-arrow-right.svg';
import profile from "../Asserts/person-square.svg";
import ApplyCard from "../Components/ApplyCard";
import "../Asserts/landing.css";
import Dashcard from "../Components/Dashcard";
import {BiPowerOff} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {IoMdNotifications} from "react-icons/io";
import "../Asserts/Sidebar.css";
import Sidebar from "../Components/Sidebar";

function Jobdesc(){
  const user = useSelector((state)=>state.user);
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
        <div class="container container-len border">
            <div class="row p-4">
                <div class="col-10">
                Duis aliqua incididunt ut nulla nulla aute do consequat. Occaecat ut ut dolor voluptate cupidatat voluptate dolore cupidatat qui. Esse ex officia veniam fugiat excepteur mollit cillum duis laboris consequat sunt.
                </div>
                <div class="col-2 ps-5">
          <Link to ="/applyform"> <div class="btn btn-primary  p-3 " >Apply Now</div> </Link>

                </div>
            </div>
            <div class="row-5  p-4">
                Ex consectetur laborum reprehenderit ullamco commodo laboris aliqua dolore elit nostrud est. Nisi laboris deserunt pariatur aute magna quis proident incididunt nostrud do tempor ullamco nulla. Labore labore culpa est pariatur enim labore minim et aliqua sit esse ea voluptate tempor. Reprehenderit sit cillum magna exercitation Lorem reprehenderit fugiat. Velit magna officia aute nostrud in tempor quis nulla nostrud enim irure consequat occaecat. Cupidatat eiusmod velit sint nostrud reprehenderit enim fugiat sunt eu qui est aliqua occaecat.

Commodo non qui irure ut minim non enim nulla irure labore ex pariatur eiusmod eu. Irure minim consectetur qui ea. Cupidatat aute aliquip culpa veniam voluptate Lorem excepteur dolore in dolor dolor exercitation.

Laborum occaecat eu proident dolore aliquip. Id in consequat culpa laboris velit in cillum ad excepteur. Magna laborum ea eiusmod minim incididunt duis aliquip. Cupidatat nostrud velit aliqua consequat aute esse culpa occaecat incididunt culpa officia. Esse sint ex excepteur pariatur officia exercitation irure elit. Dolor ex eu culpa sint dolore sit non culpa dolore cillum proident do velit aute. Sit elit ad exercitation laboris et incididunt sunt veniam incididunt pariatur qui.

Ad sit fugiat pariatur aliquip anim eiusmod in non velit Lorem id. Magna ullamco nisi minim velit irure consequat ex officia elit non incididunt dolor adipisicing cupidatat. Ullamco reprehenderit occaecat sint dolor cillum cillum officia duis. Quis laboris voluptate anim occaecat officia do tempor veniam enim laboris sit quis. Do excepteur culpa non irure excepteur.

Ullamco ut sint cupidatat quis ullamco Lorem nulla. Qui sint id fugiat aliqua ut nostrud fugiat laborum veniam cillum magna sunt est. Tempor dolor labore do ipsum ex ipsum dolore magna in nulla consectetur est. Cillum exercitation anim nulla aute exercitation irure mollit sint. Ad fugiat adipisicing in consequat exercitation amet ipsum nulla reprehenderit non. Anim consectetur cillum velit cupidatat sunt fugiat et proident commodo occaecat est nostrud veniam.
            </div>
            <div class="row-4  p-4">
                Cillum veniam aliqua deserunt dolore consectetur qui elit eu. Sunt magna id nisi veniam. Esse ullamco exercitation adipisicing eiusmod ea cillum minim qui veniam sint deserunt sint amet eiusmod. Anim reprehenderit quis in magna sunt commodo anim magna proident irure est anim eiusmod irure. Incididunt in esse nostrud veniam amet dolore cupidatat tempor qui cupidatat.

Ad dolor enim veniam reprehenderit quis qui adipisicing deserunt. Velit et esse culpa Lorem sunt consequat sit commodo. Fugiat veniam ea eiusmod est sint aliquip aliquip consequat est. Incididunt sit tempor enim est et proident cillum labore reprehenderit voluptate.

Nostrud mollit anim id veniam labore aute in dolore eiusmod ex. Quis ipsum est incididunt in officia quis pariatur in sit incididunt ad do sint. Incididunt sint cillum elit ea aute culpa.

Cillum tempor minim do esse ad irure et elit Lorem voluptate veniam proident sunt. Do elit fugiat minim do deserunt ad. Eiusmod sunt esse esse enim labore consectetur nisi adipisicing exercitation esse nulla. Mollit ea quis magna consectetur eiusmod ad. Laborum exercitation ea veniam cillum ipsum.
            </div>
        </div>
<Footer/>
    </div>
    )
}
export default Jobdesc;