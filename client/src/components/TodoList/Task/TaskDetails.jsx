import PropTypes from 'prop-types'
import { ChevronsUp, CalendarDays } from 'lucide-react'; 

const TaskDetails = ({
   title, 
   description, 
   priority, 
   createdAt,
   priorityType 
}) => {

   const created = (created) => {
      const month = new Date(created).getMonth() + 1;
      const date = new Date(created).getDate();
      const year = new Date(created).getFullYear();
      return `${month}/${date}/${year}`;
    };

  return (
    <article className="h-full relative ">
      <section className="break-words overflow-hidden h-12 w-72">
        <h1 className="font-figtree text-[0.88rem] xl:text-[1rem] text-[#333]">
          {title}
        </h1>
      </section>
      <section className="mt-2  h-fit py-1">
        <p className="leading-normal tracking-wide line-clamp-4 text-[0.78rem] xs:text-[0.79rem] text-[#333]">
          {description}
        </p>
      </section>

      <section className=" w-full flex items-center justify-between absolute bottom-0 p-1">
        <p className={`${priorityType(priority)} flex items-center text-xs font-semibold py-0.5 px-2 rounded-lg`}>
            <span className='mr-1'><ChevronsUp size={14}/></span>
            {priority}
         </p>
         <span className=" flex items-center text-xs text-[#333]">
            <span className='mr-1'><CalendarDays size={12}/></span>
            {created(createdAt)}
         </span>
      </section>
    </article>
  );
};

export default TaskDetails;

TaskDetails.propTypes = {
   _id: PropTypes.string,
   title: PropTypes.string,
   description: PropTypes.string,
   priority: PropTypes.string,
   createdAt: PropTypes.string,
   priorityType: PropTypes.func,
}
