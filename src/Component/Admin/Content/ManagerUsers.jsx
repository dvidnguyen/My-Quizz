import React from "react";
import CreateUser from "./CreateUser";
const ManagerUsers = () => {
  return (
    <div className="manageruser-container">
      <div className="title">Manager User</div>
      <div className="users-content ">
        <div>
          <button>Add New User</button>
        </div>
        <div>
          Table User
          <CreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManagerUsers;
