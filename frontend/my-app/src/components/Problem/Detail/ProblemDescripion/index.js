import React from "react";
import { Col, Row } from "react-bootstrap";

const ProblemDescription = () => {
  return (
    <div
      style={{
        height: "85vh",
        backgroundColor: "#FFF",
        color: "#857f7f",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <Row>
        <Col>
          <p>
            <i className="fa fa-user" />
            User create
          </p>
        </Col>

        <Col>
          <i className="fa fa-book" />
          <p>Name problem</p>
        </Col>
      </Row>
      {/* detail  */}
      <Row>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl aliquet
          nisl, nec aliquet nisl nisl eu nisl. Nulla facilisi.
        </p>
      </Row>
      <Row>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl aliquet
          nisl, nec aliquet nisl nisl eu nisl. Nulla facilisi.
        </p>
      </Row>
      <Row>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl aliquet
          nisl, nec aliquet nisl nisl eu nisl. Nulla facilisi.
        </p>
      </Row>
      <Row>
        <p>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Sed euismod, nisl vel tincidunt aliquam, nisl nisl aliquet
          nisl, nec aliquet nisl nisl eu nisl. Nulla facilisi.
        </p>
      </Row>
    </div>
  );
};

export default ProblemDescription;
