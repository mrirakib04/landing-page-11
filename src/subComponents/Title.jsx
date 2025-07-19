import PropTypes from "prop-types";

const Title = ({ title, description }) => {
  return (
    <div className="w-full text-center sm:py-10 py-5 sm:mt-20 mt-10 mb-5 border-t-2 border-b-2 border-dashed border-gray-500">
      <h2 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold">
        {title}
      </h2>
      <p className="md:max-w-2xl text-center mt-3 text-gray-700 md:text-base text-sm mx-auto">
        {description}
      </p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Title;
