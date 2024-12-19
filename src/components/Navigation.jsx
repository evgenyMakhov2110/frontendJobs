import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const token = localStorage.getItem('token');

  let userRole = null;
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userRole = decoded.role;
    } catch (error) {
      console.error('Ошибка декодирования токена', error);
    }
  }

  return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Главная</Link>
      {userRole === 'admin' && <Link to="/admin" style={{ marginRight: '10px' }}>Админ</Link>}
      {userRole === 'users' && <Link to="/users" style={{ marginRight: '10px' }}>Пользователь</Link>}
      {token && <button onClick={handleLogout}>Выйти</button>}
    </nav>
  );
};

export default Navigation;
