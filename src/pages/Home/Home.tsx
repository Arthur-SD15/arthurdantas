'use client';
import { data } from "@/src/types/main";
import Socials from "@/src/components/Socials";
import HomePrimarySection from "@/src/components/Section/HomePrimarySection";

interface Props {
    data: data,
}

const Home = ({ data }: Props) => {
    const combinedSkills = [
        ...data.skills.languages,
        ...data.skills.frameworks,
        ...data.skills.databases,
        ...data.skills.tools,
    ]

    return (
        <>
            <Socials socials={data.socials.specific} />
            <HomePrimarySection skills={combinedSkills}/>
        </>
    )
}

export default Home