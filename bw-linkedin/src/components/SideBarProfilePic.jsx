import React, { useEffect, useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { Dot } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function SideBarProfilePic({ profile }) {
  const [isImage, setIsImage] = useState(false);

  async function checkImage(imgUrl) {
    const request = new XMLHttpRequest();
    request.open("GET", imgUrl, true);
    request.send();
    request.onload = function () {
      if (request.status == 200) {
        setIsImage(true);
      } else {
        setIsImage(false);
      }
    };
  }

  useEffect(() => {
    checkImage(profile.image);
  }, [profile.image, checkImage]);

  return (
    <Row key={profile._id}>
      <Col sm={3}>
        <Image
          src={
            isImage
              ? profile.image
              : "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
          }
          style={{ borderRadius: "50%" }}
          alt="pic"
          height="48px"
          width="48px"
        />
      </Col>
      <Col sm={9} style={{ textAlign: "left" }}>
        {" "}
        {/* "/profile/" + profile._id */}
        <div>
          <Link to={`/user/${profile._id}`} style={{ color: "black" }}>
            <h6
              className="font-weight-bold mb-0"
              style={{ fontSize: "14px", lineHeight: "1.4" }}
            >
              {profile.name}
              <span className="text-muted font-weight-normal">
                <Dot /> 2nd
              </span>
            </h6>
          </Link>
          <h6
            className="text-muted"
            style={{ fontSize: "13px", lineHeight: "1.4" }}
          >
            {profile.title}
          </h6>
          <Button
            style={{
              borderRadius: "50px",
              fontSize: "16px",
              width: "100px",
            }}
            variant="outline-secondary"
            className="font-weight-bold mb-2 p-1"
          >
            Connect
          </Button>
        </div>
      </Col>
    </Row>
  );
}
