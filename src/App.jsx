import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="bg-gray-100 dark:bg-slate-900 h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl my-8 dark:text-gray-100">TailWind CSS Theme Changer</h1>

      <button
        onClick={handleThemeSwitch}
        className="bg-slate-800 dark:bg-slate-600 dark:text-gray-100 hover:bg-slate-900 dark:hover:bg-slate-500 text-gray-100 px-8 py-2 rounded-lg shadow-md cursor-pointer"
      >
        Dark Mode
      </button>
    </div>
  );
};

export default App;