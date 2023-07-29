import PropTypes from "prop-types";
import { useState } from "react";
import UpdateTaskModal from "../../Modal/UpdateTaskModal";
import CreateTaskModal from "../../Modal/CreateTaskModal";
import TaskDetails from "./TaskDetails";

const Tasks = ({
  todos,
  addTodoMutation,
  updateTodoMutation,
  deleteTodoMutation,
}) => {

  const [updatedTask, setUpdatedTask] = useState({});

  const priorityImage = (priority) => {
    if (priority == "Low") {
      return "bg-cover bg-[url('./images/blob-haikei-peach.svg')] border-[#febe6b]";
    } else if (priority == "Medium") {
      return "bg-cover bg-[url('./images/blob-haikei-sky.svg')] border-[#99c7fc]";
    } else if (priority == "High") {
      return "bg-cover bg-[url('./images/blob-haikei-melon.svg')] border-[#feaaa4]";
    }
  };

  return (
    <section className="mt-10 mb-10">
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 mxl:grid-cols-3 xxl:grid-cols-4 gap-6">
        {todos?.data?.map((todo) => {

          /**
           * * todo contains the following properties
           * * const { _id, title, description, priority, createdAt, updatedAt } = todo;
           */
          return (
            <section
              key={todo._id}
              className={`${priorityImage(todo.priority)} h-56 rounded-xl px-5 pt-7 pb-3 shadow border`}
            >
              <TaskDetails
                todo={todo}
                setUpdatedTask={setUpdatedTask}
                deleteTodoMutation={deleteTodoMutation}
              />
            </section>
          );
        })}
      </section>

      {/* update modal */}
      <CreateTaskModal addTodoMutation={addTodoMutation} />

      {/* update modal */}
      <UpdateTaskModal
        updatedTask={updatedTask}
        updateTodoMutation={updateTodoMutation}
        setUpdatedTask={setUpdatedTask}
      />
    </section>
  );
};

export default Tasks;

Tasks.propTypes = {
  todos: PropTypes.object,
  addTodoMutation: PropTypes.object,
  deleteTodoMutation: PropTypes.object,
  updateTodoMutation: PropTypes.object,
};
