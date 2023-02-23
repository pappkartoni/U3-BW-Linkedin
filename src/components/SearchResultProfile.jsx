import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Button, Card } from "react-bootstrap";
import SearchedUserPost from "./SearchedUserPost";

const SearchResultProfile = () => {
  const [currentProfileData, setCurrentProfileData] = useState({});

  const params = useParams();
  const postId = params.userId;

  useEffect(() => {
    fetchCurrentData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCurrentData = async () => {
    try {
      const url =
        "https://striveschool-api.herokuapp.com/api/profile/" + postId;

      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzM2EzZDgzODFmYzAwMTNmZmZhZDYiLCJpYXQiOjE2NzY4ODQ1NDIsImV4cCI6MTY3ODA5NDE0Mn0.yy7dqsjX4YYSOfQOfYOZsSdFYZqn9oQ_CAzHWsa775s",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCurrentProfileData(data);
      } else {
        console.log("Error Fetching Data!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="main-section">
        <div className="top-card">
          <Card>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg"
              alt="backgroundImage"
              className="profile-bg position-relative"
            />

            <Card.Body>
              <div className="d-flex justify-content-between align-items-center">
                <div className="profile-img-block">
                  <img
                    className="w-100 h-100"
                    src={currentProfileData?.image}
                    alt="profileImage"
                  />
                </div>
              </div>

              <div className="mt-3">
                {currentProfileData && (
                  <>
                    <Card.Title className="mb-0">
                      {currentProfileData.name} {currentProfileData.surname}
                    </Card.Title>
                    <Card.Text className="mb-0 card-text-title">
                      {currentProfileData.title}
                    </Card.Text>
                    <div className=" d-flex align-items-center">
                      {currentProfileData.area && (
                        <>
                          <Card.Text className="text-black-light d-inline-block mb-0">
                            {currentProfileData.area}
                            {", North Rhine-Westphalia, Germany"}
                          </Card.Text>
                          <span className="before-dot">{"."}</span>
                        </>
                      )}

                      <a
                        href="#contact-info"
                        className="d-inline-block links-blue "
                      >
                        Contact info
                      </a>
                    </div>
                    <a
                      href="#contact-info"
                      className="d-inline-block links-blue"
                    >
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
      </section>
      <SearchedUserPost
        userId={currentProfileData._id}
        post={currentProfileData}
      />
    </>
  );
};

export default SearchResultProfile;
