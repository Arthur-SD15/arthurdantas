'use client';
import { useEffect, useState, memo } from 'react';
import { useData } from '../context/DataContextProvider';
import { useTranslation } from 'react-i18next';
import Socials from '@/src/components/Socials';
import CareerPrimarySection from '@/src/components/Section/CareerPrimarySection';
import CareerSecondSecion from '@/src/components/Section/CareerSecondSection';
import Loading from '@/src/components/Loading/Loading';

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
