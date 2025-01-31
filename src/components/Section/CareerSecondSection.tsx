import { experience, education } from "@/src/types/main"
import { memo, useState, useMemo, useCallback } from "react";
import { useTranslation } from 'next-i18next';
import dynamic from "next/dynamic";

const ExperienceCard = dynamic(() => import('../ExperienceCard'), { ssr: false });

interface Props {
    experienceData: experience[];
    educationData: education[];
}

const CareerSecondSecion = memo(({ experienceData, educationData }: Props) => {
    const { t } = useTranslation("common");
    const [show, setShow] = useState("Experience");

    const experiences = useMemo(() => [...experienceData], [experienceData]);
    const educations = useMemo(() => [...educationData], [educationData]);

    const itemsToShow = useMemo(() => (show === "Experience" ? experiences : educations), [show, experiences, educations]);

    const handleTabChange = useCallback((tab: string) => {
        setShow(tab);
    }, []);

    return (
        <div className="animate-rise-from-ground">
            <div className="w-fit mx-auto mt-8 p-2 rounded-md flex gap-2 items-center bg-white dark:bg-[#1F1F1F80] shadow-md">
                {['Experience', 'Education'].map((e, i) => (
                    <button
                        key={i}
                        onClick={() => handleTabChange(e)}
                        className={`py-2 px-4 rounded-md transition-colors text-sm font-medium focus:outline-none focus:ring-0 
                          ${show === e ? 'bg-lime-900 text-white shadow-lg' : 'bg-transparent hover:bg-lime-100 dark:hover:bg-lime-600 text-gray-800 dark:text-gray-200'}`}
                    >
                        {t(e)}
                    </button>
                ))}
            </div>
            <div className="lg:container sm:mx-4 lg:mx-auto lg:w-5/6 2xl:w-2/3">
                <div className="relative wrap overflow-hidden p-4 md:py-10 md:px-0">
                    <div className="left-6 md:left-1/2 absolute border-opacity-40 border-gray-300 dark:border-gray-600 h-full border"></div>
                    {itemsToShow.map((e, i) => (
                        // @ts-ignore
                        <ExperienceCard key={i} {...e} index={i} />
                    ))}
                </div>
            </div>
        </div>
    );
});

export default CareerSecondSecion;
