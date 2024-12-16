import React, { useContext, useState } from 'react';
import { VacanciesContext } from '../../context/VacanciesContext';

const AddVacancyForm = () => {
  const { vacancies, setVacancies } = useContext(VacanciesContext);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [salary, setSalary] = useState('');
  const [description, setDescription] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const newVacancy = {
      id: Date.now(),
      title,
      date,
      salary,
      description,
      responses: []
    };
    setVacancies([...vacancies, newVacancy]);
    setTitle('');
    setDate('');
    setSalary('');
    setDescription('');
  };

  return (
    <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', marginTop: '20px' }}>
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