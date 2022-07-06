import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Some of My Projects</h1>
        <p className="pl-desc">
          these are just a few previews of my personal projects. please look
          into my github account for more and better Projects:
          <a href="https://github.com/mahdimirmohamadi"> Click!</a>
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
