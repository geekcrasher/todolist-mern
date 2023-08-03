const CreateTaskActions = () => {
  return (
    <section className="mt-10 grid grid-cols-2 gap-2 w-full">
      <button type="reset" className="btn btn-outline hover:bg-transparent bg-spinel text-carbon hover:text-slate-200 normal-case">
        Cancel
      </button>
      <button  type="submit" className="btn bg-[#1e232e] hover:bg-[#181c25] active:bg-[#1e232e] text-slate-300 normal-case border-0">
        Create
      </button>
    </section>
  );
};

export default CreateTaskActions;
