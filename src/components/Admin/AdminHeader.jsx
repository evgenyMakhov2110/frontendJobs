import React from 'react';

const AdminHeader = ({ activeTab, setActiveTab }) => {
  return (
    <header style={{ borderBottom: '1px solid #ccc', padding: '10px' }}>
      <button onClick={() => setActiveTab('add')} style={{ marginRight: '10px', fontWeight: activeTab === 'add' ? 'bold' : 'normal' }}>
        Добавить вакансию
      </button>
      <button onClick={() => setActiveTab('responses')} style={{ fontWeight: activeTab === 'responses' ? 'bold' : 'normal' }}>
        Отклики
      </button>
    </header>
  );
};

export default AdminHeader;