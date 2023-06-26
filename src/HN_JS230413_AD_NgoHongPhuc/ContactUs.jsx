import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

function ContactUs({ submitForm }) {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState({});

  const validateForm = (formInput) => {
    const errors = {};
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!formInput.name) {
      errors.nameError = "Name is required";
    }
    if (!formInput.email) {
      errors.emailError = "Email is required";
    } else if (regexEmail.test(formInput.email) === false) {
      errors.emailError = "Email is invalid";
    }
    if (!formInput.phone) {
      errors.phoneError = "Phone is required";
    }
    if (!formInput.message) {
      errors.messageError = "Message is required";
    }
    return errors;
  };

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();
    let errors = validateForm(formInput);
    setError(errors);

    if (Object.keys(errors).length === 0) {
      submitForm(formInput);
    }
  };

  const { nameError, emailError, phoneError, messageError } = error;
  return (
    <Col md={8} className="p-4">
      <h2>Contact US</h2>
      <Form onSubmit={handleSubmitForm}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="please enter your name"
            name="name"
            onChange={handleChange}
          />
          {nameError && <p className="text-danger">{nameError}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="please enter your email"
            name="email"
            onChange={handleChange}
          />
          {emailError && <p className="text-danger">{emailError}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
          <Form.Label>Phone </Form.Label>
          <Form.Control
            type="text"
            placeholder="please enter your phone"
            name="phone"
            onChange={handleChange}
          />
          {phoneError && <p className="text-danger">{phoneError}</p>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Mesage</Form.Label>

          <Form.Control
            as="textarea"
            rows={3}
            onChange={handleChange}
            name="message"
          />
          {messageError && <p className="text-danger">{messageError}</p>}
        </Form.Group>
        <Button type="submit">Submit </Button>
      </Form>
    </Col>
  );
}

export default ContactUs;
