import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AnimationTest = () => {
  return (
    <div>
      <div>Let me see</div>
      <div>
        <motion.div
          className="bg-white rounded-lg p-6 border-2 border-green-600"
          style={{ backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
          animate={{
            y: [-50, 50],
            rotate: [0, 10, -10, 10, 0],
            transition: {
              duration: 8,
              ease: "easeInOut",
              loop: Infinity,
              repeatDelay: 1,
            },
          }}
        >
          <p>This element will move in a parallax scrolling effect</p>
        </motion.div>
      </div>
      <div>Let me see</div>
    </div>
  );
};

export default AnimationTest;
