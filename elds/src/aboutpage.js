import React from 'react';

const AboutPage = () => {
  return (
    <div>
      <header>
        <h1>About Us</h1>
      </header>

      <div className="container">
        <p>
          We are a team of passionate developers and designers who are dedicated to creating innovative and user-friendly web applications.
        </p>

        <h2>Meet the Team</h2>

        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="John Doe" />
          <div>
            <h3>John Doe</h3>
            <p>Co-founder and Lead Developer</p>
          </div>
        </div>

        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Jane Smith" />
          <div>
            <h3>Jane Smith</h3>
            <p>Co-founder and Lead Designer</p>
          </div>
        </div>

        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Bob Johnson" />
          <div>
            <h3>Bob Johnson</h3>
            <p>Senior Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;