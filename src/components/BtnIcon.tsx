import { ReactNode } from "react";


type Props = {
    children: ReactNode
    link: string
    label: string
}

const BtnIcon = ({children, link, label}: Props) => {
  return (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 text-gray-800 dark:text-white rounded-full bg-slate-50 dark:bg-slate-800 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
        aria-label={label}
        title={label}
    >
        {children}
    </a>
  )
}

export default BtnIcon