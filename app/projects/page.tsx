'use client';
import { useData } from '../context/DataContextProvider';
import Socials from '@/src/components/Socials';
import Loading from '@/src/components/Loading/Loading';
import ProjectsPrimarySection from '@/src/components/Section/ProjectsPrimarySection';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { i18n } = useTranslation();
  const { data } = useData();

  const dataLanguage = i18n.language === "pt" ? 'pt' : 'en';

  return (
    <>
      {data ? (
        <>
            <Socials socials={data.socials.specific} />
            <ProjectsPrimarySection projects={data?.projects[dataLanguage || []]} />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Projects;
