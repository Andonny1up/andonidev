import { ReactNode } from "react";

type Props = {
    label: string;
    url: string;
    children: ReactNode
}

const BtnProjects = ({label,url,children}: Props) => {
  return (
    <a 
    href={url} 
    target='_blank'
    className="inline-flex items-center justify-center px-3 py-2 bg-gray-100 text-gray-800 border border-gray-300 gap-2 rounded-xl
        cursor-pointer hover:bg-gray-200 dark:bg-slate-800 dark:text-white dark:border-gray-600 dark:hover:bg-slate-700"
    >
        {children}
        <span>
            {label}
        </span>
    </a>
  )
}

export default BtnProjects