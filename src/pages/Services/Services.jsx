import { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import ServiceCard from "../../components/Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-16">
      <Heading
        title="Our Services"
        subtitle="Explore Our Range of Premium Services"
      />
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
