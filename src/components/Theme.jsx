import { useEffect, useContext } from "react";
import { MainContextProviderContext } from "../provider/AuthProvider";

const Theme = () => {
  const { theme, setTheme } = useContext(MainContextProviderContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "synthwave" ? "light" : "synthwave");
    
  };

  return (
    <div className={theme === "synthwave" ? "bg-[#1E1E2E]" : "bg-[#F1F1F0]"}>
      <div className="container mx-auto text-end pr-4">
        <input onClick={toggleTheme} type="checkbox" className="toggle" />
      </div>
    </div>
  );
};

export default Theme;
