'use client';
import { data } from "@/types/main";
import Bottons from "@/components/Socials";

interface Props {
    data: data,
}

const Home = ({ data }: Props) => {
    return (
        <>
            <Bottons socials={data.socials} />
        </>
    )
}

export default Home