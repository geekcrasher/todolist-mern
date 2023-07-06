import { useDispatch, useSelector } from "react-redux";
import {
  setTodo,
  setTitle,
  setDescription,
  setPriority,
} from "../features/taskReducer";

const CreateTask = ({ addTodoMutation }) => {

   const dispatch = useDispatch();
   const { todo, title, description, priority } = useSelector((state) => state.task);

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

  return (
    <form className="mt-24" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={title} className="label inline-block w-24 ">
          Title
        </label>
        <input
          className="input border-slate-300"
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
        <label htmlFor={description} className="label inline-block w-24 ">
          Description
        </label>
        <input
          className="input border-slate-300"
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
        <label htmlFor={priority} className=" label inline-block w-24 ">
          Priority
        </label>
        <input
          className="input border-slate-300"
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
        <button type="submit" className="h-10 w-fit px-3 bg-sky-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default CreateTask;
