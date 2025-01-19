import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { memo } from 'react';
import Link from 'next/link';
import Mode from '../Mode';
import LanguageSwitcher from '../LanguageSwitcher';

interface HeaderMobileProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  routes: Array<{ name: string; path: string }>;
  currentLang: 'en' | 'pt';
  onLanguageChange: (lang: 'en' | 'pt') => void;
  pdfEn: string;
  pdfPt: string;
}

const HeaderMobile = ({ isMenuOpen, setIsMenuOpen, routes, currentLang, onLanguageChange, pdfEn, pdfPt }: HeaderMobileProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom, duration: 0.3 },
    }),
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-lg flex flex-col items-center justify-center gap-8 sm:hidden"
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 0 }}
          transition={{ duration: 0 }}
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial="hidden"
            animate="visible"
            exit="exit"
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
                  <Link
                    onClick={closeMenu}
                    href={route.path}
                    className="text-white text-xl font-medium"
                  >
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

export default memo(HeaderMobile);
