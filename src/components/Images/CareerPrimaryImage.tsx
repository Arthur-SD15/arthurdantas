const CareerPrimaryImage = () => {
    return (
        <div className="relative w-[75%] max-w-[260px] h-[75%] max-h-[350px] hover:opacity-90">
            <div className="absolute w-full h-[75px] bg-gradient-to-r from-[#f0f0f0] via-[#d3d3d3] to-[#f0f0f0] rounded-[20px] bottom-0 z-0 shadow-lg transition-all ease-in-out duration-300 dark:from-[#1f1f1f] dark:via-[#3a3a3a] dark:to-[#1f1f1f] block lg:hidden"></div>
            <div className="absolute w-full h-[90px] bg-gradient-to-r from-[#d3d3d3] via-[#a0a0a0] to-[#d3d3d3] rounded-[30px] bottom-[20px] z-0 shadow-lg transition-all ease-in-out duration-300 dark:from-[#3a3a3a] dark:via-[#6e6e6e] dark:to-[#3a3a3a] block lg:hidden"></div>
            <div className="absolute w-[396px] h-[396px] bg-[url('/images/backgroundThird.png')] bg-cover bg-center top-[30%] left-[-40%] hidden lg:block"></div>
            <div className="absolute right-[-30%] top-[-35%] lg:top-[-25%] w-[354px] h-[304px] bg-[url('/images/backgroundFourth.png')] bg-cover bg-center rotate-[25.73deg] hidden lg:block"></div>
            <div className="absolute w-full top-[-10%] h-full min-h-full bg-[url('/images/careerPrimaryImage.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
    )
}

export default CareerPrimaryImage;
