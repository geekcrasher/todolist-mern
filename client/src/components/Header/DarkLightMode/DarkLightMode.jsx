import PropTypes from "prop-types";
import { Moon, Sun } from "lucide-react";

const DarkLightMode = ({ onClick, isClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-transparent p-1 rounded-full active:motion-safe:animate-spin hover:bg-[#F1F1F1] dark:hover:bg-neutral"
    >
      {isClick ? (
        <Moon color="#8E949A" size={20} />
      ) : (
        <Sun color="#8E949A" size={20} />
      )}
    </button>
  );
};

export default DarkLightMode;

DarkLightMode.propTypes = {
  onClick: PropTypes.func,
  isClick: PropTypes.bool,
};
