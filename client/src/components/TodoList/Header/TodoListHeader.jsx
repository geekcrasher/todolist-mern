import PropTypes from 'prop-types'
import { Plus } from "lucide-react";

const TodoListHeader = ({todos}) => {
  const addNewTask = () => {
   window.my_modal_2.showModal();
  };

  return (
    <section className="flex justify-between items-center py-1">
      <section className="w-32 flex justify-between items-center lg:text-lg">
      <h1 className="font-figtree text-[#333]">
         Your todos: <span className="text-gray-400">{todos?.data.length}</span>
      </h1>
      </section>
      <button
        className="w-10 sm:w-28 lg:w-32 h-10 flex justify-evenly outline-0 items-center rounded-lg bg-[#2fa199] hover:bg-[#058e85] active:bg-[#2fa199] normal-case text-xs md:text-sm text-white"
        onClick={addNewTask}
      >
        <span>
          <Plus size={18} color="#f8fafc" />
        </span>
        <p className="font-sans font-semibold hidden sm:block text-xs text-slate-50 lg:text-sm">
          Create task
        </p>
      </button>
    </section>
  );
};

export default TodoListHeader;

TodoListHeader.propTypes = {
   todos: PropTypes.object,
 };
 
