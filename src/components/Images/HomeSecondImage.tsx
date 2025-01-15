export default function HomeSecondImage() {
    return (
        <div className="relative w-[60%] h-[60%] max-w-[396px] max-h-[396px] hover:opacity-90">
            <div className="absolute w-[396px] h-[396px] bg-[url('/images/backgroundPrimary.png')] bg-cover bg-center top-[30%] left-[-40%] hidden lg:block"></div>
            <div className="absolute right-[-40%] top-[-35%] lg:top-[-25%] w-[384px] h-[384px] bg-[url('/images/backgroundSecond.png')] bg-cover bg-center rotate-[25.73deg]"></div>
            <div className="absolute w-full h-full bg-gradient-to-br from-[#F4F8FD] to-[#C7CAD0] rounded-[80px] rotate-[25.73deg]"></div>
            <div className="absolute w-full h-full min-h-full bg-[url('/images/homeSecondImage.jpg')] bg-[linear-gradient(180deg,rgba(0,0,0,0)_80%,#000000_100%),url('/images/teste.jpg')] border-2 border-white rounded-[32px] shadow-[0px_130px_52px_rgba(0,0,0,0.01),0px_73px_44px_rgba(0,0,0,0.05),0px_33px_33px_rgba(0,0,0,0.09),0px_8px_18px_rgba(0,0,0,0.1)] bg-cover bg-center"></div>
        </div>
    );
}
