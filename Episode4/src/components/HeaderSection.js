import { FOOD_LOGO } from "../utils/constants";

const HeaderSection = () => {
  return (
    <div className="header-container">
      <div className="img-container">
        <img alt="food-logo" src={FOOD_LOGO} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderSection;
