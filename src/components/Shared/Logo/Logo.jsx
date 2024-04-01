import { Link } from "react-router-dom";
import logo from "../../../assets/Logo.png";
const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img className="" src={logo} alt="Logo img" width="100" height="100" />
      </Link>
    </div>
  );
};

export default Logo;
