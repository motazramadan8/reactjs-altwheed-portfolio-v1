import React, { useEffect, useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import toastOptions from "../../utils/toastOptions";
import request from "../../API/request";

function Register({ theme }) {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Portfolio || Register";
  }, []);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  // Submit Form Handler
  const submitFormHandler = (e) => {
    e.preventDefault();

    if (firstName.trim() === "")
      return toast.error(`Firstname is required`, toastOptions);
    if (firstName.trim().length <= 2 || firstName.trim().length >= 100)
      return toast.error(
        `First name must be at least 3 characters and must be less than 100 characters`,
        toastOptions
      );

    if (lastName.trim() === "")
      return toast.error(`Lastname is required`, toastOptions);
    if (lastName.trim().length <= 2 || lastName.trim().length >= 100)
      return toast.error(
        `Last name must be at least 3 characters and must be less than 100 characters`,
        toastOptions
      );

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (email.trim() === "") {
      return toast.error("Email is required", toastOptions);
    } else if (!emailRegex.test(email.trim()))
      return toast.error(
        `Email must be contain "@" & "." in their correct places and must be at least 10 characters`,
        toastOptions
      );

    if (password.trim() === "") {
      return toast.error("Password is required", toastOptions);
    }
    if (password.trim().length < 8) {
      return toast.error("Password must be at least 8 character", toastOptions);
    }

    if (phone.trim() === "") {
      return toast.error("Phone is required", toastOptions);
    }

    let user = { firstName, lastName, email, password, phone };

    request
      .post("/api/v1/auth/register", user)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response.data.message, toastOptions);
      });
  };

  return (
    <section className={`${theme} register-section`}>
      <form
        onSubmit={submitFormHandler}
        autoComplete="off"
        className="register-dev-form"
        noValidate
      >
        <h1>Register Now</h1>
        <div className="register-form">
          <div className="d-flex">
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              autoComplete="off"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              autoComplete="off"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="input-dev">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPass(e.target.value)}
            />
            {!showPassword ? (
              <AiFillEyeInvisible onClick={togglePasswordVisibility} />
            ) : (
              <AiFillEye onClick={togglePasswordVisibility} />
            )}
          </div>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your phone"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button className="register-btn">Register</button>
        </div>
        <h6>
          You have acoount already <Link to="/login">Login</Link>
        </h6>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Register;
