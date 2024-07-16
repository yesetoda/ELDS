// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import ViewEvents from './view_events_in_calendar';
// import AddEvents from './add_events_to_calendar';

// function CaledarEvent() {
//   return <>
  
//   <Router>
//   <div className="app">
//         <nav className="navbar">
//           <div className="navbar-brand">
//             <Link to="/">calendar events</Link>
//           </div>
//           <ul className="navbar-nav">
            
//             <li className="nav-item">
//               <Link to="/viewEvents">View Events</Link>
//             </li>
//             <li className="nav-item">
//               <Link to="/addEvents">Add Events</Link>
//             </li>
//           </ul>
//         </nav>

//       <Routes>
//         <Route path="/viewEvents" element={<ViewEvents/>} />
//         <Route path="/addEvents" element={<AddEvents/>} />
//       </Routes>
//     </div>
//   </Router>
//   </>
// }
// export default CaledarEvent;


import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function CaledarEvent() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/events">Calendar Events</Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="viewEvents">View Events</Link>
          </li>
          <li className="nav-item">
            <Link to="addEvents">Add Events</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default CaledarEvent;
