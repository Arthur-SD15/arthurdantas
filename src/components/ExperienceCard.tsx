import { MdSchool, MdWork } from 'react-icons/md'

interface ExperienceProps {
  index: number,
  startDate: string,
  endDate: string,
  company: string,
  position: string,
  desc: string,
  institution: string,
  title: string,
  duration: string,
}

const ExperienceCard = ({ index, startDate, endDate, company, position, desc, institution, title, duration }: ExperienceProps) => {
  return (
    <div className={`mb-6 md:mb-8 flex md:justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse left-timeline' : 'right-timeline'}`}>
      <div className="order-1 md:w-6/12"></div>

      <span className="z-20 flex items-center order-1 justify-center w-6 h-6 md:w-9 md:h-9 bg-lime-100 rounded-full ring-4 md:ring-8 ring-transparent dark:ring-transparent dark:bg-lime-800">
        {company && <MdWork className="text-base md:text-xl text-lime-600 dark:text-lime-400" />}
        {institution && <MdSchool className="text-base md:text-xl text-lime-600 dark:text-lime-400" />}
      </span>

      <div
        className="order-1 rounded-lg w-full ml-3 md:ml-0 md:w-6/12 p-3 md:px-4 md:py-4 
        bg-white dark:bg-[#1F1F1F80] 
        shadow-md dark:shadow-lg border-b-4 border-lime-900"
      >
        <h3 className="mb-2 font-medium text-base md:text-lg text-gray-800 dark:text-gray-100">
          {company || institution}
        </h3>
        <p className="text-[12px] font-bold text-justify font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60 overflow-hidden break-words mb-2">{position}{title}
          <span className="text-gray-500 dark:text-gray-400 font-normal"> - {startDate} - {endDate}</span>
        </p>
        <p className="text-[12px] font-medium text-justify font-[Plus Jakarta Sans], sans-serif text-black/60 dark:text-white/60 overflow-hidden break-words">
          {desc}
        </p>
      </div>
    </div>
  )
}

export default ExperienceCard