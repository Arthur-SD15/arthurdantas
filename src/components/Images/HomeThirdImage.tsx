const HomeThirdImage = () => {
    return (
        <div className="relative w-[75%] max-w-[260px] h-[75%] max-h-[350px] hover:opacity-90">
            <div className="absolute w-[396px] h-[396px] bg-[url('/images/backgroundPrimary.png')] bg-cover bg-center top-[20%] hidden lg:block"></div>
            <div className="absolute left-[-30%] top-[-30%] w-[384px] h-[384px] bg-[url('/images/backgroundSecond.png')] bg-cover bg-center"></div>
            <div className="absolute w-[90%] h-[90%] bg-gradient-to-b from-[#F4F8FD] to-[#C7CAD0] rotate-[15deg] rounded-[32px] top-[5%] left-[5%]"></div>
            <div className="absolute w-full h-full max-w-[250px] max-h-[350px] sm:w-[80%] sm:h-[80%] md:w-[90%] md:h-[90%] bg-cover bg-center bg-no-repeat bg-[url('/images/homeThirdImage.jpg')] bg-[linear-gradient(180deg,rgba(0,0,0,0)_80%,#000000)] rounded-[32px]"></div>
        </div>
    );
}

export default HomeThirdImage;
