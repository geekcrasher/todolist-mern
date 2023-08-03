import PropTypes from "prop-types";
import { FormControl } from "../Form/FormControl";
import UpdateTaskActions from "./Actions/UpdateTaskActions";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateTaskSchema } from "../../model/Task";


const UpdateTaskModal = ({updatedTask, setUpdatedTask, updateTodoMutation }) => {

   const {
      register,
      handleSubmit, 
      formState: { errors }
   } = useForm({ 
      resolver: zodResolver(UpdateTaskSchema)
   });

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
    <dialog id="my_modal_1" className="modal">
      <form
        onSubmit={handleSubmit(saveUpdatedTask)}
        method="dialog"
        className="modal-box form w-80 bg-spinel pb-10"
      >
        <h1 className="text-center font-figtree text-slate-300 text-md mb-4">
          Update Task
        </h1>

        <FormControl htmlFor="title" label="Title">
          <input
            {...register("title")}
            type="text"
            placeholder="Title"
            className="input bg-transparent border-gray-600 w-full max-w-xs text-sm placeholder:text-sm"
            id="title"
            value={updatedTask.title ? updatedTask.title : ""}
            onChange={handleChange}
            autoComplete="off"
          />
          { errors.title && 
             <label className="label">
                <span className="label-text-alt text-error">
                   {errors.title?.message}
                </span>
             </label>
          }
        </FormControl>

        <FormControl htmlFor="description" label="Description">
          <input
            {...register("description")}
            type="text"
            placeholder="Description"
            className="input bg-transparent border-gray-600 w-full max-w-xs text-sm placeholder:text-sm"
            id="description"
            value={updatedTask.description ? updatedTask.description : ""}
            onChange={handleChange}
            autoComplete="off"
          />
          { errors.description && 
             <label className="label">
                <span className="label-text-alt text-error">
                   {errors.description?.message}
                </span>
             </label>
          }
        </FormControl>

        <FormControl htmlFor="priority" label="Priority">
        <input
            aria-disabled
            type="text"
            placeholder="You cannot touch this"
            className="input bg-transparent border-gray-600 w-full max-w-xs text-sm text-gray placeholder:text-sm"
            id="priority"
            value={updatedTask.priority ? updatedTask.priority : ""}
            onChange={handleChange}
            autoComplete="off"
          />
          <label className="label">
             <span className="label-text-alt">*You cannot change the priority</span>
          </label>
        </FormControl>

        {/* Update actions - cancel and save changes button */}
        <UpdateTaskActions />
      </form>

      {/* invisible backdrop bottom */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default UpdateTaskModal;

// Prop types
UpdateTaskModal.propTypes = {
  updatedTask: PropTypes.object,
  updateTodoMutation: PropTypes.object,
  setUpdatedTask: PropTypes.func,
};
