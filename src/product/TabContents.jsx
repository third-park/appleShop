import React, { useEffect, useState } from 'react'
import style from './tab.module.css';

const TabContents = ({ tab }) => {
  const [fadeIn, setFadein] = useState('');

    useEffect(()=>{
      const timer = setTimeout(()=>{
        setFadein('end');
      }, 100);

      return ()=>{
        clearTimeout(timer);
        setFadein('start');
      }
    }, [tab])

    if(tab === 0){
      return (
      <div className={`${style.tabContent} ${style[fadeIn]}`}>tab0</div>
      )
    }else if(tab === 1){
      return (
      <div className={`${style.tabContent} ${style[fadeIn]}`}>tab1</div>
      )
    }else if(tab === 2){
      return (
      <div className={`${style.tabContent} ${style[fadeIn]}`}>tab2</div>
      )
    }
  }


export default TabContents