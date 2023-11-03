import React, { useEffect, useRef, useState } from "react";
import style from "./detail.module.css"
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../NotFound";

function Detail({ shoes }) {
  const navigate = useNavigate(); 
  const {productId} = useParams();
  let findProduct = shoes.find((e)=>e.id === +productId)
  
  const [num, setNum] = useState('');
  const [alert, setAlert] = useState(true)

  useEffect(()=>{
    if(isNaN(num) === true){
      prompt('숫자작성해주')
    }
  },[num])

  useEffect(()=>{
    const stateCheck = setTimeout(()=>{
      setAlert(false)
    },2000)

    return () => {
      clearTimeout(stateCheck);
    }
  },[])

  
  if(!findProduct){
    return <NotFound />
  }

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
            <input type="text" className={style.input} onChange={((e)=>{ setNum(e.target.value) })} />
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
        {alert === true ? <div className={style.sale}>깜짝세일</div> : null}
      </div>
    </>
  );
}

export default Detail;
