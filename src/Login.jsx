// import React from 'react';
import { Container, Row, Col, Form, Button, Breadcrumb,  Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';



const LoginPage = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy sign-in logic (replace with real logic)
    if (email && password) {
      setAlertMessage('Successfully signed in!');
      setShowAlert(true);

      // Clear form fields
      setEmail('');
      setPassword('');
    } else {
      setAlertMessage('Please enter both email and password.');
      setShowAlert(true);
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center fw-bold mb-4 JJJ" style={{ fontSize: '2.2rem', fontFamily: 'Playfair Display' }}>
        Log In
      </h1>

      <div className="text-center mb-4">
        <Breadcrumb className="justify-content-center LLL">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Account</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {showAlert && (
        <Alert
          variant={alertMessage.includes('Successfully') ? 'success' : 'danger'}
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}

      <Row className="mt-4">
        {/* Log In Form */}
        <Col md={6} className="px-5">
          <h4 className="fw-bold mb-4 KKK">Log In</h4>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                className="border-success"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                className="border-success"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <div className="mb-3">
              <a href="#" className="text-decoration-underline text-muted">
                Forgot your password?
              </a>
            </div>
            <Button
              variant="light"
              type="submit"
              className="w-100 py-2"
              style={{
                backgroundColor: '#a68063',
                color: '#1b3d1d',
                borderRadius: '30px',
                fontWeight: '500',
              }}
            >
              SIGN IN
            </Button>
          </Form>
        </Col>

        {/* New Customer Section */}
        <Col md={6} className="px-5 mt-5 mt-md-0">
          <h4 className="fw-bold mb-3 NNN">New Customer</h4>
          <p className="text-muted">
            Sign up for early Sale access plus tailored new arrivals, trends and promotions.
            To opt out, click unsubscribe in our emails.
          </p>
          
  
    <Button
      variant="light"
      className="px-5 py-2 mt-2"
      onClick={() => navigate('/register')}
      style={{
        backgroundColor: '#a68063',
        color: '#1b3d1d',
        borderRadius: '30px',
        fontWeight: '500',
      }}
    >
      REGISTER
    </Button>
        </Col>
      </Row>
    </Container>
  );
};


export default LoginPage;
