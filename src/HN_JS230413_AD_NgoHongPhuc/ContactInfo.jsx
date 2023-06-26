import React from "react";
import { Col, ListGroup } from "react-bootstrap";

function ContactInfo({ user }) {
  const { name, email, phone, message } = user;
  return (
    <Col md={4} className="p-4 col-info">
      <h2>Contact Info</h2>
      <ListGroup>
        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Name</div>
            {user.name}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Email</div>
            {user.email}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Number</div>
            {user.phone}
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <div className="ms-2 me-auto">
            <div className="fw-bold">Manege</div>
            {user.message}
          </div>
        </ListGroup.Item>
      </ListGroup>
      <div className="icon-group">
        <i class="fa-brands fa-square-facebook"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
      </div>
    </Col>
  );
}

export default ContactInfo;
