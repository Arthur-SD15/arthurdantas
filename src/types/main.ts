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
    socials: {
        general: social[];
        specific: social[];
    },
    routes: {
        en: routes[],
        pt: routes[]
    }
}

export type { data, routes, social };
