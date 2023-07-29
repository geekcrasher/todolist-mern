import PropTypes from "prop-types";
import { ChevronsUp, Calendar } from "lucide-react";
import Dropdown from "../../Dropdown/Dropdown";

const TaskDetails = ({
  setUpdatedTask,
  deleteTodoMutation,
  todo,
}) => {

   const { _id, title, description, priority, createdAt } = todo

  const priorityColor = (priority) => {
   if (priority == "Low") {
      return "text-[#febe6b]";
    } else if (priority == "Medium") {
      return "text-[#99c7fc]";
    } else if (priority == "High") {
      return "text-[#feaaa4]";
    }
  }

  const created = (created) => {
    const month = new Date(created).getMonth() + 1;
    const date = new Date(created).getDate();
    const year = new Date(created).getFullYear();
    return `${month}/${date}/${year}`;
  };

  return (
    <article className="h-full relative">
      <section className=" h-12 flex">
        <section className="flex-1 overflow-hidden">
          <h1 className={`${priorityColor(priority)} font-figtree break-words line-clamp-4 text-[0.88rem] xl:text-[1rem]`}>
            {title}
          </h1>
        </section>

        {/* dropdown for update and delete action */}
        <Dropdown
          _id={_id}
          setUpdatedTask={setUpdatedTask}
          deleteTodoMutation={deleteTodoMutation}
          todo={todo}
        />
      </section>
      <section className=" mt-2 h-[5.5rem] py-1">
        <p className="leading-normal tracking-wide line-clamp-4 text-[0.75rem] text-[#333]">
          {description}
        </p>
      </section>
      <section className=" w-full flex items-center justify-between absolute bottom-0 pb-1">
        <p
          className={`${priorityColor(priority)} flex items-center text-xs font-semibold py-0.5 px-2 rounded-lg`}
        >
          <span className="mr-1">
            <ChevronsUp size={14} />
          </span>
          {priority}
        </p>
        <span className="flex items-center text-xs font-semibold text-[#333]">
          <span className="mr-1">
            <Calendar size={14}/>
          </span>
          {created(createdAt)}
        </span>
      </section>
    </article>
  );
};

export default TaskDetails;

TaskDetails.propTypes = {
  setUpdatedTask: PropTypes.func,
  deleteTodoMutation: PropTypes.object,
  todo: PropTypes.object,
};
