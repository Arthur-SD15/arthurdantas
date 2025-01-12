'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { data } from '@/src/types/main';

interface DataContextProps {
  data: data | null;
}

const DataContext = createContext<DataContextProps>({ data: null });

export const AppDataProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<data | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
