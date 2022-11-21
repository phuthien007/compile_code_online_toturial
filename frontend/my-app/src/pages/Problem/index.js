import React, { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import ProblemTable from "../../components/Problem";

const Problem = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <h1>Problem</h1>
      <Card>
        <Card.Header as="h5">
          <Row>
            <Col>List all problem</Col>
            <Col style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button onClick={handleShow}>Thêm mới</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <ProblemTable />
        </Card.Body>
      </Card>
    </>
  );
};

export default Problem;
