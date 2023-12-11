import PropTypes from "prop-types";

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className="card bg-base-100 border">
      <figure className="m-8 rounded-2xl">
        <img className="rounded-2xl" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions justify-end">
          <button className="btn">{"->"}</button>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
};
export default ServiceCard;
