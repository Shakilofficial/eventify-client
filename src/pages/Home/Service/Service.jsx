import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Heading from "../../../components/Heading/Heading";
import ServiceCard from "../../../components/Shared/ServiceCard/ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  const [visibleServices, setVisibleServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setVisibleServices(data.slice(0, 6));
      });
  }, []);

  const handleViewMore = () => {
    setVisibleServices(services);
  };

  const handleViewLess = () => {
    setVisibleServices(services.slice(0, 6));
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
      <motion.div
        whileHover={{ scale: 1.2 }}
        className="flex justify-center mt-6"
      >
        {visibleServices.length < services.length ? (
          <button
            onClick={handleViewMore}
            className="bg-rose-300 font-mons  hover:bg-rose-500 hover:text-white text-rose-700 font-semibold py-2 px-6 rounded-md transition-colors duration-300"
          >
            View More
          </button>
        ) : (
          <button
            onClick={handleViewLess}
            className="bg-rose-300 font-mons hover:bg-rose-500 hover:text-white text-rose-700 font-semibold py-2 px-6 rounded-md transition-colors duration-300"
          >
            View Less
          </button>
        )}
      </motion.div>
    </section>
  );
};

export default Service;
