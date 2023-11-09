import React from "react";
import style from "../Cart/Cart.module.css"
import { increaseCount } from "../store";
import { useDispatch } from "react-redux";

const Table = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <tr className={style.tableContents}>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.count}</td>
        <td>
          <button onClick={()=>dispatch(increaseCount(data.id))}>추가</button>
        </td>
      </tr>
    </>
  );
}

export default Table