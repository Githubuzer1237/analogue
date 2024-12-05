import React from 'react'
import s from './Hero.module.scss';
const Hero = () => {
  return (
    <>
    <div className="container">
      <div className={s.wrapper}>
      <img className={s.anal} src="/analogue.png" alt="" />
       

        <div className={s.text}>
         <p> A seriously 
<button className={s.playful_btn}>PLAYFUL</button>   
<span className={s.brand}>brand</span>
  and motion <img className={s.img} src="/strelks.svg" alt="" /> <br /> <br />
<span className={s.studio}>studio</span> combining fresh-forward 
 thinking <br />
and 
 beautifully crafted creative to help <br />
 brands  build <img className={s.img} src="finger.svg" alt="" />
 fandom <span className={s.world}>worldwide <img className={s.orbit} src="orbit.gif" alt="" /> </span>
 
</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero