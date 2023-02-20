import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ChangeTitleForm from "./ChangeTitleForm";
import "../assets/css/SuggestedComponent.css";

const SuggestedComponent = () => {
  const [showTitleForm, setShowTitleForm] = useState(false);

  const handleCloseTitleForm = () => setShowTitleForm(false);
  const handleShowTitleForm = () => setShowTitleForm(true);
  const openChangeTitleForm = () => {};

  return (
    <section>
      <ChangeTitleForm
        handleCloseTitleForm={handleCloseTitleForm}
        handleShowTitleForm={handleShowTitleForm}
        showTitleForm={showTitleForm}
      />

      <Container>
        <div>
          <h2 className="suggested-title">Suggested for you</h2>
          <p className="suggested-title-para">
            <i className="bi bi-eye-fill"></i>
            <span>Private to you</span>
          </p>
        </div>
        <div>
          <h4 className="suggested-title-level-title">
            Intermediate(function?)
          </h4>
          <p>
            <div>
              <div className="progress-bar">
                <div></div>
              </div>
              <span>5/7 (function?)</span>
            </div>
          </p>
          <p>
            Complete i steps to achieve <span>All Star (function?)</span>
          </p>
        </div>

        <Container>
          <Row>
            <Col xs={6}>
              <Card style={{ width: "18rem" }}>
                <i className="bi bi-briefcase"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-briefcase"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <Card.Body>
                  <Card.Title>Where do you currently work?</Card.Title>
                  {/* add x to top right corner */}
                  <Card.Text>
                    Members who include at least one position recieve up to 3.5
                    times as many profile views
                  </Card.Text>
                  <Button onClick={handleShowTitleForm} variant="primary">
                    Add position (FETCH function?)
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6}>
              <Card style={{ width: "18rem" }}>
                <i className="bi bi-person-vcard"></i>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person-vcard"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                </svg>
                <Card.Body>
                  <Card.Title>
                    Write a summary to highlight your personality or work
                    experience
                  </Card.Title>
                  <Card.Text>
                    Members who include a summary recieve up to 3.9 times as
                    many profile views
                  </Card.Text>
                  <Button variant="primary">
                    Add summary (FETCH function?)
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
};

export default SuggestedComponent;
