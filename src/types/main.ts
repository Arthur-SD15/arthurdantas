type routes = {
    name: string;
    path: string;
}

type social = {
    name: string,
    icon: string,
    link: string
}

type data = {
    socials: social[]
    routes: {
        en: routes[],
        pt: routes[]
    }
}

export type { data, routes, social };