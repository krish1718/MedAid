import React, { useState, useEffect } from "react";
import axios from "axios";

const RequestMedicine = () => {
  const [reqMed,setReqMed] = useState("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) => {
    setClicked(!clicked);
    e.preventDefault();
  };
  useEffect(() => {
    if (name && email && phone && address) {
      console.log(name, email);
      axios
        .post("http://localhost:5000/reqmed", {
          reqMed:reqMed,
          name: name,
          email: email,
          phone: phone,
          address: address,
        })
        .then(async (response) => {
          console.log("then");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [clicked]);
  return (
    <>
        <div className="flex ">
          <div className="md:w-1/2 px-16 py-8">
            <h1 className="text-3xl text-green-600 font-bold mb-4">
              Request Medicine Details
            </h1>
            <div className="bg-white px-16 text-left p-4 shadow-xl">
              <form>
                <div className="mb-4">
                  <label className="block font-bold mb-2" htmlFor="name">
                    Medicine to be requested (Enter Medicine Name)
                  </label>
                  <input
                    className="w-full rounded-md border border-green-600 p-2"
                    type="text"
                    id="name"
                    name="name"
                    value={reqMed}
                    onChange={(e) => setReqMed(e.target.value)}
                  />
                </div>
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
                  onClick={handleClick}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://media.istockphoto.com/id/1170195097/vector/doctor-and-nurse-presenting-new-drugs-illustration.jpg?s=612x612&w=0&k=20&c=pmLB0WW4hbKJR68axBanh6xwlWwZB_v9BumNjsFI1Bs="
              alt=""
              className="w-2/3 my-36 mx-auto block"
            />
          </div>
        </div>
      
    </>
  );
};

export default RequestMedicine;
