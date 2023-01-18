import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      className="github_Activity"
      style={{ justifyContent: "center", paddingBottom: "10px" }}
    >
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="blue">Code</strong>
      </h1>
      <GitHubCalendar
        username="Rajat-soni-vst-au4"
        blockSize={15}
        blockMargin={5}
        borderColor="black"
        color="blue"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;