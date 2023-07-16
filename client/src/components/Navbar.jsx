import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ListTodo} from "lucide-react";
import DarkLightMode from "./DarkLightMode";

const Navbar = () => {

   const [theme, setTheme] = useState('light')

   useEffect(() => {
      if(theme === "dark") {
         document.documentElement.classList.add("dark")
      }
      else {
         document.documentElement.classList.remove("dark")
      }

   }, [theme])

  useEffect(() => {

    if(theme === "dark") {
      document.documentElement.classList.add("dark")
   }
   else {
      document.documentElement.classList.remove("dark")
   }
  }, [theme]);

  const handleClick = () => {
   setTheme(theme === "dark" ? "light" : "dark")
   }
   
  return (
    <nav className="navbar bg-base-100 h-20 flex items-center justify-between fixed top-0 z-50 border w-full px-6">
      <NavLink to={"/todo"} className="flex items-center cursor-pointer">
         <span><ListTodo color="#A6ADB9" size={24} /></span>
         <span className="font-figtree lg:text-xl ml-2 lowercase">
            Task
         </span>
         <span className="font-figtree lg:text-xl text-[#00D1A7] normal-case">Tracker</span>
      </NavLink>
      <section className="flex items-center mt-2">
         <button onClick={handleClick}>
            <DarkLightMode />
         </button>
      </section>
    </nav>
  );
};

export default Navbar;
