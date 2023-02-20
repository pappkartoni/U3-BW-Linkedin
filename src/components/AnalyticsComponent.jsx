import { Col, Container, Row } from "react-bootstrap";

const AnalyticsComponent = () => {
  return (
    <>
      <Container className="block-example border border-dark">
        <div>
          <h3>Analytics</h3>
          <p>
            <i className="bi bi-eye-fill"></i>
            <span>Private to you</span>
          </p>
        </div>
        <Container>
          <Row>
            <Col xs={4}>
              <div>
                <div>
                  <i className="bi bi-people-fill"></i>
                  <span>i profile views (function?)</span>
                </div>
                <p>Discover who's viewed your profile.</p>
              </div>
            </Col>
            <Col xs={4}>
              <div>
                <div>
                  <i className="bi bi-search"></i>
                  <span>i search appearances</span>
                </div>

                <p>See how ofter you appear in search results.</p>
              </div>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default AnalyticsComponent;
