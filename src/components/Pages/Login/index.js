import {useState, useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import "./index.css";
const API = process.env.REACT_APP_API;

const Login = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push("/");
    }
  }, [history]);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const {data} = await axios.post(
        `${API}/auth/login`,
        {email, password},
        config
      );

      localStorage.setItem("authToken", data.token);

      history.push("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="login-screen flex-container">
      <div className="login-screen__form-left flex-item-left">
      </div>
      <form
        onSubmit={loginHandler}
        className="login-screen__form-right flex-item-right"
      >
        <h3 className="login-screen__title">Welcome to</h3>
        <h5 className="login-screen__title2">Login Page</h5>
        {error && <span className="error-message">{error}</span>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            tabIndex={2}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <div className="login-screen__subtext">
          <div>
            <span>
              Don't have an account? <Link to="/register">Register</Link>
            </span>
          </div>
          <div>
            <span>
              <Link to="/forgotpassword">Forgot Password?</Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
