import { Col, Container, Row } from "react-bootstrap"
import CurrentProfile from "../CurrentProfile"
import Sidebar from '../Sidebar'

const UserProfilePage = () => {
    return (
        <Container className="hero-section">
            <Row>
                <Col xs={9}>
                    <CurrentProfile />
                </Col>
                <Col xs={3} >
                    <Sidebar />
                </Col>
            </Row>
        </Container>
    )
}

export default UserProfilePage