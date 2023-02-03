import React from "react";
import { motion, useScroll } from "framer-motion";
import { Modal } from "@mui/material";
import About from "./About";
// import ChatBot from "./ChatBot";
// import AnimationTest from "./AnimationTest";
import Community from "./Community";
import Community2 from "./Community2";

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // On scroll
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <div>
        <Community2 />
      </div>

      {/* <motion.div
        className="progress-bar sticky z-30 top-0 left-0 right-0 h-[10px] origin-left bg-green-600"
        style={{ scaleX: scrollYProgress }}
      /> */}
      {/* // Modal start */}
      {/* <div className="bg-black min-h-[]">
        <button
          className="text-white border border-white rounded-full p-3"
          onClick={handleOpen}
        >
          Open Child Modal
        </button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              // position: 'absolute' as 'absolute',
              top: "100%",
              left: "50%",
              // transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              pt: 2,
              px: 4,
              pb: 3,
            }}
            className="bg-white translate-x-1/2 translate-y-1/2 p-3 rounded-xl"
          >
            <h2 id="child-modal-title" className="text-xl font-bold">
              Text in a child modal
            </h2>
            <p id="child-modal-description" className="my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <button
              className="border border-black rounded-full p-3"
              onClick={handleClose}
            >
              Close Child Modal
            </button>
          </motion.div>
        </Modal>
      </div> */}
      {/* // Modal end */}
      {/* <div className="min-h-screen">
        <div className="p-4">
          <div className="my-4 space-x-8 flex flex-row">
            <div className="border w-1/5 h-[125px]"></div>
            <div className="border w-1/5 h-[125px]"></div>
            <div className="border w-1/5 h-[125px]"></div>
            <div className="border w-1/5 h-[125px]"></div>
          </div>
          <div className="my-4 space-x-8 flex flex-row">
            <div className="border w-1/5 h-[125px]"></div>
            <div className="border w-1/5 h-[125px]"></div>
            <div className="border w-1/5 h-[125px]"></div>
            <div className="border w-1/5 h-[125px]"></div>
          </div>
          <div className="flex flex-row">
            <div className="w-1/2">
              <div>graph</div>
            </div>
            <div className="w-1/2">
              <div>today's report</div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div>
        <About />
      </div> */}
    </div>
  );
};

export default Home;
