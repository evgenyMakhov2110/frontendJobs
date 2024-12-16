import React from 'react';
import UserVacanciesList from '../components/Users/UserVacanciesList';

const UserPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Список вакансий</h2>
      <UserVacanciesList />
    </div>
  );
};

export default UserPage;
