import { Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import { formatDistanceToNow } from "date-fns";
import { BiComment, BiLike, BiSend, BiShuffle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";

const SinglePost = (props) => {
  const daysAgo = formatDistanceToNow(new Date(props.post?.createdAt), {
    addSuffix: true,
  });
  return (
    <section className="pt-3 pr-3 pb-1 pl-3">
      <Row>
        <Col md={10}>
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
        <Col md={2}>
          <div className="text-right icon-hover d-flex justify-content-center align-items-center ">
            <FiMoreHorizontal size={22} />
          </div>
        </Col>
      </Row>
      <hr />
      <div>
        <p className="text-muted">{props.post?.text}</p>
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
    </section>
  );
};

export default SinglePost;
