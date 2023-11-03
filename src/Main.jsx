import React, { useState } from "react";
import style from "./main.module.css";
import data from "./data";
import ProductList from "./product/ProductList.jsx";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Main = ({shoes, setShoes}) => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const naviLocation = (productId) => {
    navigate(`/detail/${productId}`);
  }

  const addList = () => {
 axios
   .get("https://codingapple1.github.io/shop/data2.json")
   .then((result) => {
     let newList = [...shoes, ...result.data];
     setShoes(newList);
   })
   .catch((error) => {
     console.log("실패");
     console.error("요청실패: ", error);
   });
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
        <button className={style.addButton} onClick={()=>{ setCount(prevCount => prevCount + 1) }}>상품추가</button>
    </>
  );
};

export default Main;
