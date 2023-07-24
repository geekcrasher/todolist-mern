import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodo,
//   setTitle,
//   setDescription,
//   setPriority,
} from "../../features/taskReducer";
import { FormControl } from "../Form/FormControl";
import CreateTaskActions from "./Actions/CreateTaskActions";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const CreateTaskModal = ({ addTodoMutation }) => {
  const dispatch = useDispatch();
//   , title, description, priority
  const { todo } = useSelector((state) => state.task);

  // * Form validation using React Hook Form and Zod

  const TaskInfoSchema = z.object({
    title: z
      .string()
      .min(1, { message: "A Title is required" })
      .max(50, { message: "Must not be exceeded to 50 characters long" }),
    description: z
      .string()
      .min(1, { message: "A description is required" })
      .max(220, { message: "Must not be exceeded to 50 characters long" }),
    priority: z
      .string()
      .min(3, { message: "A priority type is required" })
      .max(6),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState : { errors }
  } = useForm({
    resolver: zodResolver(TaskInfoSchema),
    defaultValues: {
      title: "",
      description: "",
      priority: "",
    },
  });


  const submit = (data) => {
   console.log(data)

   dispatch(setTodo([...todo, addTodoMutation.mutate(data)]))

      // dispatch(setTitle(""));
      // dispatch(setDescription(""));
      // dispatch(setPriority(""));
  };

  return (
    <section>
      <dialog id="my_modal_2" className="modal">
        <form
          method="dialog"
          className="modal-box form w-80 h-fit bg-white"
          onSubmit={handleSubmit(submit)}
        >
          <h1 className="text-center font-figtree text-md mb-2 text-[#333]">New task</h1>

          <FormControl htmlFor='title' label="Title">
            <input
              {...register("title")}
              className="input bg-inherit border-[#dbdddf] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm"
              type="text"
              id="title"
              placeholder="e.g. Todo App Project"
              autoComplete="off"
            />
            <label className="label">
             {errors.title?.message && <span className="label-text-alt text-error">{errors.title?.message}</span>}
            </label>
          </FormControl>

          <FormControl htmlFor='description' label="Description">
            <input
              {...register("description")}
              className="input bg-inherit border-[#dbdddf] truncate w-full max-w-xs text-sm text-gray-900 placeholder:text-sm"
              type="text"
              id="description"
              placeholder="Develop a new feature for the web application"
              autoComplete="off"
            />
            <label className="label">
               {errors.description?.message && <span className="label-text-alt text-error">{errors.description?.message}</span>}
            </label>
          </FormControl>

          <FormControl htmlFor='priority' label="Priority">
            <input
              {...register("priority")}
              className="input bg-inherit border-[#dbdddf] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm"
              type="text"
              id="priority"
              placeholder="Medium"
              autoComplete="off"
            />
            <label className="label">
              {errors.priority?.message && <span className="label-text-alt text-error">{errors.priority?.message}</span>}
            </label>
          </FormControl>

          <CreateTaskActions reset={reset}/>
        </form>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default CreateTaskModal;

CreateTaskModal.propTypes = {
  addTodoMutation: PropTypes.object,
};
