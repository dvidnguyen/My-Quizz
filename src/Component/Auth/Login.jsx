import React, { useState } from "react";
import "./Login.scss";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmitLogin =() =>{
    
  }
  return (
    <div className="Container-login">
      <div className="header col-4">
        <p>Don't have an account yet</p>
        <button>Sign Up</button>
      </div>
      <div className="body-content">
        <div className="title col-4 mx-auto ">TypeForm</div>
        <div className="welcome col-4 mx-auto">Who's this?</div>
        <div className="form-content col-4 mx-auto">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(event)=>setEmail(event.target.value)}
            
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
            type="password"
            id="password" 
            value={password}
            onChange={(event)=>setPassword(event.target.value)}
             />
          </div>
          <span>Fogot password?</span>
          <div>
            <button
            onClick={()=>handleSubmitLogin()}
            >Login </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
