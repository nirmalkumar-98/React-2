import React, { useState } from 'react';
import {
  Container,
  Form,
  Row,
  Col,
  Button,
  Card,
  Modal,
} from 'react-bootstrap';
import './CheckoutForm.css';

const CheckoutForm = () => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
      email: '',
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      pinCode: '',
      phone: '',
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const isFormValid = () => {
      return (
        formData.email &&
        formData.firstName &&
        formData.lastName &&
        formData.address &&
        formData.city &&
        formData.state &&
        formData.pinCode &&
        formData.phone
      );
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (isFormValid()) {
        setShowModal(true);
      } else {
        alert('Please fill in all the required details.');
      }
    };
  
    return (
      <Container className="checkout-container my-5">
        <Form onSubmit={handleSubmit}>
          <h5 className="section-title">Contact</h5>
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              placeholder="Email"
              className="input-field"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Check
              type="checkbox"
              label="Email me with news and offers"
              defaultChecked
              className="checkbox-label mt-2"
            />
          </Form.Group>
  
          <h5 className="section-title mt-4">Delivery</h5>
          <Row>
            <Col md={12}>
              <Form.Select
                className="input-field"
                name="country"
                defaultValue="India"
                disabled
              >
                <option>India</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input-field mt-2"
              />
            </Col>
            <Col md={6}>
              <Form.Control
                type="text"
                placeholder="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input-field mt-2"
              />
            </Col>
            <Col md={12}>
              <Form.Control
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="input-field mt-2"
              />
              <Form.Control
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="input-field mt-2"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="input-field mt-2"
              />
            </Col>
            <Col md={4}>
              <Form.Select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="input-field mt-2"
              >
                <option value="">Select State</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Control
                type="text"
                placeholder="PIN code"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className="input-field mt-2"
              />
            </Col>
            <Col md={12}>
              <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input-field mt-2"
              />
              <Form.Check
                type="checkbox"
                label="Save this information for next time"
                className="checkbox-label mt-2"
              />
              <Form.Check
                type="checkbox"
                label="Text me with news and offers"
                className="checkbox-label mt-2"
              />
            </Col>
          </Row>
  
          <h5 className="section-title mt-4">Shipping method</h5>
          <Card className="shipping-card mb-3">
            <Card.Body>Standard Delivery – Free</Card.Body>
          </Card>
  
          <h5 className="section-title mt-4">Payment</h5>
          <p className="payment-note">All transactions are secure and encrypted.</p>
          <Card className="payment-card mb-3 border-success">
            <Card.Body>
              <Form.Check
                type="radio"
                name="paymentMethod"
                label="Razorpay Secure (UPI, Cards, Wallets, NetBanking)"
                defaultChecked
              />
              <div className="payment-description mt-2">
                After clicking “Pay now”, you will be redirected to Razorpay Secure.
              </div>
            </Card.Body>
          </Card>
  
          <Card className="payment-card mb-3">
            <Card.Body>
              <Form.Check
                type="radio"
                name="paymentMethod"
                label="Cash on Delivery (COD)"
              />
            </Card.Body>
          </Card>
  
          <h5 className="section-title mt-4">Billing address</h5>
          <Card className="payment-card mb-3">
            <Card.Body>
              <Form.Check
                type="radio"
                name="billingAddress"
                label="Same as shipping address"
                defaultChecked
              />
              <Form.Check
                type="radio"
                name="billingAddress"
                label="Use a different billing address"
                className="mt-2"
              />
            </Card.Body>
          </Card>
  
          <Button type="submit" className="paynow-btn w-100">Pay now</Button>
        </Form>
  
        {/* Modal for payment confirmation */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Payment Successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your payment has been completed successfully!</Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  };
  

export default CheckoutForm;
