import PropTypes from "prop-types";
import { useState } from "react";
import { Trash2, Edit3, MoreHorizontal } from "lucide-react";
import { Modal } from "./Modal";

const Task = ({ todos, deleteTodoMutation, updateTodoMutation }) => {
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

  return (
    <section className="relative  col-span-3 w-full">
      <div className="mb-4">
        <h1 className="font-figtree text-xl text-[#A6ADB9]">Your todos</h1>
      </div>
      <section className="grid grid-cols-3 gap-3 col-span-3 w-full">
        {todos?.data?.map((todo) => {
          const { _id, title, description, priority } = todo;
          return (
            <section
              key={_id}
              className="card relative rounded-md h-66 p-6 bg-[#1D232A]"
            >
              <div className=" overflow-hidden p-0 w-[19rem] h-14 mb-2">
                <h1 className="break-words hyphens-manual card-title font-figtree text-[1.125rem] text-[#058e85]">
                  {title}
                </h1>
              </div>
              <div className="h-28 ">
                <p className="hyphens-manual text-[0.9rem] text-[#64686f] ">
                  {description}
                </p>
              </div>
              <div className=" badge badge-neutral mt-3">
                <h1 className="text-xs">{priority}</h1>
              </div>
              <section className="absolute top-7 right-7">
                <div className="dropdown dropdown-bottom dropdown-end">
                  <button tabIndex={0} className="">
                    <MoreHorizontal size={20} color="#A6ADB9" />{" "}
                  </button>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box">
                    <li>
                      <button onClick={() => {updateTask(todo)}}>
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
        <Modal
          updatedTask={updatedTask}
          handleChange={handleChange}
          saveUpdatedTask={saveUpdatedTask}
        />
      </section>
    </section>
  );
};

export default Task;

Task.propTypes = {
  todos: PropTypes.object,
  deleteTodoMutation: PropTypes.object,
  updateTodoMutation: PropTypes.object,
};
