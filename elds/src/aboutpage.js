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
            <h3>Yeneineh </h3>
            <p>Lead Developer</p>
          </div>
        </div>

        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Jane Smith" />
          <div>
            <h3>Wondemeneh </h3>
            <p>Lead Designer and Team Leader</p>
          </div>
        </div>

        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Bob Johnson" />
          <div>
            <h3>Dureti </h3>
            <p>Mobile app deveoper</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Bob Johnson" />
          <div>
            <h3>Yohanes </h3>
            <p>React deveoper</p>
          </div>
        </div>
        <div className="team-member">
          <img src="https://via.placeholder.com/150" alt="Bob Johnson" />
          <div>
            <h3>Samuel </h3>
            <p>Backend deveoper</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;