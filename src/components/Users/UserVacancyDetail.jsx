import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UserVacancyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vacancy, setVacancy] = useState(null);
  const [phone, setPhone] = useState('');
  const [tg, setTg] = useState('');

  useEffect(() => {
    // Загружаем все вакансии и находим нужную по id
    fetch(`${process.env.REACT_APP_API_URL}/api/vacancies`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(v => v.id === Number(id));
        setVacancy(found);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/api/vacancies/${id}/apply`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, telegram: tg })
    })
      .then(res => res.json())
      .then(() => {
        alert('Отклик отправлен!');
        navigate('/users');
      })
      .catch(err => console.error(err));
  };

  if (!vacancy) return <div style={{ padding: '20px' }}>Загрузка...</div>;

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
