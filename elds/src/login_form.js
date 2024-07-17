
// // LoginForm.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AuthenticateUser from './login_auth';

// const LoginForm = ({ who_is_the_user }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const isValidUser = await AuthenticateUser(who_is_the_user, email, password);

//     if (isValidUser) {
//       console.log(email,"is a valid user");
//       navigate('profile');
//     } else {
//       console.log("Invalid user");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1 style={{ textAlign: 'center' }}>{who_is_the_user} Login</h1>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;


// LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticateUser from './login_auth';

const LoginForm = ({ who_is_the_user }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValidUser = await AuthenticateUser(who_is_the_user, email, password);

    if (isValidUser) {
      console.log(email, "is a valid user");
      navigate('/profile');
    } else {
      console.log("Invalid user");
      navigate('/invalid-user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 style={{ textAlign: 'center' }}>{who_is_the_user} Login</h1>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
