import React from "react";
import "./product.css";

const Product = ({ link, img }) => {
  return (
    <div className="p" id="products">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <p>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </p>
    </div>
  );
};

export default Product;
