import { useEffect, useState } from "react";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules"; // Import Autoplay module
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../Heading/Heading";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <Heading
        title="User Reviews"
        subtitle="Discover What Our Clients Have to Say"
      />
      <div className="my-10">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]} // Add Autoplay module
          autoplay={{ delay: 3000 }} // Specify autoplay delay
          className="mySwiper space-x-4 overflow-hidden rounded-lg shadow-md"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="flex flex-col h-[400px] items-center justify-center space-y-4">
                <div className="rounded-full overflow-hidden w-20 h-20 border-4 border-amber-500 flex items-center justify-center">
                  <img
                    className="object-cover w-full h-full rounded-full dark:bg-gray-500"
                    src={review.photoURL}
                    alt=""
                  />
                </div>
                <div className=" space-x-2">
                  <Rating
                    placeholderRating={review.rating}
                    style={{ maxWidth: 180 }}
                    readOnly
                  />
                </div>
                <p className="text-center text-gray-800">{review.comment}</p>
                <h4 className="text-xl font-mons font-semibold text-amber-600 capitalize">
                  {review.userName}
                </h4>
                <p className="text-gray-600">{review.date}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
