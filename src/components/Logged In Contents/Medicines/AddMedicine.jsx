import React, { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const AddMedicine = ({ med, setMed,setQty,selectedDrug,setSelectedDrug }) => {
  useEffect(() => {
    axios
      .get(`http://localhost:5000/getmedicine`)
      .then(function (response) {
        setMed(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // const addToBack = (drugName,qty) =>{
  //   console.log("i was clicked")
  //   if(drugName){
  //     axios.post("http://localhost:5000/request",{
  //       drugName:drugName,
  //       qty:qty
  //     }).then(async (response) => {
  //       console.log('then');
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   }
  // }
  
  // const date1 = new Date("7/13/2010");
  // const date2 = new Date("12/15/2010");
  // const diffTime = Math.abs(date2 - date1);
  // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  // console.log(diffDays + " days");

  const diff = (exp) => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    var arr = exp.split('/')

    const formattedToday = mm + "/" + dd + "/" + yyyy;
    const formattedExp = arr[1] + "/" + arr[0] + "/" + arr[2];
    const date1 = new Date(formattedToday);
    const date2 = new Date(formattedExp);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="p-8 min-h-[90vh]">
      <div className="bg-gray-200 rounded-xl py-3 px-5 text-left">
        <div className="font-serif py-5 text-center font-semibold text-green-600 text-3xl">
          Medicine
        </div>
        {med.map((item) => {
          return (
            <div className="drop-shadow-xl flex flex-row my-2 py-4 px-6 bg-white">
              <div className="bg-white w-2/12">
                <div className="text-xs">Name</div>
                <div className="font-semibold">{item.drugName}</div>
              </div>
              <div className="bg-white w-5/12">
                <div className="text-xs">Details</div>
                <div className="font-semibold">{item.highlight}</div>
              </div>
              {/* <div className="bg-white w-8/12">
                <div className="text-xs">More Details</div>
                <div className="font-semibold">{item.snippet}</div>
              </div> */}
              <div className="bg-white w-[90px]">
                <div className="text-xs">Qty</div>
                <div className="font-semibold">{item.qty}</div>
              </div>
              <div className="bg-white w-[200px]">
                <div className="text-xs">Type</div>
                <div className="font-semibold">{item.qtySelected}</div>
              </div>
              <div className="bg-white w-[200px]">
                <div className="text-xs">Expiry Date</div>
                <div className="font-semibold">{item.exp}</div>
              </div>
              <div className="bg-white w-[100px] mx-3">
                <div className="text-xs">Days Remaining</div>
                <div className="font-semibold">{diff(item.exp)}</div>
              </div>
              <div onClick={()=> {
                setSelectedDrug(item.drugName)
                setQty(item.qty)
                }} className="bg-white my-auto h-fit w-[100px]">
                {/* <div className="text-xs">Expiry Date</div>
                <div className="font-semibold">{item.exp}</div> */}
                <NavLink to='/ngologin' className="text-white bg-green-600 p-2 rounded-md">
                  Request
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AddMedicine;
