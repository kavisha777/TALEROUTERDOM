import React from "react"
import { Link } from "react-router-dom"
// import Home from "../pages/Home"
// import Faq from "../pages/Faq"
// import Contact from "../pages/Contact"
import AboutUs from "../pages/AboutUs";


function Navbar() {
    return (
        <>

  <div className="pre-header" id="top">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-sm-9">
          <div className="left-info">
            <ul>
              <li><a href="#"><i className="fa fa-phone"></i>+000 1234 5678</a></li>
              <li><a href="#"><i className="fa fa-envelope"></i>infocompany@email.com</a></li>
              <li><a href="#"><i className="fa fa-map-marker"></i>St. London 54th Bull</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-sm-3">
          <div className="social-icons">
            <ul>
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              <li><a href="#"><i className="fab fa-google-plus"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    <a href="index.html" className="logo">
                        <img src="src/assets/images/logo.png" alt="" style={{maxWidth: '112px'}}/>
                    </a>
                    <ul className="nav">

                        

                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/faq">FAQs</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        

                    </ul> 
                 {/* <Home/>
                 <AboutUs/>
                 <Faq/>
                 <Contact/> */}
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                </nav>
            </div>
        </div>
    </div>
  </header>

        </>
    )
}

export default Navbar;