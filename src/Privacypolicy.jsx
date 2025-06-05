import React from 'react';
import { Container } from 'react-bootstrap';
import './CheckoutForm.css';



const PrivacyPolicy = () => {
  return (
    <Container className="py-5">
      <h1
        className="text-center mb-4"
        style={{
          fontFamily: 'Playfair Display, serif',
          fontWeight: '700',
          fontSize: '2.5rem',
        }}
      >
        Privacy Policy
      </h1>

      <p
        className="text-center mb-4"
        style={{
          fontSize: '1rem',
          fontWeight: '500',
          fontFamily: 'system-ui, sans-serif',
          color: '#555',
        }}
      >
        Learn how we collect, use, and protect your personal information.
      </p>

      <div
        style={{
          fontSize: '1rem',
          fontWeight: '400',
          color: '#333',
          maxWidth: '900px',
          margin: '0 auto',
          lineHeight: '1.8',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <p>
          The following privacy policy (the <strong>“Privacy Policy”</strong>), developed by Thenga (the
          “Company” /“us”), explains the Company’s policy on privacy and demonstrates its endeavour to fully comply
          with applicable Indian laws governing data privacy, including, the Information Technology Act, 2000 and the
          Information Technology (Reasonable Security and Procedures and Sensitive Personal Data or Information)
          Rules, 2011...
        </p>

        <p>
          The Company knows that you care how information about you is used and shared, and we appreciate your trust
          that we will do so carefully and sensibly. The Company encourages you to read this Privacy Policy before
          using the website https://thengacoco.in/, <u>owned</u> and created by it (<strong>“Site”</strong>). ...
        </p>
        <p>
        This Privacy Policy explains: 

           <ol>
           1. what information we collect and why we collect it.
            </ol> 
           <ol>2.how we use or are obligated to use that information.</ol> 
           <ol>3.under what circumstances we disclose the information shared.</ol> 
            <ol>4.the choices we offer, including how to access and use information.</ol>  
            <h1 className='knk'>1.COLLECTION OF INFORMATION</h1>
        </p>
        <p>
        However, you can visit most pages on the Site without giving us any information about yourself. In such cases, our systems may collect information that is sent over the internet without your control such as your IP address and other such information. We may also use software tools to measure and collect session information, including page response time, download errors, length of visits to certain pages etc.
          
        </p>
       
       <p>
       We emphasize that no sensitive personal information or data is collected about or from you without your consent. However, we may collect information or data voluntarily submitted by you including while making purchases at the Site, in contacting the Company through the Site, answering surveys and polls, entering contests and similar promotions and signing up for updates. Voluntary provision of information by you, including by the use of the Site, will be deemed as consent.
       </p>

       <p>
       Please note that nowhere on the Site do we collect contact information or financial information from children under the age of 18 (eighteen) years which we have actual knowledge of. If you are under the age of 18 (eighteen) years, you may use the Site only with the involvement of a parent or guardian.
       </p>

       <p>
       You acknowledge and agree that any and all information that is provided by you on the Site is provided by you voluntarily and at your own risk. While the Company would make all efforts to ensure the safety and security of the information provided for you, it shall not be responsible for any loss or theft of data. Please note that any information that is provided by you may be retained by the Company for (i) providing the services intended to be provided by the Site; and (ii) for meeting its obligations under applicable law. Even if you delete your user account on Site, the Company may have to retain the information provided by you for a short period of time until the same can be removed from its servers, and for compliance with its obligations under law (if any).   
       </p>
        
      </div>
    </Container>
  );
};

export default PrivacyPolicy;