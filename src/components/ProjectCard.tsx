"use client";
import { memo, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const FaGithub = dynamic(() => import('react-icons/fa').then(mod => mod.FaGithub));
const FaExternalLinkAlt = dynamic(() => import('react-icons/fa').then(mod => mod.FaExternalLinkAlt));

export interface ProjectCardProps {
    index: number;
    title: string;
    desc: string;
    linkDeploy: string;
    linkRepository: string;
    linkImage: string;
    tools: { name: string }[];
}

const ProjectCard = memo(({ index, title, desc, linkDeploy, linkRepository, linkImage, tools }: ProjectCardProps) => {
    const isEven = index % 2 === 0;
    const [hovered, setHovered] = useState(false);
    
    const isLightTheme = document.documentElement.classList.contains('light');

    return (
        <div className={`relative h-auto md:h-[30vh] w-full flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'}`}>
            <div className={`w-full md:w-10/12 h-full relative z-10 flex flex-col justify-center ${isEven ? 'items-start' : 'items-end'}`}>
                <div className={`flex items-center gap-2 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <h3 className={`text-lg font-bold ${isEven ? 'text-left' : 'text-right'}`}>
                        {title}
                    </h3>

                    <div className="flex gap-2 items-center">
                        <a 
                            href={linkRepository} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-black dark:text-white transform transition-all duration-500 hover:scale-110"
                        >
                            <FaGithub size={16} />
                        </a>
                        <a 
                            href={linkDeploy} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-black dark:text-white transform transition-all duration-500 hover:scale-110"
                        >
                            <FaExternalLinkAlt size={16} />
                        </a>
                    </div>
                </div>

                <div 
                    className="text-[12px] font-medium text-justify font-[Plus Jakarta Sans], sans-serif text-black dark:text-white overflow-hidden break-words rounded-lg p-3 w-full mt-2"
                    style={{
                        backgroundImage: "url('/images/backgroundFifth.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backdropFilter: 'blur(10px)',
                    }}
                >
                    <p className='text-[12px] font-medium text-justify font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60 overflow-hidden break-words'>
                        {desc}
                    </p>
                    
                    <ul className="flex flex-wrap gap-2 mt-2">
                        {tools.map((tool, index) => (
                            <li key={index} className="px-3 py-1 text-xs font-medium bg-lime-900 text-white rounded-full shadow-md transition-transform transform hover:scale-105">
                                {tool?.name || ''}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div 
                className={`relative w-full md:w-5/12 h-48 md:h-full overflow-hidden rounded-lg transition-transform duration-300 hover:-translate-y-1 ${isEven ? 'md:-ml-8' : 'md:-mr-8'} mt-4 md:mt-0`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Image
                    src={linkImage}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className={`transition-transform duration-300 rounded-lg ${isEven ? '' : 'scale-x-[-1]'} ${hovered ? 'scale-105' : 'scale-100'}`}
                />
                
                <div
                    className={`absolute inset-0 ${
                        isEven ? 'bg-gradient-to-l' : 'bg-gradient-to-r'
                    } ${
                        isLightTheme ? 'from-white' : 'from-black/70'
                    } to-transparent transition-opacity duration-500 ${
                        hovered ? 'opacity-100' : 'opacity-0'
                    }`}
                ></div>

                <div className={`absolute inset-0 flex items-center justify-center gap-6 transition-opacity duration-500 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
                    <a 
                        href={linkRepository} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-black/70 dark:text-white text-lg transform transition-all duration-500 hover:scale-110"
                    >
                        <FaGithub size={28} />
                    </a>

                    <a 
                        href={linkDeploy} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-black/70 dark:text-white text-lg transform transition-all duration-500 hover:scale-110"
                    >
                        <FaExternalLinkAlt size={26} />
                    </a>
                </div>
            </div>
        </div>
    );
});

export default ProjectCard;