
import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Carousel, Button, Card, Row, Col, Image, } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FaPhoneAlt, FaUser, FaSearch, FaHeart, FaShoppingBag } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import Badge from 'react-bootstrap/Badge';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';







import images1 from './Images/clr12.png';
import images2 from './Images/CRL22.png';
import images3 from './Images/clrr.png';
import images4 from './Images/c31.png';
import images11 from './Images/Thenga Logo.png';
import images12 from './Images/sltt.png';

import images14 from './Images/card11.png';
import images15 from './Images/teacup.png';
import images16 from './Images/eco133.png';
import images17 from './Images/latern light11.png';
import images18 from './Images/salad11.png';

import hoverImage1 from './Images/hover1.png';
import hoverImage2 from './Images/hover2.png';
import hoverImage3 from './Images/hover3.png';
import hoverImage4 from './Images/hover4.png';

import images00 from './Images/garden11.png';
import images01 from './Images/table11.png';
import images02 from './Images/table22.png';
import images03 from './Images/table33.png';
import images06 from './Images/eco7.png';
import images05 from './Images/eco2.png';
import images04 from './Images/garden22.png';

import images07 from './Images/tbi.png';
import images08 from './Images/ixp.png';
import images09 from './Images/mp1.png';
import images009 from './Images/mp3.png';
import images008 from './Images/mp4.png';
import images007 from './Images/mp5.png';
import images006 from './Images/mp6.png';
import images005 from './Images/mp7.png';
import images004 from './Images/mp8.png';
import images003 from './Images/mp9.png';
import images002 from './Images/mp10.png';
import images001 from './Images/mp11.png';
import images000 from './Images/mp12.png';
import images0000 from './Images/thenga image 1.png';



import images5 from './Images/sll.png';
import images6 from './Images/slt.png';
// import images21 from './Images/lt2.png';
// import images22 from './Images/lt22.png';

// import images23 from './Images/hover3.png';
// import images24 from './Images/hover4.png';


import './App.css';
import Navigation from './Nav';






function Nirmal() {
  

  return (
    <div className="header-wrapper">
      <Navigation/>
      {/* top bar oda code */}
     
 
       {/* <Container fluid className="border-bottom py-2 px-4 d-none d-md-block">
        <Row className="align-items-center justify-content-between">
          <Col md="auto" className="d-flex gap-3 align-items-center">
            <FaPhoneAlt size={14} /> <span>+91 9087238960</span>
            <FiMail size={16} /> <span>operations@thengaAura.com</span>
          </Col>
          <Col md="auto" className="d-flex gap-3 justify-content-end">
            <FaPinterestP />
            <FaFacebookF />
            <FaInstagram />
            <FaYoutube />
          </Col>
        </Row>
      </Container> */}

     
      {/* <Navbar expand="lg" bg="white" className="py-3 px-4 border-bottom"> */}
        {/* <Container fluid> */}
          {/* <Navbar.Brand href="#">
          <img
            src={images11}
            alt="ThengaAura Logo"
            className="navbar-logo"
          />
           
          </Navbar.Brand> */}
          {/* <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="mx-auto gap-4">
              <Nav.Link href="#">HOME</Nav.Link>
              <Nav.Link href="#">SHOP</Nav.Link>
              <Nav.Link href="#">ABOUT</Nav.Link>
              <Nav.Link href="#">WHOLESALE</Nav.Link>
              <Nav.Link href="#">FAQS</Nav.Link>
              <Nav.Link href="#">BLOGS</Nav.Link>
              <Nav.Link href="#">CONTACT</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center gap-3">
              <FaSearch />
              <FaUser />
              <FaHeart />
              <div style={{ position: 'relative' }}>
                <FaShoppingBag />
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  2
                </Badge>
              </div>
            // </div>
          </Navbar.Collapse> */}
        {/* </Container> */}
      {/* </Navbar> */}
    </div>
  );
}

// import thengaImage from './react.png'; // Update this path as per your structure

const ThengaSection = () => {
  return (
    <Container className="text-center py-5">
      <Row className="align-items-center">
        <Col md={4} className="d-none d-md-block">
          <img src={images12} alt="Left Image" className="slanted-image-left img-fluid" />
        </Col>
        <Col md={4}>
          <div>
            <img src={images0000} alt="Coconut Icon" style={{ width: 50, marginBottom: 10 }} />
            <p style={{ color: 'green', fontWeight: 'bold' }}>Feel good. Do good.</p>
            <h2><strong>Treat your serve<br />with thenga</strong></h2>
            <p>
            Welcome to Thenga Aura — where coconut shells find new life!
            Rooted in Kerala, the land of coconuts, our women-led startup transforms discarded coconut shells into beautiful, eco-friendly products. Every piece is hand-crafted in our village with care and purpose — helping reduce waste and support local artisans. Thank you for being part of our journey and giving these humble shells a second chance.
            </p>
          </div>
        </Col>
        <Col md={4} className="d-none d-md-block">
          <img src={images5} alt="Right Image" className="slanted-image-right img-fluid" />
        </Col>
      </Row>
      {/* <h3 className="mt-4">Eco-Friendly Handmade Products</h3> */}
    </Container>
  );
};

const StorySection = () => {
  return (
    <Container fluid className="p-5 bg-white">
      <Row className="align-items-center">
        <Col md={6}>
          <Image
            src={images4} 
            alt="Coconut bowls"
            fluid
            rounded
          />
        </Col>
        <Col md={6}>
          <div className="mb-3">
            <Button variant="light" className="border rounded-pill px-4 py-2 shadow-sm">
              Take A Deep Dive →
            </Button>
          </div>
          <h1 className="display-4 fw-bold mb-4">The Story Begins...</h1>
          <p className="lead">
          At ThengaAura, we believe that nature holds timeless beauty—and our mission is to bring that beauty into your everyday life. Born out of a love for sustainability and inspired by Kerala's rich coconut heritage, ThengaAura is more than just a brand; it's a celebration of mindful living.

          Our journey began with a simple question: How can we turn everyday essentials into something earth-friendly, functional, and beautiful? The answer lay in the humble coconut. Every part of it—shell, husk, fiber—tells a story of resilience and renewal. We decided to give these natural elements a second life, crafting them into eco-conscious home and lifestyle products that carry the soul of Kerala in every piece.
          </p>
          <p className="mt-4 fw-semibold text-success">— Cijoy Kuriakose</p>
        </Col>
      </Row>
    </Container>
  );
};




// 🖼 Import unique hover images for each product


const ecoItems = [
  {
    id: 1,
    title: "Thenga Coconut Shell Eco-friendly Soap Dish / Soap holder (Set of 2)",
    image: images14,
    hoverImage: hoverImage2,
    price: "Rs. 399.00",
    review: "5 reviews",
  },
  {
    id: 2,
    title: "Thenga Coconut Shell Teacup | For Juice and Hot Drink Glass Cups",
    image: images15,
    hoverImage:hoverImage3,
    price: "Rs. 599.00",
    review: "18 reviews",
  },
  {
    id: 3,
    title: "Thenga Hand Carved Coconut Shell Candle Holder | Lantern Tealight",
    image: images17,
    hoverImage:hoverImage1,
    price: "Rs. 499.00",
    review: "7 reviews",
  },
  {
    id: 4,
    title: "Thenga Coconut Shell Bowls - Salad Bowls, Smoothie Bowl",
    image: images18,
    hoverImage: hoverImage4,
    price: "Rs. 699.00",
    review: "6 reviews",
  },
];

const EcoProductDisplay = () => {
  const [isCarouselVisible, setIsCarouselVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  const handleItemSelect = (item) => {
    setActiveItem(item);
    setIsCarouselVisible(true);
  };

  const handleReturnToGrid = () => {
    setIsCarouselVisible(false);
    setActiveItem(null);
  };

  const renderGridView = () => (
    <>
      <h2 className="section-heading mb-4">Eco-Friendly Handmade Products</h2>
      <Row className="justify-content-center align-items-stretch">
        {ecoItems.map((item) => (
          <Col key={item.id} xs={12} sm={6} md={3} className="mb-4">
            <Card
              className="product-card h-100 shadow-sm"
              onMouseEnter={() => setHoveredItemId(item.id)}
              onMouseLeave={() => setHoveredItemId(null)}
              style={{ borderRadius: "8px", overflow: "hidden" }}
            >
              <Card.Img
                variant="top"
                src={hoveredItemId === item.id ? item.hoverImage : item.image}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: "1rem" }}>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <p style={{ fontSize: "0.85rem", color: "#555" }}>
                  <em>{item.review}</em>
                </p>
                <Button
                  variant="outline-success"
                  size="sm"
                  onClick={() => handleItemSelect(item)}
                >
                  Quick Add   <add/>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );

  const renderCarouselView = () => (
    <>
      <h2 className="selected-heading mb-4">{activeItem?.title}</h2>
      <Carousel indicators={false} controls={true} className="item-carousel-wrapper">
        <Carousel.Item key={activeItem.id}>
          <div className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }} className="shadow-sm">
              <Card.Img
                variant="top"
                src={activeItem.hoverImage}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                }}
              />
              <Card.Body>
                <Card.Title>{activeItem.title}</Card.Title>
                <Card.Text>{activeItem.price}</Card.Text>
                <p style={{ fontSize: "0.85rem", color: "#555" }}>
                  <em>{activeItem.review}</em>
                </p>
                <Button variant="outline-success" size="sm">
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Carousel.Item>
      </Carousel>
      <Button variant="link" className="mt-3" onClick={handleReturnToGrid}>
        ← Back to Products
      </Button>
    </>
  );

  return (
    <div className="eco-wrapper">
      <Container className="eco-content my-5 text-center">
        {isCarouselVisible ? renderCarouselView() : renderGridView()}
      </Container>
    </div>
  );
};







  


function Hexa() {
  return ( 
        <div> 
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Coco World</h3>
            <p>Explore the finest Coco Products for you and your family.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to Coco World</h3>
            <p>Explore the finest Coco Products for you and your family.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Discover Amazing Products</h3>
            <p>Experience the best in quality and taste with Coco World.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>

   );
}


const products = [
  {
    id: 1,
    title: "Thenga Coconut Shell Eco-friendly Soap Dish / Soap holder (Set of 2)",
    image:images00 ,
    price: "Rs. 399.00",
    review: "5 reviews",
  },
  {
    id: 2,
    title: "Thenga Coconut Shell Teacup | For Juice and Hot Drink Glass Cups",
    image: images01,
    price: "Rs. 599.00",
    review: "18 reviews",
  },
  {
    id: 3,
    title: "Thenga Hand Carved Coconut Shell Candle Holder | Lantern Tealight",
    image:images02,
    price: "Rs. 499.00",
    review: "7 reviews",
  },
  {
    id: 4,
    title: "Thenga Coconut Shell Bowls - Salad Bowls, Smoothie Bowl",
    image: images03,
    price: "Rs. 699.00",
    review: "6 reviews",
  },
  {
    id: 5,
    title: "Thenga Coconut Shell Storage Box",
    image: images16,
    price: "Rs. 399.00",
    review: "9 reviews",
  },
  {
    id: 6,
    title: "Thenga Coconut Shell Soap Case",
    image: images04,
    price: "Rs. 299.00",
    review: "3 reviews",
  },
  {
    id: 7,
    title: "Thenga Coconut Shell Snack Bowl",
    image: images05,
    price: "Rs. 349.00",
    review: "11 reviews",
  },
  {
    id: 8,
    title: "Thenga Coconut Shell Hanging Planter",
    image:images06,
    price: "Rs. 449.00",
    review: "10 reviews",
  },
];

const chunkArray = (array, size) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};
const ProductCarousel = () => {
  const slides = chunkArray(products, 4);
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
  };

  return (
    <Container className="my-5 position-relative">
      <h2 className="text-center mb-4">Best Selling Products</h2>

      <Row className="g-3 justify-content-center">
        {slides[index].map((product) => (
          <Col key={product.id} xs={12} sm={6} md={3}>
            <Card className="product-card h-100" style={{ border: "none" }}>
              <Card.Img
                variant="top"
                src={product.image}
                style={{
                  height: "250px",
                  objectFit: "cover", // makes it fill completely
                  width: "100%",
                  margin: 0,
                }}
              />
              <Card.Body className="d-flex flex-column justify-content-between px-2 py-3">
                <div className="mb-2">
                  <Button variant="dark" size="sm">
                    Add to Cart
                  </Button>
                </div>
                <Card.Title style={{ fontSize: "1rem" }}>
                  {product.title}
                </Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <p style={{ fontSize: "0.85rem", color: "#555" }}>
                  <em>{product.review}</em>
                </p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {index > 0 && (
        <Button className="carousel-arrow left-arrow" onClick={handlePrev}>
          &#8592;
        </Button>
      )}

      {index < slides.length - 1 && (
        <Button className="carousel-arrow right-arrow" onClick={handleNext}>
          &#8594;
        </Button>
      )}
    </Container>
  );
};







function SustainableLiving() {
  const features = [
    {
      icon: "🌴",
      text: ["Comes From", "Nature"],
    },
    {
      icon: "🥥",
      text: ["Sustainably", "Sourced"],
    },
    {
      icon: "🛠️",
      text: ["Handcrafted", "By Artisans"],
    },
    {
      icon: "🍹",
      text: ["Turned in to", "Masterpieces"],
    },
  ];

  return (
    <div className="sustainable-section">
      <h2 className="sustainable-title">Sustainable Living</h2>
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              <Col xs={12} md={2} className="mb-4">
                <div className="sustainable-icon">{feature.icon}</div>
                <div className="sustainable-text">
                  {feature.text.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </Col>
              {index < features.length - 1 && (
                <Col xs="auto" className="d-none d-md-block">
                  <span className="sustainable-separator">*</span>
                </Col>
              )}
            </React.Fragment>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const mediaLogos = [
  { src:images07 , alt: "The Better India" },
  { src: images08, alt: "The Indian Express" },
  { src:images09, alt: "Dainik Bhaskar" },
  { src: images009, alt: "The Hindu" },
  { src: images008, alt: "Edex Live" },
  { src: images007, alt: "Local Samosa" },
  { src: images006, alt: "The Times of India Malayalam" },
  { src:images005, alt: "Home Style" },
  { src: images004, alt: "PinkLungi" },
  { src: images003, alt: "The Hans India" },
  { src: images002, alt: "Daily Sabah" },
  { src: images001, alt: "Social Story" },
  { src: images000, alt: "Manorama News" },
];

const MediaPublications = () => {
  return (
    <div className="media-section">
      <Container className="text-center">
        <h2 className="media-heading">Media Publications</h2>
        <div className="underline" />
        <Row className="justify-content-center mt-4">
          {mediaLogos.map((logo, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} className="mb-4">
              <img
                src={logo.src}
                alt={logo.alt}
                className="media-logo"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// FOOTER SECTION
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




function Component() {
  return ( 
        
         <>
         <Nirmal/>
         <Hexa/>
         < ThengaSection/>
         
         <EcoProductDisplay/>
         < StorySection/>
         <ProductCarousel/>
         
         <SustainableLiving/>
         < MediaPublications/>
         <Footer/>
         
       
         </>
   );
}

export default Component;