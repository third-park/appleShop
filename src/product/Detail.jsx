import React from "react";
import style from "./detail.module.css"
import { useParams } from "react-router-dom";

function Detail({ shoes }) {

  const {productId} = useParams();
  let findProduct = shoes.find((e)=>e.id === +productId)
  return (
    <>
      <div className={style.container}>
        <div className="row">
          <div className={style.imgBox}>
            <img src={`https://codingapple1.github.io/shop/shoes${findProduct.id + 1}.jpg`} width="100%" alt=""/>
          </div>
          <div className="text-box">
            <h4 className="pt-5">{shoes[productId].title}</h4>
            <p>{findProduct.content}</p>
            <p>{findProduct.price}원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
