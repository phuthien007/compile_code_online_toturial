import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import SubmissionTable from "../../components/Submission";

const Submission = () => {
  return (
    <>
      <h1>Submission</h1>
      <Card>
        <Card.Header as="h5">
          <Row>
            <Col>List all Submission</Col>
            <Col style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button>Thêm mới</Button>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <SubmissionTable />
        </Card.Body>
      </Card>
    </>
  );
};

export default Submission;
