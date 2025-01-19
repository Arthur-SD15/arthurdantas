const HomePrimaryImage = () => {
    return (
        <div className="relative w-[75%] max-w-[260px] h-[75%] max-h-[350px] hover:opacity-90">
            <div className="absolute w-full h-full bg-gradient-to-br from-gray-400 to-gray-300 dark:from-gray-800 dark:to-gray-600 rounded-[32px] rotate-[57.15deg] transition-opacity duration-200 hover:bg-opacity-50"></div>
            <div className="absolute w-full h-full bg-gradient-to-b from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800 rounded-[16px] rotate-[20.58deg] transition-opacity duration-200 hover:bg-opacity-50"></div>
            <div className="absolute w-full h-full bg-[linear-gradient(180deg,rgba(196,196,196,0)_0%,rgba(196,196,196,0.05)_100%),linear-gradient(180deg,rgba(0,0,0,0)_80%,#000),url('/images/homePrimaryImage.png')] bg-center bg-cover bg-no-repeat rounded-[16px] drop-shadow-[0px_189px_76px_rgba(0,0,0,0.01),0px_106px_64px_rgba(0,0,0,0.05),0px_47px_47px_rgba(0,0,0,0.09),0px_12px_26px_rgba(0,0,0,0.1)]"></div>
        </div>
    );
}

export default HomePrimaryImage;
