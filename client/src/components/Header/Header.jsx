import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ListTodo } from "lucide-react";
import DarkLightMode from "./DarkLightMode/DarkLightMode";

const Header = () => {
  const [isClick, setIsClick] = useState(true)
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
   setIsClick(!isClick)
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className=" navbar fixed top-0 z-10 h-20 flex items-center justify-between px-6 bg-white">
        <Link to={"/"} className="flex items-center cursor-pointer">
          <ListTodo color="#000001" size={20} />
          <span className="font-figtree text-[#000001] lg:text-lg ml-2 lowercase">Task</span>
          <span className="font-figtree lg:text-lg text-accent_light normal-case">
            Tracker
          </span>
        </Link>

        {/* uncomment the code below to enable the darkmode feature */}
      {/* <section className="flex items-center mt-2">
         <DarkLightMode onClick={handleClick} isClick={isClick}/>
      </section> */}
    </header>
  );
};

export default Header;
