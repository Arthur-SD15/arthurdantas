export default function CareerPrimaryImage() {
    return(
        <div className="relative w-[75%] max-w-[260px] h-[75%] max-h-[350px] hover:opacity-90">
            <div className="absolute w-[396px] h-[396px] bg-[url('/images/backgroundThird.png')] bg-cover bg-center top-[30%] left-[-40%] hidden lg:block"></div>
            <div className="absolute right-[-30%] top-[-35%] lg:top-[-25%] w-[354px] h-[304px] bg-[url('/images/backgroundFourth.png')] bg-cover bg-center rotate-[25.73deg]"></div>
            <div className="absolute w-full h-full min-h-full bg-[url('/images/careerPrimaryImage.png')] bg-cover bg-center bg-no-repeat"></div>
        </div>
    )
}
