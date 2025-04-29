import React, { useState } from "react";
import { postRegister } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmitRegister = async()=>{
    let data = await postRegister(email,userName, password);
     console.log(data.data.EM)
    if ( data.data.EC === 0) {
      toast.success(data.data.EM);
    } else {
      toast.error(data.data.EM || "Error");
    }
    }
  return (
    <div className="Container-login">
      <div className="header">
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
      <div className="body-content">
        <div className="title col-4 mx-auto ">Register</div>
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
            <label htmlFor="userName">User Name</label>
            <input
              type="email"
              id="userName"
              value={userName}
              onChange={(event) => setuserName(event.target.value)}
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
            <button onClick={() => handleSubmitRegister()}>
             Register
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

export default Register;
