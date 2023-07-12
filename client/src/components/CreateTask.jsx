import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodo,
  setTitle,
  setDescription,
  setPriority,
} from "../features/taskReducer";

const CreateTask = ({ addTodoMutation }) => {
  const dispatch = useDispatch();
  const { todo, title, description, priority } = useSelector(
    (state) => state.task
  );

  const taskTitle = (event) => dispatch(setTitle(event.target.value));
  const taskDescription = (event) =>
    dispatch(setDescription(event.target.value));
  const taskPriority = (event) => dispatch(setPriority(event.target.value));

  const handleSubmit = (event) => {
    event.preventDefault();

    if ((title, description, priority)) {
      dispatch(
        setTodo([
          ...todo,
          addTodoMutation.mutate({ title, description, priority }),
        ])
      );
      dispatch(setTitle(""));
      dispatch(setDescription(""));
      dispatch(setPriority(""));
    } else {
      console.log("Input cannot be empty!");
    }
  };

  const cancel = () => {
    dispatch(setTitle(""));
    dispatch(setDescription(""));
    dispatch(setPriority(""));
  };

  return (
    <section>
      <dialog id="my_modal_2" className="modal">
        <form
          method="dialog"
          className="modal-box form bg-[#1D232A] w-80 h-fit"
          onSubmit={handleSubmit}
        >
          <div className="">
            <div className="mb-2">
              <h1 className="text-center font-figtree text-lg text-[#A6ADB9]">
               New task
              </h1>
            </div>
            <div className="form-control">
              <label htmlFor={title} className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                className="input border-[#42454a] w-full max-w-xs text-sm placeholder:text-sm"
                type="text"
                name="title"
                id="title"
                value={title}
                placeholder="e.g. Todo App Project"
                onChange={taskTitle}
                maxLength={60}
              />
            </div>
            <div className="form-control">
              <label htmlFor={description} className="label">
                <span className="label-text">Description</span>
              </label>
              <input
                className="input border-[#42454a] truncate w-full max-w-xs text-sm placeholder:text-sm"
                type="text"
                name="description"
                id="description"
                value={description}
                placeholder="Develop a new feature for the web application"
                onChange={taskDescription}
                maxLength={230}
              />
            </div>
            <div className="form-control">
              <label htmlFor={priority} className="label">
                <span className="label-text">Priority</span>
              </label>
              <input
                className="input border-[#42454a] w-full max-w-xs text-sm placeholder:text-sm"
                type="text"
                name="priority"
                id="priority"
                value={priority}
                placeholder="Medium"
                onChange={taskPriority}
              />
              <label className="label">
                <span className="label-text-alt">Low, Medium, High</span>
              </label>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 w-full">
              <button type="reset" className="btn normal-case" onClick={cancel}>
                Cancel
              </button>
              <button type="submit" className="btn btn-neutral normal-case">
                Create
              </button>
            </div>
          </div>
        </form>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </section>
  );
};

export default CreateTask;

CreateTask.propTypes = {
  addTodoMutation: PropTypes.object,
};
