import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useGetData from "../../hooks/useGetData";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const bookings = useGetData(
    `http://localhost:8000/bookings/?email=${user?.email}`
  );

  return (
    <div>
      <h1>This is my bookings: {bookings.length}</h1>
    </div>
  );
};

export default MyBookings;
