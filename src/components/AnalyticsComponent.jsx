import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../assets/css/AnalyticsComponent.css";

const AnalyticsComponent = () => {
  return (
    <section>
      <Container className="pb-3">
        <div>
          <h3 className="analytics-title mt-4 mb-0">Analytics</h3>
          <p className="analytics-title-para mb-1">
            <i
              className="bi bi-eye-fill"
              style={{
                color: "rgb(103, 103, 103)",
              }}
            ></i>
            <span> </span>
            <span>Private to you</span>
          </p>
        </div>
        <Container>
          <Row>
            <Col xs={5}>
              <div className="d-flex align-items-start">
                <i
                  className="bi bi-people-fill analytics-people-fill"
                  size={"4rem"}
                ></i>
                <div className="d-flex">
                  <div className="analytics-profile-views pl-2">
                    <span>10 profile views</span>
                    <p>Discover who's viewed your profile.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={5}>
              <div className="d-flex">
                <i className="bi bi-search"></i>
                <div className="d-flex">
                  <div className="analytics-search-appearances pl-2">
                    <span>25 search appearances</span>
                    <p>See how ofter you appear in search results.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={4}></Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default AnalyticsComponent;
