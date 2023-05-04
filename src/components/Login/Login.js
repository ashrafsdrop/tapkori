import React, { useEffect, useState  } from 'react'
import { useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.css'

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [cookies, setCookie] = useCookies(['access_token', 'refresh_token'])

    const suckcess = () => toast.success('🦄 Successfully loggedin', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });;


    const failled = () => toast.error('🦄 Credentials are not valid', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });;
    async function Apicall() {
        console.log(username,password)
        let results = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({mobile:username, password:password}),
        })
        .then((response) => response.json())
        .then((json) => {
          // console.log(json.failed)
          if (json.detail === 'No active account found with the given credentials'){
            failled()
          } else{
            suckcess()
            setCookie('access_token', json.access, { path: '/'})
            setCookie('refresh_token', json.refresh, { path: '/'})
          }  ;
        });
    };
    useEffect(() => {
        document.title = "Login Page";
      });
  return (
    <section className="vh-100">
  <div className="container-fluid h-custom">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">Login</p>
          </div>
          {/* Email input */}
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              Username
            </label>
            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid username"
              onChange={(e)=> setUsername(e.target.value)}
            />
          </div>
          {/* Password input */}
          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="form3Example4">
              Password
            </label>
            <input
              type="password"
              id="form3Example4"
              className="form-control form-control-lg"
              placeholder="Enter password"
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            {/* Checkbox */}
            <div className="form-check mb-0"></div>
            <a href="#!" className="text-body">
              Forgot password?
            </a>
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              onClick={Apicall}
            >
              Login
            </button>
            <p className="small fw-bold mt-2 pt-1 mb-0">
              Don't have an account?{" "}
              <a href="#!" className="link-danger">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* Copyright */}
    <div className="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    {/* Copyright */}
    {/* Right */}
    <div>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-facebook-f" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-twitter" />
      </a>
      <a href="#!" className="text-white me-4">
        <i className="fab fa-google" />
      </a>
      <a href="#!" className="text-white">
        <i className="fab fa-linkedin-in" />
      </a>
    </div>
    {/* Right */}
  </div>
  <ToastContainer />
</section>

  )
}

export default Login