import React, { useState, useEffect } from "react";
import "animate.css/animate.min.css";

const Home = () => {
  const [userData, setUserData] = useState({ name: "" });

  const callAboutPage = async () => {
    try {
      const res = await fetch("http://localhost:3000/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        setUserData(data);
      } else {
        throw new Error(res.statusText);
      }
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* This is Home page */}
      <div className="">
        <div className="home-div text-center">
          <p className="text-2xl font-bold text-indigo-600 animate__animated animate__wobble">
            Welcome {userData && userData.name}
          </p>

          <h1 style={{ fontSize: "50px" }}>We are the Mern developer</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
