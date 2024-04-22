import React from "react";
import './Work.css'
const Work = () => {
  return (
    <div className="work_hero">

      <h1 className="text-center my-5 title" >Our Work</h1>

    <div className="container">


      <div className="row">
        <div className="col-lg-4 col-md-5 mb-5 video-container">
          <div className="card">
            <video controls width="100%" height="300">
              <source src={require('../../assets/videos/video_1.mp4')} type="video/mp4" />
             
            </video>
            <div className="card-body">
              <h5 className="card-title">Look 1</h5>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 mb-5 video-container">
          <div className="card">
            <video controls width="100%" height="300">
              <source src={require('../../assets/videos/video_2.mp4')} type="video/mp4" />
              
            </video>
            <div className="card-body">
              <h5 className="card-title">Look 2</h5>
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-5 mb-5 video-container">
          <div className="card">
            <video controls width="100%" height="300">
              <source src={require('../../assets/videos/video_3.mp4')} type="video/mp4" />
             
            </video>
            <div className="card-body">
              <h5 className="card-title">Look 3</h5>
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-5 mb-5 video-container">
          <div className="card">
            <video controls width="100%" height="300">
              <source src={require('../../assets/videos/video_4.mp4')} type="video/mp4" />
             
            </video>
            <div className="card-body">
              <h5 className="card-title">Look 4</h5>
            </div>
          </div>
        </div>


        <div className="col-lg-4 col-md-5 mb-5 video-container">
          <div className="card">
            <video controls width="100%" height="300">
              <source src={require('../../assets/videos/video_5.mp4')} type="video/mp4" />
             
            </video>
            <div className="card-body">
              <h5 className="card-title">Look 5</h5>
            </div>
          </div>
        </div>



        <div className="col-lg-4 col-md-5 mb-5 video-container">
          <div className="card">
            <video controls width="100%" height="300">
              <source src={require('../../assets/videos/video_6.mp4')} type="video/mp4" />
             
            </video>
            <div className="card-body">
              <h5 className="card-title">Look 6</h5>
            </div>
          </div>
        </div>




       
      </div>
    </div>
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

    </div>

  );
};

export default Work;
