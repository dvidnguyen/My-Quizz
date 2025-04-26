import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const  DeleteUser =(props) => {
  const {show, setShow} = props;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmitDelete =()=>{
     alert("submit");
     handleClose()
  }
  return (
    <>

      <Modal show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User </Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure to delete <b>{props.dataDelete.email && props.dataDelete ? props.dataDelete.email : "No Name User"} ?</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitDelete}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteUser;