import PropTypes from 'prop-types'

export const Modal = ({updatedTask, handleChange, saveUpdatedTask}) => {
   return ( 
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
              <button className="btn" onClick={saveUpdatedTask}>Save Changes</button>
            </div>
          </form>
        </dialog>
      </section>
    );
}
 
// Prop types
Modal.propTypes = {
   updatedTask: PropTypes.object,
   handleChange: PropTypes.func,
   saveUpdatedTask: PropTypes.func, 
}
