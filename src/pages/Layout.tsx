import { ReactNode } from "react"
import { Outlet } from "react-router"
import Navbar from "./Navbar"

type Props = {
    children?: ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 text-gray-800 dark:text-white overflow-hidden transition-colors duration-300">
        {/* Efecto Wow: Esferas luminosas flotantes (Blobs) */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-blue-300/30 to-purple-300/30 dark:from-blue-800/20 dark:to-purple-900/20 blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
            <div className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-emerald-300/30 to-cyan-300/30 dark:from-emerald-800/20 dark:to-cyan-900/20 blur-3xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '10s' }}></div>
            <div className="absolute -bottom-[20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-fuchsia-300/30 to-pink-300/30 dark:from-fuchsia-800/20 dark:to-pink-900/20 blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '12s' }}></div>
        </div>

        {/* Contenedor principal con z-index para estar por encima del fondo */}
        <div className="relative z-10">
            <Navbar/>
            <div className="max-w-5xl m-auto px-5 pb-24 pt-8 sm:pb-8 sm:pt-24">
                {children ?? <Outlet/>}
            </div>
        </div>
    </div>
  )
}

export default Layout