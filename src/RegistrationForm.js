import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const getDataFromRegisterData = () => {
//   const data = localStorage.getItem("registerData");
//   console.log(data);
//   if (data) {
//     return JSON.parse(data);
//   } else {
//     return [];
//   }
// };

export default function RegistrationForm() {
  const [registerData, setRegisterData] = useState([]);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [collegename, setCollegeName] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2022/registration", {
        name: name,
        mobile: mobile,
        email: email,
        collegename: collegename,
        city: city,
      })
      .then((response) => {
        console.log(response);
        navigate("/entrytable");
      });

    // console.log(name, mobile, email);
    // let newEntry = {
    //   id: uuidv4(),
    //   name,
    //   mobile,
    //   email,
    //   collegeName,
    //   city,
    //   acceptance: "",
    // };
    setName("");
    setMobile("");
    setEmail("");
    setCollegeName("");
    setCity("");

    // setRegisterData(registerData);

    // localStorage.setItem(
    //   "registerData",
    //   JSON.stringify([...registerData, newEntry])
    // );
    // localStorage.setItem(
    //   "registerData",
    //   JSON.stringify([...registerData, newEntry])
    // );
    // console.log(registerData);
    // navigate("/entrytable");
  };

  const navigateToEntryTable = () => {
    navigate("/EntryTable");
  };
  return (
    <div className="registration-container">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-inner">
          <div className="row">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row">
            <label>Mobile Number</label>
            <input
              type="text"
              placeholder="Mobile Number"
              mobile="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="row">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              email="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="row">
            <label>College Name</label>
            <input
              type="text"
              placeholder="College Name"
              collegeName="collegeName"
              value={collegename}
              onChange={(e) => setCollegeName(e.target.value)}
            />
          </div>
          <div className="row">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              city="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
        </div>
        <button className="register-btn">Register</button>
      </form>
      <button className="entry-btn" onClick={navigateToEntryTable}>
        Go To Entry List
      </button>
    </div>
  );
}
