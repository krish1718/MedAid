import io from "socket.io-client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function Community2() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };
  useEffect(joinRoom, [room]);

  return (
    <div className="App">
      {!showChat ? (
        <div>
          <div className="joinChatContainer flex flex-row min-h-[90vh]">
            <div className="w-1/2">
              <img
                src="https://img.freepik.com/free-vector/community-concept-illustration_114360-1021.jpg?w=2000"
                alt=""
                className="max-h-[90vh] mx-auto"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-green-600 font-semibold my-12">
                Join A Community
              </h3>
              <div className="mt-10 text-sm">Please enter your name</div>
              <input
                type="text"
                className="mx-auto mt-[7px] mb-6"
                style={{ padding: "15px" }}
                placeholder="Enter username"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              {/* <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          /> */}
              {/* <button onClick={joinRoom}>Join A Room</button> */}
              <div>
                <button
                  className="m-3 text-white px-10 py-7 transition ease-in text-xl font-semibold rounded-xl bg-green-600 hover:bg-green-700"
                  onClick={() => setRoom("1")}
                >
                  Join Community 1
                </button>
                <button
                  className="m-3 text-white px-10 py-7 transition ease-in text-xl font-semibold rounded-xl bg-green-600 hover:bg-green-700"
                  onClick={() => setRoom("2")}
                >
                  Join Community 2
                </button>
              </div>
              <div>
                <button
                  className="m-3 text-white px-10 py-7 transition ease-in text-xl font-semibold rounded-xl bg-green-600 hover:bg-green-700"
                  onClick={() => setRoom("3")}
                >
                  Join Community 3
                </button>
                <button
                  className="m-3 text-white px-10 py-7 transition ease-in text-xl font-semibold rounded-xl bg-green-600 hover:bg-green-700"
                  onClick={() => setRoom("4")}
                >
                  Join Community 4
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-4 bg-gray-100">
            <div className="bg-white shadow-xl rounded-3xl p-5 w-[30vw] m-5">
              <div className="text-2xl font-semibold">Free Health Camp</div>
              <img src="https://y4d.ngo/admin/uploads/projects/DSC_02961.jpg" className="rounded-2xl p-4" alt="" />
              <div className="text-left ml-2">
                
                Date: 31st March <br />
                Duration: 5 hours <br />
                Required: At least 2 years of experience in medical field.
              </div>
              <button className="m-4 text-white hover:bg-green-700 transition ease-in bg-green-600 p-2.5 font-semibold rounded-xl shadow-xl">
                REGISTER
              </button>
            </div>
            <div className="bg-white shadow-xl rounded-3xl p-5 w-[30vw] m-5">
              <div className="text-2xl font-semibold">Donation Drive</div>
              <div className="text-left ml-2">
              <img src="https://www.gofundme.com/c/wp-content/uploads/2022/01/fooddrive.jpeg?w=1920" className="rounded-2xl p-4" alt="" />
              Check and verify donated medicinal apparatus. <br />
                Date: 12th March <br />
                Duration: 6 hours <br />
                Required: At least 1 year of experience in medical field.
              </div>
              <button className="m-4 text-white hover:bg-green-700 transition ease-in bg-green-600 p-2.5 font-semibold rounded-xl shadow-xl">
                REGISTER
              </button>
            </div>
            <div className="bg-white shadow-xl rounded-3xl p-5 w-[30vw] m-5">
              <div>
                <div className="text-2xl font-semibold">Blood Donation Camp</div>
                <div className="text-left">
                  <img src="https://static.toiimg.com/thumb/msid-94257725,imgsize-977333,width-400,resizemode-4/94257725.jpg" className="rounded-2xl p-4 mt-2" alt="" />
                  <br />
                  Doctors needed for collecting blood. <br/>
                  Date: 15th February <br />
                  Duration: 7 hours <br />
                  Required: At least 5 years of experience in medical field.
                </div>
                <br />
                <button className="m-4 text-white hover:bg-green-700 transition ease-in bg-green-600 p-2.5 font-semibold rounded-xl shadow-xl">
                REGISTER
              </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Community2;
