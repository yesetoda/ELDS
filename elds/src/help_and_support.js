import React from 'react';
import './help_and_support.css';

function HelpAndSupport() {
  return (
    <div className="help-and-support">
      <header>
        <h1>Help and Support</h1>
      </header>
      <nav>
        <a href="#">Home</a>
        <a href="#">FAQ</a>
        <a href="#">Contact Us</a>
      </nav>
      <main>
        <section>
          <h2>Frequently Asked Questions</h2>
          <p>
            Browse our frequently asked questions to find answers to common questions.
          </p>
          {/* Add more FAQ content here */}
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>
            If you can't find the answer you're looking for, feel free to reach out to our support team.
          </p>
          {/* Add contact form or contact information here */}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Help and Support</p>
      </footer>
    </div>
  );
}

export default HelpAndSupport;