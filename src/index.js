import React from "react";
import ReactDOM from "react-dom";

const first_name = "Filip";
const last_name = "Lanoug";
const sushi = "https://images.sweetauthoring.com/recipe/43926_2091.jpg";
const random_img = "https://picsum.photos/100/100";

const custom_style = {
  color: "pink",
  fontSize: "23px",
  border: "1px solid pink"
};

custom_style.color = "yellow";

ReactDOM.render(
  <>
    <h1 className="heading">Hello World !</h1>
    <p style={{ color: "blue" }}>
      my name is {first_name} {last_name}
    </p>
    {/* <p>my name is {first_name + ' ' +last_name}</p> */}
    {/* <p>my name is {`${first_name} ${last_name}`}</p> */}
    <p style={custom_style}>my age is {40 + 3}</p>
    <div>
      <img
        className="food-image"
        alt="sushi"
        src="https://images.japancentre.com/recipes/pics/1369/main/flower-sushi.jpg?1469573764"
      />
      <img className="food-image" alt="sushi" src={sushi} />
      <img
        className="food-image"
        alt="sushi"
        src="https://cdn.shopify.com/s/files/1/2028/9645/products/cours-sushi-la-guilde-culinaire_1024x1024.jpg?v=1571610718"
      />
      <img alt="random" src={random_img + "?grayscale"} />
    </div>
    <p>Copyright {new Date().getFullYear()}</p>
  </>,
  document.getElementById("root")
);
