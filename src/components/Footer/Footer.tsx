'use client';
import { FaLinkedin, FaGithub, FaGraduationCap, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { useData } from '@/app/context/DataContextProvider';
import Link from 'next/link';
import Logo from '../Logo';

const Footer = () => {
  const { t, i18n } = useTranslation('common');
  const { data } = useData();
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  if (!data || i18n.isInitialized === false || currentYear === null) {
    return null;
  }

  return (
    <footer className="bg-white dark:bg-grey-800 text-black dark:text-white py-3">
      <div className="w-10/12 lg:w-10/12 2xl:w-10/12 mx-auto py-6">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-7 md:mb-0">
            <h5 className="mb-4 font-medium uppercase">
              <Logo size={32} />
            </h5>
            <p className="text-[12px] font-medium text-justify font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60">
              {t('footer-message')}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 md:mb-0"></div>
          <div className="col-span-12 lg:col-span-3 lg:flex items-center justify-end">
            <div className="flex gap-4">
              {data.socials.general.map((social) => (
                <Link
                  aria-label="Redes sociais"
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  key={social.icon}
                  className="grid place-items-center p-3 rounded-full bg-grey-200 text-black dark:text-white"
                >
                  {social.icon === 'FaLinkedin' && <FaLinkedin />}
                  {social.icon === 'FaGithub' && <FaGithub />}
                  {social.icon === 'FaGraduationCap' && <FaGraduationCap />}
                  {social.icon === 'FaInstagram' && <FaInstagram />}
                  {social.icon === 'FaEnvelope' && <FaEnvelope />}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[12px] font-[Plus Jakarta Sans], sans-serif text-center font-medium text-black dark:text-[#FFFFFF]">
          Copyright © {currentYear} {t('footer-rights')} | Arthur Silva Dantas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
