import PropTypes from "prop-types";

const BookingServiceHeader = ({ img, title }) => {
  return (
    <div
      className="hero min-h-[300px] relative"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="md:absolute md:left-20">
        <h1 className="text-3xl font-semibold text-white">{title}</h1>
      </div>
    </div>
  );
};
BookingServiceHeader.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default BookingServiceHeader;
