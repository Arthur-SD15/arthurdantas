import { FaLinkedin, FaGithub, FaGraduationCap, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { social } from '@/src/types/main';
import { memo } from 'react';
import Mode from './Mode';
import Link from 'next/link';


const Socials = memo(({ socials }: { socials: social[] }) => {
    return (
        <section 
            id="socials" 
            className="fixed xl:bottom-4 xl:left-2 2xl:bottom-10 2xl:left-10 hidden xl:flex flex-col gap-3 z-20 xl:block"
        >
            {socials.map((s: social) => {
                return (
                    <Link href={s.link} target="_blank" rel="noreferrer" key={s.icon} className="grid place-items-center p-3 rounded-full bg-lime-900 text-white" arial-label="Redes sociais">
                        {s.icon === 'FaLinkedin' && <FaLinkedin />}
                        {s.icon === 'FaGithub' && <FaGithub />}
                        {s.icon === 'FaGraduationCap' && <FaGraduationCap />}
                        {s.icon === 'FaInstagram' && <FaInstagram />}
                        {s.icon === 'FaEnvelope' && <FaEnvelope />}
                    </Link>
                );
            })}
            <Mode />
        </section>
    );
});

export default Socials;
