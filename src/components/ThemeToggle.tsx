import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme === 'dark'
  });
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light');
    }
  }, [isDark])
  return (
    <button
      onClick={ () => setIsDark(!isDark) }
      className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded transition"
    >
      { isDark ? '🌙 Dark' : '☀️ Light' }
    </button>
  );
}

export default ThemeToggle