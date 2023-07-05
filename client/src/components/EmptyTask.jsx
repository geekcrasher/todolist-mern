import PropTypes from 'prop-types';

const EmptyTask = ({todos}) => {
   return ( 
      <div className="flex justify-center sm:mt-20 border-sky-600">
      {todos?.data?.length < 1 && (
        <div className="text-center ">
          <div className="xs:w-64 md:w-72 border-sky-600 ">
            <img src="./images/no-data-pana.svg" alt="error" />
          </div>
          <div className="">
            <p className="xs:text-xs md:text-sm text-neutral-400 font-semibold mt-4">
               Nothing on your to-do list right now
            </p>
          </div>
        </div>
      )}
    </div>
    );
}
 
export default EmptyTask;


EmptyTask.propTypes = {
   todos: PropTypes.object,
}