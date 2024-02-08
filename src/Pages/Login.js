import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { Audio } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";
import './Logins.css';
import pic from '../images/bank.jpg'


function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [load, setLoading] = useState(false);
  const navigate = useNavigate()

  const postData = () => {
    setLoading(true)
    var data = JSON.stringify({
      email: email,
      password: password,
    });
    console.log(data);

    fetch("https://cacore.liara.run/auth/jwt/create", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: 'JWT ' + localStorage.getItem("Access")
      },
      body: data
    })

      .then(response => response.json())

      .then(result => {
        console.log(result);
        let token = result.refresh
        if (token) {
          localStorage.setItem('Access', result.access)
          navigate('/Home')
        }
        console.log(result);
        setLoading(false)
        return (result.access)
      })
      .catch(err => console.log(err))
  }

  return (
    <div id="containeri">
      <div className="wrapper1  d-lg-flex rounded-start-3 z-1">
        <img src={pic} className=" banner-1 rounded-start-3"></img>
      </div>
      <div className="wrapper bg-primary p-3 rounded-end-3 z-1 ">
        <h1 className="ghost">Login</h1>
        <div className="input-box">
          <input type="email" name="email" placeholder="UserName" value={email} onChange={(e) => setEmail(e.target.value)} />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" autoComplete="false" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" className="active" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <div>
          <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={postData}>{load ? (<Audio
            height="30"
            width="50"
            radius="9"
            color="#1fd169"
            ariaLabel="loading"
          />) : ("Login")}</button>
        </div>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </div>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Login;