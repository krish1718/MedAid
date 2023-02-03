import React, { useState, useEffect } from "react";
import axios from "axios";

const NgoLogin = ({selectedDrug,ph,setPh,rAdd,setRAdd,qty}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [clicked, setClicked] = useState(false);
    useEffect(() => {
        if (name && email && phone && address) {
          console.log(name, email);
          axios.post("http://localhost:5000/userinfo", {
            name: name,
            email: email,
            phone: phone,
            address: address,
            qty:qty,
            drugName:selectedDrug
          })
          .then(async (response) => {
            console.log('then');
          })
          .catch((error) => {
            console.log(error);
          });
        }
      }, [clicked]);
    return (<>
    <div className="flex ">
          <div className="md:w-1/2 px-16 py-8">
            <h1 className="text-3xl text-green-600 font-bold mb-4">
            Enter the following details to receive orders
          </h1>
          <div className="bg-white px-16 text-left p-4 shadow-xl">
            <form>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-md border border-green-600 p-2"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded-md border border-green-600 p-2"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full rounded-md border border-green-600 p-2"
                  type="text"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="address">
                  Address
                </label>
                <textarea
                  className="w-full rounded-md border border-green-600 p-2"
                  id="address"
                  name="address"
                  rows="4"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  setClicked(!clicked);
                  setPh(phone);
                  setRAdd(address);
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/premium-vector/ngo-nongovernmental-organization-serve-specific-social-template-hand-drawn-illustration_2175-7898.jpg?w=2000"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default NgoLogin;
