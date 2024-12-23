import React from 'react'
import s from './Course.module.scss'
import { Link } from 'react-router-dom'

const Course = ( {title, text, link, imgSrc}  ) => {
  return (
     <>
     <div className={s.card}>
      <img className={s.img} src={imgSrc} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
      <Link to={link} className={s.link} >Подробнее</Link>
     </div>
     </>
  )
}

export default Course
