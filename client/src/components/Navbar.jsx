import PropTypes from "prop-types";
import { ListTodo, MoonStar,  Sun } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ onClick, isClick }) => {


  return (
    <nav className=" h-24 flex items-center justify-between fixed top-0 z-20 w-full px-6 dark:bg-[#191E24]">
      <NavLink to={"/todo"} className="flex items-center cursor-pointer">
         <span><ListTodo color="#A6ADB9" size={24} /></span>
         <span className="font-figtree lg:text-xl ml-2 text-[#1E2936] dark:text-[#A6ADB9] lowercase">
            Task
         </span>
         <span className="font-figtree lg:text-xl text-[#00D1A7] normal-case">Tracker</span>
      </NavLink>
      <section className="flex items-center ">
          <button onClick={onClick} className=" hover:bg-transparent border-none rounded-md active:motion-safe:animate-spin lowercase">
            {isClick ? <MoonStar color="#A6ADB9" size={22}/> : <Sun color="#A6ADB9" />}
          </button>
      </section>
    </nav>
  );
};

export default Navbar;

Navbar.propTypes = {
  onClick: PropTypes.func,
  isClick: PropTypes.bool,
};
