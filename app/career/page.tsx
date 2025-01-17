'use client';
import { useEffect, useState } from 'react';
import { useData } from '../context/DataContextProvider';
import Socials from '@/src/components/Socials';
import CareerPrimarySection from "@/src/components/Section/CareerPrimarySection";

const Career = () => {
    const { data } = useData();
    const [isClient, setIsClient] = useState(false);

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
        </>
    );
}

export default Career;
