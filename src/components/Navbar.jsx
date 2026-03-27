import React from "react";
import "../styles/navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Suprit Pal
        </motion.span>
        <div className="social">
          <a
            href="https://github.com/supritpal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/github.png" alt="facebok" />
          </a>
          <a
            href="https://www.instagram.com/supritpal_07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/suprit-pal/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
