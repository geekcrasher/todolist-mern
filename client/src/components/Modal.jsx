import PropTypes from 'prop-types'

export const Modal = ({updatedTask, handleChange, saveUpdatedTask}) => {
   return ( 
      <section>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box form w-80">
            <h1 className="text-center font-figtree text-lg mb-2">Update a Task</h1>
            <div>
              <label htmlFor="title" className="label">
               <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                className="input w-full max-w-xs mb-2 text-sm placeholder:text-sm border-[#dbdddf]"
                name="title"
                value={updatedTask.title ? updatedTask.title : ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="description" className="label"> 
               <span className="label-text">Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input w-full max-w-xs mb-2 text-sm placeholder:text-sm border-[#dbdddf]"
                name="description"
                value={updatedTask.description ? updatedTask.description : ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="priority" className="label">
               <span className="label-text">Priority</span>
              </label>
              <input
                type="text"
                placeholder="Priority"
                className="input w-full max-w-xs mb-2 text-sm placeholder:text-sm border-[#dbdddf]"
                name="priority"
                value={updatedTask.priority ? updatedTask.priority : ''}
                onChange={handleChange}
              />
              <label className="label">
                <span className="label-text-alt">Low, Medium, High</span>
              </label>
            </div>
            <div className="modal-action mt-6 grid grid-cols-2 gap-2 w-full">
              <button className="btn normal-case">Cancel</button>
              <button className="btn btn-neutral normal-case" onClick={saveUpdatedTask}>Save Changes</button>
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
