import React, { useState, useEffect } from "react";
import CreateUser from "./CreateUser";
import "./ManagerUser.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TableUser from "./TableUser";
import { getAllUser } from "../../../services/apiService";
import UpdateUser from "./UpdateUser";
import ViewUser from "./ViewUser";
import DeleteUser from "./DeleteUser";
import { data } from "react-router-dom";

const ManagerUsers = () => {
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showViewUser, setShowViewUser] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);

  const [dataUpdate, setDataUpdate] = useState({});
  const [listUser, setListUser] = useState([]);
  const [dataDelete, setDataDelete] = useState({});
  useEffect(() => {
    fetchListUser();
  }, []);
  const fetchListUser = async () => {
    try {
      let res = await getAllUser();
      if (res.data.EC === 0) {
        setListUser(res.data.DT);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleViewUser = (itemUser) => {
    setShowViewUser(true);
  };
  const handleClickBtnUpdate = (itemUser) => {
    setShowUpdateUser(true);
    setDataUpdate(itemUser);
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };
  const handleShowConfirmDelte =(itemUser)=>{
    console.log(itemUser)
    setDataDelete(itemUser);
    setShowDeleteUser(true);

  }
  return (
    <div className="manageruser-container">
      <div className="title">Manager User</div>
      <div className="users-content ">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowCreateUser(true)}
          >
            <AiOutlinePlusCircle /> Add New User
          </button>
        </div>
        <div className="table-user-container">
          <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleViewUser={handleViewUser}
            handleShowConfirmDelte={handleShowConfirmDelte}
          />
          <CreateUser
            show={showCreateUser}
            setShow={setShowCreateUser}
            fetchListUser={fetchListUser}
          />
          <UpdateUser
            show={showUpdateUser}
            setShow={setShowUpdateUser}
            fetchListUser={fetchListUser}
            dataUpdate={dataUpdate}
            resetUpdateData={resetUpdateData}
          />
          <ViewUser show={showViewUser} setShow={setShowViewUser} />
          <DeleteUser  
            show={showDeleteUser}
            setShow={setShowDeleteUser}
            dataDelete={dataDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerUsers;
