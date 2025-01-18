'use client';
import { useEffect, useState } from 'react';
import { useData } from '../context/DataContextProvider';
import { useTranslation } from 'react-i18next';
import Socials from '@/src/components/Socials';
import CareerPrimarySection from '@/src/components/Section/CareerPrimarySection';
import CareerSecondSecion from '@/src/components/Section/CareerSecondSection';

const Career = () => {
    const { i18n } = useTranslation();
    const { data } = useData();
    const [isClient, setIsClient] = useState(false);

    const dataLanguage = i18n.language === "pt" ? 'pt' : 'en';

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <>  
            <Socials socials={data?.socials.specific || []} />
            <CareerPrimarySection />
            <CareerSecondSecion experienceData={data?.experience[dataLanguage] || []} educationData={data?.education[dataLanguage] || []} />
        </>
    );
}

export default Career;
