import React, { useState } from "react";
import './Booking.css'
const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const timingsData = {
    "2024-04-25": ["9:00 AM", "11:00 AM", "2:00 PM"],
    "2024-04-26": ["10:00 AM", "1:00 PM", "3:00 PM"],
    // Add more date-time mappings as needed
  };

  // Dummy function to check if a timing is booked
  const isTimingBooked = (timing) => {
    // Replace this logic with your actual logic to check if the timing is booked
    // For demonstration purposes, we assume some timings are already booked
    return timing === "11:00 AM" || timing === "2:00 PM";
  };

  // Function to handle date selection
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <div className="booking_hero">
      <h1 className="text-center mb-4 mt-4 title ">Pick a suitable date and timing for your booking</h1>

    <div className="container mt-5">
      <div className="  card">
        <div className="col-lg-12 p-3" >
          <center>

          <input
            type="date"
           
            className="form-control mb-3"
           
            onChange={handleDateChange}
          />
          </center>

          {selectedDate && (
            <div className=" col-lg-12 p-3">
              <h2 className="card-header text-center">Timings for {selectedDate}</h2>
              <ul className="list-group list-group-flush">
                {timingsData[selectedDate] ? (
                  timingsData[selectedDate].map((timing, index) => (
                    <li
                      key={index}
                      className={`list-group-item ${
                        isTimingBooked(timing) ? "bg-danger text-white" : "bg-success text-white"
                      }`}
                    >
                      {timing}
                      {isTimingBooked(timing)
                        ? <b className="float-right" style={{color:'white'}}>This time is already booked</b>
                        : <button className="cta_button_book_now float-right" data-toggle="modal" data-target="#exampleModal">Book now</button>}
                    </li>
                  ))
                ) : (
                  <li className="list-group-item">
                    No timings available for selected date
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>


    {/* Modal */}

    <div
  className="modal fade"
  id="exampleModal"
  tabIndex={-1}
  role="dialog"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          Booking
        </h5>
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <div className="modal-body">

      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>


      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Full name</label>
        <input
          type="text"
          className="form-control"
          
          
          placeholder="Enter Full name"
        />
        
      </div>



      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Address</label>
        <input
          type="text"
          className="form-control"
          
          
          placeholder="Enter Address"
        />
        
      </div>


      <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">Service</label>
      <select className="form-control" id="exampleFormControlSelect1">
        <option>Waxing</option>
        <option>Nailing</option>
        <option>Facial</option>
       
      </select>
    </div>


    <div className="form-group">
      <label htmlFor="exampleFormControlTextarea1">Message{'(Optional)'}</label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={3}
        placeholder="write your message.."
      />
    </div>



      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="cta_button_book_now">
          Book
        </button>
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

export default Booking;
