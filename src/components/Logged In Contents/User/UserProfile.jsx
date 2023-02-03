import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  usernameContext,
  passwordContext,
} from "../../../Navigation/Navigation";

const UserProfile = () => {
  const { username, setUsername } = useContext(usernameContext);
  const [medarray, setMedarray] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/donated?name=Krish`)
      .then(function (response) {
        // console.log(response.data);
        console.log(username);
        setMedarray(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    setUsername(localStorage.getItem("userName"));
  }, []);

  return (
    <div className="font-quicksand flex min-h-screen bg-gray-200">
      <div className="w-1/4 pl-3">
        <div className="bg-white my-3 py-1 px-3 pl-3 rounded-xl min-h-[83vh]">
          <div className="text-center mt-2 font-quicksand font-semibold text-xl -ml-1 mb-1">
            Profile page
          </div>
          <img
            className="mx-auto w-[170px] h-[170px] rounded-xl my-4"
            src="https://dreamvilla.life/wp-content/uploads/2017/07/dummy-profile-pic.png"
            alt=""
          />
          <div className="text-center font-quicksand font-semibold text-xl">
            {username || "User"}
          </div>
          <hr />
          <div>
            <div className="font-semibold font-quicksand mt-7">
              Badges Earned
            </div>
            {/* <div className="flex my-2 justify-evenly">
              <img className="w-[65px] rounded-lg" src={days10} alt="" />
              <img className="w-[65px] rounded-lg" src={days25} alt="" />
              <img className="w-[65px] rounded-lg" src={days50} alt="" />
              <img className="w-[65px] rounded-lg" src={days100} alt="" />
              <img className="w-[65px] rounded-lg" src={year1} alt="" />
            </div> */}
          </div>
          <div>
            <div className="font-semibold font-quicksand mx-auto w-fit my-7 flex">
              Your ZenCoins:
              <div className="flex ml-3">
                {/* {currentCoins} */} 1000
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 fill-yellow-400 stroke-yellow-700 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center">
              <NavLink
                to="/activities"
                className="bg-green-600 text-white hover:bg-green-700 font-quicksand transition ease-in rounded-xl font-semibold py-3 px-6"
              >
                Earn more ZenCoins
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="w-3/4 p-3">
        <div className="bg-white min-h-[187px] mb-3 p-3 rounded-xl">
          <div className="font-semibold text-xl">
            Medicines donated till now
          </div>
          <div className="font-semibold text-xl mb-1">
            <div className="">
              {medarray.map((item1) => {
                return (
                  <div className="flex flex-row drop-shadow-xl text-left border-2 p-4 m-4">
                    <div className="w-4/12 px-2">
                      <div className="text-xs">Medicine name</div>
                      <div className="font-semibold text-left">
                        {item1.drugName}
                      </div>
                    </div>
                    <div className="w-1/12 px-2">
                      <div className="text-xs">Qty</div>
                      <div className="font-semibold text-left">{item1.qty}</div>
                    </div>
                    <div className="w-2/12 px-2">
                      <div className="text-xs">Type</div>
                      <div className="font-semibold text-left">
                        {item1.qtySelected}
                      </div>
                    </div>
                    <div className="w-8/12 px-2">
                      <div className="text-xs">Medicine info</div>
                      <div className="font-semibold text-left">
                        {item1.highlight}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <Task currentCoins={currentCoins} setCurrentCoins={setCurrentCoins} /> */}
        </div>
        <div className="flex flex-row w-full">
          <NavLink
            to="/donate"
            className="bg-white w-full pt-1 pb-3 px-3 rounded-xl"
          >
            <div className="font-semibold text-center text-xl mt-3 mx-2">
              Donate
            </div>
            <img
              className="h-[170px] object-contain cursor-pointer mx-auto"
              src="https://img.freepik.com/free-vector/volunteers-packing-donation-boxes_74855-5299.jpg?w=2000"
              alt=""
            />
          </NavLink>
          <NavLink
            to="/addmedicine"
            className="bg-white w-full pt-1 pb-3 px-3 rounded-xl ml-3"
          >
            <div className="font-semibold text-center text-xl mt-3 mx-2">
              Receive/Shop
            </div>
            <img
              className="object-contain mx-auto h-[170px] cursor-pointer"
              src="https://img.freepik.com/free-vector/doctor-giving-pills-happy-couple-patients-smiling-male-medical-specialist-prescribing-tablets-medications-man-woman-clients-future-parents-family-consultation-flat-illustration_74855-20539.jpg?size=626&ext=jpg&ga=GA1.2.1609566873.1675400200"
              alt=""
            />
          </NavLink>
          <NavLink
            to="/volunteer"
            className="bg-white w-full pt-1 pb-3 px-3 rounded-xl ml-3"
          >
            <div className="font-semibold text-center text-xl mt-3 mx-2">
              Volunteer
            </div>
            <img
              className="object-contain mx-auto h-[170px] cursor-pointer"
              src="https://kalamfoundation.org/wp-content/uploads/2021/05/people-volunteering-donating-money_53876-43052.jpg"
              alt=""
            />
          </NavLink>
          <NavLink
            to="/home"
            className="bg-white w-full pt-1 pb-3 px-3 rounded-xl ml-3"
          >
            <div className="font-semibold text-center text-xl mt-3 mx-2">
              Community
            </div>
            <img
              className="object-contain mx-auto h-[170px] cursor-pointer"
              src="https://img.freepik.com/free-vector/community-concept-illustration_114360-1021.jpg?w=2000"
              alt=""
            />
          </NavLink>
          <NavLink
            to="/requestmedicine"
            className="bg-white w-full pt-1 pb-3 px-3 rounded-xl ml-3"
          >
            <div className="font-semibold text-center text-xl mt-3 mx-2">
              Request Medicines
            </div>
            <img
              className="object-contain mx-auto h-[120px] cursor-pointer"
              src="https://img.freepik.com/free-vector/two-tiny-guys-masks-holding-giant-pills_74855-14191.jpg?size=626&ext=jpg&ga=GA1.2.1609566873.1675400200&semt=ais"
              alt=""
            />
          </NavLink>
        </div>
        {/* <br />
        <div className="bg-white min-h-[187px] mb-3 p-3 rounded-xl">
          <div className="font-semibold text-xl">Request Medicines</div>

          <div className="p-5 space-x-5">
            <input
              type="text"
              className="border-2 p-3 w-[20vw]"
              placeholder="Enter Name"
            />
            <input
              type="text"
              className="border-2 p-3 w-[20vw]"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <button className="bg-green-600 text-white hover:bg-green-700 font-quicksand transition ease-in rounded-xl font-semibold py-3 px-6">
              Check Availibility
            </button>
          </div>
        </div> */}
      </div>
    </div>
    //</div>
  );
};

export default UserProfile;
