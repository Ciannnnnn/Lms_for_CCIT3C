import './Login.css'

function Login() {

  return (
    <>

<title>Welcome Student</title>

      <div id="form">

        <h1>Learning Management System For CCIT 3C</h1>

        <h2>Easy Access</h2>

<div id='holder'>
        <input type="text" name='username' placeholder='Student Number'/>
        <br />
        <input type="text" name='password' placeholder='Password'/>
        <br />
        <button id='Login'>Login</button>
</div>
      </div>
    </>
  )
}

export default Login
