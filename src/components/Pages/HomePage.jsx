import { useDispatch, useSelector } from "react-redux";
import PostFeedProfileLeftCom from "../PostFeedProfileLeftCom";
import Sidebar from "../Sidebar";
import { Col, Container, Row } from "react-bootstrap";
import { fetchOwnProfile } from "../../redux/actions";
import { useEffect } from "react";
import PostFeedLeftRecent from "../PostFeedLeftRecent";

const HomePage = () => {
  const profileData = useSelector((state) => state.getProfile.fetchProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOwnProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className=" hero-section">
        <Row>
          <Col md={2} style={{ padding: "0" }}>
            <h6>User profile</h6>
          </Col>
          <Col md={7} style={{ padding: "0" }}>
            <h6>Post and feeds</h6>
          </Col>
          <Col md={3} style={{ padding: "0" }}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
