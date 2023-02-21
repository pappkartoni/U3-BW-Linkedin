import Sidebar from "../Sidebar";
import { Col, Container, Row } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container className=" hero-section">
        <Row>
          <Col md={3} style={{ padding: "0" }}>
            <h6>User profile</h6>
          </Col>
          <Col md={6} style={{ padding: "0" }}>
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
