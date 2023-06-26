import React, { useState } from "react";
import { Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import "./Mycontact.css";
import ContactInfo from "./ContactInfo";
import ContactUs from "./ContactUs";

function MyContact() {
  const [user, setUser] = useState({});
  const submitForm = (formInput) => {
    setUser(formInput);
  };
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <ContactInfo user={user} />
          <ContactUs submitForm={submitForm} />
        </Row>
      </Container>
    </div>
  );
}

export default MyContact;
