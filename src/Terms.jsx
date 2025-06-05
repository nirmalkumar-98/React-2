import React from 'react';
import { Container } from 'react-bootstrap';

const TermsConditions = () => {
  return (
    <Container style={{ padding: '4rem 1rem', maxWidth: '900px', fontFamily: 'system-ui, sans-serif' }}>
      <h1
        className="text-center mb-3"
        style={{ fontSize: '2.5rem', fontWeight: 700 }}
      >
        Terms & Conditions
      </h1>

      <p className="text-center mb-5" style={{ fontSize: '1rem', color: '#555' }}>
        Home &nbsp;&gt;&nbsp; <strong>Terms & Conditions</strong>
      </p>

      <p style={{ fontSize: '1rem', color: '#333', lineHeight: '1.8' }}>
        Thenga is an entity existing under the laws of India, conducting business, <em>inter alia</em>, under the brand name “Thenga” (the <strong>“Website Provider”</strong>) provides the content and services available on this website (https://thengacoco/, referred to as <strong>“Site”</strong>) to you subject to the following Terms and Conditions and the Privacy Policy and other terms and conditions and policies which you may find throughout our Site all of which are deemed a part of and included within these terms and conditions (collectively, <strong>“Terms and Conditions”</strong>).
      </p>

      <h5 style={{ fontWeight: '700', marginTop: '2rem' }}>1. General</h5>
      <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
        To access and use this Site you must be over 18 years of age. If you are a minor, the prior authorization of your guardian is required for you to access and use this Site.
      </p>
      <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
        By accessing or using this Site, you acknowledge that you have read, understood, and you agree, without limitation or qualification, to be bound by these Terms and Conditions. If you do not want to be bound by the Terms and Conditions, you must not use our Site/services. We reserve the rights to modify the terms contained herein at any time by publishing such modifications on the Site. The modified Terms and Conditions would be effective from the date of publication of such modification on the Site.
      </p>

      <h5 style={{ fontWeight: '700', marginTop: '2rem' }}>2. Privacy</h5>
      <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
        Please review our privacy policy so that you may understand our privacy practices.
      </p>

      <h5 style={{ fontWeight: '700', marginTop: '2rem' }}>3. Pricing and Payment</h5>
      <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#333' }}>
        Our Site displays the prices of our products. All prices are in Indian rupees <br /> <br />
        We reserve the right to correct any errors, inaccuracies or omissions which may relate to product descriptions, pricing, offers and availability and to change or update information or cancel orders if any information on the Site is inaccurate at any time without prior notice (including after you have submitted your order). <br />
        
        The Site uses the services of a third party payment payment processing provider for processing payments made on the Site. Your use of the payment gateway will be subject you adhering to the terms and conditions of use prescribed by the payment processing provider(s), over which we have no control. You acknowledge and understand that the payment gateway services made available through the Site are owned, controlled and provided by the payment processing provider(s) and hence, the Website Provider does not warrant and in no way will be liable for the timeliness of such services and the handover of payments through such services.

      </p>
    </Container>
  );
};

export default TermsConditions;
