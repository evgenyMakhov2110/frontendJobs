import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get('role'); // "users" или "admin"

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    .then(res => {
      if (!res.ok) throw new Error('Авторизация не удалась');
      return res.json();
    })
    .then(data => {
      // Сохраняем токен
      localStorage.setItem('token', data.token);
      // Перейдём на страницу роли
      if (role === 'users') {
        navigate('/users');
      } else if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    })
    .catch(err => alert(err.message));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Авторизация ({role})</h2>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <label>Логин:</label>
        <input 
          type="text" 
          value={username} 
          onChange={e => setUsername(e.target.value)} 
          required 
        />
        <label>Пароль:</label>
        <input 
          type="password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
