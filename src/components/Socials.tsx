import React from 'react';
import Link from 'next/link';
import * as Fa from 'react-icons/fa';
import { social } from '@/types/main';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';

const Bottons = ({ socials }: { socials: social[] }) => {
    const { theme, setTheme } = useTheme()

    return (
        <section id='socials' className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
            {socials.map((s: social) => {
                return (
                    <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-lime-900 text-white">
                        {
                            //@ts-ignore
                            React.createElement(Fa[`${s.icon}`])
                        }
                    </Link>
                )
            })}
            <span
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-lime-900 text-white cursor-pointer transition-colors"
            >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </span>     
        </section>
    )
}

export default Bottons