'use client';
import { useEffect, useState } from 'react';
import { data } from "@/src/types/main";
import Home from "@/src/pages/Home/Home";
import "../styles/index.css";

const HomePage = () => {
  const [data, setData] = useState<data | null>(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  return (
    <>
      {data ? 
        <Home data={data} /> 
        :
        <div className='h-screen w-screen flex items-center justify-center fixed top-0 left-0 z-50 bg-gray-100 dark:bg-grey-900'>
          <div className='relative bg-white p-8 w-full sm:w-80 md:w-96 lg:w-[22rem] xl:w-[45rem] h-[200px] rounded-lg shadow-lg flex items-center justify-center'>
            <p className='text-lime-900 text-xl animate-pulse'>Loading...</p>
          </div>
        </div>
      }
    </>
  );
}

export default HomePage;
