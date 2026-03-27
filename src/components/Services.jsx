import React, { useRef } from "react";
import "../styles/services.scss";
import { color, motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  let ref = useRef();

  let isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textcontainer" variants={variants}>
        <p>
          From personal portfolios to small-scale business websites <br /> I
          turn ideas into fast, functional, and fully responsive web solutions
        </p>
        <hr />
      </motion.div>
      <motion.div className="tittlecontainer" variants={variants}>
        <div className="tittle">
          <img src="../../public/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Turning</motion.b> Ideas
          </h1>
        </div>
        <div className="tittle">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Into</motion.b> Projects
          </h1>
          <button>WHAT I DO ?</button>
        </div>
      </motion.div>
      <motion.div className="listcontainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend Development</h2>
          <p>
            I create modern, responsive, and visually polished user interfaces
            using React, Tailwind, and clean UI principles. My focus is on
            smooth interactions, clear layouts, and excellent user experience. I
            turn ideas into functional designs that work seamlessly across all
            devices, ensuring performance, accessibility, and an engaging visual
            presence on the web
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend Development</h2>
          <p>
            I develop secure, scalable, and reliable backend systems that power
            web applications. From building REST APIs to managing databases,
            authentication, and server logic, I ensure smooth data flow and
            strong performance. My backend solutions focus on stability, clean
            architecture, and efficient communication between clients, servers,
            and integrated third-party services.
          </p>
          <button>GO</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>FullStack Development</h2>
          <p>
            I build complete end-to-end web applications by combining a strong
            frontend experience with a robust backend foundation. From UI design
            and API development to deployment and optimization, I handle the
            full development cycle. My goal is to deliver fast, responsive, and
            production-ready solutions tailored to real-world needs and users.
          </p>
          <button>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
