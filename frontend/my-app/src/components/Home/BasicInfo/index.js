import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const BasicInfo = () => {
  return (
    <Card
      style={{
        width: "32%",
        padding: "1em",
        marginRight: "1%",
        marginBottom: "15px",
      }}
    >
      <Card.Img
        variant="top"
        src="https://cdn3.vectorstock.com/i/1000x1000/21/77/problem-solving-concept-banner-header-vector-23242177.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to="/problem/1">
          <Button variant="primary">Resolve</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BasicInfo;
