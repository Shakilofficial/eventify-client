import Banner from "../../components/Banner/Banner";
import Cover from "../../components/Cover/Cover";
import InfoBanner from "./InfoBanner/InfoBanner";
import Service from "./Service/Service";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Service />
      <InfoBanner />
      <Cover
        img="https://i.ibb.co/1mpYcDv/15647372979224-01.jpg"
      />
    </div>
  );
};

export default Home;
