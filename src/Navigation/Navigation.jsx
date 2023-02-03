import React from "react";
import { useState, createContext, useMemo } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import AdminHome from "../components/Admin Logged In Contents/AdminHome";
import Contact from "../components/Logged In Contents/Contact";
import Donate from "../components/Logged In Contents/Donate";
import Home from "../components/Logged In Contents/Home";
import AddMedicine from "../components/Logged In Contents/Medicines/AddMedicine";
import NGO from "../components/Logged In Contents/NGO";
import RequestMedicine from "../components/Logged In Contents/RequestMedicine";
import NgoLogin from "../components/Logged In Contents/User/NgoLogin";
import OCR from "../components/Logged In Contents/User/OCR";
import UserProfile from "../components/Logged In Contents/User/UserProfile";
import Volunteer from "../components/Logged In Contents/Volunteer";
import VolunteerDashboard from "../components/Logged In Contents/VolunteerDashboard";
import LandingPage from "../components/Login Form and Sign Up/LandingPage";
import LoginForm from "../components/Login Form and Sign Up/LoginForm";
import SignUpPage from "../components/Login Form and Sign Up/SignUpPage";

// Context
const usernameContext = createContext({
  username: [],
  setUsername: () => {},
});
const passwordContext = createContext({
  password: [],
  setPassword: () => {},
});
const AdminUsernameContext = createContext({
  AdminUsername: [],
  setAdminUsername: () => {},
});
const AdminPasswordContext = createContext({
  AdminPassword: [],
  setAdminPassword: () => {},
});

const Navigation = () => {
  // useContext
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [AdminUsername, setAdminUsername] = useState();
  const [AdminPassword, setAdminPassword] = useState();
  const usernameVal = useMemo(() => ({ username, setUsername }), [username]);
  const passwordVal = useMemo(() => ({ password, setPassword }), [password]);
  const AdminUsernameVal = useMemo(
    () => ({ AdminUsername, setAdminUsername }),
    [AdminUsername]
  );
  const AdminPasswordVal = useMemo(
    () => ({ AdminPassword, setAdminPassword }),
    [AdminPassword]
  );

  const med1 = [
    {
      name: "Dolo 650",
      exp: "30122023",
      details: "Used to treat fever and other bacterial infections",
      qty: "2",
      qtyType: "Pills",
    },
    {
      name: "Crocin",
      exp: "25042024",
      details: "Used to treat fever and other bacterial infections",
      qty: "3",
      qtyType: "Pills",
    },
    {
      name: "Cheston Cold",
      exp: "25062025",
      details: "Used to treat cold and cough",
      qty: "2",
      qtyType: "Pills",
    },
    {
      name: "Benadyrl",
      exp: "25052023",
      details: "Used to treat cough and cold",
      qty: "1",
      qtyType: "Mililitres",
    },
    {
      name: "Diabye",
      exp: "25092024",
      details: "Used to lower blood sugar",
      qty: "3",
      qtyType: "Pills",
    },
    {
      name: "ibuprofin",
      exp: "25122025",
      details:
        "ease mild to moderate pain – such as toothache, migraine and period pain",
      qty: "1",
      qtyType: "Pills",
    },
  ];
  const [med, setMed] = useState(med1);
  const [selectedDrug, setSelectedDrug] = useState("");
  const [qty, setQty] = useState("");
  const [ph, setPh] = useState("");
  const [dAdd, setDAdd] = useState("");
  const [rAdd, setRAdd] = useState("");

  return (
    <div>
      <usernameContext.Provider value={usernameVal}>
        <passwordContext.Provider value={passwordVal}>
          <AdminUsernameContext.Provider value={AdminUsernameVal}>
            <AdminPasswordContext.Provider value={AdminPasswordVal}>
              {/* <div> */}

              <div>
                <Routes>
                  <Route exact path="/" element={<LandingPage />} />
                  <Route exact path="/login" element={<LoginForm />} />
                  <Route exact path="/signup" element={<SignUpPage />} />
                  <Route exact path="/home" element={<Home />} />
                  <Route exact path="/contact" element={<Contact />} />
                  <Route
                    exact
                    path="/donate"
                    element={
                      <Donate
                        dAdd={dAdd}
                        setDAdd={setDAdd}
                        med={med}
                        setMed={setMed}
                      />
                    }
                  />
                  <Route exact path="/volunteer" element={<Volunteer />} />
                  <Route
                    exact
                    path="/ngo"
                    element={<NGO med={med} setMed={setMed} />}
                  />
                  <Route exact path="/ocr" element={<OCR />} />
                  <Route
                    exact
                    path="/requestmedicine"
                    element={<RequestMedicine />}
                  />
                  <Route
                    exact
                    path="/addmedicine"
                    element={
                      <AddMedicine
                        qty={qty}
                        setQty={setQty}
                        med={med}
                        setMed={setMed}
                        selectedDrug={selectedDrug}
                        setSelectedDrug={setSelectedDrug}
                      />
                    }
                  />
                  <Route exact path="/userprofile" element={<UserProfile />} />
                  <Route
                    exact
                    path="/volunteerdashboard"
                    element={
                      <VolunteerDashboard
                        selectedDrug={selectedDrug}
                        qty={qty}
                        ph={ph}
                        dAdd={dAdd}
                        rAdd={rAdd}
                      />
                    }
                  />
                  <Route exact path="/adminhome" element={<AdminHome />} />
                  <Route exact path="/ngologin" element={<NgoLogin />} />
                </Routes>
              </div>
              {/* </div> */}
            </AdminPasswordContext.Provider>
          </AdminUsernameContext.Provider>
        </passwordContext.Provider>
      </usernameContext.Provider>
    </div>
  );
};

export default Navigation;
export {
  usernameContext,
  passwordContext,
  AdminUsernameContext,
  AdminPasswordContext,
};