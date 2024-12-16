import React, { useContext } from 'react';
import { VacanciesContext } from '../../context/VacanciesContext';

const AdminVacanciesList = () => {
  const { vacancies } = useContext(VacanciesContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Отклики на вакансии</h2>
      {vacancies.length === 0 && <p>Нет добавленных вакансий</p>}
      {vacancies.map(v => (
        <div key={v.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{v.title}</h3>
          <p>{v.description}</p>
          <p>Зарплата: {v.salary}</p>
          <h4>Отклики:</h4>
          {v.responses.length === 0 && <p>Пока нет откликов</p>}
          {v.responses.map((r, index) => (
            <div key={index}>
              <p>Телефон: {r.phone}</p>
              <p>Telegram: {r.tg}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminVacanciesList;