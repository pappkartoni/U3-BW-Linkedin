import { Card } from "react-bootstrap";
import profileBg from "../assets/profile2.jpg";
import "../assets/css/style.css";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const PostFeedProfileLeftCom = ({ profileData }) => {
  return (
    <section>
      <div className="top-card">
        <Card>
          <Card.Img
            variant="top"
            src={profileBg}
            alt="backgroundImage"
            className="profile-bg position-relative"
          />

          <Card.Body className="text-center py-0 z-index-card-body px-3">
            <div className="profile-img-block-home text-center mx-auto">
              <img
                className="w-100 home-profile-img h-100"
                src={profileData?.image}
                alt="profileImage"
              />
            </div>

            <div className="mt-3">
              {profileData && (
                <>
                  <Card.Title className="h3 mb-1">
                    <Link to="/profile" style={{ color: "rgba(0,0,0,0.9)" }}>
                      {profileData.name} {profileData.surname}
                    </Link>
                  </Card.Title>
                  <Card.Text className="mb-0 title-font text-wrap">
                    {profileData.title}
                  </Card.Text>
                </>
              )}
            </div>
          </Card.Body>
          <hr />
          <Card.Body className="small-text font-weight-600 py-0 px-0">
            {profileData && (
              <>
                <div className="d-flex justify-content-between hover-block">
                  <span>Connections</span>
                  <span className="links-blue">88</span>
                </div>
                <div className="d-flex justify-content-between hover-block">
                  <span>Who's viewed your profile</span>
                  <span className="links-blue ml-4">14</span>
                </div>
              </>
            )}
          </Card.Body>
          <hr className="mb-0" />
          <Card.Body className="small-text py-0 px-0">
            {profileData && (
              <>
                <div className=" hover-block py-2">
                  <span className="d-block">
                    Access exclusive tools & insights
                  </span>
                  <span className="premium-text font-weight-600 text-underline ">
                    Get Hired Faster, Try Premium Free
                  </span>
                </div>
              </>
            )}
          </Card.Body>
          <hr className="mt-0 mb-0" />
          <Card.Body className="hover-block small-text py-2 px-2 pb-3">
            <BsFillBookmarkFill className="hover-icon-blue" />
            <span className="premium-text font-weight-600 text-decoration-none ml-2 align-middle">
              My Items
            </span>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};

export default PostFeedProfileLeftCom;
