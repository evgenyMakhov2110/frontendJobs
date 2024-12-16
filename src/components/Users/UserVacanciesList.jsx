import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VacanciesContext } from '../../context/VacanciesContext';

const UserVacanciesList = () => {
  const { vacancies } = useContext(VacanciesContext);

  if (vacancies.length === 0) {
    return <p>Нет доступных вакансий</p>;
  }

  return (
    <div>
      {vacancies.map(v => (
        <div key={v.id} style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <h3>{v.title}</h3>
          <p>{v.description}</p>
          <Link to={`/users/vacancy/${v.id}`} style={{ color: 'blue' }}>Подробнее</Link>
        </div>
      ))}
    </div>
  );
};

export default UserVacanciesList;
