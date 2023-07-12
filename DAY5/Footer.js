import { Link } from "react-router-dom";
function Footer(){


    return(

        <footer class="footer">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 text-center">
            <div class="footer-site-logo mb-4">
              <Link class="reset" to="#">Application Tracking System</Link>
            </div>
            <ul class="list-unstyled mb-5">
              <li class="d-inline-block m-2"><Link class="reset"  to="#">About</Link></li>
              <li class="d-inline-block m-2" ><Link class="reset" to="#">Services</Link></li>
              <li class="d-inline-block m-2"><Link class="reset" to="#">Press</Link></li>
              <li class="d-inline-block m-2"><Link class="reset" to="#">Careers</Link></li>
              <li class="d-inline-block m-2"><Link class="reset" to="#">FAQ</Link></li>
              <li class="d-inline-block m-2" ><Link class="reset" to="#">Legal</Link></li>
              <li class="d-inline-block m-2"><Link class="reset" to="#">Contact</Link></li>
            </ul>

            <div class="social mb-4">
              <h3>Stay in touch</h3>
              <ul class="list-unstyled">
                <li class="in"><Link  to="#"><span class="icon-instagram"></span></Link></li>
                <li class="fb"><Link class="reset" to="#"><span class="icon-facebook"></span></Link></li>
                <li class="tw"><Link class="reset" to="#"><span class="icon-twitter"></span></Link></li>
                <li class="pin"><Link class="reset" to="#"><span class="icon-pinterest"></span></Link></li>
                <li class="dr"><Link class="reset" to="#"><span class="icon-dribbble"></span></Link></li>
              </ul>
            </div>

            


          </div>
        </div>
      </div>
    </footer>


    )


}

export default  Footer;