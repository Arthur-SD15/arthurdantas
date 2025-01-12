'use client';
import React from 'react';
import { social } from '@/src/types/main';
import Mode from './Mode';
import Link from 'next/link';
import * as Fa from 'react-icons/fa';

const Socials = ({ socials }: { socials: social[] }) => {
    return (
        <section 
            id="socials" 
            className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden xl:flex flex-col gap-3 z-20 xl:block"
        >
            {socials.map((s: social) => {
                return (
                    <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-lime-900 text-white">
                        {
                            React.createElement(Fa[s.icon as keyof typeof Fa])
                        }
                    </Link>
                )
            })}
            <Mode />
        </section>
    );
};

export default Socials;
