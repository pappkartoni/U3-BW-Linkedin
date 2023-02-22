import { Col, Container, Row } from "react-bootstrap";
import ProfileComponent from "../ProfileComponent";
import SuggestedComponent from "../SuggestedComponent";
import AnalyticsComponent from "../AnalyticsComponent";
import ResourcesComponent from "../ResourcesComponent";
import ActivityComponent from "../ActivityComponent";
import ExperiencesContainer from "../ExperiencesContainer";
import Sidebar from "../Sidebar";

const ProfilePage2 = () => {
  return (
    <Container>
      <Row>
        <Col md={9}>
          <ProfileComponent />
          <SuggestedComponent />
          <AnalyticsComponent />
          <ResourcesComponent />
          <ActivityComponent />
          <ExperiencesContainer />
        </Col>
        <Col md={3}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage2;
