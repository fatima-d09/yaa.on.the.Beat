import React from 'react'
import {
    BrowserRouter as Router,
    Routes as Switch,
    Route,
    Link
  } from "react-router-dom";
import Landing from './pages/landing';
import Booking from './pages/booking';
import Header from './components/header';
import Work from './pages/work';
const App = ()=>{
  return(
    <Router>
      <Header />

    <Switch>
    
          <Route path="/" element={<Landing />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/work" element={<Work />} />

      </Switch>

    </Router>

  )
}

export default App