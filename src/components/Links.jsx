import React from "react";
import { motion } from "framer-motion";

let variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
let itemvariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  let items = ["Homepage", "Services", "Projects", "Contact"];
  return (
    <motion.div
      className="links"
      variants={variants}
      whileTap={{ scale: 0.95 }}
    >
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemvariants}
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
