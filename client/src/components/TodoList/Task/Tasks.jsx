import PropTypes from "prop-types";
import { useState } from "react";
import UpdateTaskModal from "../../Modal/UpdateTaskModal";
import CreateTaskModal from "../../Modal/CreateTaskModal";
import TaskDetails from "./TaskDetails";
import Dropdown from "../../Dropdown/Dropdown";

const Tasks = ({
  todos,
  addTodoMutation,
  updateTodoMutation,
  deleteTodoMutation,
}) => {

  const [updatedTask, setUpdatedTask] = useState({});

  const saveUpdatedTask = () => {
    updateTodoMutation.mutate(updatedTask);
  };

  const priorityType = (priority) => {
   if(priority == 'Low') {
      return 'bg-[#FFEFE0] text-[#F69547]'
   }
   else if (priority == 'Medium') {
      return 'bg-[#ECF2FE] text-[#1974FB]'
   }
   else if (priority == 'High') {
      return 'bg-[#F1ECFE] text-[#6B3DE0]'
   }
  }

  return (
    <section className=" mt-10 mb-10">
      <section className="grid sm:grid-cols-1 lg:grid-cols-2 mxl:grid-cols-3 xxl:grid-cols-4 gap-6">
        {todos?.data?.map((todo) => {
          const { _id, title, description, priority, createdAt } = todo;
          return (
            <section key={_id} className="bg-white h-56 shadow relative rounded-xl overflow-hidden px-5 pt-7 pb-3">
               {/* Task details */}
              <TaskDetails
                title={title}
                description={description}
                priority={priority}
                createdAt={createdAt}
                priorityType={priorityType}
              />

              {/* dropdown for update and delete action */}
              <Dropdown
                _id={_id}
                setUpdatedTask={setUpdatedTask}
                deleteTodoMutation={deleteTodoMutation}
                todo={todo}
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
        saveUpdatedTask={saveUpdatedTask}
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
