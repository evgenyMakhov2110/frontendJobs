import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserPage = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/vacancies`)
      .then(res => res.json())
      .then(data => setVacancies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Список вакансий</h2>
      {vacancies.length === 0 && <p>Нет доступных вакансий</p>}
      {vacancies.map(v => (
        <div key={v.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
          <h3>{v.title}</h3>
          <p>{v.description}</p>
          <Link to={`/users/vacancy/${v.id}`}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
};

export default UserPage;

