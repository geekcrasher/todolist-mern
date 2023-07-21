import PropTypes from "prop-types";

const UpdateTaskActions = ({saveUpdatedTask}) => {
  return (
    <div className="modal-action mt-6 grid grid-cols-2 gap-2 w-full">
      <button className="btn btn-ghost text-slate-800 normal-case">Cancel</button>
      <button className="btn bg-[#2fa199] hover:bg-[#058e85] active:bg-[#2fa199] text-slate-50 border-0 normal-case" onClick={saveUpdatedTask}>
        Save Changes
      </button>
    </div>
  );
};

export default UpdateTaskActions;

UpdateTaskActions.propTypes = {
   saveUpdatedTask: PropTypes.func
}
