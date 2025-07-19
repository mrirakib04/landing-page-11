import PropTypes from "prop-types";

const Stat = ({ image, name, bio }) => {
  return (
    <div className="w-full flex flex-col items-center p-5 gap-1 text-center">
      <img className="max-w-3xs" src={image} alt="stat-image" />
      <h3 className="sm:text-xl text-lg font-semibold mt-3">{name}</h3>
      <p className="text-gray-700 sm:text-base text-sm">{bio}</p>
    </div>
  );
};

Stat.propTypes = {
  image: PropTypes.any.isRequired,
  name: PropTypes.string,
  bio: PropTypes.string,
};

export default Stat;
