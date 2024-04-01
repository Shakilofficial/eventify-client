import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import Navbar from "../components/Shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-screen-xl space-y-12 mx-auto font-dance">
      <Navbar />
      <div className="min-h-[calc(100vh-68px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
