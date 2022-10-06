import { useEffect } from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Pencil } from "react-bootstrap-icons";

const ProfileEdit = ({ profileData }) => {
  const [options, setOptions] = useState({
    name: "",
    surname: "",
    title: "",
    area: "",
    bio: "",
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setOptions(profileData);
  }, []);

  const fetchMyData = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/";

      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(options),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NjQ4ODQ2ODgsImV4cCI6MTY2NjA5NDI4OH0.aAlwwcy5SD18bMRTgCuFcCQmAsn0OLhHLtl5nyjKE50",
        },
      });
      if (response.ok) {
        const MyData = await response.json();
      } else {
        console.log("Error fetching Data!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Pencil onClick={handleShow} className="profile-edit" />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ paddingTop: "0" }}>
          <div>
            <label for="user-name" class="col-form-label">
              Name
            </label>
          </div>
          <div>
            <input
              value={options.name}
              onChange={(e) => {
                setOptions({ ...options, name: e.target.value });
              }}
              className="inputs-modal"
              type="text"
              id="name"
            />
          </div>
        </Modal.Body>
        <Modal.Body style={{ paddingTop: "0" }}>
          <div>
            <label for="user-surname" class="col-form-label">
              Surname
            </label>
          </div>
          <div>
            <input
              value={options.surname}
              onChange={(e) => {
                setOptions({ ...options, surname: e.target.value });
              }}
              className="inputs-modal"
              type="text"
              id="surname"
            />
          </div>
        </Modal.Body>
        <Modal.Body style={{ paddingTop: "0" }}>
          <div>
            <label for="user-title" class="col-form-label">
              Title
            </label>
          </div>
          <div>
            <input
              value={options.title}
              onChange={(e) => {
                setOptions({ ...options, title: e.target.value });
              }}
              className="inputs-modal"
              type="text"
              id="title"
            />
          </div>
        </Modal.Body>
        <Modal.Body style={{ paddingTop: "0" }}>
          <div>
            <label for="user-area" class="col-form-label">
              Area
            </label>
          </div>
          <div>
            <input
              value={options.area}
              onChange={(e) => {
                setOptions({ ...options, area: e.target.value });
              }}
              className="inputs-modal"
              type="text"
              id="area"
            />
          </div>
        </Modal.Body>
        <Modal.Body style={{ paddingTop: "0" }}>
          <div>
            <label for="user-bio" class="col-form-label">
              Bio
            </label>
          </div>
          <div>
            <input
              value={options.bio}
              onChange={(e) => {
                setOptions({ ...options, bio: e.target.value });
              }}
              className="inputs-modal"
              type="text"
              id="bio"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => fetchMyData()}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileEdit;
