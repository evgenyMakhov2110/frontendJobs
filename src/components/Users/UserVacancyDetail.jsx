import React, { useContext, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { VacanciesContext } from '../../context/VacanciesContext';

const UserVacancyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { vacancies, setVacancies } = useContext(VacanciesContext);
  const vacancy = vacancies.find(v => v.id === Number(id));

  const [phone, setPhone] = useState('');
  const [tg, setTg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setVacancies(vacancies.map(v => v.id === Number(id) ? {
      ...v,
      responses: [...v.responses, { phone, tg }]
    } : v));

    setPhone('');
    setTg('');
    alert('Отклик отправлен!');
    navigate('/users');
  };

  if (!vacancy) {
    return <div>Вакансия не найдена</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>{vacancy.title}</h2>
      <p>Дата: {vacancy.date}</p>
      <p>Зарплата: {vacancy.salary}</p>
      <p>Описание: {vacancy.description}</p>

      <h3>Откликнуться на вакансию</h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
        <label>Телефон:</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} required />
        <label>Telegram:</label>
        <input value={tg} onChange={e => setTg(e.target.value)} required />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default UserVacancyDetail;
