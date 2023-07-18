import PropTypes from "prop-types";
import { FormControl } from "../Form/FormControl";
import UpdateTaskActions from "./Actions/UpdateTaskActions";

const UpdateTaskModal = ({ updatedTask, handleChange, saveUpdatedTask }) => {
  return (
    <section>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box form w-80">
          <h1 className="text-center font-figtree text-md mb-2">
            Update a Task
          </h1>

          <FormControl htmlFor="title" label="Title">
            <input
              type="text"
              placeholder="Title"
              className="input w-full max-w-xs mb-2 text-sm placeholder:text-sm border-[#dbdddf]"
              name="title"
              value={updatedTask.title ? updatedTask.title : ""}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl htmlFor="description" label="Description">
            <input
              type="text"
              placeholder="Description"
              className="input w-full max-w-xs mb-2 text-sm placeholder:text-sm border-[#dbdddf]"
              name="description"
              value={updatedTask.description ? updatedTask.description : ""}
              onChange={handleChange}
            />
          </FormControl>

          <FormControl htmlFor="priority" label="Priority">
            <input
              type="text"
              placeholder="Priority"
              className="input w-full max-w-xs mb-2 text-sm placeholder:text-sm border-[#dbdddf]"
              name="priority"
              value={updatedTask.priority ? updatedTask.priority : ""}
              onChange={handleChange}
            />
            <label className="label">
              <span className="label-text-alt">Low, Medium, High</span>
            </label>
          </FormControl>

          <UpdateTaskActions saveUpdatedTask={saveUpdatedTask} />  

        </form>
      </dialog>
    </section>
  );
};

export default UpdateTaskModal;

// Prop types
UpdateTaskModal.propTypes = {
  updatedTask: PropTypes.object,
  handleChange: PropTypes.func,
  saveUpdatedTask: PropTypes.func,
};
