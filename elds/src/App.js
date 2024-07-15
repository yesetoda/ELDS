import { useState } from "react";
import LandingPage from "./landig_page";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './homepage';
import AboutPage from './aboutpage';
import ContactPage from './contactpage';
import GetRegistration from "./get_student_registration";
import "./style.css";

function App() {
  const [who_is_the_user, set_who_is_the_user] = useState("Student");
  const [signin_up, set_signin_up] = useState("");

  return <>

  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route index="home" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </div>
  </Router>
  {/* <LandingPage
    who_is_the_user={who_is_the_user}
    set_who_is_the_user={set_who_is_the_user}
    signin_up={signin_up}
    set_signin_up={set_signin_up}
    /> */}
  <h1>hello</h1>
  <GetRegistration who_is_the_user={who_is_the_user}
  this is the reg
  ></GetRegistration>
    </>

  }


export default App;