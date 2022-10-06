import { useEffect, useState } from "react";
import { Button, Col, Container, Row, Modal, Form } from "react-bootstrap";
import {
  CalendarDate,
  CardImage,
  CardText,
  PlayBtn,
  PlayBtnFill,
  Plus,
} from "react-bootstrap-icons";

const Post = () => {
  const [feed, setFeed] = useState([]);

  const [profile, setProfile] = useState({});

  const [addFeed, setAddFeed] = useState({
    text: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  // FETCH MY PROFILE for profile pic
  const fetchProfile = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/me";
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NjQ4ODQ2ODgsImV4cCI6MTY2NjA5NDI4OH0.aAlwwcy5SD18bMRTgCuFcCQmAsn0OLhHLtl5nyjKE50",
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProfile(data);
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //GET MY FEED

  const fetchFeed = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/posts/";

      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU",
        },
      });
      if (response.ok) {
        const news = await response.json();

        console.log(news);
        setFeed(news);
      } else {
        const msg = response.text;
        console.log(msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // POST FEED

  const postFeed = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/posts/";

      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(addFeed),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU",
        },
      });
      if (response.ok) {
        const postFeedData = await response.json();

        console.log(postFeedData);
        setAddFeed(postFeedData);
      } else {
        const msg = response.text;
        console.log(msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="feed">
        <Container>
          <Row>
            <Col xs={2} className="pr-0 pl-0">
              <img
                src={profile.image}
                style={{ width: "48px", height: "48px", borderRadius: "50%" }}
                alt="profile image"
              />
            </Col>
            <Col xs={8} className="pl-0">
              <input
                className="post"
                type="text"
                placeholder="Start a Post"
                value={addFeed.text}
                onChange={(e) =>
                  setAddFeed({
                    ...addFeed,
                    text: e.target.value,
                  })
                }
              />
            </Col>
            <Col xs={2} className="mt-2 px-0">
              <Button
                onClick={() => {
                  postFeed();
                  fetchFeed();
                }}
                className="postFeed-btn font-weight-bold"
                variant="primary"
              >
                POST
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3">
              <div className="d-flex justify-content-around">
                <div>
                  <CardImage
                    style={{ fontSize: "24px", color: "blue" }}
                    className="mr-2"
                  />
                  <span>Photo</span>
                </div>
                <div>
                  <PlayBtnFill
                    style={{ fontSize: "24px", color: "green" }}
                    className="mr-2"
                  />
                  <span>Video</span>
                </div>
                <div>
                  <CalendarDate
                    style={{ fontSize: "24px", color: "yellow" }}
                    className="mr-2"
                  />
                  <span>Event</span>
                </div>
                <div>
                  <CardText
                    style={{ fontSize: "24px", color: "orange" }}
                    className="mr-2"
                  />
                  <span>Write Article</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Post;
