import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ListTodo } from "lucide-react";
import DarkLightMode from "./DarkLightMode";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    // fixed top-0 z-50
    <header className="navbar fixed top-0 z-10 bg-base-100 h-20 flex items-center justify-between border px-6">
      {/* <nav className="navbar"> */}
        <NavLink to={"/todo"} className="flex items-center cursor-pointer">
          <span>
            <ListTodo color="#A6ADB9" size={24} />
          </span>
          <span className="font-figtree lg:text-lg ml-2 lowercase">Task</span>
          <span className="font-figtree lg:text-xl text-[#00D1A7] normal-case">
            Tracker
          </span>
        </NavLink>
      {/* </nav> */}
      <section className="flex items-center mt-2">
        <button onClick={handleClick}>
          <DarkLightMode />
        </button>
      </section>
    </header>
  );
};

export default Navbar;
