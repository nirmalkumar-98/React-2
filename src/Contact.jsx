
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    if (!name || !email || !phone || !message) {
      setAlertMsg('Please fill out all fields.');
      setShowAlert(true);
      return;
    }

    setShowAlert(false);
    alert('Form submitted successfully!');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <Container className="my-5">
        <Container className="contact-heading-container">
      <h1 className="contact-heading">Contact</h1>
    </Container>
      {/* <h2 className=" mb-4">.</h2> */}
      <h2 className='mobo'>We would love to hear from you</h2> 
      <p className=" bold mb-5">Want to learn more about our products? Write to Us!</p>

      <Row>
        <Col md={5}>
          {showAlert && <Alert variant="danger">{alertMsg}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Col>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="Save my name, email, and website in this browser for the next time I comment."
              />
            </Form.Group>

            <Button
              type="submit"
              variant="warning"
              style={{ backgroundColor: '#B68D40', borderColor: '#B68D40' }}
            >
              SUBMIT NOW
            </Button>
          </Form>
        </Col>

        <Col 
  md={7} 
  className="d-flex flex-column" 
  style={{ 
    fontFamily: "'Playfair Display', Georgia, 'Times New Roman', Times, serif", 
    marginLeft: 'auto' 
  }}
>
  <h5>Registered Address</h5>
  <p>01/327, Kutanachery House, Kizhakumpattukara Road, Thrissur-680005, Kerala, India</p>

  <h5>Office Address</h5>
  <p>Thenga, 2nd Floor, Manjali Building, CBE Road, Sultanpet, Palakkad - 678001, Kerala, India</p>

  <h5>Information</h5>
  <p><strong>Bulk Orders</strong><br/>+91 80756 98276<br/>swathy@thengacoco.com</p>

  <p><strong>Retail orders</strong><br/>+91 96338 13926<br/>sumitha@thengacoco.com</p>

  <p><strong>Export Orders</strong><br/>+91 70125 91586<br/>preetha@thengacoco.com</p>

  <p>For complaints and escalations, please email<br/>maria@thengacoco.com</p>

  <h5>We're Open</h5>
  <p>Monday to Saturday<br/>From 10am to 7:30pm</p>
</Col>

      </Row>
    </Container>
  );
};


function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3} className="footer-about">
            <img src="/images/ThengaAura.png" alt="Thenga Aura" className="footer-logo" />
            <p>
              Thenga Aura is a homegrown brand from Kerala that repurposes coconut waste into lasting, sustainable, and handmade home products.
            </p>
          </Col>

          <Col md={3}>
            <h5>Store</h5>
            <ul className="footer-links">
            <li>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                Home
          </Link>
            </li>
            <li>
         <Link to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
                About
        </Link>
           </li>
               <li> 
                <Link to="/Products" style={{ textDecoration: 'none', color: 'inherit' }}>
                             shop
                     </Link>
               </li>
                 <Link to="/Contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                              Contact
                 </Link>
              <li>Blogs</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Collections</h5>
            <ul className="footer-links">
                <Link to="/products?category=tableware" style={{ textDecoration: 'none', color: 'inherit' }}>
                Tableware
              </Link>
              <li>Decor</li>
              <li>Kitchen</li>
              <li>Home & Garden</li>
              <li>Gifting</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5>Help</h5>
            <ul className="footer-links">
            {/* <ul className="footer-links"> */}
          <li>
           <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                     Login & Account
           </Link>
           </li>
            <li>
            <Link to="/privacy-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
                      Privacy Policy
            </Link>
            </li>
    

          <li>
          <Link to="/refund-policy" style={{ textDecoration: 'none', color: 'inherit' }}>
                     Refund Policy
         </Link>
        </li>
        <Link to="/terms" style={{ textDecoration: 'none', color: 'inherit' }}>
  Terms & Conditions
</Link>
              <li>Track Your Order</li>
            </ul>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>© THENGAAURA 2025. Site by <span className="agency-name">abox Agency</span></p>
          <div className="social-icons">
           <Link to="/pinterest" style={{ color: 'inherit' }}>
                        <FaPinterestP />
                    </Link>
          
                       <Link to="/instagram" style={{ color: 'inherit' }}>
                        <FaInstagram />
                        </Link>
            <FaYoutube />
          </div>
        </div>

        <div className="floating-icons">
          <FaWhatsapp className="float-icon whatsapp" />
          <div className="chat-icon-wrapper">
            <FaRegCommentDots className="float-icon chat" />
            {/* <span className="chat-badge">1</span> */}
          </div>
        </div>
      </Container>
    </footer>
  );
}



// export default ContactForm;

function Contactpage() {
    return (  
        <>
        {/* <Contacts/> */}
        < ContactForm/>
        <Footer/>
        
        </>

    );
}

export default Contactpage;


