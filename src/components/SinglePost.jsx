import { Col, Dropdown, DropdownButton, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import { formatDistanceToNow } from "date-fns";
import { BiComment, BiLike, BiSend, BiShuffle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllPosts } from "../redux/actions";
import { AiFillLike } from "react-icons/ai";
import EditPostModal from "./EditPostModal";
import { useState } from "react";
import CommentList from "./CommentList";
import CommentPost from "./CommentPost";

const SinglePost = (props) => {
  const [likes, setLikes] = useState(props.post.likes.length);
  const profileDataID = useSelector(
    (state) => state.getProfile.fetchProfile._id
    );
  const [isLiked, setIsLiked] = useState(props.post.likes.includes(profileDataID));
  const dispatch = useDispatch();
  const daysAgo = formatDistanceToNow(new Date(props.post?.createdAt), {
    addSuffix: true,
  });
  const handleDelete = () => {
    dispatch(deletePost(props.post?._id));
  };

  const [show, setShow] = useState(false);
  const [expandedComment, setExpandedComment] = useState(false)
  const [expandedList, setExpandedList] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLike = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BE_URL}/posts/${props.post?._id}/like`, {
        method: "PUT",
        body: JSON.stringify({_id: profileDataID}),
        headers: {"Content-Type": "application/json"}
      })
      if (res.ok) {
        const data = await res.json()
        console.log(data)
        setIsLiked(data.isLiked)
        setLikes(data.totalLikes)
        dispatch(getAllPosts())
      }
    } catch (error) {
      console.log(error)
    }
  };
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
                {props.post?.user?._id?.toString() === profileDataID.toString() && (
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
      <div className="d-flex justify-content-between">
        <span className="likes-counter d-flex align-items-center">
          <img src="https://static.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="..." />
          <img src="https://static.licdn.com/sc/h/b1dl5jk88euc7e9ri50xy5qo8" alt="..." style={{marginLeft: -4}}/>
          <img src="https://static.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="..." style={{marginLeft: -4, marginRight: 2}}/>
          {likes}
        </span>
        <span className="comments-count" onClick={() => {setExpandedComment(true); setExpandedList(true)}}>{props.post?.comments?.length} comment{props.post?.comments?.length !== 1 ? "s" : ""}</span>
      </div>
      <hr className="mb-1" />
      <ListGroup className="justify-content-between text-muted" horizontal>
        <ListGroup.Item className="hover-block  py-2 px-3" onClick={handleLike}>
          {" "}
          <span className="d-flex align-items-center">
            {isLiked ? (
              <>
                <AiFillLike fill="#0a66c2" size={20} />
                <span className="ml-1" style={{ color: "#0a66c2" }}>
                  Like
                </span>
              </>
            ) : (
              <>
                <BiLike size={20} />
                <span className="ml-1">Like</span>
              </>
            )}
          </span>
        </ListGroup.Item>
        <ListGroup.Item className="hover-block  py-2 px-3" onClick={() => setExpandedComment(true)}>
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
      {expandedComment &&
          <CommentPost postId={props.post._id}/>
      }
      {expandedList && 
          <CommentList postId={props.post._id} comments={props.post.comments} />
      }
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
