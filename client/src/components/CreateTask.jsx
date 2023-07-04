import { useDispatch, useSelector } from "react-redux";
import {
  setTodo,
  setTitle,
  setDescription,
  setPriority
} from "../features/taskReducer";

const CreateTask = () => {
  const dispatch = useDispatch();

  const {todo, title, description, priority } = useSelector(
    (state) => state.task
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if(title, description, priority) {
      dispatch(setTodo([...todo, {title, description, priority,}]));
      dispatch(setTitle(""));
      dispatch(setDescription(""));
      dispatch(setPriority(""));
    }
    else {
      console.log('cannot be empty')
    }
  };

    const taskTitle = (event) => dispatch(setTitle(event.target.value));
    const taskDescription = (event) => dispatch(setDescription(event.target.value));
    const taskPriority = (event) => dispatch(setPriority(event.target.value));

  return (
    <section>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="ring-1 outline-0 rounded-sm"
            type="text"
            name="title"
            id="title"
            value={title}
            placeholder="Title"
            onChange={taskTitle}
          />
        </div>
        <br />
        <div>
          <label htmlFor="description">Description</label>
          <input
            className="ring-1 outline-0 rounded-sm"
            type="text"
            name="description"
            id="description"
            value={description}
            placeholder="Description"
            onChange={taskDescription}
          />
        </div>
        <br />
        <div>
          <label htmlFor="priority">Priority</label>
          <input
            className="ring-1 outline-0 rounded-sm"
            type="text"
            name="priority"
            id="priority"
            value={priority}
            placeholder="Priority"
            onChange={taskPriority}
          />
        </div>
        <br />
        <div className="ml-10">
          <button
            type="submit"
            className="h-10 w-fit px-3 bg-sky-600"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateTask;
