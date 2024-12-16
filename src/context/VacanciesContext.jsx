import React, { createContext, useState } from 'react';

export const VacanciesContext = createContext();

export const VacanciesProvider = ({ children }) => {
  const [vacancies, setVacancies] = useState([]);

  return (
    <VacanciesContext.Provider value={{ vacancies, setVacancies }}>
      {children}
    </VacanciesContext.Provider>
  );
};
