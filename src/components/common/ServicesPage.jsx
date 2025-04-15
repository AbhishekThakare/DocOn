import React from 'react';
import { Container, Row, Col, Card, Button, Navbar } from 'react-bootstrap';
import { FaUserMd, FaCalendarAlt, FaLaptopMedical } from 'react-icons/fa';

export const ServicesPage = () => {
  // Sample images (replace with your actual image paths)
  const telemedicineImg = "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  const bookingImg = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  const ehrImg = "https://images.unsplash.com/photo-1578496781985-452d4a934d50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  return (
        
    <Container className="services-page py-5">
        
      {/* Hero Section */}
      <Row className="mb-5 text-center">
        <Col>
          <h1 className="display-4 font-weight-bold text-primary mb-3">Docon Healthcare Solutions</h1>
          <p className="lead text-muted">
            Revolutionizing healthcare through innovative digital solutions
          </p>
          <div className="divider mx-auto bg-primary" style={{ width: '80px', height: '4px' }}></div>
        </Col>
      </Row>

      {/* Telemedicine Section */}
      <Row className="mb-5 align-items-center feature-row">
        <Col md={6} className="order-md-1 order-2">
          <Card className="border-0 shadow-lg">
            <Card.Body className="p-4">
              <div className="icon-wrapper bg-primary-light mb-4">
                <FaUserMd className="text-primary" size={40} />
              </div>
              <h2 className="text-primary mb-4">Telemedicine Services</h2>
              <p className="text-muted mb-4">
                Experience healthcare without boundaries with our secure telemedicine platform connecting you to licensed professionals anytime, anywhere.
              </p>
              <ul className="feature-list mb-4">
                <li>HD video consultations</li>
                <li>Secure messaging portal</li>
                <li>Remote patient monitoring</li>
                <li>E-prescription services</li>
                <li>Specialist second opinions</li>
              </ul>
              {/* <Button variant="outline-primary" className="px-4">Learn More</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="order-md-2 order-1 mb-4 mb-md-0">
          <div className="image-frame">
            <img 
              src={telemedicineImg} 
              alt="Doctor video consultation" 
              className="img-fluid rounded-lg shadow" 
              style={{ border: '8px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </div>
        </Col>
      </Row>

      {/* Appointment Booking Section */}
      <Row className="mb-5 align-items-center feature-row">
        <Col md={6} className="mb-4 mb-md-0">
          <div className="image-frame">
            <img 
              src={bookingImg} 
              alt="Woman booking appointment" 
              className="img-fluid rounded-lg shadow" 
              style={{ border: '8px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </div>
        </Col>
        <Col md={6}>
          <Card className="border-0 shadow-lg">
            <Card.Body className="p-4">
              <div className="icon-wrapper bg-info-light mb-4">
                <FaCalendarAlt className="text-info" size={40} />
              </div>
              <h2 className="text-info mb-4">Smart Appointment Booking</h2>
              <p className="text-muted mb-4">
                Our intelligent scheduling system eliminates wait times and puts you in control of your healthcare journey.
              </p>
              <ul className="feature-list mb-4">
                <li>Real-time doctor availability</li>
                <li>Automated reminders</li>
                <li>One-click rescheduling</li>
                <li>Specialty-specific booking</li>
                <li>Urgent care priority access</li>
                <li>Family appointment management</li>
              </ul>
              {/* <Button variant="outline-info" className="px-4">Book Now</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* EHR Section */}
      <Row className="mb-5 align-items-center feature-row">
        <Col md={6} className="order-md-1 order-2">
          <Card className="border-0 shadow-lg">
            <Card.Body className="p-4">
              <div className="icon-wrapper bg-success-light mb-4">
                <FaLaptopMedical className="text-success" size={40} />
              </div>
              <h2 className="text-success mb-4">Comprehensive EHR System</h2>
              <p className="text-muted mb-4">
                Your complete health story, securely stored and instantly accessible to your care team when you need it most.
              </p>
              <ul className="feature-list mb-4">
                <li>Unified health records</li>
                <li>Lab results tracking</li>
                <li>Medication management</li>
                <li>Allergy alerts</li>
                <li>Secure patient portal</li>
                <li>Interoperable with major systems</li>
              </ul>
              {/* <Button variant="outline-success" className="px-4">View Demo</Button> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="order-md-2 order-1 mb-4 mb-md-0">
          <div className="image-frame">
            <img 
              src={ehrImg} 
              alt="Doctor reviewing digital records" 
              className="img-fluid rounded-lg shadow" 
              style={{ border: '8px solid white', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
            />
          </div>
        </Col>
      </Row>

      {/* CTA Section */}
      <Row className="mt-5">
        <Col className="text-center py-5 cta-section">
          <h2 className="mb-4">Ready to Experience Modern Healthcare?</h2>
          <p className="lead mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Join thousands of patients and providers who trust Docon for seamless, secure, and sophisticated healthcare management.
          </p>
          <Button variant="primary" size="lg" className="px-5 py-3 mt-3 shadow">
            Get Started Today
          </Button>
        </Col>
      </Row>
    </Container>

  );
};

// Add this CSS to your stylesheet
const styles = `
.services-page {
  max-width: 1200px;
  position: relative;
}

.feature-row {
  margin-bottom: 100px !important;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-primary-light {
  background-color: rgba(13, 110, 253, 0.1);
}

.bg-info-light {
  background-color: rgba(23, 162, 184, 0.1);
}

.bg-success-light {
  background-color: rgba(40, 167, 69, 0.1);
}

.feature-list {
  list-style: none;
  padding-left: 0;
}

.feature-list li {
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  color: #495057;
}

.feature-list li:before {
  content: "✓";
  position: absolute;
  left: 0;
  color: #0d6efd;
  font-weight: bold;
}

.image-frame {
  position: relative;
}

.image-frame:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(13, 110, 253, 0.3);
  border-radius: 12px;
  top: 20px;
  left: 20px;
  z-index: -1;
}

.cta-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-radius: 15px;
  padding: 40px !important;
}

@media (max-width: 768px) {
  .image-frame:after {
    display: none;
  }
  
  .feature-row {
    margin-bottom: 60px !important;
  }
}
`;

// Add the styles to the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

