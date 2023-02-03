import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const usernameref = useRef();
  const passwordref = useRef();

  // Local Variables
  const [usernameLocal, setLocalUsername] = useState();
  const [passwordLocal, setLocalPassword] = useState();

  // Navigate
  const navigate = useNavigate();

  // axios
  useEffect(() => {
    if (usernameLocal && passwordLocal) {
      axios
        .post("http://localhost:5000/signup", {
          username: usernameLocal,
          password: passwordLocal,
        })
        .then((response) => {
          //   if (response.data === true) {
          //     //   console.log("finee");
          //     //   setLoginState(true);
          //     //   <Navigate to="/home" replace={true} />;
          //   } else {
          //   }
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
      // <Navigate to="/home" replace={true} />;
      navigate("/login");
    }
  }, [usernameLocal && passwordLocal]);

  return (
    <div>
      <div>SignUpPage</div>
      <NavLink className="bg-red-600 block text-white p-2 m-5" to="/login">
        Go to Login Page
      </NavLink>
      <div className="flex flex-wrap">
        <img
          className=" md:w-1/2 p-5"
          src="https://imgs.search.brave.com/bbnqvFqXVWZFNyONtKw5p7qUpGsEgaI0rDg8SC8KMVc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/Sjl3YkZidlJYYXRI/c3o5MEZNWkpBSGFF/SyZwaWQ9QXBp"
          alt=""
        />
        <form action="" className="flex flex-col md:w-1/2 p-5">
          <input
            ref={usernameref}
            type="text"
            className="border-2 p-3"
            placeholder="Enter Username"
          />
          <input
            ref={passwordref}
            type="text"
            className="border-2 p-3"
            placeholder="Enter Password"
          />
          <button
            onClick={() => {
              setLocalUsername(usernameref.current.value);
              setLocalPassword(passwordref.current.value);
            }}
            className="bg-red-600 hover:bg-red-700 text-white p-2 m-5"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
