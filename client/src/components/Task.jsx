import PropTypes from "prop-types";
import { useState } from "react";

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

  const saveUpdatedTask = () => {
   updateTodoMutation.mutate(updatedTask)
  }

  return (
    <section className="border p-3">
      {todos?.data?.map((todo) => {
        const { _id, title, description, priority } = todo;
        return (
          <section
            key={_id}
            className="border rounded-md py-3 px-4 bg-slate-800"
          >
            <h1>{_id}</h1>
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
                onClick={() => deleteTodoMutation.mutate(_id)}
                className="bg-sky-700 py-1 px-4"
              >
                Delete
              </button>
            </div>
          </section>
        );
      })}
      {/* update modal */}
      <section>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <h1 className="font-semibold text-2xl">Update a Task</h1>
            <br />
            <div>
              <label htmlFor="title" className="label">Title</label>
              <input
                type="text"
                placeholder="Title"
                className="input w-full max-w-xs mb-2 border-slate-300"
                name="title"
                value={updatedTask.title ? updatedTask.title : ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description" className="label"> Description</label>
              <input
                type="text"
                placeholder="Description"
                className="input w-full max-w-xs mb-2 border-slate-300"
                name="description"
                value={updatedTask.description ? updatedTask.description : ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="priority" className="label">Priority</label>
              <input
                type="text"
                placeholder="Priority"
                className="input w-full max-w-xs mb-2 border-slate-300"
                name="priority"
                value={updatedTask.priority ? updatedTask.priority : ''}
                onChange={handleChange}
              />
            </div>
            <div className="modal-action">
              <button className="btn">Cancel</button>
              <button className="btn" onClick={() =>  updateTodoMutation.mutate(updatedTask)}>Save Changes</button>
            </div>
          </form>
        </dialog>
      </section>
    </section>
  );
};

export default Task;

Task.propTypes = {
  todos: PropTypes.object,
  deleteTodoMutation: PropTypes.object,
};
