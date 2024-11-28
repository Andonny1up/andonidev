import { useEffect, useState } from "react";


const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Verifica el tema almacenado o usa el sistema operativo por defecto
        return localStorage.getItem('theme') === 'dark' ||
               (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });
    
    useEffect(() => {
        // Aplica la clase al cargar la app
        if (isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);
    
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    return {isDarkMode,toggleTheme}
}

export default useTheme