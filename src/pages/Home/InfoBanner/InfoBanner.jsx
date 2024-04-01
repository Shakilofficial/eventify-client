import bgImage from "../../../assets/cover.jpg";
import Heading from "../../../components/Heading/Heading";

const InfoBanner = () => {
  return (
    <div
      className="relative my-10 bg-fixed bg-cover bg-center h-[400px]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70">
        <div className="max-w-7xl p-8 mx-auto md:flex gap-6 justify-center items-center">
          <Heading
            title="Discover Our Story"
            subtitle="Journey with Us Through Years of Unforgettable Events"
          ></Heading>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
