import React from 'react';
import AddVacancyForm from '../components/Admin/AddVacancyForm';
import AdminVacanciesList from '../components/Admin/AdminVacanciesList';

const AdminPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Административная панель</h2>
      <AddVacancyForm />
      <AdminVacanciesList />
    </div>
  );
};

export default AdminPage;

