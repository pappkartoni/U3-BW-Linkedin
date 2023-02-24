import React from "react";
import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ChangeTitleForm from "./ChangeTitleForm";
import ChangeBioForm from "./ChangeBioForm";
import "../assets/css/SuggestedComponent.css";

const SuggestedComponent = () => {
  const [showTitleForm, setShowTitleForm] = useState(false);
  const handleCloseTitleForm = () => setShowTitleForm(false);
  const handleShowTitleForm = () => setShowTitleForm(true);
  const openChangeTitleForm = () => {};

  const [showBioForm, setShowBioForm] = useState(false);
  const handleCloseBioForm = () => setShowBioForm(false);
  const handleShowBioForm = () => setShowBioForm(true);
  const openChangeBioForm = () => {};

  return (
    <section>
      <ChangeTitleForm
        handleCloseTitleForm={handleCloseTitleForm}
        handleShowTitleForm={handleShowTitleForm}
        showTitleForm={showTitleForm}
      />

      <ChangeBioForm
        handleCloseBioForm={handleCloseBioForm}
        handleShowBioForm={handleShowBioForm}
        showBioForm={showBioForm}
      />

      <Container className="pb-3">
        <div>
          <h3 className="suggested-title mt-4 mb-0">Suggested for you</h3>
          <p className="suggested-title-para">
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
        <div>
          <h4 className="suggested-title-level-title">Intermediate</h4>
          <div className="mb-0">
            <div className="d-flex justify-content-center align-items-center">
              <div className="progress-bar">
                <div></div>
              </div>
              <span className="progress-bar-grade">5/7</span>
            </div>
          </div>
          <p className="suggested-card-title mt-0 pt-0">
            Complete 2 steps to achieve{" "}
            <span
              className="profile-level-span"
              style={{ color: "#0a66c2", fontWeight: "600", cursor: "pointer" }}
            >
              All Star
            </span>
          </p>
        </div>

        <section className="suggested-internal-section">
          <Container className="suggested-internal-container">
            <Row className="mb-1">
              <Col xs={6}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Card.Body className="internal-suggested-card-body">
                    <Card.Title className="suggested-work-box">
                      <i
                        className="bi bi-briefcase briefcase-icon"
                        // style={{ color: "brown" }}
                      ></i>
                      <span> </span>
                      <span style={{ fontWeight: "700" }}>
                        Where do you currently work?
                      </span>
                    </Card.Title>
                    {/* add x to top right corner */}
                    <Card.Text className="suggested-work-box-text">
                      Members who include at least one position recieve up to
                      3.5 times as many profile views.
                    </Card.Text>
                    <Button
                      className="add-position-btn"
                      onClick={handleShowTitleForm}
                      variant="outline-secondary"
                      size="sm"
                      style={{
                        color: "rgb(107, 107, 107)",
                      }}
                    >
                      Add position
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card style={{ width: "100%", height: "100%" }}>
                  <Card.Body className="internal-summary-card-body">
                    <Card.Title className="summary-work-box">
                      <i className="bi bi-person-vcard contact-card-icon"></i>
                      {/* <div className="ivm-view-attr__system-image ivm-view-attr__system-image--small ivm-view-attr__system-image--illustration-microspot ivm-view-attr__system-image--ui-feed-profile-small "></div> */}
                      <span> </span>
                      <span style={{ fontWeight: "700" }}>
                        Write a summary to highlight your personality or work
                        experience.
                      </span>
                    </Card.Title>
                    <Card.Text className="summary-work-box-text">
                      Members who include a summary recieve up to 3.9 times as
                      many profile views.
                    </Card.Text>
                    <Button
                      onClick={handleShowBioForm}
                      className="add-summary-btn"
                      variant="outline-secondary"
                      size="sm"
                      style={{
                        color: "rgb(107, 107, 107)",
                      }}
                    >
                      Add summary
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    </section>
  );
};

export default SuggestedComponent;
