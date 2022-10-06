import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import {
  Linkedin,
  PeopleFill,
  BellFill,
  ChatDotsFill,
  BriefcaseFill,
  HouseFill,
  CaretDownFill,
  Grid3x3GapFill,
  Person,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  // GET MY PROFILE for picture in NavBar
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
        setProfileData(data);
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container fluid className="px-0">
      <Row className="mynav">
        <Col md={3} className="my-2 nav-left">
          <Linkedin className="linkedin-icon mx-3" />
          <SearchBar className="search-field" />
          {/* <input type="Search" placeholder='Search' ></input> */}
        </Col>

        <Col md={9} style={{ flexBasis: "fit-content" }}>
          <Nav className="nav-links my-2 mx-4">
            <Link to="/" className="nav-text mx-3">
              <HouseFill className="nav-icons" />
              <span>Home</span>
            </Link>
            <a href="#network" className="nav-text mx-3">
              <PeopleFill className="nav-icons" />
              <span>My Network</span>
            </a>
            <a href="#jobs" className="nav-text mx-3">
              <BriefcaseFill className="nav-icons" />
              <span>Jobs</span>
            </a>
            <a href="#messaging" className="nav-text mx-3">
              <ChatDotsFill className="nav-icons" />
              <span>Messaging</span>
            </a>
            <a href="#notifications" className="nav-text mx-3">
              <BellFill className="nav-icons" />
              <span>Notifications</span>
            </a>

            <a href="#me" className="nav-text mx-3">
              <img
                src={profileData.image}
                alt="profileImage"
                style={{ borderradius: "50%", height: "25px", width: "25px" }}
              />
              {/* <Person className="nav-icons" /> */}
              <span>
                Me
                <CaretDownFill />
              </span>
            </a>
            <a
              href="#work"
              className="nav-text mr-3 pl-2"
              style={{ borderLeft: "1px solid grey" }}
            >
              <Grid3x3GapFill className="nav-icons" />
              <span>
                Work
                <CaretDownFill />
              </span>
            </a>
            <a href="#premium" className="premium-msg">
              Get hired faster, Try Premium Free
            </a>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbar;
