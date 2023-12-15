import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import BookingServiceHeader from "./BookingServiceHeader";
import useAuth from "../../hooks/useAuth";

const BookService = () => {
  const service = useLoaderData();
  const { user } = useAuth();
  const { price, _id, title, img } = service;

  const createBooking = async (booking) => {
    const response = await fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    });
    const data = await response.json();
    if (data.insertedId) {
      Swal.fire({
        icon: "success",
        title: "Well Done!",
        text: "Order has been confirmed",
      });
    }
  };

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const price = form.price.value;
    const bookingDetails = {
      customerName: name,
      date,
      email,
      price,
      serviceId: _id,
      serviceTitle: title,
      serviceImg: img,
    };
    createBooking(bookingDetails);
  };

  return (
    <div>
      <BookingServiceHeader img={img} title={title}></BookingServiceHeader>
      <div className="flex items-center justify-center my-10">
        <section className="w-full p-24 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <form onSubmit={handleBookService}>
            <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2">
              <div>
                <input
                  required
                  type="text"
                  name="name"
                  defaultValue={user?.displayName}
                  placeholder="Your Name"
                  className="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <input
                  required
                  type="date"
                  name="date"
                  className="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <input
                  readOnly
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Your Email"
                  className="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <input
                  readOnly
                  name="price"
                  placeholder="Due amount"
                  defaultValue={"$ " + price}
                  className="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div className="mt-10">
              <button className="btn btn-block btn-outline btn-error">
                Confirm Order
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BookService;
