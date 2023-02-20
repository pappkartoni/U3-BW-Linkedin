import React from "react";
import { Button, Container } from "react-bootstrap";

const ResourcesComponent = () => {
  return (
    <>
      <Container className="block-example border border-dark">
        <div>
          <h3>Resources</h3>
          <p>
            <i className="bi bi-eye-fill"></i>
            <span>Private to you</span>
          </p>
        </div>
        <div>
          <div>
            <div>
              <i className="bi bi-broadcast-pin"></i>
              <span>
                Creator Mode<Button>ON/OFF (function?)</Button>
              </span>
            </div>
            <p>
              Get discovered, showcase content on your profile, and get access
              to creator tools
            </p>
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
        <hr></hr>
        <div>
          <p>
            Show all n resources <i className="bi bi-arrow-right"></i>{" "}
            (function?)
          </p>
        </div>
      </Container>
    </>
  );
};

export default ResourcesComponent;
