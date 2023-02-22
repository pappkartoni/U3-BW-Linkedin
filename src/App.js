import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navi from "./components/Navi";
import Footer from "./components/Footer";
import HomePage from "./components/Pages/HomePage.jsx";
import ProfilePage2 from "./components/Pages/ProfilePage2";

function App() {
  return (
    <BrowserRouter>
      <Navi />
      <main>
        <Container className="pl-0 pr-0">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage2 />} />
          </Routes>
        </Container>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
