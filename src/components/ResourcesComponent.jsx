import React from "react";
import { Button, Container } from "react-bootstrap";
import "../assets/css/ResourcesComponent.css";

const ResourcesComponent = () => {
  return (
    <section>
      <Container className="resources-container">
        <div className="internal-resources-container">
          <div>
            <h3 className="resources-title mt-4 mb-0">Resources</h3>
            <p className="resources-title-para mb-1">
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
            <div>
              <div className="d-flex">
                <i className="bi bi-broadcast-pin"></i>
                <div className="d-flex flex-column">
                  <div className="creator-mode d-flex">
                    <span>Creator Mode</span>
                    <Button className="creator-btn" variant="secondary">
                      ON
                    </Button>
                  </div>
                  <p>
                    Get discovered, showcase content on your profile, and get
                    access to creator tools
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div>
              <div>
                <i className="bi bi-people-fill"></i>
                <span>My network</span>
              </div>
              <p>See and manage your connections and interests.</p>
            </div>
          </div>
          <hr className="resources-hr"></hr>
        </div>

        <div>
          <p className="show-resources-btn">
            Show all 5 resources <i className="bi bi-arrow-right"></i>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ResourcesComponent;
