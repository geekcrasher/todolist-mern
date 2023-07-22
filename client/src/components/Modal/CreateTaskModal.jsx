import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  setTodo,
  setTitle,
  setDescription,
  setPriority,
} from "../../features/taskReducer";
import { FormControl } from "../Form/FormControl";
import CreateTaskActions from "./Actions/CreateTaskActions";

const CreateTaskModal = ({ addTodoMutation }) => {
  const dispatch = useDispatch();
  const { todo, title, description, priority } = useSelector(
    (state) => state.task
  );

  const taskTitle = (event) => dispatch(setTitle(event.target.value));
  const taskDescription = (event) => dispatch(setDescription(event.target.value));
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
          className="modal-box form w-80 h-fit bg-white"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center font-figtree text-md mb-2 text-[#333]">New task</h1>

          <FormControl htmlFor={title} label="Title">
            <input
              className="input bg-inherit border-[#dbdddf] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm"
              type="text"
              name="title"
              id="title"
              value={title}
              placeholder="e.g. Todo App Project"
              onChange={taskTitle}
              autoComplete="off"
              maxLength={50}
            />
          </FormControl>

          <FormControl htmlFor={description} label="Description">
            <input
              className="input bg-inherit border-[#dbdddf] truncate w-full max-w-xs text-sm text-gray-900 placeholder:text-sm"
              type="text"
              name="description"
              id="description"
              value={description}
              placeholder="Develop a new feature for the web application"
              onChange={taskDescription}
              autoComplete="off"
              maxLength={220}
            />
          </FormControl>

          <FormControl htmlFor={priority} label="Priority">
            <input
              className="input bg-inherit border-[#dbdddf] w-full max-w-xs text-sm text-gray-900 placeholder:text-sm"
              type="text"
              name="priority"
              id="priority"
              value={priority}
              placeholder="Medium"
              onChange={taskPriority}
              autoComplete="off"
              maxLength={6}
            />
            <label className="label">
              <span className="label-text-alt text-[#333] font-medium">Low, Medium, High</span>
            </label>
          </FormControl>

          <CreateTaskActions cancel={cancel} />
          
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
