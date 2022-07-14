import {
  Arrow90degRight,
  ChatText,
  HandThumbsUp,
  SendFill,
} from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import { format, parseISO } from "date-fns";

const Feed = () => {
  const [feed, setFeed] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchFeed();
  }, []);

  // GET FEED

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

  return (
    <>
      {feed &&
        feed
          .reverse()
          .slice(0, 20)
          .map((eachFeed) => {
            if (eachFeed.user) {
              return (
                <div className="feed">
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
                          xs={10}
                          className="text-left pl-0 mt-1"
                          style={{ lineHeight: "2px" }}
                        >
                          <h6>
                            {eachFeed.user.name} {eachFeed.user.surname}
                          </h6>
                          <p style={{ fontSize: "10px" }}>
                            {eachFeed.user.title}
                          </p>
                          <p style={{ fontSize: "8px" }}>
                            {format(parseISO(eachFeed.updatedAt), "MMMM dd")}
                          </p>
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
                  {/*<h6 style={{ textAlign: "left" }}>{eachFeed.user.name} {eachFeed.user.surname}</h6>
                          
                          <p style={{ textAlign: "left" }}>{eachFeed.text}</p>*/}
                </div>
              );
            }
          })}
    </>
  );
};
export default Feed;
