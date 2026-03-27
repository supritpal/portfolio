import React, { useState } from "react";
import Links from "./Links";
import Toddlebutton from "./Toddlebutton";
import { motion } from "framer-motion";
import "../styles/sidebar.scss";

const Sidebar = () => {
  let [open, setopen] = useState(false);

  let variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <Toddlebutton setopen={setopen} />
    </motion.div>
  );
};

export default Sidebar;
