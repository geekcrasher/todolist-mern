
const Task = ({todos}) => {
  return (
    <section className="border p-3">
      {todos?.data?.map((task, key) => {
        const { _id, title, description, priority } = task;
        return (
          <section
            key={key}
            className="border rounded-md py-3 px-4 bg-slate-800"
          >
            <h1>{_id}</h1>
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
