import "./App.css";
import SuggestedComponent from "./components/SuggestedComponent";
import AnalyticsComponent from "./components/AnalyticsComponent";
import ResourcesComponent from "./components/ResourcesComponent";
import ActivityComponent from "./components/ActivityComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Navi from "./components/Navi";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ProfileComponent from "./components/ProfileComponent";
import ExperiencesContainer from "./components/ExperiencesContainer";

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <main>
        <Container>
          <Row>
            <Col md={8}>
              <ProfileComponent />
              <SuggestedComponent />
              <AnalyticsComponent />
              <ResourcesComponent />
              <ActivityComponent />
              <ExperiencesContainer />
            </Col>
            <Col md={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
