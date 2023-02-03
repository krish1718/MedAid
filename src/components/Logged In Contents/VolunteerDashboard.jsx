import axios from "axios";
import React, { useEffect, useState } from "react";

const VolunteerDashboard = () => {
  const [data, setData] = useState([
    {
      drugName: "Dolo2000",
      qty: "3",
      phone: "9999887676",
      dAddress: "Good morning this is an adress",
      rAddress: "Good morning this is a receiver adress",
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/delivery")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="min-h-screen">
      <div className="text-4xl text-green-600 my-10 font-semibold">
        Volunteer Dashboard
      </div>
      {/* // 
      available deliveries
      completed delivery
      */}
      <div>
        {data.map((item1) => {
          return (
            <div className="flex flex-row drop-shadow-xl text-left border-2 p-4 m-4">
              <div className="w-2/12 px-2">
                <div className="text-xs">Medicine name</div>
                <div className="font-semibold text-left">{item1.drugName}</div>
              </div>
              <div className="w-1/12 px-2">
                <div className="text-xs">Qty</div>
                <div className="font-semibold text-left">{item1.qty}</div>
              </div>
              <div className="w-4/12 px-2">
                <div className="text-xs">Receiver's name</div>
                <div className="font-semibold text-left">{item1.name}</div>
              </div>
              <div className="w-4/12 px-2">
                <div className="text-xs">Receiver's Address</div>
                <div className="font-semibold text-left">{item1.address}</div>
              </div>
              <div className="w-2/12 px-2">
                <div className="text-xs">Contact info</div>
                <div className="font-semibold text-left">{item1.phone}</div>
              </div>
              <div className="w-2/12 px-2">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-2 stroke-green-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 stroke-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VolunteerDashboard;
