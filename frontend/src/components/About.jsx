import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState();
  const [file, setFile] = useState(null);

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
      const data = await res.json();
      console.log(data);
      setUserData(data);

      console.log("Response status:", res.status);
      console.log("Response headers:", res.headers);

      if (res.status !== 200) {
        throw new Error(res.statusText);
      }
    } catch (err) {
      console.error("Error:", err.message);
      navigate("/login");
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="container mx-auto my-8 p-8 bg-white shadow-md rounded-md">
      {userData && (
        <div className="flex items-center">
          <div className="w-1/4">
            <div className="profile-img">
              {file ? (
                <img
                  className="w-full h-auto rounded-full border-4 border-white"
                  src={URL.createObjectURL(file)}
                  alt="Profile Image"
                />
              ) : (
                <label htmlFor="fileInput">
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <div className="w-full h-auto rounded-full border-4 border-white cursor-pointer">
                    Upload Image
                  </div>
                </label>
              )}
            </div>
          </div>
          <div className="w-3/4 ml-8">
            <div className="profile-head">
              <h5 className="text-3xl font-bold text-indigo-800">
                Name:  {userData.name}
              </h5>
              <h6 className="text-lg font-semibold text-gray-600">
               Profession:  {userData.work}
              </h6>
              <p className="text-gray-700">Rating: 10/10</p>
              <ul className="flex flex-col space-y-2 mt-4">
                <li>
                  <a
                    className="text-blue-500 hover:underline"
                    href={`mailto:${userData.email}`}
                  >
                    Email: {userData.email}
                  </a>
                </li>
                <li>
                  <span className="text-blue-500">
                    Contact: {userData.number}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
