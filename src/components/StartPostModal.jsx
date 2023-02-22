import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../redux/actions";
import "../assets/css/StartPostModal.css";

const StartPostModal = ({ show, handleClose }) => {
  const image = useSelector((state) => state.getProfile.fetchProfile.image);

  const name = useSelector((state) => state.getProfile.fetchProfile.name);

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const submitPost = () => {
    dispatch(createPost({ text }, handleClose));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex start-post-modal-header">
          <img src={image} />
          <h5>{name}</h5>
        </div>

        <textarea
          className="start-post-modal-textarea"
          placeholder="What do you want to talk about?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </Modal.Body>

      <Modal.Footer>
        <div className="d-flex">
          <div>ICON PH</div>
          <div>ICON PH</div>
          <div>ICON PH</div>
          <div>ICON PH</div>
          <Button variant="primary" onClick={submitPost}>
            Post
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default StartPostModal;
