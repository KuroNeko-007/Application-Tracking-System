import { Link } from "react-router-dom";

function Help(){

    return(
        <div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-3 h3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">ATS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/home" class="nav-link" >Home</Link>
        <Link to="/apply" class="nav-link" >Apply for Job</Link>
        <Link to="/dashboard" class="nav-link"  >Dashboard</Link>
        <Link to="/help" class="nav-link active" aria-current="page" >Help</Link>
      </div>
    </div>
  </div>
    </nav>


    </div>

    )
}
export default Help;