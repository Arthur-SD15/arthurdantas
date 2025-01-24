'use client';
import { useMemo } from 'react';
import { useData } from './context/DataContextProvider';
import Socials from '@/src/components/Socials';
import HomePrimarySection from '@/src/components/Section/HomePrimarySection';
import HomeSecondSection from '@/src/components/Section/HomeSecondSection';
import HomeThirdSection from '@/src/components/Section/HomeThirdSection';
import Loading from '@/src/components/Loading/Loading';

const HomePage = () => {
  const { data } = useData()

  const combinedSkills = useMemo(() => [
    ...(data?.skills?.languages || []),
    ...(data?.skills?.webDevelopment || []),
    ...(data?.skills?.backendDevelopment || [])
  ], [data?.skills]);

  return (
    <>
      {data ? (
        <>
          <Socials socials={data.socials.specific} />
          <HomePrimarySection skills={combinedSkills} />
          <HomeSecondSection />
          <HomeThirdSection softSkills={data.skills.softSkills} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default HomePage;
