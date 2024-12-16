import React, { useState } from 'react';
import AddVacancyForm from '../components/Admin/AddVacancyForm';
import AdminHeader from '../components/Admin/AdminHeader';
import AdminVacanciesList from '../components/Admin/AdminVacanciesList';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('add'); // 'add' or 'responses'
  
  return (
    <div>
      <AdminHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <main>
        {activeTab === 'add' && <AddVacancyForm />}
        {activeTab === 'responses' && <AdminVacanciesList />}
      </main>
    </div>
  );
};

export default AdminPage;
