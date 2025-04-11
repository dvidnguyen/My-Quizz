import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter,Routes,Route, } from "react-router";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './Component/User/User';
import Admin from './Component/Admin/Admin';
import HomePage from './Component/Home/HomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <App /> */}
    <Routes>
        <Route  path='/' element={<App />}    
        >
        <Route index element={<HomePage />} />
        <Route path="users" element={<User />} />
        <Route path="admins" element={<Admin />} />
          </Route> 
        {/* </Route> */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
