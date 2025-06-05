import React, { useState, useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function CartPagess() {
  const { state } = useLocation();
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    if (state?.product) {
      const existing = cart.find(item => item.id === state.product.id);
      if (existing) {
        setCart(prev =>
          prev.map(item =>
            item.id === state.product.id
              ? { ...item, quantity: item.quantity + state.quantity }
              : item
          )
        );
      } else {
        setCart(prev => [...prev, { ...state.product, quantity: state.quantity }]);
      }
    }
  }, [state]);

  const increment = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decrement = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const getTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="mt-5">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Total (₹)</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <Button variant="success" onClick={() => increment(item.id)} className="me-2">+</Button>
                    <Button variant="warning" onClick={() => decrement(item.id)} className="me-2">-</Button>
                    <Button variant="danger" onClick={() => removeItem(item.id)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <h4>Total Amount: ₹{getTotal()}</h4>
        </>
      )}
    </Container>
  );
}

export default CartPagess;