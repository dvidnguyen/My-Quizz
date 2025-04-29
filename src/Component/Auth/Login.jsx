import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { useDispatch } from "react-redux";
// import { type } from "@testing-library/user-event/dist/type";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmitLogin = async () => {
    let data = await postLogin(email, password);
    console.log(data.data.EM)
    if ( data.data.EC === 0) {
      dispatch({
        type: "FECTH_USER_LOGIN_SUCCESS",
        payload: data.data
      })
      toast.success(data.data.EM);
    } else {
      toast.error(data.data.EM || "Error");
    }
  };
  return (
    <div className="Container-login">
      <div className="header">
        <p>Don't have an account yet</p>
        <button onClick={()=>{navigate('/register')}}>Sign Up</button>
      </div>
      <div className="body-content">
        <div className="title col-4 mx-auto ">Login</div>
        <div className="welcome col-4 mx-auto">Who's this?</div>
        <div className="form-content col-4 mx-auto">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <span>Fogot password?</span>
          <div>
            <button onClick={() => handleSubmitLogin()}>
              Login to Dvid Nguyen
            </button>
            <span className="Goto-homepage" onClick={() => navigate("/")}>
              Go to hompage
            </span>
          </div>
        </div>
        
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>
    </div>
  );
};

export default Login;
