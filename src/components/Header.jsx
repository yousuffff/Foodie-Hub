import { LOGO_CDN } from "../utils/Constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_CDN} alt="Logo" />
      <div className="nav-link">
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        <li>Cart</li>
      </div>
    </div>
  );
};
export default Header;
