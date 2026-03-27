import React, { useRef, useTransition } from "react";
import "../styles/parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  let ref = useRef();

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  let ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  let ytext = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: ytext }}>
        {type === "services" ? "What I do " : "What I did"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: ybg,
          backgroundImage: `url(${
            type === "services"
              ? "../../public/planets (1).png"
              : "../../public/sun (1).png"
          })`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: ybg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
