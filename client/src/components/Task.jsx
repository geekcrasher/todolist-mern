import PropTypes from "prop-types";
import { useState } from "react";
import {Modal} from "./Modal";

const Task = ({ todos, deleteTodoMutation, updateTodoMutation }) => {

   const [updatedTask, setUpdatedTask] = useState({})

  const updateTask = (todo) => {
   setUpdatedTask(todo)
     window.my_modal_1.showModal()
  };

  const handleChange = (event) => {
   const {name, value} = event.target
   
   setUpdatedTask(prevState => ({
      ...prevState, 
      [name]: value
   }))
  }

  const deleteTask = (id) => {
   deleteTodoMutation.mutate(id)
  }

  const saveUpdatedTask = () => {
   updateTodoMutation.mutate(updatedTask)
  }

  return (
    <section className=" col-span-3 w-full">
      <section className="grid grid-cols-3 gap-3 col-span-3 w-full">
      {todos?.data?.map((todo) => {
        const { _id, title, description, priority } = todo;
        return (
          <section
            key={_id}
            className="rounded-md py-3 px-4 bg-slate-800"
          >
            <h1>{title}</h1>
            <h1>{description}</h1>
            <h1>{priority}</h1>
            <div>
              <button
                onClick={() => {
                  updateTask(todo);
                }}
                className="bg-sky-700 py-1 px-4 mr-2"
              >
                Update
              </button>
              <button
                onClick={() => deleteTask(_id)}
                className="bg-sky-700 py-1 px-4"
              >
                Delete
              </button>
            </div>
          </section>
        );
      })}
      {/* update modal */}
      <Modal 
         updatedTask={updatedTask} 
         handleChange={handleChange} 
         saveUpdatedTask={saveUpdatedTask} 
      />
      </section>
    </section>
  );
};

export default Task;

Task.propTypes = {
  todos: PropTypes.object,
  deleteTodoMutation: PropTypes.object,
  updateTodoMutation: PropTypes.object,
};
