import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading = React.createElement(
//   'h1',
//   { className: 'header-one' },
//   'hello World from React'
// );

/* <div>
  <div>
    <h1>I am the child's text content</h1>
  </div>
</div> */

//simplified version of create element

// const iamParent = React.createElement(
//   'div',
//   { className: 'parent' },
//   React.createElement(
//     'div',
//     { className: 'child' },
//     React.createElement('h1', { className: 'content' }, 'I am Baby')
//   )
// );
// console.log(iamParent);
// const root = ReactDOM.createRoot(myContainer);

// root.render(iamParent);

// complex nesting of div tags one inside another

/* <div class="container"></div>
<div class="parent">
    <div class="child">
        <h1></h1>
        <h2></h2>
        <h3></h3>
    </div>
    <div>
        <h1></h1>
        <h2></h2>
        <h3></h3>
    </div>
    <div>
        <h1></h1>
        <h2></h2>
        <h3></h3>
    </div>
</div>
</div> */

const HeadingJsx = () => (
  <div>
    <h1 className="ello">I am jsx heading.👏🚀</h1>
    <img src="{https://www.simplilearn.com/image-processing-article}" />
    <a href="https://www.reactjs.org"> link </a>
  </div>
);

// function based component
// component composition writing a component within anothr component
const HelloWorld = () => (
  <div>
    <HeadingJsx />
    <h1>This is a functional component</h1>
  </div>
);

const createRoot = ReactDOM.createRoot(document.querySelector('.container'));
// This is an exxample of component composition
const MyPractice = () => {
  return <h1 className="Hello">My Practice Header</h1>;
};

const DetailsComponent = () => (
  <div>
    <MyPractice />
    <h5>Here we called the details and above line is from the Practice</h5>
  </div>
);

createRoot.render(<DetailsComponent />);
