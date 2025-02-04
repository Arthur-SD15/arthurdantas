"use client";
import { projects } from "@/src/types/main";
import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import ProjectCard from "../ProjectCard";

const ProjectsPrimarySection = memo(({ projects }: { projects: projects[] }) => {
    const { t } = useTranslation("common");
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 2;
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    const displayedProjects = useMemo(() => {
        return projects.slice(
            currentPage * projectsPerPage,
            (currentPage + 1) * projectsPerPage
        );
    }, [currentPage, projects]);

    return (
        <div className="animate-rise-from-ground min-h-screen pt-[10vh] flex flex-col justify-between items-center">
            <div className="w-11/12 md:w-10/12 mx-auto py-3 flex flex-col items-center gap-6 md:gap-12 dark:bg-grey-900 flex-grow">
                {displayedProjects.map((project, index) => (
                    <ProjectCard 
                    key={index} 
                    {...project} 
                    index={index} 
                    tools={project.tools.map(tool => ({ name: tool }))} // Transforma o array de strings em objetos com a chave 'name'
                 />
                
                ))}
            </div>

            <div className="flex justify-center gap-4 mt-6 md:mt-12 mb-6">
                <button 
                    className="py-2 px-4 rounded-md transition-colors text-sm font-medium focus:outline-none bg-lime-900 text-white shadow-lg disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                    disabled={currentPage === 0}
                >
                    {t('Previous')}
                </button>
                
                <button 
                    className="py-2 px-4 rounded-md transition-colors text-sm font-medium focus:outline-none bg-lime-900 text-white shadow-lg disabled:opacity-50"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                    disabled={currentPage >= totalPages - 1}
                >
                    {t('Next')}
                </button>
            </div>
        </div>
    );
});

export default ProjectsPrimarySection;