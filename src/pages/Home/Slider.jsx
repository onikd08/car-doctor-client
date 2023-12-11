import PropTypes from "prop-types";
const Slider = ({ image, idx }) => {
  let prev = 0;
  let next = 0;
  switch (idx) {
    case 0:
      prev = 5;
      next = 1;
      break;
    case 1:
      prev = 0;
      next = 2;
      break;
    case 2:
      prev = 1;
      next = 3;
      break;
    case 3:
      prev = 2;
      next = 4;
      break;
    case 4:
      prev = 3;
      next = 5;
      break;
    case 5:
      prev = 4;
      next = 0;
      break;
    default:
      break;
  }
  return (
    <div id={idx} className="carousel-item relative w-full">
      <img src={image} className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

Slider.propTypes = {
  image: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Slider;
