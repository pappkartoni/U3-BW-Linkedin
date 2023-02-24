import { Col, Dropdown, DropdownButton, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import { formatDistanceToNow } from "date-fns";
import { BiComment, BiLike, BiSend, BiShuffle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../redux/actions";
import EditPostModal from "./EditPostModal";
import { useState } from "react";

const SinglePost = (props) => {
  const profileDataID = useSelector(
    (state) => state.getProfile.fetchProfile._id
  );
  const dispatch = useDispatch();
  const daysAgo = formatDistanceToNow(new Date(props.post?.createdAt), {
    addSuffix: true,
  });
  const handleDelete = () => {
    dispatch(deletePost(props.post?._id));
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="pt-3 pr-3 pb-1 pl-3" style={{ overflow: "visible" }}>
      <Row>
        <Col md={9}>
          <div className="d-flex align-items-center">
            <Col md={2} className="px-0">
              <div className="post-profile-img">
                <img
                  className="w-100"
                  src={props.post?.user?.image}
                  alt="userProfilePhoto"
                />
              </div>
            </Col>
            <Col md={10}>
              <div className="post-profile-name">
                <h6 className="mb-0">
                  <Link className="text-dark">
                    {props.post?.user?.name} {props.post?.user?.surname}
                  </Link>
                </h6>
                <p className="post-profile-title text-truncate mb-0 text-muted">
                  {props.post?.user?.title}
                </p>
                <span className="posted-date text-muted">
                  {daysAgo}
                  {/* {props.post?.createdAt &&
                    format(parseISO(props.post?.createdAt), "dd MMM yyyy")}{" "} */}
                </span>
              </div>
            </Col>
          </div>
        </Col>
        <Col md={3} className="pr-0 ml-auto">
          <div className="d-flex align-items-center justify-content-end  pr-1">
            <div className="icon-hover d-flex justify-content-center align-items-center">
              <DropdownButton
                align="end"
                title={<FiMoreHorizontal size={22} />}
                id="dropdown-menu-align-end"
                className="bg-transparent-dropdown"
              >
                <Dropdown.Item eventKey="1">Save Post</Dropdown.Item>
                <Dropdown.Item eventKey="2">Copy link to post</Dropdown.Item>
                <Dropdown.Item eventKey="3">Embed this post</Dropdown.Item>
                {props.post?.user?._id === profileDataID && (
                  <Dropdown.Item eventKey="4" onClick={handleShow}>
                    Edit this post
                  </Dropdown.Item>
                )}
              </DropdownButton>
            </div>
            {props.post?.user?._id === profileDataID && (
              <div
                className="icon-hover d-flex justify-content-center align-items-center"
                onClick={handleDelete}
              >
                <MdDelete size={20} fill="rgba(0,0,0,0.5)" />
              </div>
            )}
          </div>
        </Col>
      </Row>
      <hr />
      <div>
        <p className="text-muted">{props.post?.text}</p>
        {props.post?.image && (
          // eslint-disable-next-line jsx-a11y/img-redundant-alt
          <img className="w-100" src={props.post?.image} alt="image" />
        )}
      </div>
      <hr className="mb-1" />
      <ListGroup className="justify-content-between text-muted" horizontal>
        <ListGroup.Item className="hover-block  py-2 px-3">
          {" "}
          <BiLike size={18} />
          <span className="ml-1">Like</span>
        </ListGroup.Item>
        <ListGroup.Item className="hover-block  py-2 px-3">
          {" "}
          <BiComment size={18} />
          <span className="ml-1">Comment</span>
        </ListGroup.Item>
        <ListGroup.Item className="hover-block py-2 px-3">
          {" "}
          <BiShuffle size={18} />
          <span className="ml-1">Repost</span>
        </ListGroup.Item>
        <ListGroup.Item className="hover-block  py-2 px-3">
          {" "}
          <BiSend size={18} />
          <span className="ml-1">Send</span>
        </ListGroup.Item>
      </ListGroup>
      <EditPostModal
        show={show}
        handleClose={handleClose}
        postId={props.post?._id}
        postText={props.post}
      />
    </section>
  );
};

export default SinglePost;
