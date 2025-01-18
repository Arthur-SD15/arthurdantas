type education = {
    institution: string,
    title: string,
    desc: string,
    startDate: string,
    endDate: string,
}

type experience = {
    company: string,
    position: string,
    startDate: string,
    endDate: string,
    desc: string
}

type routes = {
    name: string;
    path: string;
}

type skills = {
    languages: skillsCategory[];
    frameworks: skillsCategory[];
    databases: skillsCategory[];
    tools: skillsCategory[];
    softSkills: {
        en: skillsCategory[];
        pt: skillsCategory[];
    };
};

type skillsCategory = {
    name: string;
    special: boolean;
};

type social = {
    name: string,
    icon: string,
    link: string,
    type: "general" | "specific"
}

type data = {
    education: {
        en: education[];
        pt: education[];
    };
    experience: {
        en: experience[];
        pt: experience[];
    };
    routes: {
        en: routes[];
        pt: routes[];
    };
    skills: skills;
    socials: {
        general: social[];
        specific: social[];
    };
}

export type { education, experience, routes, skills, skillsCategory, social, data };