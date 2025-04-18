import React, { useState } from "react";
import CreateUser from "./CreateUser";
import "./ManagerUser.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";

const ManagerUsers = () => {
  const [showCreateUser, setShowCreateUser] = useState(false);
  return (
    <div className="manageruser-container">
      <div className="title">Manager User</div>
      <div className="users-content ">
        <div className="btn-add-new">
          <button
            class="btn btn-primary "
            onClick={() => {
              setShowCreateUser(true);
            }}
          >
            <AiOutlinePlusCircle /> Add New User
          </button>
        </div>
        <div className="table-user-container">
          Table User
          <CreateUser show={showCreateUser} setShow={setShowCreateUser} />
        </div>
      </div>
    </div>
  );
};

export default ManagerUsers;
