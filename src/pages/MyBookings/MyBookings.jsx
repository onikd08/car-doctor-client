import useGetData from "../../hooks/useGetData";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useGetData(`/bookings/?email=${user?.email}`);

  const handleUpdate = async (id) => {
    const response = await fetch(`http://localhost:8000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirmed" }),
    });
    const data = await response.json();
    if (data.modifiedCount > 0) {
      const remaining = bookings.filter((booking) => booking._id !== id);
      const updated = bookings.find((booking) => booking._id === id);
      updated.status = "confirmed";
      setBookings([updated, ...remaining]);
    }
  };

  const deleteBooking = async (id) => {
    const response = await fetch(`http://localhost:8000/bookings/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await deleteBooking(id);
        if (result.deletedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
          Swal.fire({
            title: "Deleted!",
            text: "Your booking has been deleted.",
            icon: "success",
          });
        }
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
                handleUpdate={handleUpdate}
              ></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBookings;
