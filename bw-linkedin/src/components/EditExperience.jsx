import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Pencil } from 'react-bootstrap-icons'


const EditExperience = () => {
    const [editExperience, setEditExperience] = useState({
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const changeExperience = async (e) => {
        e.preventDefault();
        try {

            const experienceDetails = {
                role: document.getElementById("role").value,
                company: document.getElementById("company").value,
                startDate: document.getElementById("startdate").value,
                endDate: document.getElementById("enddate").value,
                description: document.getElementById("description").value,
                area: document.getElementById("area").value,
            }


            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/profile/62cbf64be6c0300015918145/experiences/62cd43e93afdbb00155f0c86",
                {
                    method: "PUT",
                    body: JSON.stringify(experienceDetails),
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU",
                    },

                }
            );
            if (response.ok) {
                let resData = await response.json();
                console.log(resData);
                alert("ok");
                setEditExperience(resData);
            } else {
                alert("error");
            }
        } catch (error) {
            alert("error", error);
        }
    }

    return (
        <>
            <Pencil
                size="1.2rem"
                onClick={handleShow}
                style={{ cursor: "pointer", marginLeft: "45rem", marginTop: '-4rem' }} />

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >

                <Modal.Header closeButton>
                    <Modal.Title>Edit experience</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={changeExperience}>
                        <Form.Group>
                            <Form.Label>Role </Form.Label>
                            <Form.Control
                                type="text"
                                id="role"
                                value={editExperience.role}
                                onChange={(e) =>
                                    setEditExperience({ ...editExperience, role: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text"
                                id="company"
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
                            <Form.Label>Start Date</Form.Label>
                            <Form.Control
                                type="date"
                                id="startdate"
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
                            <Form.Label>End Date</Form.Label>
                            <Form.Control
                                type="date"
                                id="enddate"
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
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                id="description"
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
                            <Form.Label>Area</Form.Label>
                            <Form.Control
                                type="text"
                                id="area"
                                value={editExperience.area}
                                onChange={(e) =>
                                    setEditExperience({ ...editExperience, area: e.target.value })
                                }
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>)
}

export default EditExperience;