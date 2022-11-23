import TextArea from "antd/es/input/TextArea";
import moment from "moment";
import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";

import { Link } from "react-router-dom";
import ProblemApi from "../../api/problem.api";
import FormProblem from "./FormProblem";

function ProblemTable({ dataProblem, setRefreshData, refreshData }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Date</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataProblem?.map((problem, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{problem.title}</td>
            <td>{moment(problem.date).format("DD-MM-YYYY HH:mm:ss")}</td>
            <td>
              <TextArea
                readOnly
                rows={5}
                bordered={null}
                value={problem?.description}
              />
            </td>
            <td>
              <Link to={`/problem/${problem._id}`} style={{ marginRight: 5 }}>
                <Button>Resolve</Button>
              </Link>
              <FormProblem
                refreshData={refreshData}
                setRefreshData={setRefreshData}
                problem={problem}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ProblemTable;
