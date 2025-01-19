'use client';
import { data } from "@/src/types/main";
import Socials from "@/src/components/Socials";
import HomePrimarySection from "@/src/components/Section/HomePrimarySection";
import HomeSecondSection from "@/src/components/Section/HomeSecondSection";
import HomeThirdSection from "@/src/components/Section/HomeThirdSection";

interface Props {
    data: data,
}

const Home = ({ data }: Props) => {
    const combinedSkills = [
        ...(data.skills?.languages || []),
        ...(data.skills?.frameworks || []),
        ...(data.skills?.databases || []),
        ...(data.skills?.tools || []),
    ]

    return (
        <>
            <Socials socials={data.socials.specific} />
            <HomePrimarySection skills={combinedSkills} />
            <HomeSecondSection />
            <HomeThirdSection softSkills={data.skills.softSkills} />
        </>
    )
}

export default Home