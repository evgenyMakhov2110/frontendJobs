import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ borderBottom: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Главная</Link>
      <Link to="/admin" style={{ marginRight: '10px' }}>Админ</Link>
      <Link to="/users">Пользователи</Link>
    </nav>
  );
};

export default Navigation;