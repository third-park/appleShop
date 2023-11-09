import React, { useRef, useState } from 'react';
import style from './tab.module.css';


let prevTarget;

const Tab = ({ setTab }) => {

  const onclick = (e) => {
    if (prevTarget) {
      prevTarget.classList.remove(style.active);
    }
    e.target.classList.add(style.active);
    prevTarget = e.target;
  };

  return (
    <>
      <section className={style.tabHead} onClick={onclick}>
        <div className={style.tabHead_item} onClick={()=>setTab(0)}>버튼0</div>
        <div className={style.tabHead_item} onClick={()=>setTab(1)}>버튼1</div>
        <div className={style.tabHead_item} onClick={()=>setTab(2)}>버튼2</div>
      </section>
    </>
  )
}

export default Tab