import { useEffect } from "react";
import { useState } from "react";
import { Col, Dropdown, DropdownButton, ListGroup, Row } from "react-bootstrap";
import { BiComment, BiLike, BiSend, BiShuffle } from "react-icons/bi";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";

const SearchedUserPost = (props) => {
  const [userExp, setUserExp] = useState([]);

  useEffect(() => {
    fetchCurrentProfile(props.userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userId]);

  const fetchCurrentProfile = async (userId) => {
    try {
      let options = {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
        },
      };

      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${userId}`,
        options
      );
      let responseData = await response.json();
      setUserExp(responseData);
      console.log("this", userExp);
    } catch (error) {
      console.log("Error!!");
    }
  };
  return (
    <>
      {userExp !== null ? (
        <section
          className="pt-3 pr-3 pb-1 pl-3"
          style={{ overflow: "visible" }}
        >
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
                      {/* {daysAgo} */}
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
                    <Dropdown.Item eventKey="2">
                      Copy link to post
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="3">Embed this post</Dropdown.Item>
                    <Dropdown.Item eventKey="4">Edit this post</Dropdown.Item>
                  </DropdownButton>
                </div>
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
      ) : (
        "Not Posted yet"
      )}
    </>
  );
};

export default SearchedUserPost;
