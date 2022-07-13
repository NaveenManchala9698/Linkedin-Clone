import { Col, Container, Row } from "react-bootstrap";
import Profile from "../Profile";
import Sidebar from "../Sidebar";

const ProfilePage = () => {
  return (
    <Container>
      <Row>
        <Col md={8} style={{ marginTop: "5rem" }}>
          <Profile />
        </Col>
        <Col md={4} style={{ marginTop: "5rem" }}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
