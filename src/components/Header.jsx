import { useState } from "react";
import { LOGO_CDN } from "../utils/Constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <img className="logo" src={LOGO_CDN} alt="Logo" />
      <div className="nav-link">
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        <li>Cart</li>
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
