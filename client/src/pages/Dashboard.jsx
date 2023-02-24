import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import "./Dashboard.css";

export const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const logout = () => {
    localStorage.clear();
    navigator("/login");
  };
  return (
    <div>
      <Navbar/>
      <div class="wrapper">
		    <div class="left">  <img
              className="postProfileImg"
              src={"http://localhost:8800/images/" + user.image}
            ></img></div>
		    <div class="right">
        <div className="details">{user.firstname}</div>
          <div className="details">{user.lastname}</div>
          <div className="details">{user.email}</div>
          <div className="details">{user.phone}</div>
        </div>
	    </div>
    </div>
  );
};
