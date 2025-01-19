'use client';
import { useTranslation } from 'next-i18next';
import HomeThirdImage from '../Images/HomeThirdImage';

interface HomeThirdSectionProps {
    softSkills: {
        en: { name: string; special: boolean }[];
        pt: { name: string; special: boolean }[];
    };
}

const HomeThirdSection = ({ softSkills }: HomeThirdSectionProps) => {
    const { t, i18n } = useTranslation('common');

    const filterSoftSkills = i18n.language === 'pt' 
        ? softSkills.pt.filter(skill => skill.special) 
        : softSkills.en.filter(skill => skill.special);

    return (
        <div className="animate-rise-from-ground">
            <div className="w-10/12 mx-auto py-3 flex flex-col md:flex-col lg:flex-row items-center justify-between h-[100vh] custom-vh-height dark:bg-grey-900 section-responsiveness">
                <div className="w-full md:w-full lg:w-1/2 h-1/2 md:h-full flex items-center justify-start">
                    <div className="flex flex-col items-start justify-center text-left">
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            {t('home-third-section-title')}
                        </h1>
                        <p className="text-[12px] font-medium text-justify font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60 break-words">
                            {t('home-third-section-paragraph')}
                        </p>
                        <ul className="flex flex-wrap gap-2 mt-2">
                            {filterSoftSkills.map((skill) => (
                                <li key={skill.name} className="px-3 py-1 text-xs font-medium bg-lime-900 text-white rounded-full">
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-full lg:w-1/2 h-1/2 md:h-full flex items-center justify-center relative">
                    <HomeThirdImage />
                </div>
            </div>
        </div>
    );
}

export default HomeThirdSection;
