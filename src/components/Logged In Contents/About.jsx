import React from "react";
import { motion } from "framer-motion";

const About = () => {
  
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="bg-white p-6">
        <h1 className="text-4xl font-bold">About Us</h1>
      </header>
      <main className="p-6">
        <p className="text-gray-700 text-xl">
          Our organization is dedicated to making a positive impact in our
          community by providing support and resources to those in need.
        </p>
        <motion.div initial={{ x: 100 }} animate={{ x: 0 }}>
          <p className="text-gray-700 text-xl">
            We are a team of passionate individuals who believe that everyone
            deserves an equal opportunity for success.
          </p>
        </motion.div>
      </main>
    </motion.section>
  );
};

export default About;
