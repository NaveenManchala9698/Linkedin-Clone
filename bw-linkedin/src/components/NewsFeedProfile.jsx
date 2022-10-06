import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { BookmarkFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const NewsFeedProfile = () => {
  const [profile, setProfile] = useState("");

  useEffect(() => {
    profileData();
  }, []);
  const profileData = async () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NjQ4ODQ2ODgsImV4cCI6MTY2NjA5NDI4OH0.aAlwwcy5SD18bMRTgCuFcCQmAsn0OLhHLtl5nyjKE50",
      },
    };
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/62cbf64be6c0300015918145",
      options
    );
    let profileData = await response.json();
    if (response.ok) {
      // console.log(profileData);
    }
    setProfile(profileData);
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          border: "0.1px solid #e0dfdc",
          borderRadius: "15px",
          overflow: "hidden",
          margin: "10px 15px",
          maxWidth: "18rem",
        }}
      >
        <div
          className="Header"
          style={{
            minHeight: "5rem",
            backgroundColor: "blue",
            backgroundSize: "cover",
            borderRadius: "10px 10px 0px 0px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            overflow: "hidden",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            className="jumbotron-img h-100 "
            src={profile.image}
            alt="avatar"
          />
        </div>
        <div
          style={{
            backgroundColor: "white",
            marginTop: "50px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <Container>
            <Row className="justify-content-center">
              <Col>
                <div className="jumbotron-body">
                  <h5 className="my-2">
                    <Link to="/profile" style={{ color: "black" }}>
                      {profile.name} {profile.surname}
                    </Link>
                  </h5>

                  <p className="my-2 text-muted text-center">{profile.bio}</p>
                </div>
                <hr />
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontSize: "12px" }} className="text-muted">
                    Who's viewed your profile{" "}
                    <span className="float-right text-primary">39</span>
                  </p>
                  <p style={{ fontSize: "12px" }} className="text-muted mb-2">
                    Impressions of your post{" "}
                    <span className="float-right text-primary">177</span>
                  </p>
                  <hr />
                  <p style={{ fontSize: "12px" }} className="text-muted m-0">
                    Access to exclusive tools and insights{" "}
                  </p>

                  <span className="text-dark" style={{ fontSize: "14px" }}>
                    Get Hired Faster,Try Premium Free
                  </span>
                  <hr />
                  <BookmarkFill style={{ marginRight: "0.5rem" }} />
                  <span className="text-muted" style={{ fontSize: "14px" }}>
                    My Items
                  </span>
                </div>
                <hr />
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "white",
          border: "0.1px solid #e0dfdc",
          borderRadius: "15px",
          overflow: "hidden",
          margin: "10px 15px",
          textAlign: "left",
          padding: "15px",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h5 className="my-2">Recent</h5>
              <ul
                className="list-unstyled text-muted"
                style={{ fontSize: "12px" }}
              >
                <li>#JavaScript</li>
                <li>#React</li>
                <li>#Node.js</li>
                <h6 className="text-primary mt-3">Groups</h6>
                <h6 className="text-primary mt-3">Events</h6>
                <li>#Bootstrap</li>
                <li>#HTML</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NewsFeedProfile;
