import { useEffect, useState } from "react";

function useTheme(): [boolean, () => void] {
  
  const getInitialTheme = () => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      return theme === "dark";
    }
    return false;
  };

  const [themeDark, setThemeDark] = useState<boolean>(getInitialTheme()); 

  useEffect(() => {
    if (themeDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [themeDark]);


  useEffect(() => {
    if (typeof window !== "undefined") {
      if (themeDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    setThemeDark(!themeDark);
  };

  return [themeDark, toggleTheme];
}

export default useTheme;