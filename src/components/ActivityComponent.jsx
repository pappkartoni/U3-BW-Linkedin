import { Button, Container } from "react-bootstrap";
import "../assets/css/ActivityComponent.css";

const ActivityComponent = () => {
  return (
    <section>
      <Container className="pb-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="activity-title mt-4 mb-0">Activity</h3>
            <p>n followers</p>
          </div>
          <Button variant="outline-primary" className="border-btn">
            Start a post
          </Button>
        </div>
        <div>
          <p>
            N posts lately | you haven't posted latley (FETCH GET function?)
          </p>
          <p>Recent post you share or comment on will be displayed here</p>
        </div>

        <hr></hr>
        <div>
          <p>
            Show all n resources <i className="bi bi-arrow-right"></i>{" "}
            (function?)
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ActivityComponent;
