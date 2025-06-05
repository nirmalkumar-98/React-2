import React from 'react';
import { Container, Row, Col, Button, Image, Card } from 'react-bootstrap';
import  { useState } from 'react';
import { MdVerified } from 'react-icons/md';
import images10 from './Images/insta1.png';
import images11 from './Images/insta4.pngg';
import images12 from './Images/insta3.jpg';
import images13 from './Images/insta4.jpg';
import images14 from './Images/insta5.jpg';
import images15 from './Images/insta1.jpg';
import images16 from './Images/insta4.jpg';
import images18 from './Images/gift11.jpg';
import images17 from './Images/Thenga Logo.png';
import images19 from './Images/insta33.png';
import images20 from './Images/insta3.png';
import images21 from './Images/insta44.png';
import images22 from './Images/insta444.png';



const InstagramProfile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [isFollowing, setIsFollowing] = useState(false);
  const [followPending, setFollowPending] = useState(false);

  const highlightData = [
    { label: 'Thenga Medals', img: images15 },
    { label: 'EXPO', img: images16 },
    { label: 'Backstage', img: images12 },
    { label: 'New Products', img: images13 },
    { label: '@Mentions', img: images14 },
    { label: 'Gifting', img: images18 },
  ];

  const posts = [images10, images11, images19, images20, images21, images22];

  const tabStyle = (tab) => ({
    fontWeight: activeTab === tab ? 500 : 400,
    fontSize: '0.9rem',
    color: activeTab === tab ? '#000' : '#888',
    borderBottom: activeTab === tab ? '2px solid #000' : 'none',
    paddingBottom: '6px',
    cursor: 'pointer'
  });

  return (
    <Container className="pt-4" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      {/* Header */}
      <Row className="align-items-center">
        <Col md={3} className="text-center">
          <Image src={images17} roundedCircle style={{ width: '120px', height: '120px', border: '3px solid #dd2a7b' }} />
        </Col>
        <Col md={9}>
          <div className="d-flex align-items-center mb-2">
            <h4 style={{ fontWeight: 500, fontSize: '1.5rem', marginBottom: 0 }}>thenga_Aura</h4>
            <Button
              variant="light"
              size="sm"
              className="ms-3 px-4"
              style={{ border: '1px solid #dbdbdb', fontWeight: 500 }}
              disabled={followPending || isFollowing}
              onClick={() => {
                setFollowPending(true);
                setTimeout(() => {
                  setFollowPending(false);
                  setIsFollowing(true);
                }, 3000);
              }}
            >
              {isFollowing ? 'Following' : followPending ? 'Following...' : 'Follow'}
            </Button>
            <Button variant="light" size="sm" className="ms-2 px-4" style={{ border: '1px solid #dbdbdb', fontWeight: 500 }}>
              Message
            </Button>
          </div>
          <p className="mb-1" style={{ fontSize: '0.95rem' }}>
            <strong>464</strong> posts &nbsp;
            <strong>72.3K</strong> followers &nbsp;
            <strong>12</strong> following
          </p>
          <p className="mb-1" style={{ fontWeight: 600 }}>Thenga Aura <MdVerified style={{ color: '#0095f6' }} /></p>
          <p className="mb-1" style={{ fontSize: '0.9rem' }}>
            🌿 Sustainable, Ethical, 100% Ecofriendly <br />
            🧑🏽‍🎨 Handmade by Artisans from South India <br />
            👩 Women led enterprise <br />
            <a href="https://www.thengaAura.com" target="_blank" rel="noopener noreferrer" style={{ color: '#00376b', fontWeight: 500 }}>
              www.thengaAura.com
            </a>
          </p>
        </Col>
      </Row>

      {/* Highlights */}
      <Row className="mt-4 text-center justify-content-center">
        {highlightData.map((item, idx) => (
          <Col xs={4} md={1} key={idx} className="mb-3">
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '1px solid #ccc',
                margin: 'auto',
                overflow: 'hidden',
              }}
            >
              <Image src={item.img} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt={item.label} />
            </div>
            <p style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>{item.label}</p>
          </Col>
        ))}
      </Row>

      {/* Tabs */}
      <Row className="mt-2 border-top pt-2">
        <Col className="text-center" style={tabStyle('posts')} onClick={() => setActiveTab('posts')}>
          POSTS
        </Col>
        <Col className="text-center" style={tabStyle('reels')} onClick={() => setActiveTab('reels')}>
          REELS
        </Col>
        <Col className="text-center" style={tabStyle('tagged')} onClick={() => setActiveTab('tagged')}>
          TAGGED
        </Col>
      </Row>

      {/* Tab Content */}
      {activeTab === 'posts' && (
        <Row className="mt-3">
          {posts.map((src, idx) => (
            <Col xs={12} md={4} key={idx} className="mb-4">
              <Card style={{ borderRadius: 0 }}>
                <Card.Img variant="top" src={src} style={{ objectFit: 'cover', height: '300px' }} />
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {activeTab === 'reels' && (
        <div className="text-center mt-4" style={{ color: '#888' }}>
          <p><strong>Reels content</strong> coming soon.</p>
        </div>
      )}

      {activeTab === 'tagged' && (
        <div className="text-center mt-4" style={{ color: '#888' }}>
          <p><strong>Tagged posts</strong> will be shown here.</p>
        </div>
      )}
    </Container>
  );
};

export default InstagramProfile;