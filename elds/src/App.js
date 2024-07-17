// import { useState } from "react";
// // import LandingPage from "./landig_page";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HomePage from './homepage';
// import AboutPage from './aboutpage';
// import ContactPage from './contactpage';
// import LoginPage from "./login"; 
// import SigninPage from "./signin"; 
// import HelpAndSupport from "./help_and_support";
// import "./style.css";
// // import "./App.css"
// import USSDInterface from "./ussd_interface";
// import CaledarEvent from "./calendar_events_handler";
// import AddEvents from "./add_events_to_calendar";
// import ViewEvents from "./view_events_in_calendar";
// import LoginForm from './login_form';
// import ProfilePage from './validUserPage';
// import InvalidUserPage from './InvalidUserPage';
// function App() {
//   const [who_is_the_user, set_who_is_the_user] = useState("");
//   // const [signin_up, set_signin_up] = useState("");

//   return <>

//   <Router>
//   <div className="app">
//         <nav className="navbar">
//           <div className="navbar-brand">
//             <Link to="/">My App</Link>
//           </div>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link to="/">Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/about">About</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/contact">Contact</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/ussd">USSD interface</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/help">Help</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/login">Log in</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/signup">Sign up</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/events">Events</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* <Routes>
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route index="home" element={<HomePage />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />}>
//             <Route path="proile" element={<ProfilePage />} />
//             <Route path="invaliduser" element={<AddEvents />} />
//           </Route>
//           <Route path="/valid-user" element={<ProfilePage />} />
//           <Route path="/invalid-user" element={<InvalidUserPage />} />
//           <Route path="/signup" element={<SigninPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />} />
//           <Route path="/help" element={<HelpAndSupport />} />
//           <Route path="/ussd" element={<USSDInterface />} />
//           <Route path="/events" element={<CaledarEvent />}>
//             <Route path="viewEvents" element={<ViewEvents />} />
//             <Route path="addEvents" element={<AddEvents />} />
//           </Route>
//         </Routes> */}
//         <Routes>
//   <Route path="/about" element={<AboutPage />} />
//   <Route path="/contact" element={<ContactPage />} />
//   <Route index path="/" element={<HomePage />} />
//   <Route path="/home" element={<HomePage />} />
//   <Route path="/login" element={<LoginPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />}>
//     <Route path="profile" element={<ProfilePage who_is_the_user={who_is_the_user} />} />
//     <Route path="invaliduser" element={<AddEvents />} />
//   </Route>
//   <Route path="/valid-user" element={<ProfilePage />} />
//   <Route path="/invalid-user" element={<InvalidUserPage />} />
//   <Route path="/signup" element={<SigninPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />} />
//   <Route path="/help" element={<HelpAndSupport />} />
//   <Route path="/ussd" element={<USSDInterface />} />
//   <Route path="/events" element={<CaledarEvent />}>
//     <Route path="viewEvents" element={<ViewEvents />} />
//     <Route path="addEvents" element={<AddEvents />} />
//   </Route>
// </Routes>
//     </div>
//   </Router>
//     </>

//   }


// export default App;

// App.js
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './homepage';
import AboutPage from './aboutpage';
import ContactPage from './contactpage';
import LoginPage from "./login";
import SigninPage from "./signin";
import HelpAndSupport from "./help_and_support";
import "./style.css";
import USSDInterface from "./ussd_interface";
import CaledarEvent from "./calendar_events_handler";
import AddEvents from "./add_events_to_calendar";
import ViewEvents from "./view_events_in_calendar";
import LoginForm from './login_form';
import ProfilePage from './validUserPage';
import InvalidUserPage from './InvalidUserPage';

function App() {
  const [who_is_the_user, set_who_is_the_user] = useState("");

  return (
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
            <li className="nav-item">
              <Link to="/events">Events</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route index path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />} />
          <Route path="/profile" element={<ProfilePage who_is_the_user={who_is_the_user} />} />
          <Route path="/invalid-user" element={<InvalidUserPage />} />
          <Route path="/signup" element={<SigninPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />} />
          <Route path="/help" element={<HelpAndSupport />} />
          <Route path="/ussd" element={<USSDInterface />} />
          <Route path="/events" element={<CaledarEvent />}>
            <Route path="viewEvents" element={<ViewEvents />} />
            <Route path="addEvents" element={<AddEvents />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
