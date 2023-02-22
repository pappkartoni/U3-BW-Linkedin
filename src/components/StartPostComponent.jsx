import "../assets/css/StartPostComponent.css";
import { useSelector } from "react-redux";
import StartPostModal from "./StartPostModal";
import { useState } from "react";

const StartPostComponent = () => {
  const image = useSelector((state) => state.getProfile.fetchProfile.image);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="start-post-container">
      <div className="start-post-first-row">
        <img src={image} />
        <div onClick={handleShow}>Start a post</div>
      </div>

      <div className="start-post-second-row d-flex">
        <div className="d-flex">
          <i className="bi bi-image"></i>
          <p>Photo</p>
        </div>
        <div className="d-flex">
          <i className="bi bi-play-btn-fill"></i>
          <p>Video</p>
        </div>
        <div className="d-flex">
          <i className="bi bi-calendar-date"></i>
          <p>Event</p>
        </div>
        <div className="d-flex">
          <i className="bi bi-newspaper"></i>
          <p>Write article</p>
        </div>
      </div>

      <StartPostModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default StartPostComponent;
