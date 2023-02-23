import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getAllPosts } from "../redux/actions";
import "../assets/css/StartPostModal.css";
import globalImage from "../assets/img/developer1.jfif";
import { RiGalleryFill, RiMoreFill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";
import { FaDochub } from "react-icons/fa";

const StartPostModal = ({ show, handleClose }) => {
  const image = useSelector((state) => state.getProfile.fetchProfile);

  const name = useSelector((state) => state.getProfile.fetchProfile);

  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const submitPost = () => {
    dispatch(createPost({ text }, handleClose));
    dispatch(getAllPosts());
    setText("");
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

      <Modal.Footer className="justify-content-start ">
        <Row className="w-100 align-items-center">
          <Col md={8} className="px-0 ">
            <div className="d-flex align-items-center">
              <div className="d-flex align-items-center ">
                <div className="icon-hover d-flex align-items-center jusrify-content-center ">
                  {" "}
                  <RiGalleryFill
                    size={20}
                    fill="rgba(0,0,0,0.6)"
                    className="w-100"
                  />
                </div>
                <div className="icon-hover d-flex align-items-center jusrify-content-center ">
                  {" "}
                  <FaVideo size={20} fill="rgba(0,0,0,0.6)" className="w-100" />
                </div>
                <div className="icon-hover d-flex align-items-center jusrify-content-center ">
                  {" "}
                  <FaDochub
                    size={20}
                    fill="rgba(0,0,0,0.6)"
                    className="w-100"
                  />
                </div>
                <div className="icon-hover d-flex align-items-center jusrify-content-center ">
                  {" "}
                  <RiMoreFill
                    size={20}
                    fill="rgba(0,0,0,0.6)"
                    className="w-100"
                  />
                </div>
              </div>
              <div className="modal-footer-breakline"></div>
              <div className="start-post-modal-anyone-btn ml-2">
                <i class="bi bi-chat-right-text"></i>
                <span>Anyone</span>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="d-flex align-items-center justify-content-end">
              <i className="bi bi-clock"></i>
              <Button
                variant={text.length === 0 ? "secondary" : "primary"}
                disabled={text.length === 0}
                onClick={submitPost}
                className="ml-2"
              >
                Post
              </Button>
            </div>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default StartPostModal;
