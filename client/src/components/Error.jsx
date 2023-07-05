import PropTypes from "prop-types";

const Error = ({ isError }) => {
  return (
    <div className="flex justify-center items-center sm:mt-16 md:mt-0">
      {isError && (
        <div className="text-center">
          <div className="xs:w-64 md:w-72">
            <img src="./images/no-data.svg" alt="error" />
          </div>
          <div className="">
            <p className="xs:text-xs md:text-sm text-neutral-400 font-semibold mb-6">
              Sorry! A network error occurred.
            </p>
            <a
              href="/"
              className="bg-blue-600 py-2 px-2 rounded-md text-xs md:text-sm text-gray-100 font-semibold pointer"
            >
              Refresh the page
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Error;

Error.propTypes = {
  isError: PropTypes.bool,
};