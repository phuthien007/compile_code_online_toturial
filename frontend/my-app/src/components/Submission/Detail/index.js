import React from "react";
import { Card } from "react-bootstrap";
import Testcases from "./Testcases";

const HistorySubmission = ({ data }) => {
  return (
    <Card className="mb-4">
      <Card.Header as="h5">Submission #1</Card.Header>
      <Card.Body>
        <Card.Title>List of testcases</Card.Title>
        <Testcases data={data} />
      </Card.Body>
    </Card>
  );
};

export default HistorySubmission;
