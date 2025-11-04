import './Login.css'

function Login() {

  return (
    <>

<title>Welcome Student</title>

      <div id="form">

        <h1>Learning Management System For CCIT 3C</h1>

        <h2>Easy Access</h2>

<div id='holder'>
        <input type="text" inputMode='numeric' name='username' placeholder='Student Number'/>
        <br />
        <input type="password" inputMode='numeric' name='password' placeholder='Password' max={6}/>
        <br />
        <button id='Login'>Login</button>
</div>
      </div>
    </>
  )
}

export default Login
