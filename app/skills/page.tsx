'use client';
import { useData } from '../context/DataContextProvider';
import Socials from '@/src/components/Socials';
import SkillsPrimarySection from '@/src/components/Section/SkillsPrimarySection';
import SkillsSecontSection from '@/src/components/Section/SkillsSecondSection';
import Loading from '@/src/components/Loading/Loading';

const Skills = () => {
  const { data } = useData()

  return (
    <>
      {data ? (
        <>
            <Socials socials={data.socials.specific} />
            <SkillsPrimarySection />
            <SkillsSecontSection 
                webDevelopment={data.skills.webDevelopment} 
                backendDevelopment={data.skills.backendDevelopment} 
                languages={data.skills.languages} 
                devOps={data.skills.devOps} 
                tools={data.skills.tools}
            />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Skills;
