// write product card here
import React from "react";
import Button from "./button"; 
import productImage from "../assets/product.jpg"; 

function Productcard() {
  const product = {
    image: productImage,
    name: "Wireless Headphones",
    price: "$99.99",
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <Button /> 
    </div>
  );
}

export default Productcard;

