import PropTypes from "prop-types";

const CreateTaskActions = ({cancel}) => {
  return (
    <section className="mt-6 grid grid-cols-2 gap-2 w-full">
      <button type="reset" className="btn btn-ghost text-slate-800 normal-case" onClick={cancel}>
        Cancel
      </button>
      <button type="submit" className="btn bg-[#2fa199] hover:bg-[#058e85] active:bg-[#2fa199] text-slate-50 normal-case border-0">
        Create
      </button>
    </section>
  );
};

export default CreateTaskActions;

CreateTaskActions.propTypes = {
   cancel: PropTypes.func,
 };