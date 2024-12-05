import React from 'react'
import s from './Header.module.scss';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
    
    <div className={s.header}>
      <div className="container">
     <nav className={s.nav}>


         <Link to={'/'} className={s.logo}>
          <img src="/logo.svg" alt="" className={s.logo_img} />
          <h3>ANALOGUE &copy; 2024</h3>
         </Link>

       <div className={s.links}>
       <Link to={'/'}>WORK</Link>
       <Link to={'/'}>SERVICES</Link>
       <Link to={'/'}>STUDIO</Link>
       <Link to={'/'}>SHOP</Link>

       </div>

       <div className={s.connect}>
       <button class={s.playful_btn}>CONNECT</button>
       </div>


     </nav>
    </div>
    </div>
    </>
  )
}

export default Header