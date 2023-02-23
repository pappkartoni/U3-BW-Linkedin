import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/ActivityComponent.css";
import { getAllPosts } from "../redux/actions";
import SinglePost from "./SinglePost";
import StartPostModal from "./StartPostModal";

const ActivityComponent = () => {
  const dispatch = useDispatch();
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const user = useSelector(state => state.getProfile.fetchProfile)
  const allPosts = useSelector(state => state.posts.postList)
  const ownPosts = allPosts.slice().reverse().slice(0,100).filter(p => p.user?._id === user._id)

  useEffect(() => {
    dispatch(getAllPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <section>
      <Container className="pb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="activity-title mt-4 mb-0">Activity</h3>
            <p>n followers</p>
          </div>
          <Button
            onClick={handleShow}
            variant="outline-primary"
            className="border-btn"
          >
            Start a post
          </Button>
        </div>
        <div>
          {ownPosts.length > 0 && ownPosts.map(p => 
            <SinglePost key={p._id} post={p} />
            )}
          <p>
            N posts lately | you haven't posted latley (FETCH GET function?)
          </p>
          <p>Recent post you share or comment on will be displayed here</p>
        </div>

        <hr></hr>
        <div>
          <p>
            Show all n resources <i className="bi bi-arrow-right"></i>{" "}
            (function?)
          </p>
        </div>
      </Container>
      <StartPostModal show={show} handleClose={handleClose} />
    </section>
  );
};

export default ActivityComponent;
