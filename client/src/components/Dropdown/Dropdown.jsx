import PropTypes from "prop-types";
import { Trash2, Edit3, MoreHorizontal } from "lucide-react";

const Dropdown = ({ setUpdatedTask, deleteTodoMutation, todo, _id }) => {

  const updateTask = (todo) => {
    setUpdatedTask(todo);
    window.my_modal_1.showModal();
  };

  const deleteTask = (id) => {
    deleteTodoMutation.mutate(id);
  };

  return (
    <section className="flex items-center p-1 card-actions absolute top-5 right-5 dropdown dropdown-bottom dropdown-end rounded-full">
      <button tabIndex={0} className="btn btn-sm btn-circle btn-ghost">
        <MoreHorizontal size={16} color="#A6ADB9" />
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow rounded-box bg-white"
      >
        <li className="text-slate-900">
          <button className="hover:text-slate-900" onClick={() => updateTask(todo)}>
            <span>
              <Edit3 size={14} />
            </span>
            <span>Update</span>
          </button>
        </li>
        <li className="text-slate-900">
          <button className="hover:text-slate-900" onClick={() => deleteTask(_id)}>
            <span>
              <Trash2 size={14} />
            </span>
            <span>Delete</span>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  setUpdatedTask: PropTypes.func,
  deleteTodoMutation: PropTypes.object,
  todo: PropTypes.object,
  _id: PropTypes.string,
};
