import React, { useEffect, useState  } from 'react'
import { useCookies } from 'react-cookie'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './assets/css/style.css'


function Signup() {
    const [Username, setUsername] = useState("");
    const [Firstname, setFirstname] = useState("");
    const [Lastname, setLastname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const navigate = useNavigate();

    const failled = (value) => toast.error(value, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;


    const suckcess = () => toast.success('🦄 Successfully Created account', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });;

    async function Actions() {
        let gather = JSON.stringify({mobile:Username, first_name:Firstname, last_name:Lastname, email:Email, password:Password});
        let results = await fetch('http://127.0.0.1:8000/api/reg/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: gather,
        })
        .then((response) => response.json())
        .then((json) => {
            if(json.hasOwnProperty("email")){
                failled("User with this email already exists")
            } else if (json.hasOwnProperty("mobile")){
                failled("User with this mobile already exists")
            } else{
                suckcess()
                navigate("/login");
            }
            
        });
    }

    useEffect(() => {
        document.title = "Signup Page";
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
            <p className="text-center fw-bold mx-3 mb-0">Signup</p>
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
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              First Name
            </label>
            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid Firstname"
              onChange={(e)=> setFirstname(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              Last name
            </label>
            <input
              type="text"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid Lastname"
              onChange={(e)=> setLastname(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form3Example3">
              Email 
            </label>
            <input
              type="email"
              id="form3Example3"
              className="form-control form-control-lg"
              placeholder="Enter a valid Email"
              onChange={(e)=> setEmail(e.target.value)}
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
            
          </div>
          <div className="text-center text-lg-start mt-4 pt-2">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
              onClick={Actions}
            >
              Signup
            </button>
            
          </div>
        </form>
      </div>
    </div>
  </div>
  <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary mt-5">
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

export default Signup