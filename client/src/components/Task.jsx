import PropTypes from "prop-types";
import { useState } from "react";
import { Trash2, Edit3, MoreHorizontal, Plus } from "lucide-react";
import { Modal } from "./Modal";
import CreateTask from "./CreateTask";

const Task = ({
  todos,
  addTodoMutation,
  updateTodoMutation,
  deleteTodoMutation,
}) => {
  const [updatedTask, setUpdatedTask] = useState({});

  const updateTask = (todo) => {
    setUpdatedTask(todo);
    window.my_modal_1.showModal();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUpdatedTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const deleteTask = (id) => {
    deleteTodoMutation.mutate(id);
  };

  const saveUpdatedTask = () => {
    updateTodoMutation.mutate(updatedTask);
  };

  const created = (created) => {
    const month = new Date(created).getMonth() + 1;
    const date = new Date(created).getDate();
    const year = new Date(created).getFullYear();
    return `${month}/${date}/${year}`;
  };

  const addNewTask = () => {
    return window.my_modal_2.showModal();
  };

  return (
    <section className="w-fit ">
      <section className="flex justify-between items-center">
        <h1 className="font-figtree lg:text-xl text-[#A6ADB9]">Your todos</h1>
        <button className="xxs:w-28 md:w-32 h-10 flex justify-evenly items-center rounded-lg bg-[#2fa199] hover:bg-[#058e85] active:bg-[#2fa199] normal-case text-xs md:text-sm text-white" onClick={addNewTask}>
          <span>
            <Plus size={18} color="#f8fafc"/>
          </span>
          <span className="font-sans font-semibold text-xs lg:text-sm">Create task</span>
        </button>
      </section>

      <section className=" grid sm:grid-cols-1 lg:grid-cols-2 mxl:grid-cols-3 xxl:grid-cols-4 gap-6 w-fit mt-14">
        {todos?.data?.map((todo) => {
          const { _id, title, description, priority, createdAt } = todo;
          return (
            <section
              key={_id}
              className=" card relative w-full rounded-md h-60 py-4 px-5 bg-[#1D232A]"
            >
              <div className="overflow-hidden p-0 w-[19rem] mxl:w-64 h-14 mb-2 ">
                <h1 className="break-words hyphens-manual card-title font-figtree text-[0.98rem] mxl:text-[0.94rem] text-[#058e85]">
                  {title}
                </h1>
              </div>
              <div className="h-28 py-1 mb-3 ">
                <p className="tracking-wide hyphens-manual text-[0.78rem] mxl:text-[0.82rem] text-[#6a6e73]">
                  {description}
                </p>
              </div>
              <div className="flex justify-between items-center ">
                <div className="badge badge-neutral">
                  <h1 className="text-xs">{priority}</h1>
                </div>
                <span className="text-xs text-[#7f848a]">
                  {created(createdAt)}
                </span>
              </div>
              <section className="absolute top-5 right-7">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <button tabIndex={0} className="">
                    <MoreHorizontal size={16} color="#A6ADB9" />
                  </button>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box"
                  >
                    <li>
                      <button
                        onClick={() => {
                          updateTask(todo);
                        }}
                      >
                        <span>
                          <Edit3 size={14} />
                        </span>
                        <span>Update</span>
                      </button>
                    </li>
                    <li>
                      <button onClick={() => deleteTask(_id)} className="">
                        <span>
                          <Trash2 size={14} />
                        </span>
                        <span>Delete</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </section>
            </section>
          );
        })}
      </section>
      <>
        {/* update modal */}
        <CreateTask addTodoMutation={addTodoMutation} />
        {/* update modal */}
        <Modal
          updatedTask={updatedTask}
          handleChange={handleChange}
          saveUpdatedTask={saveUpdatedTask}
        />
      </>
    </section>
  );
};

export default Task;

Task.propTypes = {
  todos: PropTypes.object,
  deleteTodoMutation: PropTypes.object,
  updateTodoMutation: PropTypes.object,
};
