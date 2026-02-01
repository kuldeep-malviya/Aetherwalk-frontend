import React, { useRef, useState, useContext } from "react";
import "./AuthForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const dblPassRef = useRef();

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const validate = () => {
    const err = {};
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const pass = passRef.current?.value || "";
    const dblPass = dblPassRef.current?.value || "";

    if (!isLogin && !name.trim()) err.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(email)) err.email = "Invalid email";
    if (pass.length < 4) err.password = "Password must be 6+ chars";
    if (!isLogin && pass !== dblPass) err.confirm = "Passwords do not match";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);

      const payload = {
        email: emailRef.current.value,
        password: passRef.current.value,
      };

      if (!isLogin) {
        payload.name = nameRef.current.value;
      }

      const url = isLogin
        ? "https://auth-mern-1-pw6l.onrender.com/auth/login"
        : "https://auth-mern-1-pw6l.onrender.com/auth/signup";

      const res = await axios.post(url, payload);
      console.log(res.data.success,"this is res")
      if (res.data.success) {
        console.log("this code is working")
        login(res.data.email, res.data.jwtToken);
        navigate("/");
      } else {
        setErrors({ api: res.data.message || "Auth failed" });
      }
    } catch (err) {
      setErrors({ api: err.response?.data?.message || "Server error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container my-5">
      <div className="auth-form">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>

        {errors.api && <p className="text-danger">{errors.api}</p>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Full Name</label>
              <input ref={nameRef} />
              {errors.name && <p className="text-danger">{errors.name}</p>}
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" ref={emailRef} />
            {errors.email && <p className="text-danger">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" ref={passRef} />
            {errors.password && <p className="text-danger">{errors.password}</p>}
          </div>

          {!isLogin && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" ref={dblPassRef} />
              {errors.confirm && <p className="text-danger">{errors.confirm}</p>}
            </div>
          )}

          <button className="auth-btn" disabled={loading}>
            {loading ? "Please wait..." : isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)} className="toggle-link">
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
