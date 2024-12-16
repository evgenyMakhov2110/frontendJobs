// src/components/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './styles.css'; // Предполагаем, что стили подключаются отсюда

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Выберите роль</h1>
      <div className="btn-group">
        <button onClick={() => navigate('/admin')}>Administrator</button>
        <button onClick={() => navigate('/users')}>Users</button>
      </div>
    </div>
  );
};

export default HomePage;
