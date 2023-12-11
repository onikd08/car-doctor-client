import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useGetData from "../../hooks/useGetData";
import BookingRow from "./BookingRow";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const bookings = useGetData(
    `http://localhost:8000/bookings/?email=${user?.email}`
  );

  return (
    <div className="min-h-[calc(100vh-323px)] flex items-center justify-center">
      <div className="overflow-x-auto flex-1">
        <table className="table">
          {/* head */}
          {/* <thead>
            <tr>
              <th></th>
              <th>Service Details</th>
              <th>Price</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead> */}
          <tbody>
            {/* row 1 */}
            {bookings?.map((booking) => (
              <BookingRow key={booking._id} booking={booking}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
