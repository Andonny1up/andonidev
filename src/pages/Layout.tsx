import { ReactNode } from "react"
import { Outlet } from "react-router"
import Navbar from "./Navbar"

type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-800 dark:text-white">
        <Navbar/>
        <div className="max-w-5xl m-auto px-5">
            {children ?? <Outlet/>}
        </div>
    </div>
  )
}

export default Layout