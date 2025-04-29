import React from "react";
import {Routes,Route, } from "react-router";
import App from "./App";
import User from "./Component/User/User";
import Admin from "./Component/Admin/Admin";
import HomePage from "./Component/Home/HomePage";
import DashBoard from "./Component/Admin/Content/DashBoard";
import ManagerUsers from "./Component/Admin/Content/ManagerUsers";
import Login from "./Component/Auth/Login";
import Register from "./Component/Auth/Register";
const Layout = (props) => {
  return (
    <>
     <Routes>
        <Route  path='/' element={<App />}    
        >
        <Route index element={<HomePage />} />
        <Route path="users" element={<User />} />
        </Route> 
        <Route path="admins" element={<Admin />}
        >
        <Route index element={<DashBoard />} />
        <Route path="managerusers" element={<ManagerUsers/>} />
        </Route>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
    </Routes>

    </>
  );
};

export default Layout;
