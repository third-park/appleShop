import React, { useState } from "react";
import style from "./main.module.css";
import data from "./data";
import ProductList from "./product/ProductList.jsx";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Main = ({shoes, setShoes}) => {
  const [count, setCount] = useState(0);

  const navigate = useNavigate();
  const naviLocation = (productId) => {
    navigate(`/detail/${productId}`);
  }

  const addList = async () => {
    try {
      let url = "";
      if(count === 0){
        url = "https://codingapple1.github.io/shop/data2.json";
      } else if(count === 1){
        url = "https://codingapple1.github.io/shop/data3.json";
      }

      const result = await axios.get(url);
      const newList = [...shoes, ...result.data];
      setShoes(newList);
      setCount(prevCount => prevCount + 1);

    } catch(error) {
      console.log("실패");
      console.error("요청실패: ", error);
    }
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
      {count < 2 && ( <button className={style.addButton} onClick={addList}>상품추가</button> )}
    </>
  );
};

export default Main;
