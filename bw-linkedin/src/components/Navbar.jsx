import { Col, Container, FormControl, InputGroup, Nav, Row } from 'react-bootstrap'
import { Linkedin, PeopleFill, BellFill, ChatDotsFill, BriefcaseFill, HouseFill, Bag, CaretDownFill, Grid3x3GapFill, Search } from 'react-bootstrap-icons'


const Navbar = () => {
    return (
        <Container fluid className='px-0'>
            <Row className='mynav'>
                <Col md={4} className='my-2 nav-left'>
                    <Linkedin className='linkedin-icon mx-3' />
                    <InputGroup className="flex-row mb-3">
                        <InputGroup.Text
                            style={{
                                height: "2.5rem",
                                width: "15rem",
                                borderRadius: "0.25rem",
                                borderRight: 0,
                                paddingLeft: "0.8rem",
                                paddingRight: "0",
                                backgroundColor: "#eef3f8",
                                border: '0',
                                marginTop: '0.5rem'
                            }}
                        >
                            <Search style={{ height: "15px", width: "15px" }} />
                        </InputGroup.Text>
                    </InputGroup>
                    {/* <input type="Search" placeholder='Search' ></input> */}
                </Col>
                <Col md={8}>
                    <Nav className='nav-links my-2 mx-4'>
                        <a href='#home'className='nav-text mr-3'><HouseFill className='nav-icons' /><span>Home</span></a>
                        <a href='#network'className='nav-text mr-3'><PeopleFill className='nav-icons' /><span>My Network</span></a>
                        <a href='#jobs'className='nav-text mr-3'><BriefcaseFill className='nav-icons' /><span>Jobs</span></a>
                        <a href='#messaging'className='nav-text mr-3'><ChatDotsFill className='nav-icons' /><span>Messaging</span></a>
                        <a href='#notifications'className='nav-text mr-3'><BellFill className='nav-icons' /><span>Notifications</span></a>
                        <a href='#me'className='nav-text mr-3'><Bag className='nav-icons' /><span>Me<CaretDownFill /></span></a>
                        <a href='#work'className='nav-text mr-3' style={{borderLeft: '1px solid grey'}}><Grid3x3GapFill className='nav-icons' /><span>Work<CaretDownFill /></span></a>
                        <a href='#premium' className='premium-msg'>Get hired faster, Try Premium Free</a>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar
