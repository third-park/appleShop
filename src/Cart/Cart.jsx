import React from "react";
import style from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux"
import Table from "./Table";

const Cart = () => {

  const cartData = useSelector(state => state.cartData)
  
  return (
    <>
      <table>
        <thead>
          <tr className={style.tableTitle}>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          { cartData.map((item, index) => {
            return <Table key={index} data={item} />
          }) }
        </tbody>
      </table>
    </>
  );
};

export default Cart;
