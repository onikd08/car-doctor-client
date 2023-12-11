import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.firstName.value);
  };

  return (
    <div className="flex items-center justify-center ">
      <section className="w-full p-24 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
          {service.title}
        </h2>
        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <input
                required
                type="text"
                name="firstName"
                placeholder="First Name"
                className="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                required
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                className="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <input
                required
                type="tel"
                name="phone"
                placeholder="Your Phone"
                className="block w-full px-6 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your message"
              rows={8}
              className="block mt-6 w-full px-6 py-4 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            ></textarea>
          </div>

          <div className="mt-6">
            <button className="btn btn-block btn-outline btn-error">
              Confirm Order
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CheckOut;
