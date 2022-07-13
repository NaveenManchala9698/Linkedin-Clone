import { Button, Col, Row } from "react-bootstrap";
import { ArrowRight, Pencil, PeopleFill, Plus } from "react-bootstrap-icons";

const StaticElements = () => {
  return (
    <>
      <div className="education-div mb-3">
        <div
          style={{ height: "3.5rem", display: "flex", alignItems: "baseline" }}
        >
          <div style={{ flexGrow: "1" }}>
            <h2 style={{ textAlign: "left" }}>Education</h2>
          </div>
          <div>
            <Pencil
              size="1.2rem"
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div>
            <Plus
              size="2.5rem"
              style={{
                cursor: "pointer",
                marginLeft: "1rem",
              }}
            />
          </div>
        </div>
        <Row>
          <Col md={2}>
            <div style={{ width: "60px" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFWO_s8a0FHQ/company-logo_100_100/0/1647618816994?e=1665619200&v=beta&t=DjYM-HwAlPdejyqSLlj26YmaPXtm_P5jgdQbvjbPkDI"
                alt="epicode-img"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </Col>
          <Col md={10}>
            <div
              style={{
                textAlign: "left",
                lineHeight: "4px",
                marginLeft: "-3rem",
              }}
            >
              <h5>
                <b>EPICODE</b>
              </h5>
              <p>Front End Web Developer</p>
              <p>Apr 2022</p>
            </div>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={2}>
            <div style={{ width: "60px" }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E0BAQGWO2PFCtwq6Q/company-logo_100_100/0/1519894917196?e=1665619200&v=beta&t=djSG_PPtKO5uU1pELIM0kZZfRWSJYCVUkTexlKWUsr0"
                alt="osmania-img"
                style={{ width: "60px", height: "60px" }}
              />
            </div>
          </Col>
          <Col md={10}>
            <div
              style={{
                textAlign: "left",
                lineHeight: "4px",
                marginLeft: "-3rem",
              }}
            >
              <h5>
                <b>OSMANIA UNIVERSITY</b>
              </h5>
              <p>Master's Degree, Computer Science</p>
              <p>Jan 2020 - Jan 2022</p>
            </div>
          </Col>
        </Row>
        <hr />
        <div style={{ textAlign: "center" }}>
          <h5>
            Show all 6 Education <ArrowRight />
          </h5>
        </div>
      </div>

      {/* Skills Div */}
      <div className="skills-div mb-3">
        <div
          style={{ height: "3.5rem", display: "flex", alignItems: "baseline" }}
        >
          <div style={{ flexGrow: "1" }}>
            <h2 style={{ textAlign: "left" }}>Skills</h2>
          </div>
          <div>
            <Button
              variant="outline-primary"
              style={{
                cursor: "pointer",
              }}
            >
              Take skill quiz
            </Button>
          </div>
          <div>
            <Pencil
              size="1.2rem"
              style={{
                cursor: "pointer",
                marginLeft: "2rem",
              }}
            />
          </div>
          <div>
            <Plus
              size="2.5rem"
              style={{
                cursor: "pointer",
                marginLeft: "1rem",
              }}
            />
          </div>
        </div>

        <div style={{ textAlign: "left", paddingLeft: "1rem" }}>
          <div>
            <h6>HTML5</h6>
            <PeopleFill style={{ fontSize: "25px" }} />
            <span className="px-2">8 Endorsements</span>
          </div>
          <hr />
          <div>
            <h6>CSS</h6>
            <PeopleFill style={{ fontSize: "25px" }} />
            <span className="px-2">8 Endorsements</span>
          </div>
          <hr />
          <div>
            <h6>JavaScript</h6>
            <PeopleFill style={{ fontSize: "25px" }} />
            <span className="px-2">5 Endorsements</span>
          </div>
          <hr />
          <div style={{ textAlign: "center" }}>
            <h5>
              Show all 10 Skills <ArrowRight />
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticElements;
