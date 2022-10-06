import { useEffect } from "react";
import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
import ProfileEdit from "./ProfileEdit";
import MyExperience from "./MyExperience";
import StaticElements from "./StaticElements";

const Profile = () => {
  const [profileData, setProfileData] = useState({});

  const [showImage, setShowImage] = useState(null);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  useEffect(() => {
    fetchProfile();
  }, []);

  // GET MY PROFILE

  const fetchProfile = async () => {
    try {
      const url = "https://striveschool-api.herokuapp.com/api/profile/me";
      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NTc1MzQwMjcsImV4cCI6MTY1ODc0MzYyN30.CB7NDDp16Z2r4LEBmGrsgrwMVNQI6vKZ1_ERAXJtQyU",
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

  const uploadImage = async (e) => {
    e.preventDefault();
    //this is the state that handles the uploading of the image, the FormData method is used to handle image upload
    //and append the image to the form
    const data = new FormData();
    data.append("profile", showImage);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/62cbf64be6c0300015918145/picture",
        {
          method: "POST",
          body: data,
          headers: {
            authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NjQ4ODQ2ODgsImV4cCI6MTY2NjA5NDI4OH0.aAlwwcy5SD18bMRTgCuFcCQmAsn0OLhHLtl5nyjKE50",
          },
        }
      );

      if (response.ok) {
        console.log("Image Uploaded Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container>
        <div className="main-section">
          <div style={{ width: "100%", position: "relative" }}>
            <div className="bg">
              <img
                id="backgroundImage"
                src="https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg"
                alt="backgroundImage"
              />
            </div>

            <img
              className="profile-img"
              src={profileData.image}
              alt="profileImage"
              onClick={handleShow2}
            />
          </div>
          <PencilFill className="bg-edit-icon" />

          <div className="details">
            {profileData && (
              <>
                {/*  <Pencil  className='profile-edit'/> */}

                <ProfileEdit
                  profileData={profileData}
                  className="profile-edit"
                />
                <h2>
                  {profileData.name} {profileData.surname}
                </h2>
                <h4>{profileData.title}</h4>
                <p>
                  {profileData.area}.{" "}
                  <a href="#" style={{ color: "#0a66c2" }}>
                    <b>Contact info</b>
                  </a>
                </p>
                <a href="#" style={{ color: "#0a66c2" }}>
                  <b>Connections</b>
                </a>
                <div className="mt-2">
                  <Button className="mr-2 profile-buttons" variant="primary">
                    <b>Open To</b>
                  </Button>
                  <Button
                    className="mr-2 profile-buttons"
                    variant="outline-primary"
                  >
                    <b>Add Profile Section</b>
                  </Button>
                  <Button
                    className="mr-2 profile-buttons"
                    variant="outline-secondary"
                  >
                    <b>More</b>
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="about mt-3" style={{ backgroundColor: "white" }}>
          <h2>About</h2>
          <p>{profileData.bio}</p>
        </div>
        <div>
          <MyExperience />
        </div>
        <div>
          <StaticElements />
        </div>
      </Container>

      <div>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header closeButton>
            <Modal.Title>Upload Image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={uploadImage}>
              <input
                type="file"
                onChange={(e) => setShowImage(e.target.files[0])}
              />
              <Button variant="primary" onClick={handleClose2} type="submit">
                Post Image
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Profile;
