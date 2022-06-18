import React from 'react';
import './App.css';
import Header from './Components/header'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'



function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Navbar />
      <br />
      <Banner /> 
      <br />
      <About />
      <br />
      <hr />
      <h1 className="skillheader">My Daily Bases</h1>
      <Portfolio />
      <hr />
      <h1 id="contactnav" className="contact">Contact Information</h1>
      <Contact />

    </div>
  );
}

export default App;
