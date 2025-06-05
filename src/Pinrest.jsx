import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import images17 from './Images/pin1.webp';
import images18 from './Images/pin2.webp';
import images19 from './Images/pin3.webp';
import images11 from './Images/Thenga Logo.png';
import images12 from './Images/ki.webp';
import { FaGlobe } from 'react-icons/fa';

const PinterestProfile = () => {
  const savedImages = [images17, images19, images18];

  return (
    <Container className="pt-5" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <Row>
        <Col md={2}>
          <Image 
            src={images11}
            roundedCircle 
            style={{ width: '80px', height: '80px' }} 
            alt="Thenga Logo" 
          />
        </Col>
        <Col md={10}>
          <h4 style={{ fontWeight: 600, fontSize: '1.5rem' }}>Thenga Aura</h4>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#555' }}>@thenga_coco</p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            <strong>10 followers</strong> · 0 following · 7.7k monthly views
          </p>
          <p style={{ fontSize: '0.95rem', lineHeight: 1.5 }}>
            We are a small women-led start-up from Kerala, India - working on products made with discarded coconut shells.
            Now you can purchase our products hand-made in a small...
          </p>
          <div className="mb-3">
            <Button variant="danger" className="me-2">Follow</Button>
            <Button variant="light" className="border">Contact</Button>
          </div>
          <a
            href="https://thengaAura.com"
            target="_blank"
            rel="noreferrer"
            style={{
              fontSize: '0.9rem',
              color: '#333',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem'
            }}
          >
            <FaGlobe />
            thengaAura.com
          </a>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={12}>
          <Image 
            src={images12}
            alt="Thenga Banner" 
            fluid 
            style={{ borderRadius: '10px' }} 
          />
        </Col>
      </Row>

      <h5 className="mt-4" style={{ fontWeight: 600 }}>Saved</h5>
      <Row className="mt-3">
        {savedImages.map((img, idx) => (
          <Col key={idx} xs={12} md={4} className="mb-3">
            <Card style={{ borderRadius: '15px', overflow: 'hidden' }}>
              <Card.Img variant="top" src={img} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PinterestProfile;