// import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, } from "react-bootstrap";
import {   Image,  Alert,  Form } from 'react-bootstrap';

import images03 from './Images/gift4.png';
import images06 from './Images/gift7.png';
import images05 from './Images/gift3.png';
import images04 from './Images/gift1.png';
import images00 from './Images/gift5.png';
import images01 from './Images/gift6.png';
import images02 from './Images/gift2.png';
import images16 from './Images/gift8.png';

import images17 from './Images/kk.png';
import images18 from './Images/taj.png';
import images19 from './Images/tan.png';
import images14 from './Images/Kotak.png';
import images15 from './Images/CC.png';
import images11 from './Images/in.png';
import images12 from './Images/LE1.svg';
import images13 from './Images/sitaram.svg';

import images122 from './Images/gift cus1.webp';
import images123 from './Images/gift cus2.webp';
import images124 from './Images/gift cus3.webp';
// import images125 from './Images/LE1.svg';

import images125 from './Images/gift cus 4.webp';
import images126 from './Images/gift cus 5.webp';
import images127 from './Images/gift cus 6.webp';
import images128 from './Images/gift cus7.webp';
import images129 from './Images/clr12.png';



function GIFT () {
    return ( 


        <div style={{ padding: '20px', textAlign: 'center' }}>
       
        <h1>Products page</h1>
        
        {/* // <Navigation/> */}
        {/* <p>Products to our website. We’re glad you’re here.</p> */}
      </div>
     );
}

// export default GIFT ;/


const products = [
    {
      id: 1,
      title: "Thenga Eco-Friendly Diwali Gifts Set",
      image: images04,
    },
    {
      id: 2,
      title: "Thenga Eco-Friendly Birthday Gifts/Hampers Set",
      image: images02,
    },
    {
      id: 3,
      title: "Thenga Evergreen Eco-Friendly Gift Hampers",
      image: images05,
    },
    {
      id: 4,
      title: "Thenga Eco-Friendly Love Gifts/Hampers",
      image: images03,
    },
    {
      id: 5,
      title: "Thenga Coconut Shell Eco-friendly Soap Dish",
      image: images00,
    },
    {
      id: 6,
      title: "Thenga Coconut Shell Teacup | Hot Drink Glass",
      image: images01,
    },
    {
      id: 7,
      title: "Thenga Hand Carved Coconut Shell Candle Holder",
      image: images06,
    },
    {
      id: 8,
      title: "Thenga Coconut Shell Storage Box",
      image: images16,
    },
  ];
  
  const ProductGrid = () => {
    const navigate = useNavigate(); // ⬅️ For navigation
  
    const handleEnquireClick = () => {
      navigate('/bulk-gift-form'); // ⬅️ Redirect to the form
    };
  
    return (
      <Container className="my-5">
        <h2 className="text-center mb-4">Eco-Friendly Giftings</h2>
        <p className='bbb'>
          Thenga Eco-Friendly Gift Hampers, thoughtfully curated for every occasion.
          Whether <br /> it’s a festive gift hamper, a wedding hamper, or a corporate gift hamper,
          these eco- <br /> friendly and elegant collections are ideal for employees, clients, friends, and family.
        </p>
  
        {/* First Row */}
        <Row className="g-4 mb-4">
          {products.slice(0, 4).map((product) => (
            <Col key={product.id} xs={12} sm={6} md={3} className="text-center">
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "250px", objectFit: "cover", marginBottom: "10px" }}
              />
              <h5 style={{ fontSize: "1rem", minHeight: "48px", marginBottom: "8px" }}>
                {product.title}
              </h5>
              <div className="mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} color="#FFC107" size={16} />
                ))}
              </div>
              <Button
                style={{
                  backgroundColor: "#C1A470",
                  border: "none",
                  borderRadius: "30px",
                  padding: "8px 20px",
                  fontWeight: "bold",
                }}
                onClick={handleEnquireClick} // ⬅️ Button handler
              >
                ENQUIRE NOW
              </Button>
            </Col>
          ))}
        </Row>
  
        {/* Second Row */}
        <Row className="g-4">
          {products.slice(4, 8).map((product) => (
            <Col key={product.id} xs={12} sm={6} md={3} className="text-center">
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100%", height: "250px", objectFit: "cover", marginBottom: "10px" }}
              />
              <h5 style={{ fontSize: "1rem", minHeight: "48px", marginBottom: "8px" }}>
                {product.title}
              </h5>
              <div className="mb-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FaStar key={index} color="#FFC107" size={16} />
                ))}
              </div>
              <Button
                style={{
                  backgroundColor: "#C1A470",
                  border: "none",
                  borderRadius: "30px",
                  padding: "8px 20px",
                  fontWeight: "bold",
                }}
                onClick={handleEnquireClick}
              >
                ENQUIRE NOW
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  
  
  
  
  
  const ClientsSection = () => {
    
    const firstRowClients = [
      { img: images11, alt: "Indian Navy" },
      { img: images19, alt: "Tanishq" },
      { img:images18, alt: "Taj" },
      { img: images14, alt: "Kotak" },
    ];
  
    const secondRowClients = [
      { img: images15, alt: "Coconut Development Board" },
      { img:images17, alt: "Kerala Tourism" },
      { img: images12, alt: "Le Meridien" },
      { img: images13, alt: "Sitaram Ayurveda" },
    ];
  
    return (
      <section style={{ padding: "60px 0", backgroundColor: "#fff" }}>
        <Container>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.5rem",
              fontWeight: "600",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            Some of Our Clients
          </h2>
  
          {/* First Row */}
          <Row className="justify-content-center mb-4">
            {firstRowClients.map((client, index) => (
              <Col
                key={index}
                xs={6}
                md={3}
                className="d-flex justify-content-center align-items-center mb-4"
              >
                <img
                  src={client.img}
                  alt={client.alt}
                  style={{
                    maxWidth: "120px",
                    maxHeight: "100px",
                    objectFit: "contain",
                  }}
                />
              </Col>
            ))}
          </Row>
  
          {/* Second Row */}
          <Row className="justify-content-center">
            {secondRowClients.map((client, index) => (
              <Col
                key={index}
                xs={6}
                md={3}
                className="d-flex justify-content-center align-items-center mb-4"
              >
                <img
                  src={client.img}
                  alt={client.alt}
                  style={{
                    maxWidth: "120px",
                    maxHeight: "100px",
                    objectFit: "contain",
                  }}
                />
              </Col>
            ))}
          </Row>
  
        </Container>
      </section>
    );
  };
  
  
  
   
  
  
  
   const Testimonials = () => {
    const testimonials = [
      {
        img: images122,
        name: "Charu Kapoor",
        feedback:
          "Products are really good. I have used them to make my Diwali hampers, even in my school given to judges in sustainability conclave. Truly a great experience. Thanks for creating such amazing products.",
      },
      {
        img: images123,
        name: "IIT Madras",
        feedback:
          "The gifts from ThengaCoco for our international conference was exceptionally classy and elegant, making it a memorable keepsake. Despite the festive season and challenges, the team ensured timely delivery, highly commendable.",
      },
      {
        img:images124,
        name: "Gopika Ajith",
        feedback:
          '"Thenga" has such wonderful products made of coconut shells. I would highly recommend products from "Thenga" for gifts and favours. Kudos to Maria for starting a sustainable business like this!',
      },
    ];
  
    return (
      <section style={{ padding: "60px 0" }}>
        <Container>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2.8rem",
              fontWeight: "600",
              textAlign: "center",
              marginBottom: "50px",
            }}
          >
            What Our Customer Says
          </h2>
  
          <Row className="g-4">
            {testimonials.map((item, index) => (
              <Col md={4} key={index}>
                <Card
                  style={{
                    border: "none",
                    borderRadius: "10px",
                    backgroundColor: "#f5f5f5",
                    paddingBottom: "20px",
                    minHeight: "550px",
                  }}
                  className="h-100 text-center"
                >
                  <Card.Img
                    variant="top"
                    src={item.img}
                    style={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                      objectFit: "cover",
                      height: "300px",
                      width: "100%",
                    }}
                  />
                  <Card.Body>
                    <div
                      style={{
                        fontSize: "20px",
                        color: "#000",
                        margin: "10px 0",
                      }}
                    >
                      ★★★★★
                    </div>
                    <Card.Title
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: "700",
                        fontSize: "1.3rem",
                        marginBottom: "15px",
                      }}
                    >
                      {item.name}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "0.95rem",
                        color: "#333",
                        padding: "0 10px",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.feedback}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    );
  };
  
  
  const BulkGiftingSection = () => {
    const sectionStyle = {
      fontFamily: "'DM Serif Display', serif",
      color: '#000',
      marginTop: '60px',
      marginBottom: '60px',
      textAlign: 'center',
    };
  
    const headingStyle = {
      fontSize: '36px',
      fontWeight: '700',
      marginBottom: '50px',
    };
  
    const subHeadingStyle = {
      fontSize: '28px',
      fontWeight: '700',
      marginBottom: '20px',
    };
  
    const paragraphStyle = {
      fontSize: '16px',
      fontWeight: '400',
      marginBottom: '30px',
      paddingLeft: '20px',
      paddingRight: '20px',
    };
  
    return (
      <Container style={sectionStyle}>
        <h2 style={headingStyle}>Why Choose Thenga for Bulk Gifting?</h2>
  
        {/* First Row */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-md-start text-center mb-4 mb-md-0">
            <h3 style={subHeadingStyle}>Eco-Conscious Appeal</h3>
            <p style={paragraphStyle}>
              Our products are crafted from upcycled coconut shells, Coconut wood, and other sustainable materials,
              reducing environmental impact.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image src={images125} alt="Coconut Shells" fluid />
          </Col>
        </Row>
  
        {/* Second Row */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <Image src={images126} alt="Gift Boxes" fluid />
          </Col>
          <Col md={6} className="text-md-start text-center">
            <h3 style={subHeadingStyle}>Personalize Your Way</h3>
            <p style={paragraphStyle}>
              Customize your festive needs with options to choose custom boxes, cards, themes, and ribbon colors.
            </p>
          </Col>
        </Row>
  
        {/* Third Row */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-md-start text-center mb-4 mb-md-0">
            <h3 style={subHeadingStyle}>Custom Engraving on Products</h3>
            <p style={paragraphStyle}>
              Add a personal touch or brand identity by engraving names or logos on our products to make them truly stand out.
            </p>
          </Col>
          <Col md={6} className="text-center">
            <Image src={images127} alt="Custom Engraving" fluid />
          </Col>
        </Row>
  
        {/* Fourth Row */}
        <Row className="align-items-center">
          <Col md={6} className="text-center mb-4 mb-md-0">
            <Image src={images128} alt="Customizable Solutions" fluid />
          </Col>
          <Col md={6} className="text-md-start text-center">
            <h3 style={subHeadingStyle}>Customizable Solutions</h3>
            <p style={paragraphStyle}>
              Personalize your hampers with logos, messages, or custom combinations to create a truly unique gift.
            </p>
          </Col>
        </Row>
  
      </Container>
    );
  };
  
  
  const BulkGiftForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      organization: '',
      email: '',
      contactCountryCode: '+91',
      contactNumber: '',
      city: '',
      quantity: '',
      details: '',
    });
  
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    
  
    // handleChange and handleSubmit as in your code...
 
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
      setErrors({});
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newErrors = {};
      if (!formData.name.trim()) newErrors.name = 'Name is required';
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
  
      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      } else {
        alert('Form submitted successfully!');
        setSubmitted(true);
        
        setFormData({
          name: '',
          organization: '',
          email: '',
          contactCountryCode: '+91',
          contactNumber: '',
          city: '',
          quantity: '',
          details: '',
        });
      }
    };
  
    const titleStyle = {
      fontFamily: "'DM Serif Display', serif",
      fontSize: '32px',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '20px',
    };
  
    const subTitleStyle = {
      fontFamily: "'DM Serif Display', serif",
      fontSize: '16px',
      textAlign: 'center',
      marginBottom: '40px',
    };
  
    const formBoxStyle = {
      border: '1px solid #ccc',
      padding: '30px',
      borderRadius: '5px',
      maxWidth: '800px',
      margin: '0 auto',
    };
  
    const submitButtonStyle = {
      backgroundColor: '#000',
      borderColor: '#000',
      width: '100%',
      fontFamily: "'DM Serif Display', serif",
      fontSize: '18px',
    };
  
    return (
      <Container className="py-5">
        <h2 style={titleStyle}>Looking to create personalized gift hampers with exclusive bulk discounts?</h2>
        <p style={subTitleStyle}>
          Fill out the form below and let us know your requirements! We're excited to craft bespoke hampers tailored to your needs and preferences.
        </p>
  
        <div style={formBoxStyle}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name*</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Organisation Name (Optional)</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter organization name" 
                name="organization" 
                value={formData.organization} 
                onChange={handleChange}
              />
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Email*</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter your email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>
  
            <Row className="mb-3">
              <Col md={4}>
                <Form.Label>Contact*</Form.Label>
                <Form.Select
                  name="contactCountryCode"
                  value={formData.contactCountryCode}
                  onChange={handleChange}
                >
                  <option value="+91">India +91</option>
                  <option value="+1">USA +1</option>
                  <option value="+44">UK +44</option>
                  
                </Form.Select>
              </Col>
              <Col md={8}>
                <Form.Label>&nbsp;</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter contact number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  isInvalid={!!errors.contactNumber}
                />
                <Form.Control.Feedback type="invalid">{errors.contactNumber}</Form.Control.Feedback>
              </Col>
            </Row>
  
            <Form.Group className="mb-3">
              <Form.Label>City*</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your city" 
                name="city" 
                value={formData.city} 
                onChange={handleChange}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
            </Form.Group>
  
            <Form.Group className="mb-3">
              <Form.Label>Approx number of boxes/quantity required</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter quantity" 
                name="quantity" 
                value={formData.quantity} 
                onChange={handleChange}
              />
            </Form.Group>
  
            <Form.Group className="mb-4">
              <Form.Label>More details about the order</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Types of products per box, special notes, occasion, budget, or anything else you’d like us to know!" 
                name="details" 
                value={formData.details} 
                onChange={handleChange}
              />
            </Form.Group>
  
            <Button type="submit" style={submitButtonStyle}>
              Submit
            </Button>
          </Form>
  
          {submitted && (
            <Alert variant="success" className="mt-3 text-center">
              Thank you! We have received your form.
            </Alert>
          )}
        </div>
      </Container>
    );
  };
  
  
  const GiftSection = () => {
    return (
      <div className="gift-section">
        <Container fluid className="p-5">
          <Row className="align-items-center">
            <Col md={6} className="text-center mb-4 mb-md-0">
              <Image src={images129} fluid className="gift-image" />
            </Col>
            <Col md={6}>
              <h1 className="headline">
                Sustainable Gifting,<br />Unforgettable Impressions
              </h1>
              <p className="subtext">
                Eco-Friendly Hampers and Custom Gifts<br />
                for Corporates, Employees, and Events.
              </p>
              <Button variant="outline-light" className="quote-button">
                GET QUOTE
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  export { ProductGrid, BulkGiftForm };
  
  

  
  
  function Gifts() {
    return ( 
      <>
      <GiftSection/>
      <GIFT/>
      <ProductGrid/>
      <ClientsSection/>
      <Testimonials/>
      <BulkGiftingSection/>
      <BulkGiftForm/>
      {/* <BULK/> */}
      
      </>
      
      );
  }
  
  export default Gifts;
  


