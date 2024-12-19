import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Navigation from './components/Navigation';
import PrivateRoute from './components/PrivateRoute';
import UserVacancyDetail from './components/Users/UserVacancyDetail';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/admin" element={
          <PrivateRoute requiredRole="admin">
            <AdminPage />
          </PrivateRoute>
        } />

        <Route path="/users" element={
          <PrivateRoute requiredRole="users">
            <UserPage />
          </PrivateRoute>
        } />

        <Route path="/users/vacancy/:id" element={
          <PrivateRoute requiredRole="users">
            <UserVacancyDetail />
          </PrivateRoute>
        } />
      </Routes>
    </>
  );
}

export default App;


