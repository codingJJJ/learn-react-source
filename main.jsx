import { createElement } from 'react';
import React, {
  render
} from './src/react'

// import React from './react';

console.log(React.createElement);

console.log(
  <div className="div1" key="123" abc="123" style={{backgroundColor: "red"}}>
    1dddd
    <span className="d2">321</span>
  </div>
)

render(
  <div className="div1" key="123" abc="123" style={{backgroundColor: "red"}}>123<span>312</span></div>,
  document.getElementById('root')
)

const res = React.createElement(
  "div",
  {
    key: "123",
    style: {backgroundColor: "red"},
    abc: "123",
    className: "123",

  },
  ["123", React.createElement("span", {}, "321")]
)

console.log(res);