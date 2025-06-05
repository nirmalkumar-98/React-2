import { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert, Breadcrumb } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;
    if (firstName && lastName && email && password) {
      setShowAlert(true);
      setFormData({ firstName: '', lastName: '', email: '', password: '' });
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center page-title">Register</h1>

      <div className="text-center mb-4">
        <Breadcrumb className="justify-content-center">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Create Account</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          You have registered!
        </Alert>
      )}

      <Row className="justify-content-center">
        <Col md={6}>
          <h4 className="form-title mb-4">Register</h4>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="custom-input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="custom-input"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="custom-input"
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="custom-input"
              />
            </Form.Group>

            <p className="text-muted mb-4 small-text">
              Sign up for early Sale access plus tailored new arrivals, trends and promotions.
              To opt out, click unsubscribe in our emails.
            </p>

            <Button
              type="submit"
              className="w-100 py-2 mb-3 custom-register-btn"
            >
              REGISTER
            </Button>
            {/* <Button
              variant="outline-light"
              className="w-100 py-2 custom-login-btn"
            >
              LOG IN
            </Button> */}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
