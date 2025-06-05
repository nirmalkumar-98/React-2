import React from 'react';
import { Container, Row, Col, Image, Button, Nav, Card } from 'react-bootstrap';

const CocoProfile = () => {
  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#f8f9fa', fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Cover Photo and Profile */}
      <div style={{ backgroundColor: '#e6f5ea', padding: '2rem 1rem', borderRadius: '10px' }}>
        <Row className="align-items-center">
          <Col md={2} className="text-center mb-3 mb-md-0">
            <Image
              src="/images/coco-logo.png"
              roundedCircle
              style={{ width: '120px', height: '120px', border: '4px solid #7cb342' }}
            />
          </Col>
          <Col md={7}>
            <h3 style={{ marginBottom: 0 }}>coco_vibe</h3>
            <p className="text-muted mb-1">2.3K likes • 2.6K followers</p>
            <p style={{ fontSize: '0.95rem' }}>
              Eco-friendly coconut products for sustainable living. 🌿
              <br />
              Crafted by women artisans. ♻️
            </p>
          </Col>
          <Col md={3} className="text-md-end text-center">
            <Button variant="success" className="me-2">Follow</Button>
            <Button variant="outline-secondary">Message</Button>
          </Col>
        </Row>
      </div>

      {/* Navigation Tabs */}
      <Nav variant="tabs" defaultActiveKey="posts" className="mt-4 justify-content-center">
        <Nav.Item>
          <Nav.Link eventKey="posts">Posts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="reels">Reels</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="photos">Photos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="videos">Videos</Nav.Link>
        </Nav.Item>
      </Nav>

      {/* Posts Grid */}
      <Row className="mt-4 g-4">
        {['/images/post1.jpg', '/images/post2.jpg', '/images/post3.jpg'].map((img, idx) => (
          <Col md={4} key={idx}>
            <Card className="shadow-sm border-0">
              <Card.Img variant="top" src={img} style={{ height: '250px', objectFit: 'cover' }} />
              <Card.Body>
                <Card.Text>
                  A beautiful handcrafted coconut bowl 🌴
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CocoProfile;
