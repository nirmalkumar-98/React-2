import React from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';
import images2 from './Images/ab2.png';
import images1 from './Images/ab1.png';
import images11 from './Images/ab center.png';
import images12 from './Images/ab3.png';
import images13 from './Images/t1.png';
import images14 from './Images/t2.png';
import images15 from './Images/t3.png';
import images16 from './Images/t4.png';
import images17 from './Images/t5.png';
import { Link } from 'react-router-dom';
import CartPagess from './Add to cart 2';





// export default About;

function About() {
    return (
      <>
       
        <Container className="py-5">
         
          {/* Brand Story Section */}
          <div className="text-center mb-5">
  <h2 className="fw-bold">THENGA BRAND STORY</h2>
  <Row className="justify-content-center align-items-center mt-4">
    <Col xs={12} md={3} className="mb-3 mb-md-0">
      <Image src={images1} fluid style={{ width: '100%', height: 'auto' }} />
    </Col>
    <Col xs={12} md={6}>
      <Image src={images11} fluid rounded style={{ width: '100%', height: 'auto' }} />
    </Col>
    <Col xs={12} md={3} className="mt-3 mt-md-0">
      <Image src={images2} fluid style={{ width: '100%', height: 'auto' }} />
    </Col>
  </Row>
</div>
           
        </Container>
      </>
    );
  }


  function SustainableSection() {
    return (
      <div className="text-center sustainable-section">
        <h2 className="sustainable-heading">
          Sustainable, original, <br /> handcrafted.
        </h2>
        <div className="sustainable-description">
          <p>Thenga is a homegrown brand from Kerala that repurposes coconut waste into lasting, sustainable and handmade home products.</p>
          <p>Founded in the year 2019 by Maria Kuriakose, Thenga today is an established brand retailing all over India. A native of Kerala, Maria was always convinced that coconuts are more than just coconut oil and water.</p>
          <p>She naturally started looking at the byproducts of coconut processing units and that’s how it all began.</p>
          <p>From making her first coconut shell bowl to exporting abroad, Maria and Thenga have come a long way.</p>
        </div>
      </div>
    );
  }


  function PhilosophySection() {
    return (
      <Row className="align-items-center philosophy-section">
        <Col md={6}>
          <Image src={images12} fluid rounded />
        </Col>
        <Col md={6}>
          <h2 className="philosophy-heading">PHILOSOPHY</h2>
          <p className="philosophy-text">
            Thenga is for the conscious customer. Each piece speaks of the hands that made it. 
            Cut and polished to reveal the grainy detail in the shell, Thenga products are 
            completely natural, safe and sustainable.
            <br /><br />
            Coconut shells are tough and inherently hardy, so they last for decades and make 
            perfect substitutes for plastic products.
            <br /><br />
            Thenga is all about reusing and repurposing what is traditionally considered “waste.” 
            The team strives to make sure that nothing is left unused at their unit.
            <br /><br />
            Thenga products don’t come with the guilt that is innate in mass produced products. 
            By making products close to nature, Thenga hopes to make better choices available to customers.
          </p>
        </Col>
      </Row>
    );
  }

  function ThengaModelAndProcess() {
    return (
      <Container className="text-center thenga-model-section my-5">
        
        {/* Section Title and Description */}
        <h2 className="thenga-model-heading">The Thenga Model</h2>
        <p className="thenga-model-description">
          Known as the tree of life as every part of it used to sustain life, the coconut palm is integral to the idea of Kerala. 
          Coconut shells, however, are commonly seen as a useless by-product and are generally tossed. 
          Here at Thenga, discarded coconut shells get a new lease of life. 
          Painstakingly handcrafted into practical aesthetic products, Thenga literally turns trash into treasure.
        </p>
  
        {/* Process List with Emojis */}
        <ul className="list-unstyled process-list mt-5">
          <li>🌴 Coconuts are harvested from coconut palms.</li>
          <li>🥥 Meat, water, husk etc. are extracted for various purposes.</li>
          <li>🗑️ Discarded shells end up in landfills.</li>
          <li>🛠️ These shells are rescued and processed at Thenga.</li>
          <li>🍴 Handmade into practical everyday products while providing employment to rural women.</li>
        </ul>
  
      </Container>
    );
  }

  const teamMembers = [
    {
      name: "Maria Harinkhane",
      title: "Co-Founder, CEO",
      img: images13, 
      desc: "Maria Kuriakose oversees operations and takes up initiatives and strategies that would help Thenga grow to new heights. She handles all marketing initiatives, including social media, to communicate Thenga’s story and the women behind the business."
    },
    {
      name: "Preetha Krishna",
      title: "Co-Founder, CBO",
      img: images14,
      desc: "Preetha Krishna serves as the Chief Operating Officer, bringing a wide spectrum of experience ranging from FMCG to Logistics, Hospitality to Social service, adding value to the overall operations of the business.."
    },
    {
      name: "Sumitha K. Kuruvila",
      title: "Operations Manager",
      img: images15,
      desc: "Sumitha K. Kuruvila is the Operations Manager responsible for the day-to-day operations of Thenga, from client interactions to bringing our products to online marketplaces. She ensures that all orders are dispatched to respective customers."
    },
    {
      name: "Karthika CP",
      title: "Accounts  Manager",
      img: images16,
      desc: "Karthika CP is the Accounts Manager, with over 3 years of experience in accounting firms and the FMCG industry, bringing meticulous financial management into the company."
    },
    {
      name: "Deepa Prasad",
      title: "Customer Relation Manager",
      img: images17,
      desc: "Swathy Nair, the Customer Relation Manager, plays a crucial role in following up with Thenga customers and maintaining a healthy relationship with them while seeking opportunities for sales and connecting with new people."
    }
  ];

  
  
  function Team() {
    return (
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">Our Team</h2>
        <Row xs={1} md={2} className="g-4 justify-content-center">
          {teamMembers.map((member, idx) => (
            <Col key={idx} className="text-center">
              <Image
                src={member.img}
                alt={member.name}
                rounded
                fluid
                style={{ width: '200px', height: '250px', objectFit: 'cover' }}
                className="mb-3"
              />
              <h6 className="fw-bold">{member.name}</h6>
              <p className="text-muted mb-1">{member.title}</p>
              {/* <p style={{ fontSize: '14px' }}>{member.desc}</p> */}
              <p style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', color: '#555' }}>
          {member.desc}
        </p>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
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

 

  function AAbout () {
    return (

        <>
         <About/>
         <SustainableSection/>
         <PhilosophySection/>
         <ThengaModelAndProcess/>
        <Team/>
        <Footer/>
        </>
      );
  }
  
  export default AAbout ;