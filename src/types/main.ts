type skillsCategory = {
    name: string;
    special: boolean;
};

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

type social = {
    name: string,
    icon: string,
    link: string,
    type: "general" | "specific"
}

type routes = {
    name: string;
    path: string;
}

type data = {
    skills: skills;
    socials: {
        general: social[];
        specific: social[];
    },
    routes: {
        en: routes[],
        pt: routes[]
    }
}

export type { data, routes, social, skills, skillsCategory };
