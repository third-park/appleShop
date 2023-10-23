import React from "react";
import style from "./detail.module.css"

function Detail() {
  return (
    <>
      <div className={style.container}>
        <div className="row">
          <div className={style.imgBox}>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="text-box">
            <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
