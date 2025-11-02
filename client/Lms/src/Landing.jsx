import { Routes, Route, useNavigate } from "react-router-dom";
import Login_Prof from "./Login_Prof";
import Prof_Upload from "./Prof_Upload";
import Login from "./Login";
import './Landing.css';
import prmsuLogo from './assets/PRMSU.png';
import ccitLogo from './assets/ccit.png';

function Landing() {
  const navigate = useNavigate();

  return (
    <Routes>
      {}
      <Route
        path="/"
        element={

          <div id="box">
            <div id="picHolder">

              <img src={prmsuLogo} alt="prmsu logo" id="prmsuLogo"/>
              <img src={ccitLogo} alt="ccit logo" id="ccitLogo"/>

            </div>
            <br />
            <button id="prof" onClick={() => navigate("/Login_Prof")}>Professor</button><br />
            <button id="student" onClick={() => navigate("Login")}>Student</button>
          </div>

        }
      />
      <Route path="/Login_Prof" element={<Login_Prof />} />
        <Route path="/Login" element={<Login />} />
      <Route path="/Prof-Upload" element={<Prof_Upload />} />
    </Routes>
  );
}

export default Landing;
