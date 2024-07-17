// LoginPage.js
import React from 'react';
import LoginForm from './login_form';

const LoginPage = ({ who_is_the_user, handleLogin }) => {
  return (
    <div>
      <LoginForm who_is_the_user={who_is_the_user} handleLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
