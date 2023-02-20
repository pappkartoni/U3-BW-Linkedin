import { Col, Container, Form, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Logo from "../assets/img/logo.svg"

const Footer = (props) => {
    return (
        <footer>
            <Container>
                <img src={Logo} alt="logo" className="logo"/>
                <Row>
                    <Col xs={12} md={6}>
                        <Row className="links">
                            <Col xs={12} md={4} className="d-flex flex-column">
                                <Link to="/">
                                    <span>About</span>
                                </Link>
                                <Link to="/">
                                    <span>Community Guidelines</span>
                                </Link>
                                <Link to="/">
                                    <span>Privacy & Terms</span>
                                </Link>
                                <Link to="/">
                                    <span>Sales Solutions</span>
                                </Link>
                                <Link to="/">
                                    <span>Safety Center</span>
                                </Link>
                            </Col>
                            <Col xs={12} md={4} className="d-flex flex-column">
                                <Link to="/">
                                    <span>Accessibility</span>
                                </Link>
                                <Link to="/">
                                    <span>Careers</span>
                                </Link>
                                <Link to="/">
                                    <span>Ad Choices</span>
                                </Link>
                                <Link to="/">
                                    <span>Mobile</span>
                                </Link>
                            </Col>
                            <Col xs={12} md={4} className="d-flex flex-column">
                                <Link to="/">
                                    <span>Talent Solutions</span>
                                </Link>
                                <Link to="/">
                                    <span>Marketing Solutions</span>
                                </Link>
                                <Link to="/">
                                    <span>Advertising</span>
                                </Link>
                                <Link to="/">
                                    <span>Small Business</span>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row>
                            <Col xs={12} md={6} className="d-flex flex-column">
                                <div className="d-flex no-wrap mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mr-2 mercado-match" width="24" height="24" focusable="false">
                                        <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 16.25A1.25 1.25 0 1113.25 17 1.25 1.25 0 0112 18.25zm1.41-5.46L13 13v1h-2v-2.21l1.49-.79C13.82 10.34 14 9.77 14 9.3c0-.78-.92-1.3-2.3-1.3A7.12 7.12 0 008 9.24V7a8 8 0 013.7-1c3 0 4.3 1.55 4.3 3.3a3.91 3.91 0 01-2.59 3.49z"></path>
                                    </svg>
                                    <div className="d-flex flex-column">
                                        <Link to="/">
                                            <h6>Questions?</h6>
                                        </Link>
                                        <span>Visit our Help Center.</span>
                                    </div>
                                </div>
                                <div className="d-flex no-wrap mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mr-2 mercado-match" width="24" height="24" focusable="false">
                                        <path d="M9.18 2l-4.3 2.52L6.22 8l-.52.91-3.7.55v5l3.64.54.54.93-1.34 3.53L9.14 22l2.29-2.9h1.09l2.3 2.9 4.32-2.52L17.79 16l.53-.93 3.68-.53v-5L18.32 9l-.51-.9 1.36-3.51L14.86 2l-2.33 3h-1zM12 9a3 3 0 11-3 3 3 3 0 013-3z"></path>
                                    </svg>
                                    <div>
                                        <Link to="/">
                                            <h6>Manage your account and privacy</h6>
                                        </Link>
                                        <span>Go to your settings.</span>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form>
                                    <Form.Label>Select Language</Form.Label>
                                    <Form.Control as="select" aria-label="Select Language">
                                        <option>English</option>
                                        <option>German</option>
                                        <option>French</option>
                                        <option>Italian</option>
                                    </Form.Control>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <span className="copyright">
                    LinkedIn Corporation © 2023
                </span>
            </Container>
        </footer>
    )
}

export default Footer