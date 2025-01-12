'use client';
import { data } from "@/src/types/main";
import Socials from "@/src/components/Socials";

interface Props {
    data: data,
}

const Home = ({ data }: Props) => {
    return (
        <>
            <Socials socials={data.socials} />
        </>
    )
}

export default Home