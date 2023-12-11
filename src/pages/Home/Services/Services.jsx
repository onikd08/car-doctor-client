import useGetData from "../../../hooks/useGetData";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services] = useGetData("http://localhost:8000/services");
  return (
    <div>
      <div className="w-1/2 mx-auto text-center space-y-5">
        <h3 className="font-bold text-3xl text-orange-500">About Us</h3>
        <h5 className="text-4xl">Our Service Area</h5>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
