import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
const TableUserPaging = (props) => {
  const listUser = props.listUser;
  const handlePageClick = (event) => {
    props.fetchListUserWithPaging(+event.selected + 1);
    props.setCurrentPage(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
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
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => props.handleViewUser(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-outline-success mx-2"
                      onClick={() => props.handleClickBtnUpdate(item)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => props.handleShowConfirmDelte(item)}
                    >
                      Delete
                    </button>
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
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={+props.pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={props.currentPage - 1}
      />
    </>
  );
};

export default TableUserPaging;
