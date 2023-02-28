import React from 'react'
import styles from "./styles.module.scss"
import { BiRightArrowAlt } from 'react-icons/bi'
const CircledIconButton = ({type,text}) => {
  return (
    <button type={type} className={styles.btn}>
      {text}
      <div className={styles.svg__wrap}>
        <BiRightArrowAlt />
      </div>
    </button>
  )
}

export default CircledIconButton