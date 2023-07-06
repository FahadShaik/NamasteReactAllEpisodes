import React from "react";
import ReactDOM from "react-dom/client";

// requirement 1(headings using React.createElement)
const myHeading = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "i am h1"),
  React.createElement("h2", {}, "i am h2"),
  React.createElement("h3", {}, "i am h3"),
]);

// requirement 2(headings using JSX)

const myHeadingsJSX = (
  <div className="title">
    <h1>i am heading1 jsx</h1>
    <h2>i am heading2 jsx</h2>
    <h3>i am heading3 jsx</h3>
  </div>
);

// requirement 3(headings using JSX)

const HeadingsJSX = () => {
  return (
    <div className="title">
      {myHeadingsJSX}
      <h1>i am heading1 functional component</h1>
      <h2>i am heading2 functional component</h2>
      <h3>i am heading3 functional component</h3>
    </div>
  );
};

const myRoot = ReactDOM.createRoot(document.getElementById("root"));

myRoot.render(<HeadingsJSX />);
