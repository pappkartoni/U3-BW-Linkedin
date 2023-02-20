import { Button, Card } from "react-bootstrap";
import "../assets/css/style.css";
import profileBg from "../assets/profile2.jpg";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOwnProfile } from "../redux/actions";
import { BsFillPencilFill } from "react-icons/bs";

const ProfileComponent = () => {
  const profileData = useSelector((state) => state.getProfile.fetchProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOwnProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <section className="main-section">
        <div className="top-card">
          <Card>
            <Card.Img
              variant="top"
              src={profileBg}
              alt="backgroundImage"
              className="profile-bg position-relative"
            />
            <div className="bg-pencil d-flex justify-content-center align-items-center">
              <BsFillPencilFill fill="#0a66c2" />
            </div>
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="profile-img-block">
                  <img
                    className="w-100"
                    src={profileData.image}
                    alt="profileImage"
                  />
                </div>
                <div>
                  <BsFillPencilFill />
                </div>
              </div>

              <div className="mt-3">
                <Card.Title>
                  {profileData.name} {profileData.surname}
                </Card.Title>
                <Card.Text className="mb-0">
                  Student at Epicode | Full Stack Developer | Web Designer
                </Card.Text>
                <div className=" d-flex align-items-center">
                  <Card.Text className="text-black-light d-inline-block mb-0">
                    {profileData.area}
                    {", North Rhine-Westphalia, Germany"}
                  </Card.Text>
                  <span className="before-dot">{"."}</span>
                  <a href="#contact-info" className="d-inline-block ">
                    Contact info
                  </a>
                </div>
                <a href="#contact-info" className="d-inline-block">
                  87 connections
                </a>
                <div className="mt-2">
                  <Button variant="primary" className="rounded-pill py-1 ">
                    Open to
                  </Button>
                  <Button
                    variant="outline-primary"
                    className="rounded-pill py-1 mx-2"
                  >
                    Add profile section
                  </Button>
                  <Button variant="outline-dark " className="rounded-pill py-1">
                    More
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </section>
    </Container>
  );
};
export default ProfileComponent;
