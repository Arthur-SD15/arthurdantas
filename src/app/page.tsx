'use client';
import { useEffect, useState } from 'react';
import { FaNodeJs } from "react-icons/fa"
import { data } from "@/types/main";
import Home from "@/pages/Home/Home";
import "../styles/index.css";

interface Props {
  initialData: data;
}

const HomePage = ({ initialData }: Props) => {
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
        <div className='h-screen w-screen flex flex-col items-center justify-center gap-5 text-violet-600 fixed z-30 bg-gray-100 dark:bg-grey-900'>
          {/*<FaNodeJs size={100} className='animate-pulse' />*/}
          {/*<p className='animate-pulse text-xl'>Loading...</p>*/}
        </div>
      }
    </>
  );
}

export default HomePage;
