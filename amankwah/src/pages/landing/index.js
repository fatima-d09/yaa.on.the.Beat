import React from "react";
import { Link } from "react-router-dom";



const Landing = ()=>{
    return(
        <div id="main">
  <main>
    <section className="hero">
      <p className="yaa-text mt-5">
        Yaa on the <br />
      
        Beat
      </p>
      
      <img
        src={require("../../assets/images/Screenshot_2024-04-17_at_07.57.25-removebg-preview.png")}
        alt="Flower"
        className="flower top-left"
      />
      {/* Top-left flower */}
      <img
        src={require("../../assets/images/Screenshot_2024-04-17_at_07.57.25-removebg-preview.png")}
        alt="Flower"
        className="flower top-right"
      />
      {/* Top-right flower */}
      <img
        src={require("../../assets/images/Screenshot_2024-04-17_at_07.57.25-removebg-preview.png")}
        alt="Flower"
        className="flower bottom-left"
      />
      {/* Bottom-left flower */}
      <img
        src={require("../../assets/images/Screenshot_2024-04-17_at_07.57.25-removebg-preview.png")}
        alt="Flower"
        className="flower bottom-right"
      />
      {/* Bottom-right flower */}
      <img
        src={require('../../assets/images/Screenshot_2024-04-17_at_03.03.35-removebg-preview.png')}
        alt="Centerpiece Image"
        className="center-piece"
      />
     
      

      <Link to="/booking" style={{textDecoration:'none'}} className="cta-button" >
        Book an Appointment
      </Link>

      <br />
      <footer>
    
    <center>
      <a href="https://www.instagram.com/yaaonthebeat/" style={{marginBottom:20}}>
        <img
          width={49}
          height={49}
          src="https://img.icons8.com/3d-plastilina/69/instagram-new--v1.png"
          alt="instagram-new--v1"
          className="ig"
        />
      </a>
    </center>
  </footer>
  <br />
      
    </section>
  </main>
  
</div>

    )
}
export default Landing