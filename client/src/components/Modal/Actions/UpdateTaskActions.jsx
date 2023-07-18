import PropTypes from "prop-types";

const UpdateTaskActions = ({saveUpdatedTask}) => {
  return (
    <div className="modal-action mt-6 grid grid-cols-2 gap-2 w-full">
      <button className="btn normal-case">Cancel</button>
      <button className="btn btn-neutral normal-case" onClick={saveUpdatedTask}>
        Save Changes
      </button>
    </div>
  );
};

export default UpdateTaskActions;

UpdateTaskActions.propTypes = {
   saveUpdatedTask: PropTypes.func
}
