import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import UserVacancyDetail from './components/Users/UserVacancyDetail';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/users/vacancy/:id" element={<UserVacancyDetail />} />
      </Routes>
    </>
  );
}

export default App;

