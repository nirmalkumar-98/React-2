import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css'; 

function ReturnPolicy() {
  return (
    <Container style={{ maxWidth: "800px", padding: "4rem 1rem", fontFamily: "'Playfair Display', serif" }}>
      <h1 className="text-center fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
        Return Policy
      </h1>
      <p className="text-center mb-5" style={{ fontSize: "1rem" }}>
        Home &nbsp;&gt;&nbsp; <strong>Return Policy</strong>
      </p>

      <h4 className="fw-bold mb-3" style={{ fontSize: "1.25rem" }}>
        Return, exchange and cancelation
      </h4>

      <p>
        Return is possible if the product sent to you is damaged in transit.
      </p>
      <p>
        Please share an image of the damaged bowl with order details within 4 days of receiving your order, 
        and we will send you a free replacement. Share the images to <strong>9087238960</strong> or email us on 
        <a href="mailto:operations@thengaAura.in" style={{ color: "inherit", textDecoration: "underline" }}> operations@thengaAura.in</a>
      </p>
      <p>
        Our returns and exchange policy is subject to goods sold by Thenga directly to you, with no exceptions for third party sales. 
        All policy changes will reflect on this page.
      </p>
      <p>
        Exchanged / returns and refunds are subject to the discretion of the Website Provider. Typically, 
        given the nature of the products sold on the Site, exchanges and refunds are not entertained.
      </p>
      <p>
        An exchange/return request should be raised via email or WhatsApp quoting order number along 
        with a photograph of the product to - 
        <a href="mailto:operations@thengaAura.in" style={{ color: "inherit", textDecoration: "underline" }}> operations@thengaAura.in</a>. 
        Please note that returned/exchanged goods (where a return / exchange is accepted by us) should retain the original label. 
        Goods that are damaged/without labels will be returned to the customer without any refund.
      </p>
      <p>
        For more details regarding exchange/return/refund please contact 
        <a href="mailto:operations@thengaAura.in" style={{ color: "inherit", textDecoration: "underline" }}> operations@thengaAura.in</a>
      </p>
    </Container>
  );
}

export default ReturnPolicy;
