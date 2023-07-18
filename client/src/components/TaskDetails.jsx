import PropTypes from 'prop-types'

const TaskDetails = ({title, description, priority, createdAt, created}) => {
  return (
    <section className="card-body py-3.5 px-5">
      <section className="break-words  overflow-hidden p-0 w-11/12 h-14">
        <h1 className="hyphens-manual card-title font-figtree text-[0.88rem] xl:text-[0.90rem] text-[#058e85]">
          {title}
        </h1>
      </section>
      <section className="h-24 mt-2 py-1">
        <p className="tracking-wide line-clamp-4 text-[0.78rem] xs:text-[0.79rem] text-[#7f848a]">
          {description}
        </p>
      </section>
      <section className="flex items-center justify-between mt-1">
        <p className="text-xs text-[#7f848a] font-semibold">{priority}</p>
        <span className="text-xs text-[#7f848a]">{created(createdAt)}</span>
      </section>
    </section>
  );
};

export default TaskDetails;


TaskDetails.propTypes = {
   title: PropTypes.string,
   description: PropTypes.string,
   priority: PropTypes.string,
   createdAt: PropTypes.string,
   created: PropTypes.func,
}
