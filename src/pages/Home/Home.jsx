import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Cover from "../../components/Cover/Cover";
import Testimonials from "../../components/Testimonials/Testimonials";
import InfoBanner from "./InfoBanner/InfoBanner";
import Service from "./Service/Service";
import Stats from "./Stats/Stats";
import FAQ from "../../components/FAQ/FAQ";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>EventiFy | Home</title>
      </Helmet>
      <Banner />
      <Service />
      <InfoBanner />
      <Stats />
      <Cover img="https://i.ibb.co/1mpYcDv/15647372979224-01.jpg" />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
