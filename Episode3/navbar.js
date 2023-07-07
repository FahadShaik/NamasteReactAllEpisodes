import React from "react";
import ReactDOM from "react-dom/client";
import sflogo from "../Episode3/images/sflogo.jpg";
import { FaUserAlt } from "react-icons/fa";

const HeaderComponent = () => (
  <div className="my-first-header">
    <img className="my-logo" src={sflogo} />
    <div className="search-bar-container">
      <form>
        <input className="search-bar" type="search" name="search-bar" />
      </form>
    </div>
    <div className="user-logo">
      <FaUserAlt />
    </div>
  </div>
);

const myRoot = ReactDOM.createRoot(document.getElementById("root"));
myRoot.render(<HeaderComponent />);
