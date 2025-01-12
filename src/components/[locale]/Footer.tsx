'use client';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import { FaEnvelope, FaMapPin, FaUser } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  const { t } = useTranslation('common');
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  const logoLight = '/images/logoLight.png';
  const logoDark = '/images/logoDark.png';

  return (
    <footer className="bg-white dark:bg-grey-800 text-black dark:text-white py-3">
      <div className="lg:w-11/12 2xl:w-4/5 w-full md:px-6 2xl:px-0 mx-auto p-6">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 lg:col-span-6 md:mb-0">
            <h5 className="mb-4 font-medium uppercase">
              <Image 
                src={theme === 'dark' ? logoDark : logoLight}
                alt="Logo"
                height={32}
                width={32}
              />
            </h5>
            <p className="text-[12px] font-medium text-justify font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60">
              {t('footer-message')}
            </p>
          </div>
          <div className="col-span-12 lg:col-span-2 md:mb-0">
          </div>
          <div className="col-span-12 lg:col-span-4 lg:mb-0">
            <h5 className="mb-2 font-medium uppercase">{t('contact')}</h5>
            <p className="text-[12px] font-medium font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60">
              <span className="flex items-center">
                <FaMapPin className="mr-2" /> 
                Campo Grade, Mato Grosso do Sul, {t('brazil')}.
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-2" /> 
                contato.arthurdantas.dev@gmail.com
              </span>
              <span className="flex items-center">
                <FaUser className="mr-2" /> 
                Arthur Silva Dantas | {t('software-engineer')}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-2">
        <p className="text-sm text-[12px] font-[Plus Jakarta Sans], sans-serif text-center font-medium text-black dark:text-[#FFFFFF]">
          Copyright © {currentYear} {t('footer-rights')} | Arthur Silva Dantas
        </p>
      </div>
    </footer>
  );
};

export default Footer;
