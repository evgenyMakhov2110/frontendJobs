import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Нет токена, перенаправляем на страницу логина с указанием роли
    return <Navigate to={`/login?role=${requiredRole}`} />;
  }

  try {
    const decoded = jwtDecode(token);
    const userRole = decoded.role;

    if (userRole !== requiredRole) {
      // Роль не соответствует, перенаправляем на страницу логина с нужной ролью
      return <Navigate to={`/login?role=${requiredRole}`} />;
    }

    return children;
  } catch (error) {
    // Если токен некорректный, перенаправляем на логин
    return <Navigate to={`/login?role=${requiredRole}`} />;
  }
};

export default PrivateRoute;
