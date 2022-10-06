import {
  Arrow90degRight,
  ChatText,
  HandThumbsUp,
  PencilFill,
  SendFill,
  ThreeDots,
} from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { format, parseISO } from "date-fns";

import { Link } from "react-router-dom";

const Feed = () => {
  const [feed, setFeed] = useState([]);

  const [editPost, setEditPost] = useState({
    text: "",
  });
  const [currentPostID, setCurrentPostID] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showImage, setShowImage] = useState(null);

  useEffect(() => {
    fetchFeed();
  }, []);

  //Get
  const fetchFeed = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/posts/";

      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NjQ4ODQ2ODgsImV4cCI6MTY2NjA5NDI4OH0.aAlwwcy5SD18bMRTgCuFcCQmAsn0OLhHLtl5nyjKE50",
        },
      });
      if (response.ok) {
        const news = await response.json();

        console.log(news);
        setFeed(news.reverse().slice(0, 20));
      } else {
        const msg = response.text;
        console.log(msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // PUT POST

  const changePost = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + currentPostID,
        {
          method: "PUT",
          body: JSON.stringify(editPost),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU",
          },
        }
      );
      if (response.ok) {
        let resData = await response.json();
        console.log("Edited Successfully");
      } else {
        console.log("ERROR!");
      }
    } catch (error) {
      console.log("Error!");
    }
  };

  //Delete Method

  const deletePost = async () => {
    try {
      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU",
        },
      };
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + currentPostID,
        options
      );
      if (response.ok) {
        console.log("Deleted Successfully.");
      } else {
        console.log("Error!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //POST IMAGES IN FEED
  const uploadPostImage = async () => {
    //this is the state that handles the uploading of the image, the FormData method is used to handle image upload
    //and append the image to the form
    const data = new FormData();
    data.append("post", showImage);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + currentPostID,
        {
          method: "POST",
          body: data,
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU",
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
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Edit Text</Form.Label>
              <Form.Control
                type="text"
                value={editPost.text}
                onChange={(e) =>
                  setEditPost({ ...editPost, text: e.target.value })
                }
              />
            </Form.Group>
            <input
              type="file"
              onChange={(e) => setShowImage(e.target.files[0])}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              deletePost();
              fetchFeed();
            }}
          >
            Delete
          </Button>
          <Button
            variant="primary"
            type="button"
            onClick={() => {
              changePost();
              uploadPostImage();
              handleClose();
              fetchFeed();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {feed &&
        feed.map((eachFeed) => {
          if (eachFeed.user) {
            return (
              <div className="feed" key={eachFeed._id}>
                <div>
                  <Container>
                    <Row>
                      <Col xs={2} className="pr-0 pl-0">
                        <img
                          className="img-fluid"
                          style={{
                            borderRadius: "50%",
                            width: "48px",
                            height: "48px",
                          }}
                          src={eachFeed.user.image}
                          alt="profile"
                        />
                      </Col>
                      <Col
                        xs={9}
                        className="text-left pl-0 mt-1"
                        style={{ lineHeight: "2px" }}
                      >
                        <Link
                          to={`/user/${eachFeed.user._id}`}
                          style={{ color: "black" }}
                        >
                          <h6>
                            {eachFeed.user.name} {eachFeed.user.surname}
                          </h6>
                        </Link>

                        <p style={{ fontSize: "10px" }}>
                          {eachFeed.user.title}
                        </p>
                        <p style={{ fontSize: "8px" }}>
                          {format(parseISO(eachFeed.updatedAt), "MMMM dd")}
                        </p>
                      </Col>

                      <Col xs={1}>
                        {eachFeed.user._id === "62cbf64be6c0300015918145" ? (
                          <ThreeDots
                            className="feed-edit-icon"
                            onClick={() => {
                              handleShow();
                              setCurrentPostID(eachFeed._id);
                            }}
                          />
                        ) : (
                          ""
                        )}
                      </Col>
                    </Row>
                    <Row>
                      <Col className="text-left mt-1">
                        <p>{eachFeed.text}</p>
                      </Col>
                    </Row>
                    <Row>
                      {eachFeed.image && (
                        <Col xs={12} className=" mt-1">
                          <img
                            style={{ width: "100%" }}
                            src={eachFeed.image}
                            alt="feed image"
                          />
                        </Col>
                      )}
                    </Row>
                    <hr />
                    <Row>
                      <Col>
                        <div className="d-flex justify-content-around">
                          <div>
                            <HandThumbsUp className="mr-2" />
                            <span>Like</span>
                          </div>
                          <div>
                            <ChatText className="mr-2" />
                            <span>Comments</span>
                          </div>
                          <div>
                            <Arrow90degRight className="mr-2" />
                            <span>Share</span>
                          </div>
                          <div>
                            <SendFill className="mr-2" />
                            <span>Send</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            );
          }
        })}
    </>
  );
};
export default Feed;
