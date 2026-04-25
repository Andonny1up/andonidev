import useTheme from "../hooks/useTheme"
import { IoSunny, IoMoonSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const {isDarkMode, toggleTheme} = useTheme()  
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
      const nextLanguage = i18n.language === 'es' ? 'en' : 'es';
      i18n.changeLanguage(nextLanguage);
  }

  return (
    <div className="fixed z-50 transition-all duration-300 bottom-4 inset-x-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg rounded-2xl border border-gray-200 dark:border-slate-800 sm:bottom-auto sm:top-0 sm:inset-x-0 sm:bg-white sm:dark:bg-slate-900/95 sm:backdrop-blur-none sm:rounded-none sm:border-none sm:shadow-md sm:dark:shadow-sm sm:dark:shadow-yellow-100/50">
        <header className="px-5 py-3 sm:py-4 flex justify-between items-center max-w-5xl mx-auto">
            <div className="font-bold text-xl text-gray-800 dark:text-white">
                EL LOGAZO
            </div>
            
            <div className="flex gap-3 justify-end items-center">
                <button
                    onClick={toggleLanguage}
                    className="px-3 py-2 text-sm font-bold text-gray-800 dark:text-white rounded-full bg-slate-50 dark:bg-slate-800 uppercase flex items-center gap-2 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                    title={i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                >
                    {i18n.language === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}
                </button>
                <button
                    onClick={toggleTheme}
                    className="p-2 text-gray-800 dark:text-white rounded-full bg-slate-50 dark:bg-slate-800 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700"
                    aria-label="Toggle Theme"
                >
                    {isDarkMode ? <IoSunny size={20} /> : <IoMoonSharp size={20} />}
                </button>
            </div>
      </header>
    </div>
  )
}

export default Navbar