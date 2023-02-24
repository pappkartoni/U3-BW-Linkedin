import { useDispatch, useSelector } from "react-redux";
import PostFeedProfileLeftCom from "../PostFeedProfileLeftCom";
import { Col, Container, Row } from "react-bootstrap";
import { fetchOwnProfile } from "../../redux/actions";
import { useEffect } from "react";
import PostFeedLeftRecent from "../PostFeedLeftRecent";
import PostComponent from "../PostComponent";
import FollowContainer from "../FollowContainer";
import SideBarFooter from "../SidebarFooter";

const Feed = () => {
  const user = useSelector((state) => state.getProfile.fetchProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOwnProfile());
    document.title = "Feed | BlinkedIn"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} sm={3} md={3} lg={3}>
          <PostFeedProfileLeftCom profileData={user} />
          <PostFeedLeftRecent />
        </Col>
        <Col xs={12} sm={6} md={6} lg={6} className="px-0">
          <PostComponent />
        </Col>
        <Col xs={12} sm={3} className="d-xs-none " md={3} lg={3}>
          <FollowContainer />
          <SideBarFooter />
        </Col>
      </Row>
    </Container>
  );
};

export default Feed;
