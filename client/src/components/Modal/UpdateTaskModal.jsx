import PropTypes from "prop-types";
import { FormControl } from "../Form/FormControl";
import UpdateTaskActions from "./Actions/UpdateTaskActions";

const UpdateTaskModal = ({updatedTask, setUpdatedTask, updateTodoMutation }) => {

   const saveUpdatedTask = () => {
      updateTodoMutation.mutate(updatedTask);
    };

   const handleChange = (event) => {
      const { name, value } = event.target;
  
      setUpdatedTask((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
   
  return (
    <section>
      <dialog id="my_modal_1" className="modal">
        <form method="dialog" className="modal-box form w-80 bg-white">
          <h1 className="text-center font-figtree text-[#333] text-md mb-2">
            Update Task
          </h1>

          <FormControl htmlFor="title" label="Title">
            <input
              type="text"
              placeholder="Title"
              className="input bg-inherit border-[#dbdddf] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm"
              name="title"
              value={updatedTask.title ? updatedTask.title : ""}
              onChange={handleChange}
              autoComplete="off"
              maxLength={50}
            />
          </FormControl>

          <FormControl htmlFor="description" label="Description">
            <input
              type="text"
              placeholder="Description"
              className="input bg-inherit border-[#dbdddf] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm"
              name="description"
              value={updatedTask.description ? updatedTask.description : ""}
              onChange={handleChange}
              autoComplete="off"
              maxLength={220}
            />
          </FormControl>

          <FormControl htmlFor="priority" label="Priority">
            <input
              type="text"
              placeholder="Priority"
              className="input bg-inherit border-[#dbdddf] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm"
              name="priority"
              value={updatedTask.priority ? updatedTask.priority : ""}
              onChange={handleChange}
              autoComplete="off"
              maxLength={6}
            />
            <label className="label">
              <span className="label-text-alt text-[#333] font-medium">Low, Medium, High</span>
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
  updateTodoMutation: PropTypes.object,
  setUpdatedTask: PropTypes.func,
};
