import { useState } from "react";
// import LandingPage from "./landig_page";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './homepage';
import AboutPage from './aboutpage';
import ContactPage from './contactpage';
import LoginPage from "./login"; 
import SigninPage from "./signin"; 
import HelpAndSupport from "./help_and_support";
import "./style.css";
import USSDInterface from "./ussd_interface";

function App() {
  const [who_is_the_user, set_who_is_the_user] = useState("");
  // const [signin_up, set_signin_up] = useState("");

  return <>

  <Router>
  <div className="app">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">My App</Link>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="nav-item">
              <Link to="/ussd">USSD interface</Link>
            </li>
            <li className="nav-item">
              <Link to="/help">Help</Link>
            </li>
            <li className="nav-item">
              <Link to="/login">Log in</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </nav>

      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route index="home" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />} />
        <Route path="/signup" element={<SigninPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />} />
        <Route path="/help" element={<HelpAndSupport/>} />
        <Route path="/ussd" element={<USSDInterface/>} />

      </Routes>
    </div>
  </Router>
    </>

  }


export default App;