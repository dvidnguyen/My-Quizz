import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { AiOutlinePlusCircle } from "react-icons/ai";
import "../Content/CreateUser.scss";
import axios from "axios";
// Trong CreateUser.jsx - CHỈ import toast, KHÔNG import ToastContainer ở đây
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Admin from "../Admin";
const CreateUser = (props) => {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow(false);
    setEmail("");
    setImage("");
    setPassword("");
    setRole("");
    setUsername("");
  };
  const handleShow = () => {
    setShow(true);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("User");
  const [image, setImage] = useState("");
  const [previewimg, setPreviewimg] = useState(""); // Thay đổi từ "false" thành chuỗi rỗng

  const handleUpload = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file); // Lưu file vào state
      setPreviewimg(URL.createObjectURL(file)); // Tạo URL cho ảnh preview
      console.log("Image preview set to:", URL.createObjectURL(file));
    }
  };
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleSubmitCreateUser = async () => {
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("invalid email");
      return;
    }

    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);
    let res = await axios.post(
      "http://localhost:8081/api/v1/participant",
      data
    );
    console.log(">>>", res.data);
    if (res.data && res.data.EC === 0) {
      toast.success(res.data.EM);
    }
    if (res.data && res.data.EC !== 0) {
      toast.error(res.data.EM);
    }
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add New User </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <data>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>
            </Row>

            <div className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>UserName </Form.Label>
                <Form.Control
                  placeholder="Dvidnguyen"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select
                  defaultValue="User"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                >
                  <option>User</option>
                  <option>Admin</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="col-md-12">
              <label htmlFor="labelUpload" className="from-upload">
                <AiOutlinePlusCircle /> Upload Img
              </label>
              <input
                type="file"
                id="labelUpload"
                hidden
                onChange={(event) => handleUpload(event)}
              />
            </div>
            <div className="col-md-12 img-preview">
              {previewimg ? (
                <img
                  src={previewimg}
                  alt="Preview"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              ) : (
                <span>Review img</span>
              )}
            </div>
            <Row className="mb-3"></Row>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </data>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitCreateUser}>
            Save
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

export default CreateUser;
