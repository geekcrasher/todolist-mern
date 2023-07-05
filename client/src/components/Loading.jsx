import PropTypes from 'prop-types';
import ClipLoader from "react-spinners/ClipLoader";

const Loading = ({ isLoading }) => {
  return (
    <div className="absolute top-40 text-center">
      {isLoading && (
        <>
          <ClipLoader
            className="loading"
            color={"#CB4E51"}
            loading={isLoading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <h2 className="xs:text-sm text-md font-medium text-secondary">Loading...</h2>
        </>
      )}
    </div>
  );
};

export default Loading;

Loading.propTypes = {
   isLoading: PropTypes.bool,
}