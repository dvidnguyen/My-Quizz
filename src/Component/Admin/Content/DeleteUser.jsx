import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiService";
import { ToastContainer, toast } from "react-toastify";
const DeleteUser = (props) => {
  const { show, setShow } = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmitDelete = async () => {
    let data = await deleteUser(props.dataDelete.id);
    console.log(data);
    console.log(props.dataDelete);
    if (data && data.data.EC === 0 ) {
      toast.success(data.data.EM);
      // await props.fetchListUser();
      props.setCurrentPage(1);
      await props.fetchListUserWithPaging(1);
      handleClose();
    } else {
      toast.error(data.EM || "Xảy ra lỗi khi xóa người dùng");
    }
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete{" "}
          <b>
            {props.dataDelete.email && props.dataDelete
              ? props.dataDelete.email
              : "No Name User"}{" "}
            ?
          </b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
    </>
  );
};

export default DeleteUser;
