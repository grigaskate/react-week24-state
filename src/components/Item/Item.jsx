import st from './style.module.scss'
import React, { useState } from "react";

export default function Item({item: {color, flag, rate, speed}}) {
  const [pressed, setPressed] = useState(false);
  const size = `${pressed ? st.containerPressed : st.container}`

  const handleChange=()=>{
    setPressed(!pressed);
  }

  return (
    <div onClick={handleChange} className={`${st[color]} ${size}`}>
      <div className={st.name}>Безлимитный {rate}</div>
      <div className={st.price}>{rate}</div>
      <div className={st.rub} >руб/мес</div>
      <div className={st.speed}>до {speed} Мбит/сек</div>
      <div className={st.description}>Объем включенного трафика не ограничен</div>
    </div>
  )
}