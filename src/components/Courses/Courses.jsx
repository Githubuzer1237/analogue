
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import s from './Courses.module.scss';
// import Course from '../Course/Course';

// const Courses = () => {
//   return (
//     <div className={s.courses}>
//       <div className="big_container">
//         <h1 id='courses' className={s.title}>Наши курсы</h1>
//         <div className={s.wrapper}>
//           <Swiper
//             spaceBetween={30} 
//             slidesPerView={2.5}
//             loop 
//             breakpoints={{
//                 1200: {
//                     slidesPerView: 2.5,
//                     spaceBetween: 30,
//                   },
//                 800: {
//                   slidesPerView: 2,
//                   spaceBetween: 30,
//                 },

//                 480: {
//                   slidesPerView: 1,
//                   spaceBetween: 15,
//                 },
//                 0: {
//                   slidesPerView: 1,
//                   spaceBetween: 10,
//                 },
//               }}
//           >
//             <SwiperSlide>
//               <Course link="/" imgSrc={'/webprog.jpg'} title="Веб программирование" text="Освой профессию FRONT-END РАЗРАБОТЧИКА" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Course link="/" imgSrc={'/scratch.png'} title="Детские IT курсы" text="ПЕРВЫЕ ШАГИ В IT ДЛЯ ДЕТЕЙ ОТ 8 ДО 13 ЛЕТ" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Course link="/" imgSrc={'/python.jpg'} title="Python" text="Один из самых востребованых языков программирования" />
//             </SwiperSlide>
//             <SwiperSlide>
//               <Course link="/" imgSrc={'/dyzayn.png'} title="Графический дизайн" text="Научись создавать креативные проекты" />
//             </SwiperSlide>
//             {/* Добавьте еще слайды при необходимости */}
//           </Swiper>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Courses;
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import s from './Courses.module.scss';
import Course from '../Course/Course';



const Courses = () => {
  const swiperRef = useRef(null); 

  const handleRightClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); 
    }
  };

  return (
    <div className={s.courses}>
      <div className="big_container">
        <h1 id="courses" className={s.title}>Наши курсы</h1>
        <div className={s.wrapper}>
          <div className={s.rightArea} onClick={handleRightClick}></div>

          <Swiper
            ref={swiperRef} 
            spaceBetween={30}
            slidesPerView={2.5}
            loop
            breakpoints={{
              1200: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              800: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            }}
          >
            <SwiperSlide>
              <Course link="/" imgSrc={'/webprog.jpg'} title="Веб программирование" text="Освой профессию FRONT-END РАЗРАБОТЧИКА" />
            </SwiperSlide>
            <SwiperSlide>
              <Course link="/" imgSrc={'/scratch.png'} title="Детские IT курсы" text="ПЕРВЫЕ ШАГИ В IT ДЛЯ ДЕТЕЙ ОТ 8 ДО 13 ЛЕТ" />
            </SwiperSlide>
            <SwiperSlide>
              <Course link="/" imgSrc={'/python.jpg'} title="Python" text="Один из самых востребованных языков программирования" />
            </SwiperSlide>
            <SwiperSlide>
              <Course link="/" imgSrc={'/dyzayn.png'} title="Графический дизайн" text="Научись создавать креативные проекты" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Courses;
