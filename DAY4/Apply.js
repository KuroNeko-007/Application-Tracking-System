import { Link } from "react-router-dom";
import "../Asserts/Pages.css"

function Apply(){

    return(
        <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-* fixed-top py-3 h3 shadow">
  <div class="container-fluid">
    <Link to="/home" class="navbar-brand navbar-link " >ATS</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/home" class="nav-link" aria-current="page">Home</Link>
        <Link to="/apply" class="nav-link active" aria-current="page">Apply for Job</Link>
        <Link to="/dashboard" class="nav-link">Dashboard</Link>
        <Link to="/help" class="nav-link">Help</Link>
        
    </div>
  </div>
  </div>
    </nav>
    
        </div>

    )
}
export default Apply;