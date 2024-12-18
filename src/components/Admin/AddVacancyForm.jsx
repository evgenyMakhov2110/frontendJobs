import React, { useState } from 'react';

const AddVacancyForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/api/vacancies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, date, salary, description })
    })
      .then(res => res.json())
      .then(() => {
        alert('Вакансия добавлена!');
        setTitle('');
        setDate('');
        setSalary('');
        setDescription('');
      })
      .catch(err => console.error(err));
  };

  return (
    <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
      <label>Название вакансии:</label>
      <input value={title} onChange={e => setTitle(e.target.value)} required />

      <label>Дата публикации:</label>
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />

      <label>Зарплата:</label>
      <input value={salary} onChange={e => setSalary(e.target.value)} required />

      <label>Описание:</label>
      <textarea value={description} onChange={e => setDescription(e.target.value)} required />

      <button type="submit">Добавить</button>
    </form>
  );
};

export default AddVacancyForm;
