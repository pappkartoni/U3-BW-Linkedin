import "./App.css";
import SuggestedComponent from "./components/SuggestedComponent";
import AnalyticsComponent from "./components/AnalyticsComponent";
import ResourcesComponent from "./components/ResourcesComponent";
import ActivityComponent from "./components/ActivityComponent";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <SuggestedComponent />
            <AnalyticsComponent />
            <ResourcesComponent />
            <ActivityComponent />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
