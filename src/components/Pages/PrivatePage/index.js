import { useState, useEffect } from "react";
import axios from "axios";
import NotAuth from "./notAuth.jsx";
import Auth from "./auth.jsx";
const API = process.env.REACT_APP_API;

//userName is the private data here
const PrivatePage = () => {
  const [error, setError] = useState("");
  const [userName, setuserName] = useState("");

  useEffect(() => {
    const fetchPrivateDate = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get(`${API}/private`, config);
        setuserName(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized please login");
      }
    };

    fetchPrivateDate();
  }, []);

  return error ? (
    <NotAuth error={error} />
  ) : (
    <>
      <Auth userName={userName} />
      {/* <ThreeApp /> */}
    </>
  );
};

export default PrivatePage;
