import { useDispatch, useSelector } from "react-redux";
import PostFeedProfileLeftCom from "../PostFeedProfileLeftCom";
import Sidebar from "../Sidebar";
import { Col, Row } from "react-bootstrap";
import { fetchOwnProfile } from "../../redux/actions";
import { useEffect } from "react";
import PostFeedLeftRecent from "../PostFeedLeftRecent";
import PostComponent from "../PostComponent";

const HomePage = () => {
  const profileData = useSelector((state) => state.getProfile.fetchProfile);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOwnProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Row>
      <Col md={2}>
        <PostFeedProfileLeftCom profileData={profileData} />
        <PostFeedLeftRecent />
      </Col>
      <Col md={7} style={{ padding: "0" }}>
        <PostComponent />
      </Col>
      <Col md={3} style={{ padding: "0" }}>
        <Sidebar />
      </Col>
    </Row>
  );
};

export default HomePage;
