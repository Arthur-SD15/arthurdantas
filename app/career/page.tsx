'use client';
import { memo } from 'react';
import { useData } from '../context/DataContextProvider';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';
import Loading from '@/src/components/Loading/Loading';

const Socials = dynamic(() => import('@/src/components/Socials'));
const CareerPrimarySection = dynamic(() => import('@/src/components/Section/CareerPrimarySection'));
const CareerSecondSecion = dynamic(() => import('@/src/components/Section/CareerSecondSection'));

const Career = memo(() => {
    const { i18n } = useTranslation();
    const { data } = useData();

    const dataLanguage = i18n.language === "pt" ? 'pt' : 'en';

    return (
        <>  
            {data ? (
                <>
                    <Socials socials={data?.socials.specific || []} />
                    <CareerPrimarySection />
                    <CareerSecondSecion experienceData={data?.experience[dataLanguage] || []} educationData={data?.education[dataLanguage] || []} />
                </>
            ) : (
                <Loading />
            )}
        </>
    );
});

export default Career;
