import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useGetData from "../../hooks/useGetData";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useGetData(
    `http://localhost:8000/bookings/?email=${user?.email}`
  );

  const deleteBooking = async (id) => {
    const response = await fetch(`http://localhost:8000/bookings/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log(data);
  };
  const handleDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBooking(id);
        const remaining = bookings.filter((booking) => booking._id !== id);
        setBookings(remaining);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="min-h-[calc(100vh-323px)] flex items-center justify-center">
      <div className="overflow-x-auto flex-1">
        <table className="table">
          <tbody>
            {bookings?.map((booking) => (
              <BookingRow
                key={booking._id}
                booking={booking}
                handleDeleteBooking={handleDeleteBooking}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
