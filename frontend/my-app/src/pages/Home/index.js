import React from "react";
import { Row } from "react-bootstrap";
import BasicInfo from "../../components/Home/BasicInfo";

const Home = () => {
  return (
    <>
      <Row>
        <h1>Home</h1>
        {/* set layout card display */}
        <BasicInfo />
        <BasicInfo />
        <BasicInfo />
        <BasicInfo />
        <BasicInfo />
        <BasicInfo />
      </Row>
    </>
  );
};

export default Home;
