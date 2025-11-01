import { Routes, Route, useNavigate } from "react-router-dom";
import Login_Prof from "./Login_Prof";
import Prof_Upload from "./Prof_Upload";
import Login from "./Login";
import './Landing.css';

function Landing() {
  const navigate = useNavigate();

  return (
    <Routes>
      {}
      <Route
        path="/"
        element={

          <div id="box"><br />
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
