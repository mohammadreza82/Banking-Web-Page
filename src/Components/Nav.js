import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import logo from '../images/Logo.png'

import { Link } from "react-router-dom"
const Nav = () => {
    return (
    <nav class="navbar navbar-expand-md navbar-light"> 
        <div class="container-xxl">
            <a class="navbar-brand  "role="button">
                <span class="fw-bold text-dark"><img src={logo} width={50}/>
                 JamshidiStyle Codding
                </span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav"
                aria-controls="main-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-end align-center" id="main-nav">
                <ul class="navbar-nav">
                    <li class="nav-item"><Link to='/Home'  class="nav-link text-dark">Home</Link></li>
                    <li class="nav-item"><a href="#pricing"  class="nav-link text-dark">pricing</a></li>
                    <li class="nav-item"><a href="#reviews"  class="nav-link text-dark">reviews</a></li>
                    <li class="nav-item"><Link to='/TransActions'  class="nav-link text-dark">TransAction</Link></li>
                    <li class="nav-item"><Link to='/Trade'  class="nav-link text-dark">Trade</Link></li>
                    {/* <li class="nav-item"><Link  class="nav-link text-black">Get in touch</Link></li>
                    <li class="nav-item d-md-none"><a href="#pricing" class="nav-link text-black">pricing</a></li> */}
                    <li class="nav-item ms-2 d-none d-md-inline"><Link to='/' class="btn btn-primary text-light">LogOut</Link></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Nav;