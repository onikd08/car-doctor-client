import PropTypes from "prop-types";

const BookingRow = ({ booking }) => {
  const { customerName, email, serviceImg, price, date, serviceTitle } =
    booking;
  return (
    <tr>
      <th>
        <button className="btn btn-circle btn-outline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar w-36 h-36">
            <img src={serviceImg} alt="Avatar Tailwind CSS Component" />
          </div>
          <div>
            <div className="font-bold">{customerName.toUpperCase()}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{serviceTitle}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        <button className="btn btn-error">Pending</button>
      </th>
    </tr>
  );
};

BookingRow.propTypes = {
  booking: PropTypes.object.isRequired,
};

export default BookingRow;
