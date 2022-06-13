import React from "react";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function Userdashboard() {
  let { userObj } = useSelector((state) => state.user);
  let [data, setData] = useState("");
  const getProtectedData = async () => {
    let token = localStorage.getItem("token");
    let response = await axios.get("/user/test", {
      headers: { Authorization: token },
    });
    setData(response.data.message);
  };
  return (
    <div>
      <h3 className="display-2 text-center">Welcome,{userObj.username}</h3>
      <Button variant="primary" onClick={getProtectedData}>
        Get Data
      </Button>
      <h1 className="text-center text-info">{data}</h1>
    </div>
  );
}

export default Userdashboard;
