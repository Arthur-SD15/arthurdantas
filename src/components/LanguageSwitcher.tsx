'use client';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  currentLang: 'en' | 'pt';
  onLanguageChange: (lang: 'en' | 'pt') => void;
}

const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { i18n } = useTranslation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (lang: 'en' | 'pt') => {
    onLanguageChange(lang);
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative ms-4 ml-auto" data-twe-dropdown-ref>
      <a
        className="me-4 flex items-center text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80"
        id="navbarDropdown"
        role="button"
        aria-expanded={isDropdownOpen ? "true" : "false"}
        onClick={toggleDropdown}
      >
        <span className={`flag-icon flag-icon-${currentLang === 'en' ? 'us' : 'br'}`}></span>
        <span className="ps-1 [&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </a>
      <ul
        className={`absolute left-auto right-0 z-[1000] float-left m-0 mt-1 min-w-[10rem] list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg ${isDropdownOpen ? 'block' : 'hidden'} dark:bg-gray-950`}
        aria-labelledby="navbarDropdown"
        data-twe-dropdown-menu-ref
      >
        <li>
          <a
            className={`block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-gray-800/25 dark:focus:bg-neutral-800/25 dark:bg-gray-950 ${currentLang === 'en' ? 'bg-zinc-200' : ''}`}
            onClick={() => handleLanguageSelect('en')}
            data-twe-dropdown-item-ref
          >
            <span className="flag-icon flag-icon-us me-2"></span>
            <span className="me-4">English</span>
            {currentLang === 'en' && (
              <span className="inline-block text-success-600 dark:text-success-500 [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
            )}
          </a>
        </li>
        <li>
          <hr className="my-2 border-neutral-100 dark:border-white/10" />
        </li>
        <li>
          <a
            className={`block w-full whitespace-nowrap bg-white px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-zinc-200/60 focus:bg-zinc-200/60 focus:outline-none active:bg-zinc-200/60 active:no-underline dark:bg-surface-dark dark:text-white dark:hover:bg-gray-800/25 dark:focus:bg-neutral-800/5 dark:bg-gray-950 ${currentLang === 'pt' ? 'bg-zinc-200' : ''}`}
            onClick={() => handleLanguageSelect('pt')}
            data-twe-dropdown-item-ref
          >
            <span className="flag-icon flag-icon-br me-2"></span>
            Português
            {currentLang === 'pt' && (
              <span className="inline-block text-success-600 dark:text-success-500 [&>svg]:h-3.5 [&>svg]:w-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
            )}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
