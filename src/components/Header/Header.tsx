'use client';
import { useState, useEffect, useCallback, useMemo, memo } from 'react';
import { useData } from '@/app/context/DataContextProvider';
import Link from 'next/link';
import Logo from '../Logo';
import LanguageSwitcher from '../LanguageSwitcher';
import HeaderMobile from './HeaderMobile';

const Navbar = memo(() => {
  const [currentLang, setCurrentLang] = useState<'en' | 'pt'>('pt');
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data } = useData();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = useCallback((lang: 'en' | 'pt') => {
    setCurrentLang(lang);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const pdfEn = '/pdfs/CV_ArthurSD(en).pdf';
  const pdfPt = '/pdfs/CV_ArthurSD(pt).pdf';

  const memoizedRoutes = useMemo(() => {
    return data?.routes[currentLang].map((route, index) => {
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
    });
  }, [data, currentLang, pdfEn, pdfPt]);

  if (!mounted) {
    return null;
  }

  return (
    <header className={`animate-slide-down dark:bg-grey-900 dark:bg-opacity-40 border-gray-200 dark:border-b-0 z-30 min-w-full flex fixed lg:backdrop-blur-lg ${!isMenuOpen ? 'backdrop-blur-lg' : ''}`}>
      <nav className="w-10/12 mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center z-50">
          <Logo size={46} />
        </div>
        <div className="hidden sm:flex items-center space-x-8">
          {memoizedRoutes}
          <LanguageSwitcher currentLang={currentLang} onLanguageChange={handleLanguageChange} />
        </div>
        <div className="sm:hidden flex items-center z-50">
          <button aria-label="Abrir menu" onClick={toggleMenu} className="text-black dark:text-white focus:outline-none">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <HeaderMobile 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        routes={data?.routes[currentLang] || []} 
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        pdfEn={pdfEn}
        pdfPt={pdfPt}
      />
    </header>
  );
});

export default Navbar;
