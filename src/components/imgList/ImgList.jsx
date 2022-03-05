import "../imgList/imgList.css";
import Product from "../product/Product";
import React from "react";
import { data } from "../../data";

const ImgList = () => {
  return (
    <div className="pl" id="productlist">
      <div className="pl-texts">
        <h1 className="pl-title">Project Link</h1>
        <p className="pl-desc">
          Här har jag lagt några bilder, från GitHub, Linkedin och skolan
          (kyh.se)
        </p>
      </div>
      <div className="pl-list">
        {data.map((data) => {
          return <Product key={data.id} {...data}></Product>;
        })}
      </div>
    </div>
  );
};

export default ImgList;
