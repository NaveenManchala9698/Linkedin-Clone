import { useState, useEffect } from "react";
import { Modal, Form, Button, Row, Col, Image } from "react-bootstrap";
import { Pencil, Plus } from 'react-bootstrap-icons';
import { parseISO, format } from 'date-fns';
import EditExperience from "./EditExperience";

const MyExperience = () => {

    const [experiences, setExperiences] = useState([])
    const [addExperience, setAddExperience] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
    });


    useEffect(() => {
        fetchExperience();
    }, []);


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const fetchExperience = async () => {

        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEzM2U2MjdmZmQ0OTAwMTU4YTdhOWIiLCJpYXQiOjE2NTc1MzU2MDYsImV4cCI6MTY1ODc0NTIwNn0.EJvzoYkpFV8rlYvvP9O3OPD-QHck65F9OMPDrjRAPTI",
            },
        };

        let response = await fetch(
            "https://striveschool-api.herokuapp.com/api/profile/62cbf64be6c0300015918145/experiences", options);
        let responseData = await response.json();
        console.log("This is get console", responseData);
        setExperiences(responseData);
    };

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
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU",
                    },

                }
            );
            // console.log("ADDExperience: ", addExperience);
            // console.log("RESPONSE", response);
            if (response.ok) {
                console.log(response);
                alert("ok");
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



    return (
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

                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>


            <div className="experience-div">
                <div>
                    <h2 style={{ display: 'inline', textAlign: 'left', }}>Experience</h2>
                    <Plus
                        size="2.5rem"
                        onClick={handleShow}
                        style={{ cursor: "pointer", marginLeft: "40rem" }}
                    />

                    {/* <Pencil
                        size="1.2rem"
                        onClick={handleShow}
                        style={{ cursor: "pointer", marginLeft: "45rem", marginTop: '-4rem' }} /> */}
                    <EditExperience />

                </div>
                {experiences.map((experience) => (
                    <Row>
                        <Col md={1} key={experience.user}>
                            <div style={{ marginLeft: "12px", marginTop: "10px" }}>
                                <Image
                                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                    alt="profile-picture"
                                    height="80px"
                                    width="80px"
                                />
                            </div>
                        </Col>

                        <Col md={11}>
                            <div style={{ textAlign: "left", marginLeft: "2.5rem" }}>
                                <h6
                                    className="font-weight-bold my-1"
                                    style={{ fontSize: "20px", lineHeight: "1.4", marginRight: "26rem" }}
                                >
                                    {experience.role}
                                </h6>
                                <p
                                    className="my-1"
                                    style={{ fontSize: "15px", marginRight: "29.5rem" }}
                                >
                                    {experience.company} . Full-time
                                </p>
                                <p
                                    className="my-1 text-muted"
                                    style={{ fontSize: "14px", marginRight: "26rem" }}
                                >
                                    {format(parseISO(experience.startDate), "MMMM yyyy")} -{" "}
                                    {format(parseISO(experience.endDate), "MMMM yyyy")}
                                </p>
                                <p
                                    className="text-muted"
                                    style={{ fontSize: "13px", marginRight: "33.5rem" }}
                                >
                                    {experience.area}
                                </p>
                            </div>
                        </Col>
                    </Row>
                ))}

            </div>
        </>
    )
};


export default MyExperience