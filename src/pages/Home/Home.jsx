import Banner from "../../components/Banner/Banner";
import Cover from "../../components/Cover/Cover";
import Testimonials from "../../components/Testimonials/Testimonials";
import InfoBanner from "./InfoBanner/InfoBanner";
import Service from "./Service/Service";
import Stats from "./Stats/Stats";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Service />
      <InfoBanner />
      <Stats />
      <Cover img="https://i.ibb.co/1mpYcDv/15647372979224-01.jpg" />
      <Testimonials />
    </div>
  );
};

export default Home;
