import React, { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useRef } from "react";
// import { usernameContext, passwordContext } from "../../../App";

const Community = () => {
  //   const [array, setArray] = useState([{ username: "Krish", message: "Hi" }]);
  // const { username, setusername } = useContext(usernameContext);
  const [username, setusername] = useState();
  const [message, setmessage] = useState();
  const [groupname, setgroupname] = useState("Group1");
  const [array, setArray] = useState([
    { username: "Ishaan", message: "Great" },
    { username: "Shreyan", message: "I'm good, how are you?" },
  ]);

  const inputRef = useRef();

  useEffect(() => {
    if (message) {
      axios
        .post(`http://localhost:5000/community?chat=${groupname}`, {
          username: username,
          message: message,
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [message]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/community?chat=${groupname}`)
      .then(function (response) {
        setArray(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(`http://localhost:5000/community?chat=${groupname}`)
        .then(function (response) {
          // alert("done");
          setArray(response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, 4000);
  });

  return (
    <>
      <div className="flex flex-row p-5 min-h-[90vh]">
        <div className="w-2/6 border-4 rounded-l-xl">
          <div className="text-3xl font-semibold mb-4 p-4 pb-0">Groups</div>
          <hr />
          <div className="bg-gray-100 p-4 h-[88%]">
            <div className="">
              {/* <div
                onClick={() => setgroupname("TSEC students")}
                className={`border ${
                  groupname == "TSEC students" ? "bg-[#67ff6a]" : "bg-green-200"
                } cursor-pointer border-green-500 rounded-lg my-2 p-2 font-semibold text-xl`}
              >
                <div>TSEC students</div>
              </div>
              <div
                onClick={() => setgroupname("TSEC people")}
                className={`border ${
                  groupname == "TSEC people" ? "bg-[#67ff6a]" : "bg-green-200"
                } cursor-pointer border-green-500 rounded-lg my-2 p-2 font-semibold text-xl`}
              >
                <div>TSEC people</div>
              </div> */}
              <div
                onClick={() => setgroupname("ConvoCare")}
                className={`border ${
                  groupname == "ConvoCare" ? "bg-[#67ff6a]" : "bg-green-200"
                } cursor-pointer border-green-500 rounded-lg my-2 p-2 font-semibold text-xl`}
              >
                <div>ConvoCare</div>
              </div>
              <div
                onClick={() => setgroupname("Healing Together")}
                className={`border ${
                  groupname == "Healing Together"
                    ? "bg-[#67ff6a]"
                    : "bg-green-200"
                } cursor-pointer border-green-500 rounded-lg my-2 p-2 font-semibold text-xl`}
              >
                <div>Healing Together</div>
              </div>
              <div
                onClick={() => setgroupname("Mending Mindsets")}
                className={`border ${
                  groupname == "Mending Mindsets"
                    ? "bg-[#67ff6a]"
                    : "bg-green-200"
                } cursor-pointer border-green-500 rounded-lg my-2 p-2 font-semibold text-xl`}
              >
                <div>Mending Mindsets</div>
              </div>
              <div
                onClick={() => setgroupname("Mental Health Awareness")}
                className={`border ${
                  groupname == "Mental Health Awareness"
                    ? "bg-[#67ff6a]"
                    : "bg-green-200"
                } cursor-pointer border-green-500 rounded-lg my-2 p-2 font-semibold text-xl`}
              >
                <div>Mental Health Awareness</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/6 border-4 rounded-r-xl">
          <div className="text-3xl font-semibold mb-4 px-4 pt-4">
            {groupname}
          </div>
          <hr />
          <div className="bg-gray-100 p-4">
            <div className="flex justify-start pt-8">
              <div>
                <div className="bg-gray-300 p-3 my-2 rounded-b-xl rounded-tr-xl">
                  <div className="text-md font-semibold text-blue-600">
                    Shreyan
                  </div>
                  <div className="text-lg">hey</div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <div>
                <div className="bg-green-300 p-3 my-2 rounded-b-xl rounded-tl-xl">
                  how are you guys?
                </div>
              </div>
            </div>
            {array &&
              array.map((item) => {
                return (
                  <div>
                    {item.username == username ? (
                      <div className="flex justify-end">
                        <div className="bg-green-300 p-3 my-2 w-fit rounded-b-xl rounded-tl-xl">
                          {item.message}
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-300 p-3 my-2 w-fit rounded-b-xl rounded-tr-xl">
                        <div className="text-md font-semibold text-blue-600">
                          {item.username}
                        </div>
                        <div className="text-lg">{item.message}</div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
          <div className="flex flex-row justify-end py-5 border p-2">
            <input
              ref={inputRef}
              id="message"
              name="message"
              placeholder="Enter Message"
              className="border border-green-500 text-green-600 w-full rounded-lg px-3"
              type="text"
            />
            <button
              onClick={() => {
                setmessage(inputRef.current.value);
              }}
              className="ml-5 bg-green-500 hover:bg-green-600 transition ease-in rounded-lg px-3 py-2 font-semibold text-white"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
