import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import UploadResouces from "./components/Uploadresources/UploadResources";
import NavB from '../src/components/NavB';
import { auth } from "./firebase";

import "./App.css";
import RequestProducts from "./RequestProducts/RequestProducts";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/uploadresources" element={<UploadResouces />} />
          <Route path="/requestresources" element={<RequestProducts />} />
          <Route path="/" element={<HomePage name={userName} />} />
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
