import React, { useEffect, useState } from 'react';

const AdminVacanciesList = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/vacancies`)
      .then(res => res.json())
      .then(data => setVacancies(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Отклики на вакансии</h2>
      {vacancies.length === 0 && <p>Нет добавленных вакансий</p>}
      {vacancies.map(v => (
        <div key={v.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{v.title}</h3>
          <p>Зарплата: {v.salary}</p>
          <p>Описание: {v.description}</p>
          <h4>Отклики:</h4>
          {v.responses.length === 0 && <p>Пока нет откликов</p>}
          {v.responses.map((r, index) => (
            <div key={index}>
              <p>Телефон: {r.phone}</p>
              <p>Telegram: {r.telegram}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminVacanciesList;
