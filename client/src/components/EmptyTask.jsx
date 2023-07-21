import PropTypes from "prop-types";

const EmptyTask = ({ todos }) => {
  return (
    <section className="flex justify-center mt-20">
      {todos?.data?.length < 1 && (
        <figure>
          <img 
            src="./images/no-data-pana.svg" 
            alt="error" 
            className="w-56 xs:w-64 xxl:w-72"
          />
          <figcaption className="text-xs md:text-sm text-zinc-400 mt-3 text-center">
            Nothing on your to-do list right now
          </figcaption>
        </figure>
      )}
    </section>
  );
};

export default EmptyTask;

EmptyTask.propTypes = {
  todos: PropTypes.object,
};
