import React from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container d-flex justify-content-between"> {/* Use d-flex and justify-content-between to align items */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"> {/* Center align navigation */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/work">Work</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/booking">Booking</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-brand mt-3"> 
            <a href="#" style={{textDecoration:'none'}}><h2>Yaa 💄</h2></a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> 
        </div>
      </nav>
    </header>
    )
}
export default Header