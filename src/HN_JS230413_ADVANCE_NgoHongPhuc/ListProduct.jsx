import React, { useState } from "react";
import { Button, Card, Col, Container, Row, Tab, Tabs } from "react-bootstrap";

function ListProduct({ product, index, onAddCart }) {
  const { name, price, description, status, image_url, id } = product;
  const [count, setCount] = useState(0);
  const handleChangeCount = (e) => {
    setCount(e.target.value);
  };

  const handleAdd = () => {
    onAddCart(id, +count);
  };

  return (
    <Col lg={3} md={4} sm={6} className="my-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text
            style={{
              maxHeight: "2.4rem",
              lineHeight: "1.2rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Card.Text>
          <p className="price fs-5 " style={{ fontWeight: "bold" }}>
            {price}$
          </p>
          <div className="d-flex justify-content-between">
            <input
              type="number"
              placeholder="0"
              value={count}
              style={{ width: "80px", height: "35px" }}
              onChange={handleChangeCount}
            />
            <Button variant="primary" onClick={handleAdd}>
              Add to cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ListProduct;
