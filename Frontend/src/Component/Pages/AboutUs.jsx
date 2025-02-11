import React from 'react'; 
import { Container, Row, Col } from 'react-bootstrap'; // Using React-Bootstrap for grid system

function HomePage() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', backgroundColor: '#f8f9fa', padding: '20px' }}>
      
      {/* About Us Section */}
      <section id="about-us" style={{ padding: '40px 0', textAlign: 'center' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>About Us</h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Welcome to our website! We are a passionate team dedicated to providing the best services to our customers.
                Our mission is to offer high-quality products and exceptional customer service. With years of experience in the industry, we strive to make your experience with us memorable and satisfying.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision Section */}
      <section id="vision" style={{ padding: '40px 0', textAlign: 'center', backgroundColor: '#e9ecef' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Our Vision</h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Our vision is to become a leading force in our industry, setting new standards of excellence and innovation. 
                We aim to continuously push the boundaries of what’s possible, offering creative and sustainable solutions to our clients.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Director Board Section */}
      <section id="director-board" style={{ padding: '40px 0', textAlign: 'center' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <h2 style={{ fontSize: '28px', marginBottom: '15px' }}>Our Director Board</h2>
              <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                Our company is led by a team of visionary directors who bring years of expertise and leadership experience to the table.
                They are committed to steering our organization towards success while ensuring the highest standards of integrity and innovation.
              </p>
            </Col>
          </Row>
          <Row style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            {[
              { name: 'Yogesh Pawar', role: 'CEO & Co-Founder', img: 'https://cdn-icons-png.flaticon.com/256/4825/4825038.png' },
              { name: 'Bhairavi Choudhary', role: 'CEO & Co-Founder', img: 'https://cdn-icons-png.freepik.com/256/4825/4825112.png?semt=ais_hybrid' },
              { name: 'Shreyas Bhatkar', role: 'CEO & Co-Founder', img: 'https://cdn-icons-png.flaticon.com/256/4825/4825038.png' },
              { name: 'Sairam Yadla', role: 'CEO & Co-Founder', img: 'https://cdn-icons-png.flaticon.com/256/4825/4825038.png' },
            ].map((director, index) => (
              <Col key={index} md="2" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
                <div style={{ marginBottom: '10px' }}>
                  <img src={director.img} alt={director.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                </div>
                <h4 style={{ fontSize: '18px', marginBottom: '5px' }}>{director.name}</h4>
                <p style={{ fontSize: '14px', color: '#555' }}>{director.role}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default HomePage;
