import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { usernameContext } from "../../Navigation/Navigation";
import { passwordContext } from "../../Navigation/Navigation";
import { auth, provider } from "../../firebase.js";
import { signInWithPopup } from "firebase/auth";

const LoginForm = () => {
  // Context
  const { username, setUsername } = useContext(usernameContext);
  const { password, setPassword } = useContext(passwordContext);

  // User sign in
  const [signin, setsignin] = useState(false);
  const [alertstate, setalertstate] = useState(false);
  const [userEmail, setuserEmail] = useState();
  //   const [username, setusername] = useState();

  // Navigate
  const navigate = useNavigate();

  function handlesignin() {
    signInWithPopup(auth, provider).then((data) => {
      // console.log(data);
      setuserEmail(data.user.email);
      setUsername(data.user.displayName);
      localStorage.setItem("userEmail", data.user.email);
      localStorage.setItem("userName", data.user.displayName);
    });
  }

  useEffect(() => {
    setuserEmail(localStorage.getItem("userEmail"));
    setUsername(localStorage.getItem("userName"));
    if (userEmail) {
      navigate("/home");
      //   setsignin(true);
    }
  });

  const usernameref = useRef();
  const passwordref = useRef();

  // Login state, false means login page is active
  const [loginState, setLoginState] = useState(false);
  const [err, seterr] = useState();

  useEffect(() => {
    if (username && password)
      axios
        .post("http://localhost:5000/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          if (response.data === true) {
            console.log("finee");
            //   setLoginState(true);
            //   <Navigate to="/home" replace={true} />;
            navigate("/home");
          } else {
          }
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
  }, [username]);

  //   useEffect(() => {
  //     if (loginState) {
  //       //   alert("work");
  //       //   <Navigate to="/home" replace={true} />;
  //     }
  //   }, [loginState]);

  return (
    <div className="min-h-screen">
      <div>LoginForm</div>
      {/* <NavLink className="bg-red-600 block text-white p-2 m-5" to="/home">
        Go to Home Page
      </NavLink> */}
      {/* {loginState && <Navigate to="/home" replace={true} />} */}
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
            type="password"
            className="border-2 p-3"
            placeholder="Enter Password"
          />
          <button
            onClick={() => {
              if (usernameref.current.value && passwordref.current.value) {
                setUsername(usernameref.current.value);
                setPassword(passwordref.current.value);
              } else {
                alert("Please enter a valid username and password");
              }
            }}
            className="bg-red-600 hover:bg-red-700 text-white p-2 m-5"
          >
            Log In
          </button>
          <NavLink className="bg-red-600 block text-white p-2 m-5" to="/signup">
            Go to Sign Up Page
          </NavLink>
          <button
            onClick={() => {
              //   navigate("/home");
              //   setLoginState(true);
              handlesignin();
            }}
            className="bg-red-600 rounded-md block text-white p-2 m-5"
            to="/home"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => {
              navigate("/home");
              //   setLoginState(true);
            }}
            className="bg-red-600 rounded-md block text-white p-2 m-5"
            to="/home"
          >
            Forcefully Go to Home Page / Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
