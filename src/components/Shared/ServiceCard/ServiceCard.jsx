import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  const { id, image, title, description, price } = service;

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg ring-4 ring-red-500 ring-opacity-40 max-w-sm transition duration-300 transform hover:scale-105">
      <div className="relative">
        <img className="w-full h-[220px] object-cover" src={image} alt="Product Image" />
        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          Special Offer
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-vive text-2xl font-semibold text-amber-600 mb-2">{title}</h3>
        <p className="font-mons text-gray-600 mb-4 h-24">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg text-amber-600">$ {price}</span>
          <Link to={`service/${id}`}>
            <button className="bg-amber-600 font-vive hover:bg-amber-700 text-white py-2 px-4 rounded transition-colors duration-300">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
