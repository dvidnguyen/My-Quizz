import React, { useState, useEffect } from "react";
import CreateUser from "./CreateUser";
import "./ManagerUser.scss";
import { AiOutlinePlusCircle } from "react-icons/ai";
import TableUser from "./TableUser";
import { getAllUser, getUserWithPaging } from "../../../services/apiService";
import UpdateUser from "./UpdateUser";
import ViewUser from "./ViewUser";
import DeleteUser from "./DeleteUser";
import { data } from "react-router-dom";
import TableUserPaging from "./TableUserPaging";

const ManagerUsers = () => {
  const USER_LIMIT = 4;
  const [pageCount, setPageCount] = useState(0);
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const [showViewUser, setShowViewUser] = useState(false);
  const [showDeleteUser, setShowDeleteUser] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataUpdate, setDataUpdate] = useState({});
  const [listUser, setListUser] = useState([]);
  const [dataDelete, setDataDelete] = useState({});
  useEffect(() => {
    // fetchListUser();
    fetchListUserWithPaging(1);
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
  const fetchListUserWithPaging = async (page) => {
    try {
      let res = await getUserWithPaging(page, USER_LIMIT);
      if (res.data.EC === 0) {
        console.log(res.data.DT);
        setListUser(res.data.DT.users);
        setPageCount(res.data.DT.totalPages);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const handleViewUser = (itemUser) => {
    setShowViewUser(true);
  };
  const handleClickBtnUpdate = (itemUser) => {
    console.log("handleClickBtnUpdate", itemUser);
    setDataUpdate(itemUser);
    setTimeout(() => {
      setShowUpdateUser(true);
    }, 0);
  };
  const resetUpdateData = () => {
    setDataUpdate({});
  };
  const handleShowConfirmDelte = (itemUser) => {
    setDataDelete(itemUser);
    setShowDeleteUser(true);
  };
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
          {/* <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleViewUser={handleViewUser}
            handleShowConfirmDelte={handleShowConfirmDelte}
          /> */}
          <TableUserPaging
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleViewUser={handleViewUser}
            handleShowConfirmDelte={handleShowConfirmDelte}
            fetchListUserWithPaging={fetchListUserWithPaging}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <CreateUser
            show={showCreateUser}
            setShow={setShowCreateUser}
            fetchListUser={fetchListUser}
            fetchListUserWithPaging={fetchListUserWithPaging}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <UpdateUser
            show={showUpdateUser}
            setShow={setShowUpdateUser}
            fetchListUser={fetchListUser}
            fetchListUserWithPaging={fetchListUserWithPaging}
            dataUpdate={dataUpdate}
            resetUpdateData={resetUpdateData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handleClickBtnUpdate={handleClickBtnUpdate}
          />
          <ViewUser show={showViewUser} setShow={setShowViewUser} />
          <DeleteUser
            show={showDeleteUser}
            setShow={setShowDeleteUser}
            dataDelete={dataDelete}
            fetchListUser={fetchListUser}
            fetchListUserWithPaging={fetchListUserWithPaging}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagerUsers;
