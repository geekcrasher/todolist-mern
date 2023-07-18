import PropTypes from "prop-types";
import { useState } from "react";
import UpdateTaskModal from "../../Modal/UpdateTaskModal";
import CreateTaskModal from "../../Modal/CreateTaskModal";
import Dropdown from "../../Dropdown/Dropdown";
import TaskDetails from "./TaskDetails";

const Task = ({
  todos,
  addTodoMutation,
  updateTodoMutation,
  deleteTodoMutation,
}) => {
  const [updatedTask, setUpdatedTask] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUpdatedTask((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const updateTask = (todo) => {
   setUpdatedTask(todo);
   window.my_modal_1.showModal();
  };

  const deleteTask = (id) => {
    deleteTodoMutation.mutate(id);
  };

  const saveUpdatedTask = () => {
    updateTodoMutation.mutate(updatedTask);
  };

  const created = (created) => {
    const month = new Date(created).getMonth() + 1;
    const date = new Date(created).getDate();
    const year = new Date(created).getFullYear();
    return `${month}/${date}/${year}`;
  };

  return (
    <section className="px-4 mt-10">
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 mxl:grid-cols-3 xxl:grid-cols-4 gap-6">
        {todos?.data?.map((todo) => {
          const { _id, title, description, priority, createdAt } = todo;
          return (
            <section key={_id} className="card  rounded-md h-[14rem] bg-neutral">
               <TaskDetails 
                  title={title} 
                  description={description} 
                  priority={priority}
                  created={created} 
                  createdAt={createdAt}
               />

               {/* dropdown for update and delete action */}
               <Dropdown 
                  updateTask={updateTask} 
                  deleteTask={deleteTask} 
                  todo={todo} 
                  _id={_id}
               />
            </section>
          );
        })}
      </section>
      <>
        {/* update modal */}
        <CreateTaskModal addTodoMutation={addTodoMutation} />

        {/* update modal */}
        <UpdateTaskModal
          updatedTask={updatedTask}
          handleChange={handleChange}
          saveUpdatedTask={saveUpdatedTask}
        />
      </>
    </section>
  );
};

export default Task;

Task.propTypes = {
  todos: PropTypes.object,
  addTodoMutation: PropTypes.object,
  deleteTodoMutation: PropTypes.object,
  updateTodoMutation: PropTypes.object,
};
