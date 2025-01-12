'use client';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function Mode() {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <span
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-lime-900 text-white cursor-pointer transition-colors"
            >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </span> 
        </>    
    );
}