import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Container, Button } from "react-bootstrap";
import { Bell } from "react-bootstrap-icons";
import CurrentProfileExp from "./CurrentProfileExp";

const CurrentProfile = () => {
  const [currentProfileData, setCurrentProfileData] = useState({});

  const params = useParams();
  const userId = params.userId;

  useEffect(() => {
    fetchCurrentData();
  }, []);

  const fetchCurrentData = async () => {
    try {
      const url =
        "https://striveschool-api.herokuapp.com/api/profile/" + userId;

      const response = await fetch(url, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NjQ4ODQ2ODgsImV4cCI6MTY2NjA5NDI4OH0.aAlwwcy5SD18bMRTgCuFcCQmAsn0OLhHLtl5nyjKE50",
        },
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCurrentProfileData(data);
      } else {
        console.log("Error Fetching Data!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <div className="main-section">
        <div style={{ width: "100%" }}>
          <div className="bg">
            <img
              id="backgroundImage"
              src="https://i.pinimg.com/originals/76/e9/23/76e9238fca30a0fc41b6f5fac75b516b.jpg"
              alt="backgroundImage"
            />
          </div>

          <img
            className="profile-img"
            src={currentProfileData.image}
            alt="profileImage"
          />
        </div>

        <div className="details">
          {currentProfileData && (
            <>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <h2>
                    {currentProfileData.name} {currentProfileData.surname}
                  </h2>
                </div>
                <div style={{ marginRight: "1rem", marginTop: "0.5rem" }}>
                  <Bell className="bell-icon" />
                </div>
              </div>
              <h4>{currentProfileData.title}</h4>
              <p>
                {currentProfileData.area}.{" "}
                <a href="#" style={{ color: "#0a66c2" }}>
                  <b>Contact info</b>
                </a>
              </p>
              <a href="#" style={{ color: "#0a66c2" }}>
                <b>Connections</b>
              </a>
              <div className="mt-2">
                <Button className="mr-2 profile-buttons" variant="primary">
                  <b>Message</b>
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
      <div className="about mt-3 mb-3" style={{ backgroundColor: "white" }}>
        <h2>About</h2>
        <p>{currentProfileData.bio}</p>
      </div>
      <div>
        <CurrentProfileExp userId={userId} />
      </div>
    </Container>
  );
};

export default CurrentProfile;
