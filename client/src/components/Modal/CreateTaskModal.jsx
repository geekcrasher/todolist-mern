import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { setTodo } from "../../features/taskReducer";
import { FormControl } from "../Form/FormControl";
import CreateTaskActions from "./Actions/CreateTaskActions";

import { useForm, useController } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TaskInfoSchema } from "../../model/Task";
import { useState } from "react";

const CreateTaskModal = ({ addTodoMutation }) => {
  const dispatch = useDispatch();
  const { todo } = useSelector((state) => state.task);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TaskInfoSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "",
    },
  });

  const submit = (data) => {
    dispatch(setTodo([...todo, addTodoMutation.mutate(data)]));
    reset({});
  };

  return (
    <dialog id="my_modal_2" className="modal">
      <form
        method="dialog"
        className="modal-box form w-80 h-fit bg-white"
        onSubmit={handleSubmit(submit)}
      >
        <h1 className="text-center font-figtree text-md mb-2 text-[#333]">
          New task
        </h1>

        <FormControl htmlFor="title" label="Title">
          <input
            {...register("title")}
            className={`${errors.title && "input-error border-error"} input bg-inherit border-[#e0e0e0] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm`}
            type="text"
            id="title"
            placeholder="e.g. Todo App Project"
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
            className={`${errors.description && "input-error border-error"} input bg-inherit truncate border-[#e0e0e0] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm`}
            type="text"
            id="description"
            placeholder="Develop a new feature for the web application"
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
            {...register("priority")}
            className={`${errors.priority && "input-error border-error"} input bg-inherit border-[#e0e0e0] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm`}
            type="text"
            id="priority"
            placeholder="Low - Medium - High"
            autoComplete="off"
          />
         { errors.priority && 
            <label className="label">
               <span className="label-text-alt text-error">
                  {errors.priority?.message}
               </span>
            </label>
         }
        </FormControl>

        <CreateTaskActions />
      </form>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CreateTaskModal;

CreateTaskModal.propTypes = {
  addTodoMutation: PropTypes.object,
};
