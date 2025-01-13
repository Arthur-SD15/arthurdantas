'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Mode from '../Mode';
import LanguageSwitcher from '../LanguageSwitcher';

interface HeaderMobileProps {
  isMenuOpen: boolean;
  routes: Array<{ name: string; path: string }>;
  currentLang: 'en' | 'pt';
  onLanguageChange: (lang: 'en' | 'pt') => void;
}

const HeaderMobile = ({ isMenuOpen, routes, currentLang, onLanguageChange }: HeaderMobileProps) => {
  const navigationVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: custom, duration: 0.3 },
    }),
  };

  const pdfEn = '/pdfs/CV_ArthurSD(en).pdf';
  const pdfPt = '/pdfs/CV_ArthurSD(pt).pdf';

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-lg flex flex-col items-center justify-center gap-8 sm:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial="hidden"
            animate="visible"
          >
            {routes.map((route, index) => {
              if (route.name === 'Resume' || route.name === 'Resumo') {
                return (
                  <motion.div key={index} variants={navigationVariants} custom={index * 0.1}>
                    <a
                      href={currentLang === 'en' ? pdfEn : pdfPt}
                      className="text-white text-xl font-medium"
                      download
                    >
                      {route.name}
                    </a>
                  </motion.div>
                );
              }
              return (
                <motion.div key={index} variants={navigationVariants} custom={index * 0.1}>
                  <Link href={route.path} className="text-white text-xl font-medium">
                    {route.name}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
                className="flex items-center space-x-4"
                variants={navigationVariants}
                custom={routes.length * 0.1}
            >
              <Mode />
              <LanguageSwitcher currentLang={currentLang} onLanguageChange={onLanguageChange} />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderMobile;
