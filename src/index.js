const React = require("react");
const ReactDOM = require("react-dom");

const first_name = "Filip";
const last_name = "Lanoug";

ReactDOM.render(
  <>
    <h1>Hello World !</h1>
    <p>
      my name is {first_name} {last_name}
    </p>
    {/* <p>my name is {first_name + ' ' +last_name}</p> */}
    {/* <p>my name is {`${first_name} ${last_name}`}</p> */}
    <p>my age is {40 + 3}</p>
  </>,
  document.getElementById("root")
);
