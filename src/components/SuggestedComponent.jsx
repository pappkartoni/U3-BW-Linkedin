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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48.11"
                        height="48.03"
                        viewBox="0 0 48.11 48.03"
                        id="briefcase-jobs-small"
                        data-supported-dps="48x48"
                      >
                        <path
                          d="M1.05 26h46v13.93a3 3 0 01-3 3.09H4.1a3 3 0 01-3-3.09z"
                          fill="#788fa5"
                        />
                        <path
                          d="M1.6 9h44.9a1.55 1.55 0 011.55 1.55v15.33A3.1 3.1 0 0145 29H3.15a3.11 3.11 0 01-3.1-3.1V10.59A1.56 1.56 0 011.58 9z"
                          fill="#f8c77e"
                        />
                        <rect
                          x="20.05"
                          y="25.02"
                          width="8"
                          height="8"
                          rx="1.35"
                          fill="#fff"
                        />
                        <path
                          d="M36.05 6a3 3 0 00-3-3h-18a3 3 0 00-3 3v3h2V6a1 1 0 011-1h18a1 1 0 011 1v3h2z"
                          fill="#56687a"
                        />
                      </svg>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48.11"
                        height="48.03"
                        viewBox="0 0 48.11 48.03"
                        id="ui-feed-profile-small"
                        data-supported-dps="48x48"
                      >
                        <path fill="#fff" d="M2.05 8.02h44v38h-44z" />
                        <path
                          fill="#dce6f1"
                          d="M46.05 8.03v37.99h-44V8.03h-2v39.99h48V8.03h-2z"
                        />
                        <path
                          d="M48.05 2.57V8h-48V2.57A2.59 2.59 0 012.66 0h42.77a2.59 2.59 0 012.62 2.54z"
                          fill="#9db3c8"
                        />
                        <circle cx="4.05" cy="4.02" r="2" fill="#fff" />
                        <path fill="#f8c77e" d="M6.05 34.02h36v6h-36z" />
                        <path
                          d="M41.05 30h-34a1 1 0 010-2h34a1 1 0 010 2zM41.05 24h-18a1 1 0 010-2h18a1 1 0 010 2zM41.05 18h-18a1 1 0 010-2h18a1 1 0 010 2z"
                          fill="#788fa5"
                        />
                        <path
                          d="M16.41 23.14A6 6 0 0012.05 13 6 6 0 007.7 23.14a9 9 0 018.71 0z"
                          fill="#56687a"
                        />
                        <path
                          d="M12.05 25a6 6 0 004.36-1.88 9 9 0 00-8.71 0A6 6 0 0012.05 25z"
                          fill="#f8c77e"
                        />
                        <circle cx="12.05" cy="18.02" r="3" fill="#f8c77e" />
                      </svg>
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
