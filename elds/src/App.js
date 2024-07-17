// // // App.js
// // import { useState } from "react";
// // import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// // import HomePage from './homepage';
// // import AboutPage from './aboutpage';
// // import ContactPage from './contactpage';
// // import LoginPage from "./login";
// // import SigninPage from "./signin";
// // import HelpAndSupport from "./help_and_support";
// // import "./style.css";
// // import USSDInterface from "./ussd_interface";
// // import CaledarEvent from "./calendar_events_handler";
// // import AddEvents from "./add_events_to_calendar";
// // import ViewEvents from "./view_events_in_calendar";
// // import LoginForm from './login_form';
// // import ProfilePage from './validUserPage';
// // import InvalidUserPage from './InvalidUserPage';

// // function App() {
// //   const [who_is_the_user, set_who_is_the_user] = useState("");

// //   return (
// //     <Router>
// //       <div className="app">
// //         <nav className="navbar">
// //           <div className="navbar-brand">
// //             <Link to="/">My App</Link>
// //           </div>
// //           <ul className="navbar-nav">
// //             <li className="nav-item">
// //               <Link to="/">Home</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/about">About</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/contact">Contact</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/ussd">USSD interface</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/help">Help</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/login">Log in</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/signup">Sign up</Link>
// //             </li>
// //             <li className="nav-item">
// //               <Link to="/events">Events</Link>
// //             </li>
// //           </ul>
// //         </nav>

// //         <Routes>
// //           <Route path="/about" element={<AboutPage />} />
// //           <Route path="/contact" element={<ContactPage />} />
// //           <Route index path="/" element={<HomePage />} />
// //           <Route path="/home" element={<HomePage />} />
// //           <Route path="/login" element={<LoginPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />} />
// //           <Route path="/profile" element={<ProfilePage who_is_the_user={who_is_the_user} />} />
// //           <Route path="/invalid-user" element={<InvalidUserPage />} />
// //           <Route path="/signup" element={<SigninPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />} />
// //           <Route path="/help" element={<HelpAndSupport />} />
// //           <Route path="/ussd" element={<USSDInterface />} />
// //           <Route path="/events" element={<CaledarEvent />}>
// //             <Route path="viewEvents" element={<ViewEvents />} />
// //             <Route path="addEvents" element={<AddEvents />} />
// //           </Route>
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;
// import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HomePage from './homepage';
// import AboutPage from './aboutpage';
// import ContactPage from './contactpage';
// import LoginPage from "./login";
// import SigninPage from "./signin";
// import HelpAndSupport from "./help_and_support";
// import "./style.css";
// import USSDInterface from "./ussd_interface";
// import CaledarEvent from "./calendar_events_handler";
// import AddEvents from "./add_events_to_calendar";
// import ViewEvents from "./view_events_in_calendar";
// import LoginForm from './login_form';
// import ProfilePage from './validUserPage';
// import InvalidUserPage from './InvalidUserPage';

// function App() {
//   const [who_is_the_user, set_who_is_the_user] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     set_who_is_the_user("");
//   };

//   return (
//     <Router>
//       <div className="app">
//         <nav className="navbar">
//           <div className="navbar-brand">
//             <Link to="/">My App</Link>
//           </div>
//           <ul className="navbar-nav">
//             {isAuthenticated ? (
//               <>
//                 <li className="nav-item">
//                   <Link to="/profile">Profile</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/events">Events</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/academic-history">Academic History</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/resources">Resources</Link>
//                 </li>
//                 <li className="nav-item">
//                   <button onClick={handleLogout}>Logout</button>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link to="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/about">About</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/contact">Contact</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/help">Help</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/login">Log in</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/signup">Sign up</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route index path="/" element={<HomePage />} />
//           <Route path="/home" element={<HomePage />} />
//           <Route path="/login" element={<LoginPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} handleLogin={handleLogin} />} />
//           <Route path="/profile" element={<ProfilePage who_is_the_user={who_is_the_user} />} />
//           <Route path="/invalid-user" element={<InvalidUserPage />} />
//           <Route path="/signup" element={<SigninPage who_is_the_user={who_is_the_user} set_who_is_the_user={set_who_is_the_user} />} />
//           <Route path="/help" element={<HelpAndSupport />} />
//           <Route path="/ussd" element={<USSDInterface />} />
//           <Route path="/events" element={<CaledarEvent />}>
//             <Route path="viewEvents" element={<ViewEvents />} />
//             <Route path="addEvents" element={<AddEvents />} />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// App.js
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './homepage';
import AboutPage from './aboutpage';
import ContactPage from './contactpage';
import LoginPage from "./Login";
import SigninPage from "./signin";
import HelpAndSupport from "./help_and_support";
import "./style.css";
import USSDInterface from "./ussd_interface";
import CaledarEvent from "./calendar_events_handler";
import AddEvents from "./add_events_to_calendar";
import ViewEvents from "./view_events_in_calendar";
import ProfilePage from './validUserPage';
import InvalidUserPage from './InvalidUserPage';
import RoleSelection from './RoleSelection';
import RegistrationForm from "./registration_form";

function App() {
  const [who_is_the_user, set_who_is_the_user] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="navbar-brand">
            <Link to="/">My App</Link>
          </div>
          <ul className="navbar-nav">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link to="/profile">Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to="/events">Events</Link>
                </li>
                <li className="nav-item">
                  <Link to="/academic-history">Academic History</Link>
                </li>
                <li className="nav-item">
                  <Link to="/resources">Resources</Link>
                </li>
                <li className="nav-item">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
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
                  <Link to="/help">Help</Link>
                </li>
                <li className="nav-item">
                  <Link to="/role-selection-login">Log in</Link>
                </li>
                <li className="nav-item">
                  <Link to="/role-selection-signup">Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route index path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/role-selection-login" element={<RoleSelection setRole={set_who_is_the_user} type ="login" />} />
          <Route path="/role-selection-signup" element={<RoleSelection setRole={set_who_is_the_user} type ="signup"/>} />
          <Route path="/student-login" element={<LoginPage who_is_the_user="Student" handleLogin={handleLogin} />} />
          <Route path="/teacher-login" element={<LoginPage who_is_the_user="Teacher" handleLogin={handleLogin} />} />
          <Route path="/parent-login" element={<LoginPage who_is_the_user="Parent" handleLogin={handleLogin} />} />
          <Route path="/admin-login" element={<LoginPage who_is_the_user="Admin" handleLogin={handleLogin} />} />
          <Route path="/school-login" element={<LoginPage who_is_the_user="School" handleLogin={handleLogin} />} />
          <Route path="/student-signup" element={<RegistrationForm who_is_the_user="Student" />} />
          <Route path="/teacher-signup" element={<RegistrationForm who_is_the_user="Teacher" />} />
          <Route path="/parent-signup" element={<RegistrationForm who_is_the_user="Parent" />} />
          <Route path="/admin-signup" element={<RegistrationForm who_is_the_user="Admin" />} />
          <Route path="/school-signup" element={<RegistrationForm who_is_the_user="School" />} />
          <Route path="/profile" element={<ProfilePage who_is_the_user={who_is_the_user} />} />
          <Route path="/invalid-user" element={<InvalidUserPage />} />
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
