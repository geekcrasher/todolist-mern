import PropTypes from "prop-types";
// import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({ isLoading }) => {
  return (
    <section className="text-center mt-20">
      {isLoading && (
        <>
          <span className="loading loading-spinner loading-xs md:loading-md text-zinc-400"></span>
          <p className="text-sm md:text-base text-zinc-400 mt-3">Loading...</p>
        </>
      )}
    </section>
  );
};

export default Loading;

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
