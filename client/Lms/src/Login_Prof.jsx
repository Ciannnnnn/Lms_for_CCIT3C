import './Login_Prof.css';
import { useNavigate } from "react-router-dom";

function Login_Prof() {
  const navigate = useNavigate();

  const toProf = () => {
    navigate('/Prof-Upload'); 
  };

  return (
    <>
      <div id="form">
        <h1>Learning Management System For CCIT 3C</h1>
        <h2>Easy Access</h2>

        <div id='holder'>
          <input type="text" name='username' placeholder='Professor ID' />
          <br />
          <input type="password" name='password' placeholder='Password' />
          <br />
          <button id='Login' onClick={toProf}>Login</button>
        </div>
      </div>
    </>
  );
}

export default Login_Prof;
