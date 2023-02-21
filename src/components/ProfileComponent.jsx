import { Button, Card, Modal } from "react-bootstrap";
import "../assets/css/style.css";
import profileBg from "../assets/profile2.jpg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOwnProfile } from "../redux/actions";
import { BsFillPencilFill } from "react-icons/bs";
import ProfileEdit from "./ProfileEdit";

const ProfileComponent = () => {
  const profileData = useSelector((state) => state.getProfile.fetchProfile);
  const dispatch = useDispatch();

  const [showImage, setShowImage] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    dispatch(fetchOwnProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const uploadImage = async (e) => {
    e.preventDefault();
    //this is the state that handles the uploading of the image, the FormData method is used to handle image upload
    //and append the image to the form
    const data = new FormData();
    data.append("profile", showImage);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/63f33a3d8381fc0013fffad6/picture",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log("Image Uploaded Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
                  src={profileData?.image}
                  alt="profileImage"
                  onClick={handleShow2}
                />
              </div>
              <div className="icon-hover d-flex justify-content-center align-items-center">
                <BsFillPencilFill fill="rgba(0,0,0,0.6)" onClick={handleShow} />
              </div>
            </div>
            <ProfileEdit
              profileData={profileData}
              show={show}
              handleClose={handleClose}
            />
            <div className="mt-3">
              {profileData && (
                <>
                  <Card.Title>
                    {profileData.name} {profileData.surname}
                  </Card.Title>
                  <Card.Text className="mb-0">
                    {profileData.title}
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
                    <Button
                      variant="primary"
                      className="rounded-pill py-1 d-inline-block "
                    >
                      Open to
                    </Button>
                    <Button
                      variant="outline-primary"
                      className="rounded-pill py-1 mx-2 d-inline-block border-btn"
                    >
                      Add profile section
                    </Button>
                    <Button
                      variant="outline-secondary "
                      className="rounded-pill py-1 d-inline-block"
                    >
                      More
                    </Button>
                  </div>
                </>
              )}
            </div>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={uploadImage}>
              <input
                type="file"
                onChange={(e) => {
                  console.log(e);
                  setShowImage(e.target.files[0]);
                }}
              />
              <Button variant="primary" onClick={handleClose2} type="submit">
                Post Image
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </section>
  );
};
export default ProfileComponent;
