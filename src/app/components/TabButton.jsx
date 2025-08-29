import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button onClick={selectTab} className="group">
      <p
        className={`mr-3 font-semibold transition-colors duration-300 ${
          active
            ? "text-primary"
            : "text-textSecondary group-hover:text-primary"
        }`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
