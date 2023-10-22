import React, { useState } from "react";
import style from "./main.module.css";
import data from "./data";
import ProductList from "./product/ProductList.jsx";

const Main = () => {
  const [shoes, setshoes] = useState(data);

  return (
    <>
      <div className={style.mainImg}>하이</div>
      <div className={style.listWrap}>
        <ul>
          {shoes.map((item) => {
            return <ProductList key={item.id} shoe={item} />;
          })}
        </ul>
      </div>
    </>
  );
};

export default Main;
