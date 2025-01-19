'use client';
import { useTranslation } from 'next-i18next';
import { IoMdSend } from "react-icons/io";
import Link from 'next/link';
import HomeSecondImage from '../Images/HomeSecondImage';

const HomeSecondSection = () => {
    const { t } = useTranslation('common');

    return (
        <div className="animate-rise-from-ground overflow-hidden">
            <div className="w-10/12 mx-auto py-3 flex flex-col md:flex-col lg:flex-row items-center justify-between h-[100vh] custom-vh-height dark:bg-grey-900 section-responsiveness">
                <div className="w-full md:w-full lg:w-1/2 h-1/2 md:h-full flex items-center justify-center relative ">
                    <HomeSecondImage />
                </div>
                <div className="w-full md:w-full lg:w-1/2 h-1/2 md:h-full flex items-center justify-start">
                    <div className="flex flex-col items-start justify-center text-left">
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                            {t('home-second-section-title')}
                        </h1>
                        <p className="text-[12px] font-medium text-justify font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60 overflow-hidden break-words">
                            {t('home-second-section-paragraph')}
                        </p>
                        <Link href="/career/" className='w-full' passHref>
                            <button
                                aria-label="Visitar carreira"
                                className="flex flex-row justify-center items-center mt-4 px-6 py-3 gap-4 w-full h-[34px] bg-lime-900 rounded-[16px] border-none"
                            >
                                <span className="text-white text-sm font-medium flex items-center">
                                    {t('visit-career')} <IoMdSend className="ml-2" />
                                </span>
                            </button>
                        </Link>
                        <Link href="/skills/" className='w-full' passHref>
                            <button
                                aria-label="Visitar habilidades"
                                className="flex flex-row justify-center items-center mt-4 px-6 py-3 gap-4 w-full h-[34px] border-2 border-solid box-border rounded-[16px] bg-transparent text-black dark:text-white dark:border-white"
                            >
                                <span className="text-sm font-medium flex items-center">
                                    {t('visit-skill')} <IoMdSend className="ml-2" />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <hr className="w-10/12 mx-auto border-t-2 border-gray-400 dark:border-[#151515]" />
        </div>
    );
}

export default HomeSecondSection;
