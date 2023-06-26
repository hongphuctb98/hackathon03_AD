import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";

function Cart({ listProduct, handleUpdate, handleDelete }) {
  const [cartList, setCartList] = useState([]);
  const [newCount, setNewCount] = useState();
  useEffect(() => {
    setCartList(listProduct.filter((item) => item.count != 0));
  }, [listProduct]);
  const total = cartList.reduce(
    (total, cur) => total + cur.count * cur.price,
    0
  );
  const handleUpdateCart = (id) => {
    let newList = [...cartList];
    let item = newList.find((item) => item.id === id);
    item.status = !item.status;
    console.log(item.status);
    if (item.status) {
      item.count = newCount;
    }
    setCartList(newList);
  };

  const handleDeleteCart = (id) => {
    handleDelete(id);
  };
  return (
    <Container>
      <h1 className="text-center">Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>IMAGE</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>TotalAmount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td style={{ width: "600px" }}>{item.name}</td>
              <td>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={item.image_url}
                  alt=""
                />
              </td>
              <td>
                {item.status ? (
                  item.count
                ) : (
                  <input
                    type="number"
                    defaultValue={item.count}
                    style={{ width: "50px" }}
                    onChange={(e) => setNewCount(e.target.value)}
                  />
                )}
              </td>
              <td>{item.price}$</td>
              <td>{item.count * item.price}</td>
              <td>
                <Button
                  variant="warning"
                  className="mx-2"
                  onClick={() => handleUpdateCart(item.id)}
                >
                  Update
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDeleteCart(item.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr className="">
            <td colspan={7} className="text-center fw-bold">
              Tổng tiền: {total}$
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
