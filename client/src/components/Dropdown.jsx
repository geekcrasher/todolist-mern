import PropTypes from 'prop-types'
import { Trash2, Edit3, MoreHorizontal } from "lucide-react";

const Dropdown = ({updateTask, deleteTask, todo, _id}) => {
  return (
    <section className="card-actions absolute top-5 right-7">
      <section className="dropdown dropdown-bottom dropdown-end">
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
            <button onClick={() => deleteTask(_id)}>
              <span>
                <Trash2 size={14} />
              </span>
              <span>Delete</span>
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Dropdown;

Dropdown.propTypes = {
   updateTask: PropTypes.func, 
   deleteTask: PropTypes.func, 
   todo: PropTypes.object, 
   _id: PropTypes.string
}
