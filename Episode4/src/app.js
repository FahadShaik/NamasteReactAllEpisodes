import React from "react";
import ReactDOM from "react-dom/client";
import HeaderSection from "./components/HeaderSection";
import BodySection from "./components/BodySection";

const AppLayout = () => {
  return (
    <div>
      <HeaderSection />
      <BodySection />
    </div>
  );
};

const myRoot = ReactDOM.createRoot(document.getElementById("root"));

myRoot.render(<AppLayout />);
