import PropTypes from "prop-types";
import { ListTodo, MoonStar,  Sun } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ onClick, isClick }) => {


  return (
    <nav className=" h-24 flex items-center justify-between fixed top-0 z-20 w-full  xs:px-6 md:px-10 bg-[#191E24]">
      {/* <section className="flex items-center cursor-pointer"> */}
        <NavLink className="btn hover:bg-transparent border-none">
         <span><ListTodo color="#A6ADB9" size={28} /></span>
         <span className="font-figtree lg:text-2xl ml-2 text-[#A6ADB9] lowercase">
            task
            <span className="font-figtree lg:text-2xl text-[#00D1A7] normal-case">Tracker</span>
         </span>
        </NavLink>
      {/* </section> */}
      <section className="mt-1">
          <button onClick={onClick} className=" hover:bg-transparent border-none p-1 rounded-md active:motion-safe:animate-spin">
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
