// RoleSelection.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelection = ({ setRole }) => {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    setRole(role);
    navigate(`/${role.toLowerCase()}-login`);
  };

  return (
    <div>
      <h2>Select Your Role</h2>
      <button onClick={() => handleSelect('Student')}>Student</button>
      <button onClick={() => handleSelect('Teacher')}>Teacher</button>
      <button onClick={() => handleSelect('Parent')}>Parent</button>
      <button onClick={() => handleSelect('Admin')}>Admin</button>
      <button onClick={() => handleSelect('School')}>School</button>
    </div>
  );
};

export default RoleSelection;
