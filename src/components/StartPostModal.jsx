import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getAllPosts } from "../redux/actions";
import "../assets/css/StartPostModal.css";
import globalImage from "../assets/img/developer1.jfif";

const StartPostModal = ({ show, handleClose }) => {
  const image = useSelector((state) => state.getProfile.fetchProfile);

  const name = useSelector((state) => state.getProfile.fetchProfile);

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const submitPost = () => {
    dispatch(createPost({ text }, handleClose));
    dispatch(getAllPosts());
    setText("")
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create a post</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex start-post-modal-header">
          {image ? (
            <img src={image.image} alt="user profile" />
          ) : (
            <img src={globalImage} alt="user profile" />
          )}
          {name ? <h5>{name.name}</h5> : <h5>Hardika</h5>}
          {/* <h5>{name}</h5> */}
        </div>

        <textarea
          className="start-post-modal-textarea"
          placeholder="What do you want to talk about?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </Modal.Body>

      <Modal.Footer className="start-post-modal-footer">
        <div>
          <i class="bi bi-image"></i>
        </div>
        <div>
          <i class="bi bi-play-btn-fill"></i>
        </div>
        <div>
          <i class="bi bi-sticky-fill"></i>
        </div>
        <div>
          <i class="bi bi-three-dots"></i>
        </div>
        <div className="modal-footer-breakline"></div>
        <div className="start-post-modal-anyone-btn">
          <i class="bi bi-chat-right-text"></i>
          <span>Anyone</span>
        </div>
        <div>
          <i class="bi bi-clock"></i>
        </div>
        <Button
          variant={text.length == 0 ? "secondary" : "primary"}
          disabled={text.length == 0}
          onClick={submitPost}
        >
          Post (EDIT HOVER)
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StartPostModal;
