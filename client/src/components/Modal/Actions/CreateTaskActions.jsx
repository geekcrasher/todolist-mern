import PropTypes from "prop-types";

const CreateTaskActions = ({cancel}) => {
  return (
    <section className="mt-6 grid grid-cols-2 gap-2 w-full">
      <button type="reset" className="btn normal-case" onClick={cancel}>
        Cancel
      </button>
      <button type="submit" className="btn btn-neutral normal-case">
        Create
      </button>
    </section>
  );
};

export default CreateTaskActions;

CreateTaskActions.propTypes = {
   cancel: PropTypes.func,
 };