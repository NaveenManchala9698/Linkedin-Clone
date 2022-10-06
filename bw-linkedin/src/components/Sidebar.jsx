import { useState, useEffect } from "react";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import {
  QuestionCircleFill,
  Dot,
  ChevronCompactDown,
} from "react-bootstrap-icons";
import SideBarProfilePic from "./SideBarProfilePic";

const Sidebar = () => {
  const [profiles, setProfiles] = useState([]);
  const [showmore, setShowmore] = useState(5);
  const [showmore1, setShowmore1] = useState(5);
  const [isShowing, setIsShowing] = useState(false);

  const showMoreHandler = () => {
    setShowmore(showmore + 5);
    setIsShowing(true);
  };

  const showLessHandler = () => {
    setShowmore(5);
    setIsShowing(false);
  };

  const showMoreHandlers = () => {
    setShowmore1(showmore1 + 5);
    setIsShowing(true);
  };

  const showLessHandlers = () => {
    setShowmore1(5);
    setIsShowing(false);
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  let options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NjQ4ODQ2ODgsImV4cCI6MTY2NjA5NDI4OH0.aAlwwcy5SD18bMRTgCuFcCQmAsn0OLhHLtl5nyjKE50",
    },
  };

  const fetchProfiles = async () => {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/",
      options
    );
    let resData = await response.json();
    setProfiles(resData);
  };

  return (
    <>
      <Card
        style={{
          borderRadius: "15px",
        }}
        className="mb-2 mt-2"
      >
        <Card.Body>
          <Card.Text className="font-weight-bold" style={{ fontSize: "14px" }}>
            Edit public profile & URL
            <span className="float-right">
              <QuestionCircleFill />
            </span>
          </Card.Text>
          <hr></hr>
          <Card.Text className="font-weight-bold" style={{ fontSize: "14px" }}>
            Add profile in another lang
            <span className="float-right">
              <QuestionCircleFill />
            </span>
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Section - People also Viewed */}

      <Card
        style={{
          borderRadius: "15px",
        }}
        className="mb-2"
      >
        <Card.Body>
          <Card.Title
            className="font-weight-bold mb-4"
            style={{ fontSize: "18px", textAlign: "left" }}
          >
            People also viewed
          </Card.Title>

          {profiles.splice(0, showmore).map((profile) => (
            <SideBarProfilePic profile={profile} />

            /* <Row key={profile._id}>
              <Col sm={3}>
                <Image
                  src={profile.image}
                  rounded
                  alt="pic"
                  height="48px"
                  width="48px"
                />
              </Col>
              <Col sm={9}>
                <div>
                  <h6
                    className="font-weight-bold mb-0"
                    style={{ fontSize: "14px", lineHeight: "1.4" }}
                  >
                    {profile.name} {profile.surname}
                    <span className="text-muted font-weight-normal">
                      <Dot /> 2nd
                    </span>
                  </h6>
                  <h6
                    className="text-muted"
                    style={{ fontSize: "13px", lineHeight: "1.4" }}
                  >
                    {profile.title}
                  </h6>
                  <Button
                    style={{
                      borderRadius: "50px",
                      fontSize: "16px",
                      width: "100px",
                      border: "1px solid lightgrey",
                    }}
                    variant="outline-light"
                    className="font-weight-bold mb-2 text-muted p-1"
                  >
                    Connect
                  </Button>
                </div>
              </Col>
            </Row> */
          ))}
          <Row>
            <Col className="p-0">
              <hr></hr>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col style={{ cursor: "pointer" }}>
              {!isShowing && (
                <h6
                  className="text-center font-weight-bold m-0 text-muted"
                  onClick={showMoreHandler}
                >
                  Show more <ChevronCompactDown />
                </h6>
              )}
              {isShowing && (
                <h6
                  className="text-center font-weight-bold m-0 text-muted"
                  onClick={showLessHandler}
                >
                  Show Less <ChevronCompactDown />
                </h6>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Section - People you may know */}

      <Card style={{ borderRadius: "15px" }} className="mb-3">
        <Card.Body>
          <Card.Title
            className="font-weight-bold mb-4"
            style={{ fontSize: "18px", textAlign: "left" }}
          >
            People you may know
          </Card.Title>
          {profiles.splice(0, showmore1).map((profile) => (
            <SideBarProfilePic profile={profile} />
          ))}
          <Row>
            <Col className="p-0">
              <hr></hr>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col style={{ cursor: "pointer" }}>
              {!isShowing && (
                <h6
                  className="text-center font-weight-bold m-0 text-muted"
                  onClick={showMoreHandlers}
                >
                  Show more <ChevronCompactDown />
                </h6>
              )}
              {isShowing && (
                <h6
                  className="text-center font-weight-bold m-0 text-muted"
                  onClick={showLessHandlers}
                >
                  Show Less <ChevronCompactDown />
                </h6>
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export default Sidebar;
