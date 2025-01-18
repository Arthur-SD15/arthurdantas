'use client';
import { useData } from './context/DataContextProvider';
import Loading from '@/src/components/Loading/Loading';
import Home from './home/page';

const HomePage = () => {
  const { data } = useData();

  return (
    <>
      {data ? (
        <Home data={data} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HomePage;
