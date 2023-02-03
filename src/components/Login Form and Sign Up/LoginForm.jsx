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
  // const [signin, setsignin] = useState(false);
  // const [alertstate, setalertstate] = useState(false);
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
      navigate("/userprofile");
      //   setsignin(true);
    }
  });

  const usernameref = useRef();
  const passwordref = useRef();

  // Login state, false means login page is active
  // const [loginState, setLoginState] = useState(false);
  const [err, seterr] = useState();

  useEffect(() => {
    localStorage.setItem("userName", username);
    if (username && password)
      axios
        .post("http://localhost:5001/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          if (response.data === true) {
            console.log("finee");
            //   setLoginState(true);
            //   <Navigate to="/userprofile" replace={true} />;
            navigate("/userprofile");
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
  //       //   <Navigate to="/userprofile" replace={true} />;
  //     }
  //   }, [loginState]);

  return (
    <div className="min-h-screen">
      {/* <div className="font-bold text-4xl text-red-700 my-4">
        User Login Form
      </div> */}
      {/* <NavLink className="bg-red-600 font-semibold rounded-lg hover:bg-red-700 block text-white p-2 m-5" to="/userprofile">
        Go to Home Page
      </NavLink> */}
      {/* {loginState && <Navigate to="/userprofile" replace={true} />} */}
      {/* <div className="flex flex-wrap">
        <img
          onClick={() => navigate("/")}
          className=" md:w-1/2 p-5 cursor-pointer"
          src="https://imgs.search.brave.com/bbnqvFqXVWZFNyONtKw5p7qUpGsEgaI0rDg8SC8KMVc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/Sjl3YkZidlJYYXRI/c3o5MEZNWkpBSGFF/SyZwaWQ9QXBp"
          alt=""
        />
        <form action="" className="flex flex-col md:w-1/2 p-5">
          <input
            ref={usernameref}
            type="text"
            className="border-2 p-3 rounded-xl my-1 text-red-600"
            placeholder="Enter Username"
          />
          <input
            ref={passwordref}
            type="password"
            className="border-2 p-3 rounded-xl my-1 text-red-600"
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
            className="bg-red-600 font-semibold rounded-lg hover:bg-red-700 text-white p-2 m-5"
          >
            Log In
          </button>
          <NavLink
            className="bg-red-600 font-semibold rounded-lg hover:bg-red-700 block text-white p-2 m-5"
            to="/signup"
          >
            Go to Sign Up Page
          </NavLink>
          <button
            onClick={() => {
              //   navigate("/userprofile");
              //   setLoginState(true);
              handlesignin();
            }}
            className="bg-red-600 font-semibold rounded-lg hover:bg-red-700 block text-white p-2 m-5"
            to="/userprofile"
          >
            Sign in with Google
          </button>
          <button
            onClick={() => {
              navigate("/userprofile");
              //   setLoginState(true);
            }}
            className="bg-red-600 font-semibold rounded-lg hover:bg-red-700 block text-white p-2 m-5"
            to="/userprofile"
          >
            Forcefully Go to Home Page / Login
          </button>
        </form>
      </div> */}

      {/* // New Form  */}

      <div className="py-10 min-h-screen bg-green-400">
        <header className="max-w-lg mx-auto">
          <a href="#">
            <h1 className="text-4xl font-bold text-white text-center">
              MedAid
            </h1>
          </a>
        </header>

        <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
          <section>
            <h3 className="font-bold text-2xl">Welcome to MedAid</h3>
            <p className="text-gray-600 pt-2">Log in to your account.</p>
          </section>

          <section className="mt-10">
            {/* <form className="flex flex-col" method="POST" action="#"> */}
            <form className="flex flex-col">
              <div className="mb-6 pt-3 rounded">
                <label
                  className="block text-left text-gray-700 text-md font-bold mb-2 ml-3"
                  for="name"
                >
                  Username
                </label>
                <input
                  ref={usernameref}
                  type="text"
                  id="name"
                  className="p-1 bg-gray-200 rounded w-full text-green-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="mb-6 pt-3 rounded">
                <label
                  className="block text-left text-gray-700 text-md font-bold mb-2 ml-3"
                  for="password"
                >
                  Password
                </label>
                <input
                  ref={passwordref}
                  type="password"
                  id="password"
                  className="p-1 bg-gray-200 rounded w-full text-green-700 focus:outline-none border-b-4 border-gray-300 focus:border-green-600 transition duration-500 px-3 pb-3"
                />
              </div>
              <div className="flex justify-end">
                <a
                  onClick={() => {
                    navigate("/userprofile");
                    //   setLoginState(true);
                  }}
                  href="#"
                  className="text-sm text-green-600 hover:text-green-700 hover:underline mb-6"
                >
                  Forgot your password?
                </a>
              </div>
              <div
                onClick={() => navigate("/home")}
                className="flex flex-row mb-3"
              >
                <input type="checkbox" className="accent-green-600" />
                <div className="ml-3">Are you a doctor?</div>
              </div>
              <div className="w-full flex flex-row">
                <button
                  className="bg-green-600 w-full hover:bg-green-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                  // type="submit"
                  onClick={() => {
                    if (
                      usernameref.current.value &&
                      passwordref.current.value
                    ) {
                      setUsername(usernameref.current.value);
                      setPassword(passwordref.current.value);
                    } else {
                      alert("Please enter a valid username and password");
                    }
                  }}
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    //   navigate("/userprofile");
                    //   setLoginState(true);
                    handlesignin();
                  }}
                  className="bg-green-600 px-4 ml-2 hover:bg-green-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                >
                  G
                </button>
              </div>
            </form>
          </section>
        </main>

        <div className="max-w-lg mx-auto text-center mt-12 mb-6">
          <p className="text-white">
            Don't have an account?
            <NavLink to="/signup" className="ml-2 font-bold hover:underline">
              Sign up
            </NavLink>
            .
          </p>
        </div>

        <footer className="max-w-lg mx-auto flex justify-center text-white">
          <a href="#" className="hover:underline">
            Contact
          </a>
          <span className="mx-3">•</span>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </footer>
      </div>
    </div>
  );
};

export default LoginForm;
