import {Col, Container, Row} from 'react-bootstrap'
import { Linkedin, PeopleFill, BellFill, ChatDotsFill, BriefcaseFill, HouseFill, Bag, CaretDownFill, Grid3x3GapFill } from 'react-bootstrap-icons'


const Navbar = () => {
    return(
        <Container>
            <Row>
                <Col md={4} className='my-2'>
                    <Linkedin className='linkedin-icon mx-3'/>
                    <input type="Search" placeholder='Search'></input>
                </Col> 
                <Col md={8}>
                    <div className='nav-links my-2'>
                        <div className='nav-text'><HouseFill className='nav-icons'/>Home</div>
                        <div className='nav-text'><PeopleFill className='nav-icons'/>My Network</div>
                        <div className='nav-text'><BriefcaseFill className='nav-icons'/>Jobs</div>
                        <div className='nav-text'><ChatDotsFill className='nav-icons'/>Messaging</div>
                        <div className='nav-text'><BellFill className='nav-icons'/>Notifications</div>
                        <div className='nav-text'><Bag className='nav-icons'/><span>Me<CaretDownFill/></span></div>
                        <div className='nav-text'><Grid3x3GapFill className='nav-icons'/><span>Work<CaretDownFill/></span></div>
                        <a>Get hired faster!</a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar
