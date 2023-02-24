import { useState } from "react";
import { Button, Col, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getAllPosts } from "../redux/actions";
import "../assets/css/StartPostModal.css";
import globalImage from "../assets/img/developer1.jfif";
import { RiGalleryFill, RiMoreFill } from "react-icons/ri";
import { FaVideo } from "react-icons/fa";
import { FaDochub } from "react-icons/fa";

const StartPostModal = ({ show, handleClose, postID }) => {
  const profileData = useSelector((state) => state.getProfile.fetchProfile);
  // const name = useSelector((state) => state.getProfile.fetchProfile);
  const posts = useSelector((state) => state.posts.postList._id);
  console.log("postId", posts);
  const [postImage, setImage] = useState(null);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const submitPost = () => {
    dispatch(createPost({ text }, handleClose, postImage));
    dispatch(getAllPosts());
    setText("");
  };
  const uploadImage = async () => {
    const formData = new FormData();
    formData.append("post", postImage);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${postID}`,
        {
          method: "POST",
          // mode: "no-cors",
          body: formData,
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
          },
        }
      );

      if (response.ok) {
        dispatch(getAllPosts());
        // console.log("Image Uploaded Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a post</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex start-post-modal-header">
            {profileData ? (
              <img src={profileData.image} alt="user profile" />
            ) : (
              <img src={globalImage} alt="user profile" />
            )}
            {profileData ? <h5>{profileData.name}</h5> : <h5>Hardika</h5>}
          </div>

          <textarea
            className="start-post-modal-textarea"
            placeholder="What do you want to talk about?"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div>
            <input
              type="file"
              onChange={(e) => {
                // console.log(e.target.files[0]);
                setImage(e.target.files[0]);
              }}
            />
          </div>
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
                      onClick={handleShow2}
                    />
                  </div>
                  <div className="icon-hover d-flex align-items-center jusrify-content-center ">
                    {" "}
                    <FaVideo
                      size={20}
                      fill="rgba(0,0,0,0.6)"
                      className="w-100"
                    />
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
                  <i className="bi bi-chat-right-text"></i>
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
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={uploadImage}>
            <input
              type="file"
              onChange={(e) => {
                // console.log(e);
                setImage(e.target.files[0]);
              }}
            />
            <Button variant="primary" onClick={handleClose2} type="submit">
              Post Image
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default StartPostModal;
