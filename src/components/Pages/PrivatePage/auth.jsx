import { useHistory } from "react-router-dom";

import "./index.css";

export default function Auth(prop) {
  let history = useHistory();

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return (
    <>
      <div className="container">
        <div className="above-content">
          <div className="greeting">
            Welcome, <span className="colored">{prop.userName}</span>
          </div>
          <button onClick={logoutHandler} className="logBtn">
            Logout
          </button>
        </div>
        <div className="content">
          <h1>This is <span className="colored">Private Route!</span></h1>
        </div>
      </div>
    </>
  );
}
