import { ReactNode } from "react";

type Props = {
    title: string;
    subtitle: string;
    timeTitle: string;
    children: ReactNode;
}

const TimeLine = ({title,subtitle,timeTitle,children}: Props) => {
  return (
    <div className="relative mx-12 before:absolute before:left-[-35px]  before:block before:h-full before:border before:border-black/20 before:content-[''] dark:before:border-white/20
        grid md:grid-cols-5 md:gap-10 md:space-x-4 md:pb-10"
    >
        <div className="pb-4 md:col-span-2">
            <span className="text-blue-500 text-5xl absolute left-[-42px] dark:text-yellow-400">
                •
            </span>
            <h3 className="text-blue-500 text-xl font-semibold dark:text-yellow-400">
                {title}
            </h3>
            <h4 className="font-extrabold">{subtitle}</h4>
            <p className="font-light text-sm">
                {timeTitle}
            </p>
        </div>
        <div className="md:col-span-3 pb-10">
        <p>
            {children}
        </p>
        </div>
    </div>
  )
}

export default TimeLine