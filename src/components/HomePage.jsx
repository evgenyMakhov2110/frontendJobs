import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (role) => {
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="home-container" style={{ padding: '20px' }}>
      <h1>Добро пожаловать в наше приложение</h1>
      <div className="btn-group" style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => handleNavigate('admin')}>Administrator</button>
        <button onClick={() => handleNavigate('users')}>Users</button>
      </div>
    </div>
  );
};

export default HomePage;

