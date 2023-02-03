import axios from "axios";
import React, { useEffect, useState } from "react";

const NGO = ({ med, setMed }) => {
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
  //
  const [current, setCurrent] = useState("ShareMeds");
  const [reqMed, setReqMed] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/medicinerequests`)
      .then(function (response) {
        setReqMed(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const [curr, setCurr] = useState(true);
  // const [first, setfirst] = useState(second)

  const [currarray, setCurrarray] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/getmedicine`)
      .then(function (response) {
        console.log(response.data);
        setCurrarray(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-gray-200 p-5">
      <div className="bg-white drop-shadow-xl flex rounded-xl flex-row">
        <div className="min-h-[60vh] w-[40vw] py-5 px-4">
          <div className="text-2xl font-bold text-green-600 mb-5">Groups</div>
          <div
            onClick={() => setCurrent("ShareMeds")}
            // className="cursor-pointer w-full transition ease-in hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6"
            className={`${
              current == "ShareMeds" ? "bg-green-400" : ""
            } cursor-pointer w-full transition ease-in my-4 hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6`}
          >
            ShareMeds
          </div>
          <div
            onClick={() => setCurrent("MediCare")}
            // className="my-4 cursor-pointer w-full transition ease-in hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6"
            className={`${
              current == "MediCare" ? "bg-green-400" : ""
            } cursor-pointer w-full transition ease-in my-4 hover:bg-green-400 font-semibold rounded-lg border-2 border-green-600 py-2 px-6`}
          >
            MediCare
          </div>
        </div>
        <div className=" border-l-2 min-h-[60vh] w-full p-5">
          <div className="w-full font-semibold rounded-lg border-2 border-green-600 py-2 px-6">
            {current}
          </div>
          <div className="flex flex-row my-5">
            <div className="w-full mr-2">
              <div className="cursor-pointer text-sm font-semibold hover:bg-green-600 w-full bg-green-500 text-white py-2 rounded-md mx-1">
                Currently Available
              </div>
              <div>
                {currarray &&
                  currarray.map((item) => {
                    return (
                      <div className="flex flex-row space-x-2 border-2 border-green-600 rounded-md my-3 p-2">
                        <div className="w-1/3 text-left">{item.drugName}</div>
                        <div className="w-1/3 ">{item.qty}</div>
                        <div className="w-1/3 text-left">{item.exp}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="w-full mr-2">
              <div className="cursor-pointer text-sm font-semibold hover:bg-green-600 w-full bg-green-500 text-white py-2 rounded-md mx-1">
                Required
              </div>
              <div>
                {reqMed &&
                  reqMed.map((item) => {
                    return (
                      <div className="flex flex-row space-x-2 border-2 border-green-600 rounded-md my-3 p-2">
                        <div className="w-1/3 text-left">{item.reqMed}</div>
                        <div className="w-1/3">{item.phone}</div>
                        <div className="w-1/3">{item.name}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="w-full mr-2">
              <div className="cursor-pointer text-sm font-semibold hover:bg-green-600 w-full bg-green-500 text-white py-2 rounded-md mx-1">
                Delivery Request
              </div>
              <div>
                {data &&
                  data.map((item) => {
                    return (
                      <div className="flex flex-row space-x-2 border-2 border-green-600 rounded-md my-3 p-2">
                        <div className="w-1/3 text-left">{item.drugName}</div>
                        <div className="w-1/3 ">{item.qty}</div>
                        <div className="w-1/3 text-left">{item.name}</div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default NGO;
