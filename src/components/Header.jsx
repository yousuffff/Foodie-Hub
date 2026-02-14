import { useState } from "react";
import { LOGO_CDN } from "../utils/Constants";
import { Link } from "react-router";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <Link className="custom-link" to={"/"}>
        <img className="logo" src={LOGO_CDN} alt="Logo" />
      </Link>
      <div className="nav-link">
        <li>
          <Link to="/" className="custom-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="custom-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="custom-link">
            Contact us
          </Link>
        </li>
        <li>
          <Link to="/" className="custom-link">
            Cart
          </Link>
        </li>

        <button
          onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};
export default Header;
