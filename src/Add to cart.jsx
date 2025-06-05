import React, { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Button, Table, Container, Row, Col, Alert } from 'react-bootstrap';

const productsList = [
  { id: 1, name: 'Coconut Oil', price: 250 },
  { id: 2, name: 'Coconut Scrub', price: 150 },
  { id: 3, name: 'Coconut Chips', price: 100 },
];

const CartSection = () => {
    const { state } = useLocation();
    const productFromState = state?.product;
    const quantityFromState = state?.quantity || 1;
  
    const [cart, setCart] = useState([]);
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      if (productFromState) {
        const existing = cart.find((item) => item.id === productFromState.id);
        if (existing) {
          setCart(cart.map((item) =>
            item.id === productFromState.id ? { ...item, qty: item.qty + quantityFromState } : item
          ));
        } else {
          setCart([...cart, { ...productFromState, qty: quantityFromState }]);
        }
  
        setMessage(`${productFromState.name || productFromState.title} added to cart.`);
        setTimeout(() => setMessage(''), 2000);
      }
    }, [productFromState]);
  
    const increaseQty = (id) => {
      setCart(cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      ));
    };
  
    const decreaseQty = (id) => {
      setCart(cart
        .map((item) => item.id === id ? { ...item, qty: item.qty - 1 } : item)
        .filter((item) => item.qty > 0)
      );
    };
  
    const removeItem = (id) => {
      setCart(cart.filter((item) => item.id !== id));
    };
  
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  
    return (
      <Container className="my-4">
        <Row>
          <Col>
            <h3>Cart</h3>
            {message && <Alert variant="success">{message}</Alert>}
            {cart.length === 0 ? (
              <p>Cart is empty</p>
            ) : (
              <>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Price</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item) => (
                      <tr key={item.id}>
                        <td>{item.name || item.title}</td>
                        <td>{item.qty}</td>
                        <td>₹{item.price * item.qty}</td>
                        <td>
                          <Button size="sm" onClick={() => increaseQty(item.id)} className="me-1">+</Button>
                          <Button size="sm" onClick={() => decreaseQty(item.id)} className="me-1">-</Button>
                          <Button size="sm" variant="danger" onClick={() => removeItem(item.id)}>Remove</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
                <h5>Total: ₹{total}</h5>
              </>
            )}
          </Col>
        </Row>
      </Container>
    );
  };

export default CartSection;
