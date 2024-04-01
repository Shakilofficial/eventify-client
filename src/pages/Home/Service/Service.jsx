import { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";
import ServiceCard from "../../../components/Shared/ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const [visibleServices, setVisibleServices] = useState([]);

  useEffect(() => {
    fetch("/public/events.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setVisibleServices(data.slice(0, 6)); // Display only the first six services initially
      });
  }, []);

  const handleViewMore = () => {
    // Show the next six services on click of the "View More" button
    const currentIndex = visibleServices.length;
    const nextServices = services.slice(currentIndex, currentIndex + 6);
    setVisibleServices((prevServices) => [...prevServices, ...nextServices]);
  };

  return (
    <section className="mb-8">
      <Heading
        title={"Our Services"}
        subtitle={"Creating Unforgettable Memories"}
      />
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleServices.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={handleViewMore}
          className="bg-rose-300 font-mons text-lg hover:bg-rose-500 hover:text-white text-rose-700 font-semibold py-2 px-6 rounded-md transition-colors duration-300"
        >
          View More
        </button>
      </div>
    </section>
  );
};

export default Service;
