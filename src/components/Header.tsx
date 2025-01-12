'use client';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';
import { useData } from '../app/context/DataContext';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'pt'>('pt');
  const { theme } = useTheme();
  const { data } = useData();

  const handleLanguageChange = (lang: 'en' | 'pt') => {
    setCurrentLang(lang);
  };

  const logoLight = '/images/logoLight.png';
  const logoDark = '/images/logoDark.png';
  const pdfEn = '/pdfs/CV_ArthurSD(en).pdf';
  const pdfPt = '/pdfs/CV_ArthurSD(pt).pdf';

  return (
    <header className="backdrop-filter backdrop-blur-lg dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex flex-col fixed">
      <nav className="lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto py-3 sm:flex items-center justify-between">
        <div className="flex w-full flex-wrap items-center justify-between">
          <Image
            src={theme === 'dark' ? logoDark : logoLight}
            alt="Logo"
            height={46}
            width={46}
          />
        </div>
        <div className="flex items-center space-x-6">
          {data?.routes[currentLang].map((route, index) => {
            if (route.name === 'Resume' || route.name === 'Resumo') {
              return (
                <a
                  key={index}
                  href={currentLang === 'en' ? pdfEn : pdfPt}
                  className="text-[12px] font-medium font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60 hover:text-black/80 dark:hover:text-white/80"
                  download
                >
                  {route.name}
                </a>
              );
            }
            return (
              <Link
                key={index}
                href={route.path}
                className="text-[12px] font-medium font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60 hover:text-black/80 dark:hover:text-white/80"
              >
                {route.name}
              </Link>
            );
          })}
        </div>
        <LanguageSwitcher currentLang={currentLang} onLanguageChange={handleLanguageChange} />
      </nav>
    </header>
  );
};

export default Navbar;
