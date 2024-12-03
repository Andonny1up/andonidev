import { ReactNode } from "react";
import useTheme from "../hooks/useTheme"
import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink as RouterLink } from "react-router";

type Props = {}

type NavLinkProps = {
    to: string;
    children: ReactNode;
}

const Links = [
    {uri: "/", label: "Inicio" },
    {uri: "/porfolio", label: "Portafolio" },
    {uri: "/quien-es-andoni-barba-dev", label: "Sobre mí"}
]

const NavLink = ({to, children}: NavLinkProps) => {
    return (
        <div>
            <RouterLink className={({isActive}) => isActive ? 'text-blue-500 dark:text-yellow-300': ''} to={to}>
                {children}
            </RouterLink>
        </div>
    )
}


const Navbar = ({}: Props) => {
  const {isDarkMode, toggleTheme} = useTheme()  
  return (
    <div className="fixed z-50 w-full bg-white dark:bg-slate-900/95 shadow-md dark:shadow-sm dark:shadow-yellow-100/50">
        <header className="px-5 py-4 flex justify-between items-center max-w-5xl m-auto">
            <div className="w-20">
                EL LOGAZO
            </div>
            <div className="hidden sm:block">
                <nav className="flex gap-4">
                    {Links.map((link) =>(
                        <NavLink
                        key={link.uri}
                        to={link.uri}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>
                
            </div>
            <div className="hidden sm:block w-20 text-end">
                <button
                    onClick={toggleTheme}
                    className="px-2 py-2 text-gray-800 dark:text-white rounded-full bg-slate-50 dark:bg-slate-800"
                >
                    {isDarkMode ? <IoSunny /> : <IoMoonSharp />}
                </button>
            </div>
            <div className="sm:hidden text-end">
                <button
                    onClick={toggleTheme}
                    style={{fontSize: '25px'}}
                >
                    <RxHamburgerMenu />
                </button>
            </div>
      </header>
    </div>
  )
}

export default Navbar