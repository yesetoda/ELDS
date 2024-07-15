// Home.js
import React from 'react';

function HomePage() {
  return (
    <div className="home-container">
      <header className="hero">
        <h1 className="hero-title">Welcome to the Ethiopian Longitudinal Education Data System (ELDS)</h1>
        <p className="hero-subtitle">Transforming education in Ethiopia and beyond through comprehensive student data tracking.</p>
        <button className="cta-button">Get Started</button>
      </header>

      <section className="about">
        <h2 className="section-title">About ELDS</h2>
        <p>The ELDS is a comprehensive system designed to track student data from the early stages of their education journey. By recording academic scores, attendance, and school information at each grade level, this platform empowers the Ministry of Education to make informed decisions, allocate resources effectively, and support students throughout their educational path.</p>
      </section>

      <section className="features">
        <h2 className="section-title">Key Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <i className="feature-icon fas fa-users"></i>
            <h3 className="feature-title">Student Tracking</h3>
            <p className="feature-description">Follow each student's progress from enrollment to graduation, enabling early intervention and personalized support.</p>
          </div>
          <div className="feature-card">
            <i className="feature-icon fas fa-chart-line"></i>
            <h3 className="feature-title">Data-Driven Insights</h3>
            <p className="feature-description">Gain comprehensive insights into the education system, informing policy decisions and resource allocation.</p>
          </div>
          <div className="feature-card">
            <i className="feature-icon fas fa-graduation-cap"></i>
            <h3 className="feature-title">Exam Preparation</h3>
            <p className="feature-description">Facilitate timely and effective preparation for national exams, ensuring student success.</p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p className="testimonial-text">"ELDS has been a game-changer for our education system. It's helped us make more informed decisions and better support our students."</p>
            <div className="testimonial-author">
              <img src="profile-image.jpg" alt="Profile" className="testimonial-avatar" />
              <div>
                <h4 className="testimonial-name">Jane Doe</h4>
                <p className="testimonial-title">Ministry of Education Official</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="testimonial-text">"ELDS has been a game-changer for our education system. It's helped us make more informed decisions and better support our students."</p>
            <div className="testimonial-author">
              <img src="profile-image.jpg" alt="Profile" className="testimonial-avatar" />
              <div>
                <h4 className="testimonial-name">John Smith</h4>
                <p className="testimonial-title">School Principal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p className="footer-text">© 2024 Ethiopian Longitudinal Education Data System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;