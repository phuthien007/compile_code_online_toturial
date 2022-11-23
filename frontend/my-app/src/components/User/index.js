import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import FormUser from "./FormUser";

function UserTable({ dataUser }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Email</th>
          <th>Name</th>
          <th>Roles</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {dataUser?.map((user, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.name}</td>
            <td>{user.roles.join(", ")}</td>
            <td>
              <FormUser user={user} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserTable;
