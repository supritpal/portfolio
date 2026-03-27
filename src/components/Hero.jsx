import React from "react";
import "../styles/hero.scss";
import { motion } from "framer-motion";

let textvariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
let slidevariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 5,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textcontainer"
          variants={textvariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textvariants}>Suprit Pal</motion.h2>
          <motion.h1 variants={textvariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.div variants={textvariants} className="buttons">
            <motion.button
              variants={textvariants}
              onClick={() => {
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              see the latest work
            </motion.button>

            <motion.button
              variants={textvariants}
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textvariants}
            animate="scrollButton"
            src="../../public/scroll (1).png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingtextcontainer"
        variants={slidevariants}
        initial="initial"
        animate="animate"
      >
        WEB DEVELOPER
      </motion.div>
      {/* <div className="imagecontainer">
        <img src="../../public/hero (1).png" alt="pfp" />
      </div> */}
    </div>
  );
};

export default Hero;
