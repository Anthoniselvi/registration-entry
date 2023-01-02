import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
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
export default function EntryTable() {
  const [registerData, setRegisterData] = useState([]);
  const navigate = useNavigate();

  const fetchAllRegistrations = () => {
    axios.get("http://localhost:2022/registration").then((response) => {
      // console.log(response);
      console.log(response.data);
      setUpdatedRegistrations(response.data);
    });
  };

  const updateAcceptance = (regisToUpdate, value) => {
    axios
      .put("http://localhost:2022/registration", {
        id: parseInt(regisToUpdate.id),
        name: regisToUpdate.name,
        mobile: regisToUpdate.mobile,
        email: regisToUpdate.email,
        collegename: regisToUpdate.collegename,
        city: regisToUpdate.city,
        acceptance: value,
      })
      .then((response) => {
        console.log(response);
        fetchAllRegistrations();
      });
  };

  const setUpdatedRegistrations = (responseData) => {
    const registrationList = responseData.map((singleData) => {
      return {
        id: singleData.id,
        name: singleData.name,
        mobile: singleData.mobile,
        email: singleData.email,
        collegename: singleData.collegename,
        city: singleData.city,
        acceptance: singleData.acceptance,
      };
    });

    setRegisterData(registrationList);
  };

  useEffect(() => {
    fetchAllRegistrations();
  }, []);

  // const editEntry = (id, value) => {
  //   console.log("selected ID: " + id);
  //   const updatedArray = registerData.map((singleEntry) => {
  //     console.log(id, singleEntry.id);
  //     if (singleEntry.id === id) {
  //       return {
  //         id: singleEntry.id,
  //         name: singleEntry.name,
  //         mobile: singleEntry.mobile,
  //         email: singleEntry.email,
  //         collegeName: singleEntry.collegeName,
  //         city: singleEntry.city,
  //         accepted: value,
  //       };
  //     } else {
  //       return singleEntry;
  //     }
  //   });

  //   setRegisterData(updatedArray);
  //   localStorage.setItem("registerData", JSON.stringify(updatedArray));
  // };

  const navigateToRegistrationForm = () => {
    navigate("/registration");
  };
  return (
    <div className="table-container">
      <h1>Data Entry</h1>
      <button className="navi-btn" onClick={navigateToRegistrationForm}>
        Add Register
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>College Name</th>
            <th>City</th>
            <th>Attendence</th>
          </tr>
        </thead>
        <tbody>
          {registerData.map((entry) => (
            <tr key={entry}>
              <td>{entry.name}</td>
              <td>{entry.mobile}</td>
              <td>{entry.email}</td>
              <td>{entry.collegename}</td>
              <td>{entry.city}</td>
              <td>
                <div className="icon">
                  {entry.acceptance === "Joined" ? (
                    <p className="text join">Joined</p>
                  ) : (
                    <p
                      className="text present"
                      onClick={() => updateAcceptance(entry, "Joined")}
                    >
                      Present
                    </p>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
