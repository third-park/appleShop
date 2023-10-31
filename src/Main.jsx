import React, { useState } from "react";
import style from "./main.module.css";
import data from "./data";
import ProductList from "./product/ProductList.jsx";
import { useNavigate } from "react-router-dom";

const Main = ({shoes}) => {
  const navigate = useNavigate();
  const naviLocation = (productId) => {
    navigate(`/detail/${productId}`);
  }

  return (
    <>
      <div className={style.mainImg}></div>
      <div className={style.listWrap}>
        <ul>
          {shoes.map((item) => {
            return <ProductList key={item.id} shoe={item} onClick={()=>naviLocation(item.id)}/>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Main;
