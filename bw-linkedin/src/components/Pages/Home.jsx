import Feed from "../Feed";
import Sidebar from "../Sidebar";
import Post from "../Post";
import NewsFeedProfile from "../NewsFeedProfile";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container className=" hero-section">
        <Row>
          <Col md={3} style={{ padding: "0" }}>
            <NewsFeedProfile />
          </Col>
          <Col md={6} style={{ padding: "0" }}>
            <Post />
            <Feed />
          </Col>
          <Col md={3} style={{ padding: "0" }}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
