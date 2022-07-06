import React from "react";
import "./Product.css";

const Product = ({ img, link }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link}>
        <img
          src={img}
          alt="product picture"
          className="p-img"
          target="_blank"
        />
      </a>
    </div>
  );
};

export default Product;
