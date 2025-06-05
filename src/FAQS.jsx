import React from "react";
import { useState } from "react";


import { FaFacebookF, FaInstagram, FaYoutube, FaPinterestP, FaWhatsapp, FaRegCommentDots } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Accordion } from 'react-bootstrap';


// export default Foot;

function FAQSection() {
  return (
    <Container className="py-5" style={{ maxWidth: "800px" }}>
      <h2 className="text-center mb-4 fw-bold" style={{ fontFamily: "Playfair Display, serif" }}>
        FAQs
      </h2>
      <p className="text-center mb-5">
        Home {'>'} FAQs
      </p>
      
      <Accordion flush alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>What are Thenga products made of?</Accordion.Header>
          <Accordion.Body>
            Our products are hand made from 100% natural coconuts.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>How and where are these made?</Accordion.Header>
          <Accordion.Body>
            We have workshops in Kerala, India where these products are made by hand. Each coconut is cut, cleaned and finished by craftsmen from the local community.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Why is eating out a Coconut Bowl better than eating out of a regular bowl?
          </Accordion.Header>
          <Accordion.Body>
            Coconut Bowls are a 100% natural product, by choosing to eat out of a Coconut Bowl you are helping the environment by contributing zero waste and using a recycled product of nature.
            They are also super fun to eat out of and look awesome too!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Do you offer wholesale?</Accordion.Header>
          <Accordion.Body>
            Please visit our <a href="/pages/wholesale" style={{ textDecoration: "underline" }}>wholesale page here</a> to place a wholesale order.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>How long is the processing time?</Accordion.Header>
          <Accordion.Body>
            We strive to ship all orders next business day. In extreme circumstances where we cannot dispatch within 1 business day, we will ship them as fast as possible.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}


function CareAndReturns() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    if (openQuestion === index) {
      setOpenQuestion(null); // Close if clicking again
    } else {
      setOpenQuestion(index); // Open new question
    }
  };

  const questions = [
    {
      question: "How to wash coconut shell products?",
      answer: "Handwash only, cannot be used in dishwasher. You can use dishwash liquid if required."
    },
    {
      question: "How to maintain the shine on Thenga products?",
      answer: "All Thenga products are polished naturally with coconut oil. Reapply coconut oil or any edible oil after 15 to 20 uses to regain shine if necessary."
    },
    {
      question: "How to care for the products, to ensure long life?",
      answer: "Coconut Bowls of sizes 500 ML and above cannot be used for hot food. Spoons, spatulas and tea cups are safe with hot food or drinks."
    },
    {
      question: "Will all coconut bowls have uniform sizes?",
      answer: "Each bowl is unique and made by nature for you. Although we stick to the sizes shown, there might be slight variation in size based on season."
    },
    {
      question: "Can my Coconut Bowl go in the microwave, oven or refrigerator?",
      answer: "No. Coconut bowls cannot be used in microwaves, ovens or refrigerators. The bowls are delicate and can be affected by extreme temperatures. It is best to store your bowls in a cool dry place."
    },
    {
      question: "I have received my order and one or more items is damaged?",
      answer: "Please share an image of the damaged bowl with order details within 4 days of receiving your order, and we will send you a free replacement bowl."
    },
  ];

  return (
    <Container 
      className="py-5" 
      style={{ maxWidth: "100%", fontFamily: "Playfair Display, serif", textAlign: "left" }}
    >
      <h2 className="mb-4 fw-bold">CARE INSTRUCTIONS</h2>

      {questions.slice(0, 5).map((item, index) => (
        <div key={index} className="faq-item" onClick={() => toggleQuestion(index)}>
          <h5 className="fw-bold question">{item.question}</h5>
          <div className={`answer ${openQuestion === index ? 'open' : ''}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}

      <br /><br />

      <h2 className="mb-4 fw-bold">RETURN</h2>

      <div className="faq-item" onClick={() => toggleQuestion(5)}>
        <h5 className="fw-bold question">{questions[5].question}</h5>
        <div className={`answer ${openQuestion === 5 ? 'open' : ''}`}>
          <p>{questions[5].answer}</p>
        </div>
      </div>

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
              <li>Tableware</li>
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


function Faqs () {
  return ( 
          <>
           
           <FAQSection/>
           <CareAndReturns/>
           <Footer/>
          
          </>
          
    );
}

export default Faqs ;