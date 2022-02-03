import React from "react";
import "./product.css";

const Product = ({ title, link, img }) => {
  return (
    <div className="p" id="products">
      <div className="p-border">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-title">
            <p>{title}</p>
          </div>
        </div>
        <p>
          <a href={link} target="_blank" rel="noreferrer">
            <img src={img} alt="" className="p-img" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Product;
