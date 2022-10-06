import { useEffect } from "react";
import { useState } from "react";
import { Col, Image, Row } from "react-bootstrap";

const CurrentProfileExp = ({ userId }) => {
  const [userExp, setUserExp] = useState([]);

  useEffect(() => {
    fetchCurrentProfile(userId);
  }, [userId]);

  // GET EXPERIENCE

  const fetchCurrentProfile = async (userId) => {
    try {
      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNiZjY0YmU2YzAzMDAwMTU5MTgxNDUiLCJpYXQiOjE2NjQ4ODQ2ODgsImV4cCI6MTY2NjA5NDI4OH0.aAlwwcy5SD18bMRTgCuFcCQmAsn0OLhHLtl5nyjKE50",
        },
      };

      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`,
        options
      );
      let responseData = await response.json();
      console.log("This is get console", responseData);
      setUserExp(responseData);
      console.log(userExp);
    } catch (error) {
      console.log("Error!!");
    }
  };
  return (
    <div className="experience-div">
      <div style={{ display: "flex" }}>
        <div style={{ flexGrow: "1", textAlign: "left" }}>
          <h2 style={{ display: "inline" }}>Experience</h2>
        </div>
      </div>
      {userExp.map((eachExp) => (
        <Row className="mt-2">
          <Col md={1} key={eachExp.user}>
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

          <Col md={11} className="mb-3 px-0">
            <div style={{ textAlign: "left", paddingLeft: "0" }}>
              <h6
                className="font-weight-bold my-1"
                style={{
                  fontSize: "20px",
                }}
              >
                {eachExp.role}
              </h6>
              <p className="my-1" style={{ fontSize: "15px" }}>
                {eachExp.company} . Full-time
              </p>

              <p className="text-muted" style={{ fontSize: "13px" }}>
                {eachExp.area}
              </p>
            </div>
          </Col>
        </Row>
      ))}
    </div>
  );
};

export default CurrentProfileExp;
