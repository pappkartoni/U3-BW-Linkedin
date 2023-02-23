import { useEffect, useState } from "react";
import { Navbar, Container, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import NavbarButton from "./NavbarButton";

const Navi = (props) => {
  const user = useSelector((state) => state.getProfile.fetchProfile);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  const [dropdownIsVisible, setDropdownIsVisible] = useState(false);

  const setScrollBehaviour = () => {
    const offset = 210;

    if (window.scrollY >= offset) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const toggleDropdown = () => setDropdownIsVisible(!dropdownIsVisible);

  useEffect(() => {
    window.addEventListener("scroll", setScrollBehaviour);
    return () => window.removeEventListener("scroll", setScrollBehaviour);
  }, []);

  return (
    <>
      <Navbar fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="logo mercado-match"
                width="41"
                height="41"
                focusable="false"
              >
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
              </svg>
            </Link>
          </Navbar.Brand>
          <Form className="mr-auto">
            <Form.Control type="text" placeholder="Search" />
          </Form>
          <ul className="navbuttons">
            <NavbarButton
              text="Home"
              d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"
            />
            <NavbarButton
              text="My Network"
              d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"
            />
            <NavbarButton
              text="Jobs"
              d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"
            />
            <NavbarButton
              text="Messaging"
              d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"
            />
            <NavbarButton
              text="Notifications"
              d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"
            />

            <li className="navbutton">
              <Link
                onClick={toggleDropdown}
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <div>
                  <img
                    className="navprofile"
                    src={user?.image}
                    alt="fetched profile pic here"
                  />
                </div>
                <span>
                  Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
              {dropdownIsVisible && (
                <section className="user-dropdown">
                  <div className="d-flex">
                    {/* {user.length !== <img src={user.image} alt={user.name} />} */}
                    <img src={user.image} alt={user.name} />
                    <div className="d-flex flex-column mb-3">
                      <h5>
                        {user.name} {user.surname}
                      </h5>
                      <span>{user.title}</span>
                    </div>
                  </div>
                  <Link
                    to={"/profile"}
                    className="w-100 btn btn-outline-primary justify-content-center border-btn"
                  >
                    View Profile
                  </Link>
                  <div className="dropdown-section">
                    <h3>Account</h3>
                    <Link to="/">Try Premium for free</Link>
                    <Link to="/">Settings & Privacy</Link>
                    <Link to="/">Help</Link>
                    <Link to="/">Language</Link>
                  </div>
                  <div className="dropdown-section">
                    <h3>Manage</h3>
                    <Link to="/">Post & Activity</Link>
                    <Link to="/">Job Posting Account</Link>
                  </div>
                  <div className="pt-2">
                    <Link to="/">Sign Out</Link>
                  </div>
                </section>
              )}
            </li>
            <li className="navbutton">
              <Link
                to="/"
                className="d-flex flex-column align-items-center justify-content-center"
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-supported-dps="24x24"
                    fill="currentColor"
                    className="mercado-match"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                  </svg>
                </div>
                <span>
                  Work
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                  </svg>
                </span>
              </Link>
            </li>
            <li className="premium">
              <Link to="https://www.linkedin.com/premium/survey/">
                Try Premium for free
              </Link>
            </li>
          </ul>
        </Container>
      </Navbar>
      {location.pathname === "/profile" && (
        <header className={isVisible ? "visible fixed-top" : "fixed-top"}>
          <Container className="subnavi">
            <img src={user?.image} alt="fetched profile pic here" />
            <div className="d-flex flex-column mr-auto">
              <h5>
                {user?.name} {user?.surname}
              </h5>
              <span>{user?.title}</span>
            </div>
            <div className="subnavbuttons">
              <Button className="mr-2" variant="outline-secondary">
                More
              </Button>
              <Button className="mr-2" variant="outline-primary">
                Add profile section
              </Button>
              <Button variant="primary">Open to</Button>
            </div>
          </Container>
        </header>
      )}
    </>
  );
};

export default Navi;
