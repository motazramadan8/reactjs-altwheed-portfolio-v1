import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import toastOptions from "../../utils/toastOptions";
import request from "../../API/request";

function Login({ theme }) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Portfolio || Login";
  }, []);

  function togglePasswordVisibility() {
    setShowPassword(!showPassword);
  }

  // Submit Form Handler
  const submitFormHandler = (e) => {
    e.preventDefault();

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

    let user = { email, password };

    request
      .post("/api/v1/auth/login", user)
      .then((response) => {
        const { data } = response;
        localStorage.setItem("user", JSON.stringify(data));
        window.location.reload();
        navigate("/dashboard");
      })
      .catch((err) => {
        toast.error(err.response.data.message, toastOptions);
      });
  };

  return (
    <section className={`${theme} login-section`}>
      <form
        onSubmit={submitFormHandler}
        autoComplete="off"
        className="login-dev-form"
        noValidate
      >
        <h1>Welcome Back</h1>
        <div className="login-form">
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
          <button className="login-btn">Login</button>
        </div>
        <h6>
          You don't have acoount <Link to="/register">Register</Link>
        </h6>
      </form>
      <ToastContainer />
    </section>
  );
}

export default Login;
