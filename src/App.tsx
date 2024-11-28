import { useEffect, useState } from 'react';

function App() {
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="p-4">
        <h1 className="text-xl">Tema {isDarkMode ? 'Oscuro' : 'Claro'}</h1>
        <button
          onClick={toggleTheme}
          className="mt-4 px-4 py-2 bg-blue-500 text-white dark:bg-blue-700 rounded"
        >
          Cambiar a {isDarkMode ? 'Claro' : 'Oscuro'}
        </button>
      </header>
    </div>
  );
}

export default App;

