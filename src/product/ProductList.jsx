import React from "react";
import style from "../main.module.css";

const ProductList = ({ shoe }) => {
  return (
    <>
      <li className={style.item}>
        <img src={`https://codingapple1.github.io/shop/shoes${shoe.id + 1}.jpg`} width="80%" alt="" />
        <h4>{shoe.title}</h4>
        <p>{shoe.content}</p>
      </li>
    </>
  );
};

export default ProductList;
