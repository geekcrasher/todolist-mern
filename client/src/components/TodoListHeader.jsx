import { Plus } from "lucide-react";

const TodoListHeader = () => {
  const addNewTask = () => {
    return window.my_modal_2.showModal();
  };

  return (
   // xxs:w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-11/12 xl:w-9/12 mxl:w-10/12 xxl:w-10/12
   // relative z-10
    <section className="flex justify-between items-center  border h-20 px-4 bg-base-100 ">
      <h1 className="font-figtree lg:text-lg">Your todos</h1>
      <button
        className="xxs:w-28 md:w-32 h-10 flex justify-evenly outline-0 items-center rounded-lg bg-[#2fa199] hover:bg-[#058e85] active:bg-[#2fa199] normal-case text-xs md:text-sm text-white"
        onClick={addNewTask}
      >
        <span>
          <Plus size={18} color="#f8fafc" />
        </span>
        <span className="font-sans font-semibold text-xs lg:text-sm">
          Create task
        </span>
      </button>
    </section>
  );
};

export default TodoListHeader;
