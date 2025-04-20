import React, { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiService";
const TableUser = (props) => {
  const [listUser, setListUser] = useState([
    // {
    //   id: 13,
    //   username: "Eric",
    //   email: "ABsCS@gmail.com",
    //   role: "User",
    // },
    // {
    //   id: 12,
    //   username: "casc",
    //   email: "ABCS@gmail.com",
    //   role: "User",
    // },
    // {
    //   id: 10,
    //   username: "hasakhi",
    //   email: "kira@gmail.com",
    //   role: "User",
    // },
  ]);
  useEffect(() => {
    fetchListUser();
  }, []);
  const fetchListUser = async () => {
    let res = await getAllUser();
    if (res.data.EC === 0) {
      setListUser(res.data.DT);
    }
  };
  return (
    <>
      <table className="table table-hover table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">NO</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-outline-primary">View</button>
                    <button className="btn btn-outline-success mx-2">Update</button>
                    <button className="btn btn-outline-danger">Delete</button>

                  </td>
                </tr>
              );
            })}
          {listUser && listUser.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not Found Data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
