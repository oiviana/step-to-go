import { useEffect, useState } from "react";

function useTheme(): [boolean, () => void] {
  
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      return (
        theme === "dark" ||
        (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
      );
    }
    return false;
  };

  const [themeDark, setThemeDark] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      if (
        theme === "dark" ||
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setThemeDark(true);
      }
    }
  }, []);

  useEffect(() => {
    if (themeDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [themeDark]);

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  return [themeDark, toggleTheme];
}

export default useTheme;
