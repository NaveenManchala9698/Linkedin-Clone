import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col, Image } from "react-bootstrap";
import { Pencil, Plus } from "react-bootstrap-icons";
import { parseISO, format } from "date-fns";

const MyExperience = () => {
  const [addExperience, setAddExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });
  const [editExperience, setEditExperience] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const [experiences, setExperiences] = useState([]);
  const [currentExpID, setCurrentExpID] = useState(null);

  useEffect(() => {
    fetchExperience();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);
  const modalClose = () => setOpen(false);
  const modalShow = () => setOpen(true);

  // GET EXPERIENCE

  const fetchExperience = async () => {
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTc1MzU2MDYsImV4cCI6MTY1ODc0NTIwNn0.EJvzoYkpFV8rlYvvP9O3OPD-QHck65F9OMPDrjRAPTI",
      },
    };

    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/profile/62cbf64be6c0300015918145/experiences",
      options
    );
    let responseData = await response.json();
    console.log("This is get console", responseData);
    setExperiences(responseData);
    console.log(experiences.exp_id);
  };

  // POST EXPERIENCE

  const submitExperience = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/62cbf64be6c0300015918145/experiences",
        {
          method: "POST",
          body: JSON.stringify(addExperience),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU",
          },
        }
      );
      // console.log("ADDExperience: ", addExperience);
      // console.log("RESPONSE", response);
      if (response.ok) {
        console.log(response);
        setAddExperience({
          role: "",
          company: "",
          startDate: "",
          endDate: "",
          description: "",
          area: "",
        });
      } else {
        alert("error");
      }
    } catch (error) {
      alert("error", error);
    }
  };

  // PUT EXPERIENCE

  const changeExperience = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/62cbf64be6c0300015918145/experiences/" +
          currentExpID,
        {
          method: "PUT",
          body: JSON.stringify(editExperience),
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

  const deleteExperience = async () => {
    try {
      const options = {
        method: "DELETE",

        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NjQ4ODQ2ODgsImV4cCI6MTY2NjA5NDI4OH0.aAlwwcy5SD18bMRTgCuFcCQmAsn0OLhHLtl5nyjKE50",
        },
      };

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/62cbf64be6c0300015918145/experiences/" +
          currentExpID,
        options
      );
      if (response.ok) {
        console.log("Deleted Successfully.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add experience</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={submitExperience}>
              <Form.Group>
                <Form.Label>Role* </Form.Label>
                <Form.Control
                  type="text"
                  value={addExperience.role}
                  onChange={(e) =>
                    setAddExperience({ ...addExperience, role: e.target.value })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Company*</Form.Label>
                <Form.Control
                  type="text"
                  value={addExperience.company}
                  onChange={(e) =>
                    setAddExperience({
                      ...addExperience,
                      company: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Start Date*</Form.Label>
                <Form.Control
                  type="date"
                  value={addExperience.startDate}
                  onChange={(e) =>
                    setAddExperience({
                      ...addExperience,
                      startDate: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>End Date*</Form.Label>
                <Form.Control
                  type="date"
                  value={addExperience.endDate}
                  onChange={(e) =>
                    setAddExperience({
                      ...addExperience,
                      endDate: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description*</Form.Label>
                <Form.Control
                  type="text"
                  value={addExperience.description}
                  onChange={(e) =>
                    setAddExperience({
                      ...addExperience,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Area*</Form.Label>
                <Form.Control
                  type="text"
                  value={addExperience.area}
                  onChange={(e) =>
                    setAddExperience({ ...addExperience, area: e.target.value })
                  }
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginRight: "1rem" }}
                onClick={() => {
                  handleClose();
                  submitExperience();
                  fetchExperience();
                }}
              >
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal
          show={open}
          onHide={modalClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit experience</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={changeExperience}>
              <Form.Group>
                <Form.Label>Role* </Form.Label>
                <Form.Control
                  type="text"
                  value={editExperience.role}
                  onChange={(e) =>
                    setEditExperience({
                      ...editExperience,
                      role: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Company*</Form.Label>
                <Form.Control
                  type="text"
                  value={editExperience.company}
                  onChange={(e) =>
                    setEditExperience({
                      ...editExperience,
                      company: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Start Date*</Form.Label>
                <Form.Control
                  type="date"
                  value={editExperience.startDate}
                  onChange={(e) =>
                    setEditExperience({
                      ...editExperience,
                      startDate: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>End Date*</Form.Label>
                <Form.Control
                  type="date"
                  value={editExperience.endDate}
                  onChange={(e) =>
                    setEditExperience({
                      ...editExperience,
                      endDate: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description*</Form.Label>
                <Form.Control
                  type="text"
                  value={editExperience.description}
                  onChange={(e) =>
                    setEditExperience({
                      ...editExperience,
                      description: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Area*</Form.Label>
                <Form.Control
                  type="text"
                  value={editExperience.area}
                  onChange={(e) =>
                    setEditExperience({
                      ...editExperience,
                      area: e.target.value,
                    })
                  }
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                style={{ marginRight: "1rem" }}
                onClick={() => {
                  changeExperience();
                  modalClose();
                  fetchExperience();
                }}
              >
                Edit
              </Button>

              <Button
                variant="danger"
                type="submit"
                onClick={() => {
                  deleteExperience();
                  modalClose();
                  fetchExperience();
                }}
              >
                Delete
              </Button>
            </Form>
          </Modal.Body>
        </Modal>

        <div className="experience-div">
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: "1", textAlign: "left" }}>
              <h2 style={{ display: "inline" }}>Experience</h2>
            </div>
            <div>
              <Plus
                size="2.5rem"
                onClick={handleShow}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
          {experiences.map((experience) => (
            <Row className="mt-2">
              <Col md={2} key={experience.user}>
                <div
                  style={{
                    marginRight: "12px",
                    marginTop: "12px",
                  }}
                >
                  <Image
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt="profile-picture"
                    height="48px"
                    width="48px"
                  />
                </div>
              </Col>

              <Col md={9}>
                <div style={{ textAlign: "left", paddingLeft: "0" }}>
                  <h6
                    className="font-weight-bold my-1"
                    style={{
                      fontSize: "20px",
                    }}
                  >
                    {experience.role}
                  </h6>
                  <p className="my-1" style={{ fontSize: "15px" }}>
                    {experience.company} . Full-time
                  </p>
                  <p className="my-1 text-muted" style={{ fontSize: "14px" }}>
                    {experience.startDate &&
                      format(parseISO(experience.startDate), "MMMM yyyy")}{" "}
                    -{" "}
                    {experience.startDate &&
                      format(parseISO(experience.endDate), "MMMM yyyy")}
                  </p>
                  <p className="text-muted" style={{ fontSize: "13px" }}>
                    {experience.area}
                  </p>
                </div>
              </Col>
              <Col md={1}>
                <Pencil
                  onClick={() => {
                    modalShow();
                    setCurrentExpID(experience._id);
                    setEditExperience(experience);
                  }}
                />
              </Col>
            </Row>
          ))}
        </div>
      </>
    </>
  );
};

export default MyExperience;
