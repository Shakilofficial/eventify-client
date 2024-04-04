import { Helmet } from "react-helmet-async";
import { AiFillDollarCircle } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
  const service = useLoaderData();
  const { _id, image, title, description, gallery, price } = service;

  return (
    <div>
      <Helmet>
        <title>EventiFy | Service: {title} </title>
      </Helmet>
      <div className="max-w-screen-lg mx-auto p-5 sm:p-10 md:p-16">
        <div className="mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
          <h1 className="pt-1 font-vive md:text-4xl text-xl font-semibold  text-amber-600 hover:text-rose-600 transition duration-500 ease-in-out mb-2">
            {title}
          </h1>
          <img className="w-full my-4" src={image} alt={title} />
          <p className="font-mons text-gray-700 text-base leading-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="py-5 text-sm font-regular text-gray-900 flex items-center justify-between">
            <div className="flex gap-2 justify-center text-amber-600 items-center">
              <AiFillDollarCircle size={30} />
              <p className="font-mons text-xl font-semibold text-amber-600">
                {price}
              </p>
            </div>
            <button className="bg-rose-600 font-mons font-semibold hover:bg-rose-700 text-white py-2 px-4 rounded transition-colors duration-200">
              Book Now
            </button>
          </div>
          <hr />
        </div>
      </div>
      <div className="h-full my-5 py-4 lg:py-8">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h1 className="text-center text-xl md:text-4xl font-semibold text-rose-600 mb-6">
            Photos of {title}
          </h1>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            {gallery.map((galleryImage) => (
              <a
                href="#"
                key={galleryImage}
                className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
              >
                <img
                  src={galleryImage}
                  loading="lazy"
                  alt="Gallery Image"
                  className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
