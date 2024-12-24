// import React, { useState } from 'react';
// import { motion } from "framer-motion";
// import s from './Cursi.module.scss';

// const Section = () => {
//   const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e) => {
//     const x = (e.clientX / window.innerWidth) * 100;
//     const y = (e.clientY / window.innerHeight) * 100;
//     setBackgroundPosition({ x, y });
//   };

//   return (
//     <section
//       className={s.section}
//       onMouseMove={handleMouseMove}
//       style={{
//         backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
//       }}
//     >
//       <div className={s.content}>
//         <div className={s.text}>
//         <h1 className={s.heading}>Курс Веб Программирования</h1>
//         <p className={s.description}>
//           Изучите самые актуальные технологии веб-разработки и станьте мастером своего дела.
//         </p>
//         </div>

//      {/* <button className={s.btn}>Подробнее</button> */}
//      <motion.div className={s.container}>
//       <motion.button
//         className={s.btn}
//         initial={{ scale: 1, boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)" }}
//         whileHover={{
//           scale: 1.2,
//           rotate: [0, 10, -10, 0], // Немного "прыгает" при наведении
//           boxShadow: "0px 0px 40px rgba(255, 255, 255, 0.9)",
//         }}
//         whileTap={{
//           scale: 0.9,
//           backgroundColor: "rgba(255, 255, 255, 0.3)",
//         }}
//         transition={{
//           duration: 0.4,
//           ease: "easeInOut",
//           repeatType: "reverse",
//         }}
//       >
//         Курс мечты
//       </motion.button>

//       {/* "Взрыв" частиц */}
 
//     </motion.div>
//       </div>
    

//     </section>
//   );
// };

// export default Section;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import s from './Cursi.module.scss';

const Section = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setBackgroundPosition({ x, y });
  };

  const particles = Array.from({ length: 10 }, (_, i) => i);

  return (
    <section
      className={s.section}
      onMouseMove={handleMouseMove}
      style={{
        backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
      }}
    >
      <motion.div
        className={s.content}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut', staggerChildren: 0.2 }}
      >
        <motion.div className={s.text} initial={{ x: '-100%' }} animate={{ x: 0 }}>
          <h1 className={s.heading}>Курс Веб Программирования</h1>
          <p className={s.description}>
            Изучите самые актуальные технологии веб-разработки и станьте мастером своего дела.
          </p>
        </motion.div>
        <motion.div
          className={s.container}
          whileHover={{
            scale: 1.1,
            rotate: 3,
          }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <motion.button
            className={s.btn}
            whileHover={{
              scale: 1.2,
              rotate: [0, 5, -5, 0],
              boxShadow: '0px 0px 20px rgba(255, 255, 255, 0.9)',
            }}
            whileTap={{
              scale: 0.9,
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
            }}
            onClick={() => {
              const particlesContainer = document.getElementById('particles');
              if (particlesContainer) {
                particlesContainer.classList.add(s.animateParticles);
                setTimeout(() => particlesContainer.classList.remove(s.animateParticles), 1000);
              }
            }}
          >
            Курс мечты
          </motion.button>
          <div id="particles" className={s.particles}>
            {particles.map((_, i) => (
              <motion.span
                key={i}
                className={s.particle}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1.5,
                  x: (Math.random() - 0.5) * 200,
                  y: (Math.random() - 0.5) * 200,
                }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section;
