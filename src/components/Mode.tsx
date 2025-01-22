'use client';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

const FiSun = dynamic(() => import('react-icons/fi').then(mod => mod.FiSun));
const FiMoon = dynamic(() => import('react-icons/fi').then(mod => mod.FiMoon));

const Mode = () => {
    const { theme, setTheme } = useTheme();

    return (
        <>
            <span
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="grid place-items-center p-3 rounded-full bg-lime-900 text-white cursor-pointer transition-colors"
            >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </span> 
        </>    
    );
}

export default Mode;
