import PropTypes from "prop-types";

const Error = ({ isError }) => {
  return (
    <section className="flex justify-center">
      {isError && (
        <figure className="text-center ">
          <img
            src="./images/no-data.svg"
            alt="error"
            className="w-56 lg:w-64 xxl:w-72 "
          />
          <figcaption className="text-xs md:text-sm text-zinc-500 mt-1 text-center">
            Sorry! A network error occurred.
          </figcaption>
          <button className="mt-5">
            <a href="/"
              className="bg-blue-600 py-2 px-2 rounded-md text-xs md:text-sm text-gray-100 font-semibold cursor-pointer"
            >
              Refresh the page
            </a>
          </button>
        </figure>
      )}
    </section>
  );
};

export default Error;

Error.propTypes = {
  isError: PropTypes.bool,
};

{
  /* <a
  href="/"
  className="bg-blue-600 py-2 px-2 rounded-md text-xs md:text-sm text-gray-100 font-semibold pointer"
>
  Refresh the page
</a>; */
}
