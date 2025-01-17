'use client';
import { useData } from './context/DataContextProvider';

import Home from './home/page';

const HomePage = () => {
  const { data } = useData();

  return (
    <>
      {data ? (
        <Home data={data} />
      ) : (
        <>
        </>
      )}
    </>
  );
};

export default HomePage;
