const UpdateTaskActions = () => {
  return (
    <section className="modal-action mt-6 grid grid-cols-2 gap-2 w-full">
      <button className="btn btn-ghost text-slate-800 normal-case">Cancel</button>
      <button type="submit" className="btn bg-[#2fa199] hover:bg-[#058e85] active:bg-[#2fa199] text-slate-50 border-0 normal-case" >
        Save Changes
      </button>
    </section>
  );
};

export default UpdateTaskActions;
