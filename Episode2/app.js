import React from 'react';
import ReactDOM from 'react-dom/client';

const myContainer = document.querySelector('.container');

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

const iamParent = React.createElement('div', { className: 'parent-class' }, [
  React.createElement('div', { className: 'child-class-one' }, [
    React.createElement('h1', { className: 'i am h1' }, 'i am child 1 h1'),
    React.createElement('h2', { className: 'i am h2' }, 'i am child 1 h2'),
    React.createElement('h3', { className: 'i am h3' }, 'i am child 1 h3'),
  ]),
  React.createElement('div', { className: 'child-class-two' }, [
    React.createElement('h1', { className: 'i am h1' }, 'i am child 2 h1'),
    React.createElement('h2', { className: 'i am h2' }, 'i am child 2 h2'),
    React.createElement('h3', { className: 'i am h3' }, 'i am child 2 h3'),
  ]),
  React.createElement('div', { className: 'child-class-three' }, [
    React.createElement('h1', { className: 'i am h1' }, 'i am child 3 h1'),
    React.createElement('h2', { className: 'i am h2' }, 'i am child 3 h2'),
    React.createElement('h3', { className: 'i am h3' }, 'i am child 3 h3'),
  ]),
]);

console.log(iamParent);
const createRoot = ReactDOM.createRoot(myContainer);

createRoot.render(iamParent);
