import { useEffect, useState } from "react";
import Heading from "../../components/Heading/Heading";
import ServiceCard from "../../components/Shared/ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setSearchResults(data);
      });
  }, []);

  const handleSearch = () => {
    if (!searchQuery) {
      setSearchResults(services);
    } else {
      const filteredServices = services.filter((service) =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredServices);
    }
  };

  return (
    <div className="my-16">
      <Heading
        title="Our Services"
        subtitle="Explore Our Range of Premium Services"
      />
      <div className="flex font-mons justify-center mb-6">
        <input
          type="text"
          placeholder="Search by service title"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border border-gray-300 rounded-l-md focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-rose-800 text-white px-4 rounded-r-md hover:bg-rose-700 focus:outline-none"
        >
          Search
        </button>
      </div>
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {searchResults.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
