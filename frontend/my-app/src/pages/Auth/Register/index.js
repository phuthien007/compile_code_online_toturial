import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3 mt-4">
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Sign Up</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter username"
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
                <Form.Control.Feedback type="invalid">
                  Please choose a email.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" placeholder="Password" />
                <Form.Control.Feedback type="invalid">
                  Please choose a password.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicRePassword">
                <Form.Label>Re-Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Re-Password"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter re-password.
                </Form.Control.Feedback>
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
            <p>
              Have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
