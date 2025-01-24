import { memo, useEffect, useState } from "react";
import { useTranslation } from 'next-i18next';
import { skillsCategory } from "@/src/types/main";
import Image from "next/image";

const SkillsSecondSection = memo(({ webDevelopment, backendDevelopment, languages, devOps, tools }: { webDevelopment: skillsCategory[]; backendDevelopment: skillsCategory[]; languages: skillsCategory[]; devOps: skillsCategory[]; tools: skillsCategory[]; }) => {
    const { t } = useTranslation('common');

    const [isScaled, setIsScaled] = useState(false);

    useEffect(() => {
        const adjustScale = () => {
            const section = document.getElementById("my-skills");
            if (section) {
                const sectionHeight = section.offsetHeight;
                const maxHeight = window.innerHeight;

                if (window.innerWidth >= 1024 && sectionHeight > maxHeight) {
                    setIsScaled(true);
                } else {
                    setIsScaled(false);
                }
            }
        };

        adjustScale();
        window.addEventListener("resize", adjustScale);

        return () => {
            window.removeEventListener("resize", adjustScale);
        };
    }, []);

    const renderSkills = (skills: skillsCategory[]) => (
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {skills.map((skill) => (
                <div 
                    key={skill.name} 
                    className="group relative p-2 flex flex-col items-center justify-center rounded-lg shadow-md bg-white dark:bg-[rgba(42,42,42,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                    <div className="w-8 h-8 flex items-center justify-center">
                        <Image 
                            src={`/images/icons/${skill.icon}`} 
                            alt={skill.name} 
                            width={52} 
                            height={52} 
                            className="transition-transform duration-300 group-hover:scale-110" 
                        />
                    </div>
                    <span className="mt-2 text-base font-medium text-center text-gray-600 dark:text-gray-300">{skill.name}</span>
                </div>
            ))}
        </div>
    );

    return (
        <div id="my-skills" className="flex flex-col items-center justify-center px-4 min-h-screen">
            <div
                className={`w-full pt-14 mt-6 max-w-6xl mx-auto space-y-4 dark:bg-grey-900 md:px-12 ${isScaled ? 'transform scale-90' : ''}`}
                style={{ transition: "transform 0.3s ease-in-out", transformOrigin: "top center" }}
            >
                <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-lg dark:bg-[#201f1f4a] dark:shadow-xl border-b-4 border-lime-700">
                    <h2 className="text-xl font-semibold text-left text-black dark:text-white mb-2">{t('skills-web-development')}</h2>
                    {renderSkills(webDevelopment)}
                </div>

                <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-lg dark:bg-[#201f1f4a] dark:shadow-xl border-b-4 border-lime-700">
                    <h2 className="text-xl font-semibold text-left text-black dark:text-white mb-2">{t('skills-backend-development')}</h2>
                    {renderSkills(backendDevelopment)}
                </div>

                <div className="lg:flex lg:space-x-6 lg:justify-between">
                    <div className="flex-1 min-w-[300px] mb-4 lg:mb-0">
                        <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-lg dark:bg-[#201f1f4a] dark:shadow-xl border-b-4 border-lime-700">
                            <h2 className="text-xl font-semibold text-left text-black dark:text-white mb-2">{t('skills-language')}</h2>
                            {renderSkills(languages)}
                        </div>
                    </div>
                    <div className="flex-1 min-w-[300px]">
                        <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-lg dark:bg-[#201f1f4a] dark:shadow-xl border-b-4 border-lime-700">
                            <h2 className="text-xl font-semibold text-left text-black dark:text-white mb-2">DevOps</h2>
                            {renderSkills(devOps)}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full p-4 bg-white rounded-lg shadow-lg dark:bg-[#201f1f4a] dark:shadow-xl border-b-4 border-lime-700">
                    <h2 className="text-xl font-semibold text-left text-black dark:text-white mb-2">{t('skills-tools')}</h2>
                    {renderSkills(tools)}
                </div>
            </div>
        </div>
    );
});

export default SkillsSecondSection;
