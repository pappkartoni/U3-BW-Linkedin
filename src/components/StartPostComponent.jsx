import "../assets/css/StartPostComponent.css";
import { useSelector } from "react-redux";
import StartPostModal from "./StartPostModal";
import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import globalImage from "../assets/img/developer1.jfif";
import {
  RiGalleryFill,
  RiCalendarEventFill,
  RiArticleFill,
} from "react-icons/ri";
import { FaVideo } from "react-icons/fa";

const StartPostComponent = () => {
  const image = useSelector((state) => state.getProfile.fetchProfile);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="mb-4">
      <div className="start-post-container">
        <div className="start-post-first-row">
          {image ? (
            <img src={image.image} alt="user profile" />
          ) : (
            <img src={globalImage} alt="user profile" />
          )}

          <div onClick={handleShow}>Start a post</div>
        </div>
        <ListGroup className="justify-content-between text-muted" horizontal>
          <ListGroup.Item className="hover-block  py-2 px-3">
            {" "}
            <RiGalleryFill size={20} fill="#378fe9" />
            <span className="ml-1 align-middle">Photo</span>
          </ListGroup.Item>
          <ListGroup.Item className="hover-block  py-2 px-3">
            {" "}
            <FaVideo size={20} fill="#5f9b41" />
            <span className="ml-1 align-middle">Video</span>
          </ListGroup.Item>
          <ListGroup.Item className="hover-block py-2 px-3">
            {" "}
            <RiCalendarEventFill size={20} fill="#c37d16" />
            <span className="ml-1 align-middle">Event</span>
          </ListGroup.Item>
          <ListGroup.Item className="hover-block  py-2 px-3">
            {" "}
            <RiArticleFill size={20} fill="#e16745" />
            <span className="ml-1 align-middle">Write article</span>
          </ListGroup.Item>
        </ListGroup>
        <StartPostModal show={show} handleClose={handleClose} />
      </div>
    </section>
  );
};

export default StartPostComponent;
