import { useSelector } from "react-redux";

const Task = () => {
  const { todo } = useSelector((state) => state.task);

  return (
    <section>
      {todo.map((task, key) => {
        const { id, title, description, priority } = task;
        return (
          <section
            key={key}
            className="border rounded-md py-3 px-4 bg-orange-200"
          >
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{description}</h1>
            <h1>{priority}</h1>
          </section>
        );
      })}
    </section>
  );
};

export default Task;
