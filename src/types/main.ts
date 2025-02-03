type education = {
    institution: string;
    title: string;
    desc: string;
    startDate: string;
    endDate: string;
    icons: string[];
};

type experience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    desc: string;
    icons: string[];
};

type projects = {
    title: string;
    desc: string;
    linkDeploy: string;
    linkRepository: string;
    linkImage: string;
    tools: string[];
};

type routes = {
    name: string;
    path: string;
};

type skills = {
    languages: skillsCategory[];
    webDevelopment: skillsCategory[];
    backendDevelopment: skillsCategory[];
    devOps: skillsCategory[];
    tools: skillsCategory[];
    softSkills: {
        en: skillsCategory[];
        pt: skillsCategory[];
    };
};

type skillsCategory = {
    name: string;
    icon: string;
    special: boolean;
};

type social = {
    name: string;
    icon: string;
    link: string;
    type: "general" | "specific";
};

type data = {
    education: {
        en: education[];
        pt: education[];
    };
    experience: {
        en: experience[];
        pt: experience[];
    };
    projects: {
        en: projects[];
        pt: projects[];
    }
    routes: {
        en: routes[];
        pt: routes[];
    };
    skills: skills;
    socials: {
        general: social[];
        specific: social[];
    };
};

export type { education, experience, projects, routes, skills, skillsCategory, social, data };
