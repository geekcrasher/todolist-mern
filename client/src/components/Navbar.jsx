import PropTypes from "prop-types";
import { ClipboardList, Moon, Sun } from "lucide-react";

const Navbar = ({ onClick, isClick }) => {
  return (
    <nav className="flex items-center justify-between fixed top-0 z-20 w-full xs:h-16 md:h-20 xs:px-6 md:px-10 border-b border-b-semi dark:border-b-secondary bg-white dark:bg-main_dark">
        <section className="flex items-center">
          <span>
            <ClipboardList color="#6D6D72"  size={22} />
          </span>
          <span className="font-noto-sans font-bold tracking-wide text-sm lg:text-base ml-4 text-text_light dark:text-primary">
            TodoList
          </span>
        </section>
        <section className="mt-1">
          <button onClick={onClick} className="bg-task dark:bg-task_dark p-1 rounded-md">
            {isClick ? <Moon color="#6D6D72" size={22} /> : <Sun color="#6D6D72" />}
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