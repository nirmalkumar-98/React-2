
import { FaStar } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';
import React, { useState } from 'react';
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Card, } from "react-bootstrap";
import { Container, Form, Button, Row, Col, Alert, Table,Image } from 'react-bootstrap';

import { Link } from 'react-router-dom';

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





// export default BULK ;





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
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Eco-Friendly Giftings</h2>
      <p className='bbb'>Thenga Eco-Friendly Gift Hampers, thoughtfully curated for every occasion.  Whether <br /> it’s a festive gift hamper,  a wedding hamper, or a corporate gift hamper, these eco-  <br /> friendly and elegant collections are ideal for employees, clients, friends, and family.</p>

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
  const [entries, setEntries] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    setErrors({});
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.contactNumber.trim()) newErrors.contactNumber = 'Contact number is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    return newErrors;
  };

  const resetForm = () => {
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
    setEditIndex(null);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (editIndex !== null) {
      // Update
      const updated = [...entries];
      updated[editIndex] = formData;
      setEntries(updated);
    } else {
      // Create
      setEntries([...entries, formData]);
    }

    setSubmitted(true);
    resetForm();
  };

  const handleEdit = (index) => {
    setFormData(entries[index]);
    setEditIndex(index);
    setSubmitted(false);
  };

  const handleDelete = (index) => {
    const filtered = entries.filter((_, i) => i !== index);
    setEntries(filtered);
    resetForm();
    setSubmitted(false);
  };

  return (
    <Container className="py-5">
      <h2 className="text-center mb-3">Bulk Gift Enquiry</h2>
      <p className="text-center mb-4">
        Fill the form below to create/edit entries for bulk gift requests.
      </p>

      <Form onSubmit={handleSubmit} className="border p-4 rounded">
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
          <Form.Label>Organization (optional)</Form.Label>
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
            <Form.Label>Country Code</Form.Label>
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
            <Form.Label>Contact Number*</Form.Label>
            <Form.Control
              type="text"
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
            name="city"
            value={formData.city}
            onChange={handleChange}
            isInvalid={!!errors.city}
          />
          <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Approx Quantity</Form.Label>
          <Form.Control
            type="text"
            name="quantity"
            placeholder="Number of boxes"
            value={formData.quantity}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>More Details</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="details"
            placeholder="Types of products, budget, notes..."
            value={formData.details}
            onChange={handleChange}
          />
        </Form.Group>

        <Button type="submit" variant="dark" className="w-100">
          {editIndex !== null ? 'Update Entry' : 'Submit'}
        </Button>

        {submitted && (
          <Alert variant="success" className="mt-3 text-center">
            {editIndex !== null ? 'Entry updated!' : 'Form submitted successfully!'}
          </Alert>
        )}
      </Form>

      {entries.length > 0 && (
  <div className="mt-5">
    <h4 className="text-center mb-3">Submitted Entries</h4>
    <Table bordered responsive>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>City</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={index}>
            <td>{entry.name}</td>
            <td>{entry.email}</td>
            <td>{entry.contactCountryCode} {entry.contactNumber}</td>
            <td>{entry.city}</td>
            <td>{entry.quantity || '-'}</td>
            <td>
              <Button
                variant="outline-primary"
                size="sm"
                className="me-2"
                onClick={() => handleEdit(index)}
              >
                Edit
              </Button>
              <Button
                variant="outline-danger"
                size="sm"
                onClick={() => handleDelete(index)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
)}

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
              <li> <Link to="/Products" style={{ textDecoration: 'none', color: 'inherit' }}>
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


function Gifts() {
  return ( 
    <>
    {/* <GiftSection/> */}
    
    <ProductGrid/>
    <ClientsSection/>
    <Testimonials/>
    <BulkGiftingSection/>
    <BulkGiftForm/>
   
    <Footer/>
    
    </>
    
    );
}

export default Gifts;
