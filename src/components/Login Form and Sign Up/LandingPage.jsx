import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";
import { motion } from "framer-motion";
const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 300);
  }, []);

  return (
    <div>
      {/* {loading && (
        <div className="min-h-screen w-[100vw] pt-[30vh] bg-blac">
          <PacmanLoader
            loading={true}
            color="red"
            size={70}
            className="mx-[42vw] inline-block"
          />
          <div className="text-red-600 text-4xl font-semibold mt-20">
            Loading ...
          </div>
        </div>
      )} */}
      {!loading && (
        <div>
          {/* <NavLink className="bg-red-600 block text-white p-2 m-5" to="/login">
            Go to Login Page
          </NavLink> */}
          <div>
            <div className="min-h-[90vh] bg-gray-100">
              <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                    class="lg:flex-grow md:w-1/2 pl-5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
                  >
                    <p class="mb-8 font-serif text-8xl font-bold text-green-600">
                      Good Medicine for Good Health
                    </p>
                    <h1 class="mb-4 ml-2 text-2xl font-medium text-green-700">
                      Medicines for everyone, delivered to your doorstep.
                    </h1>
                    <div class="flex w-full md:justify-start justify-center items-end">
                      <br />
                      <br />
                      <br />
                      <br />
                      <NavLink
                        to="/login"
                        className="shadow-xl inline-flex transition ease-in font-semibold text-2xl text-white bg-green-600 border-0 py-3 px-6 focus:outline-none hover:bg-green-400 rounded-md"
                      >
                        Get Started
                      </NavLink>
                    </div>
                  </motion.div>
                  <div class="lg:max-w-lg pr-5 lg:w-full md:w-1/2 w-5/6">
                    <img
                      class="drop-shadow-2xl object-cover object-center rounded"
                      alt="hero"
                      src="http://clipart-library.com/images_k/doctor-transparent-background/doctor-transparent-background-5.png"
                    />
                  </div>
                </div>
              </section>
            </div>
          </div>
          {/* // About us */}
          <div className="">
            <section class="min-h-[90vh] text-gray-600 bg-green-400 body-font">
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                  class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
                >
                  <img
                    class="object-cover object-center shadow-2xl rounded-3xl h-[40vh] w-[40vw] mt-32"
                    alt="hero"
                    src="https://cdn.dribbble.com/users/1450874/screenshots/14691183/media/f6e87b3caa3bc8ce90dbfb7af515fad6.jpg?compress=1&resize=400x300&vertical=top"
                  />
                </motion.div>
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3,
                    ease: "easeOut",
                  }}
                  class="mt-32 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
                >
                  <h1 class="title-font text-6xl mb-4 font-medium text-white ml-16">
                    About Us
                  </h1>
                  <p class="mb-8 text-2xl text-white leading-relaxed ml-16">
                    India's Pharmaceutical industry loses around Rs. 5 billion
                    annually on account of destruction of expired drugs, hitting
                    the bottom line of drug manufacturers. MediCare aims to
                    combat this problem by creating a market for unused
                    medicines.
                  </p>
                  <div class="flex justify-center">
                    <button class="shadow-xl ml-16 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:text-white font-semibold rounded text-lg duration-500">
                      - Learn More -
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>
          </div>
          <section className="flex flex-row p-2.5 bg-green-100 min-h-[80vh]">
            <div className="shadow-2xl mt-[20vh] border-green-100 bg-white box-border h-[50vh] w-[25vw] p-4 border-8 rounded-3xl hover:bg-green-200 duration-500">
              <div className="text-4xl text-green-600 font-bold mt-14">
                10 years
              </div>
              <br />

              <div className="p-5 text-2xl text-gray-600 font-semibold">
                <p>of serving your medical needs and helping out NGOs.</p>
              </div>
            </div>
            <div className="shadow-2xl mt-[20vh] border-green-100 bg-white box-border h-[50vh] w-[25vw] p-4 border-8 rounded-3xl hover:bg-green-200 duration-500">
              <div className="text-4xl text-green-600 font-bold mt-14">
                10,000+ reviews
              </div>
              <br />
              <div className="p-5 text-2xl text-gray-600 font-semibold">
                <p>by satisfied customers and volunteers.</p>
              </div>
            </div>
            <div className="shadow-2xl mt-[20vh] border-green-100 bg-white box-border h-[50vh] w-[25vw] p-4 border-8 rounded-3xl hover:bg-green-200 duration-500">
              <div className="text-4xl text-green-600 font-bold mt-14">
                Hundreds
              </div>
              <br />
              <div className="p-5 text-2xl text-gray-600 font-semibold">
                <p>of verified recommendations by doctors.</p>
              </div>
            </div>
            <div className="shadow-2xl mt-[20vh] border-green-100 bg-white box-border h-[50vh] w-[25vw] p-4 border-8 rounded-3xl hover:bg-green-200 duration-500">
              <div className="text-4xl text-green-600 font-bold  mt-14">12</div>
              <br />
              <div className="p-5 text-2xl text-gray-600 font-semibold">
                <p>awards given to the website for efficient design.</p>
              </div>
            </div>
          </section>
          <section className="bg-gray-100 p-5">
            <h1 class="title-font sm:text-6xl text-center text-6xl mb-8 font-medium text-green-700 p-5">
              How it Works:
              <div className="flex flex-row space-x-4 mx-auto text-left mt-8">
                <div className="bg-white shadow-xl rounded-3xl p-5">
                  1.
                  <div>
                    <img
                      src="http://sirum.org/wp-content/uploads/2022/07/hospital-1.png"
                      class="max-w-full h-auto mt-8"
                      alt="..."
                    />
                  </div>
                  <div className="text-green-500 text-xl w-[27vw] mt-12">
                    Individuals and organizations donate their surplus medicine
                    instead of destroying it.
                  </div>
                </div>
                <div className="bg-white shadow-xl rounded-3xl p-5">
                  2.
                  <div>
                    <img
                      src="https://img.freepik.com/premium-vector/medicine-donation-box-2d-vector-isolated-illustration-medical-supplies-drugs-healthcare-humanitarian-aid-flat-composition-cartoon-background-charity-contribution-colourful-scene_151150-6594.jpg?w=2000"
                      class="w-[40vw] h-auto"
                      alt="..."
                    />
                  </div>
                  <div className="text-green-500 text-xl w-[27vw]">
                    MedAid matches donated medicine to community partners who
                    need it.
                  </div>
                </div>
                <div className="bg-white shadow-xl rounded-3xl p-5">
                  3.
                  <div>
                    <div>
                      <img
                        src="http://sirum.org/wp-content/uploads/2022/07/pharm-1.png"
                        class="max-w-full h-auto"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="text-green-500 text-xl w-[27vw]">
                    Community partners provide donated medicine to patients who
                    otherwise wouldn’t have access.
                  </div>
                </div>
              </div>
            </h1>
          </section>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
