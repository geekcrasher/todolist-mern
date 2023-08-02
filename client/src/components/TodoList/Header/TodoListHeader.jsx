import PropTypes from 'prop-types'
import { Plus } from "lucide-react";

const TodoListHeader = ({todos}) => {
  const addNewTask = () => {
   window.my_modal_2.showModal();
  };

  return (
    <section className="flex justify-between items-center py-1">
      <section className="w-32 flex justify-between items-center lg:text-lg">
      <h1 className="font-figtree text-slate-300">
         Your todos: <span className="text-carbon">{todos?.data.length}</span>
      </h1>
      </section>
      <button
        className="w-10 sm:w-28 lg:w-32 h-10 flex justify-evenly outline-0 items-center rounded-lg bg-[#2D303E] hover:bg-[#262C39] active:bg-[#2D303E] normal-case text-xs md:text-sm text-white"
        onClick={addNewTask}
      >
        <span>
          <Plus size={18} color="#90A3B7" />
        </span>
        <p className="font-sans font-semibold hidden sm:block text-xs text-slate-400 lg:text-sm">
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
 
