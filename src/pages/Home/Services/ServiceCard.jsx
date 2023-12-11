import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  const { img, price, title, _id } = service;
  return (
    <div className="card bg-base-100 border">
      <figure className="m-8 rounded-2xl">
        <img className="rounded-2xl" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <Link to={`/book/service/${_id}`}>
            <button className="btn btn-error btn-outline">
              {<FaArrowRight></FaArrowRight>}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default ServiceCard;
