import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const service = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl">Book now: {service.title}</h1>
    </div>
  );
};

export default CheckOut;
