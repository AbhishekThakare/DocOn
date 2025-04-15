import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';

export const Features = () => {
  return (
    <div className="features-page" style={{ width: '100%', overflowX: 'hidden' }}>
      <Navbar></Navbar>
      {/* Hero Section */}
      <header className="features-hero" style={{
        background: "linear-gradient(rgba(0, 98, 204, 0.9), rgba(0, 98, 204, 0.9))",
        backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        textAlign: "center",
        padding: "100px 0",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 98, 204, 0.8)"
        }}></div>
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <h1 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "2.8rem",
            marginBottom: "20px"
          }}>
            Docon Platform Features
          </h1>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto 30px",
            opacity: 0.9
          }}>
            Discover how our comprehensive features transform healthcare delivery for patients and providers
          </p>
        </div>
      </header>

      {/* Features Navigation */}
      <nav className="features-nav py-3" style={{ background: "#f8f9fa", borderBottom: "1px solid #e9ecef" }}>
        <div className="container">
          <div className="d-flex justify-content-center flex-wrap">
            {['For Patients', 'For Doctors', 'For Clinics'].map((item, index) => (
              <a 
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                style={{
                  padding: "10px 20px",
                  margin: "0 10px",
                  color: "#0062cc",
                  fontWeight: "600",
                  textDecoration: "none",
                  borderBottom: "3px solid transparent",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => e.target.style.borderBottom = "3px solid #0062cc"}
                onMouseLeave={(e) => e.target.style.borderBottom = "3px solid transparent"}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Patient Features */}
      <section id="for-patients" className="py-5" style={{ background: "white" }}>
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: "#0062cc",
              position: "relative",
              display: "inline-block",
              paddingBottom: "15px"
            }}>
              Features for Patients
              <span style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "3px",
                background: "#0062cc",
                borderRadius: "3px"
              }}></span>
            </h2>
            <p style={{ color: "#666", maxWidth: "700px", margin: "0 auto" }}>
              Empowering you to take control of your healthcare journey
            </p>
          </div>

          <div className="row">
            {[
              {
                icon: "fas fa-calendar-check",
                title: "Easy Appointment Scheduling",
                description: "Book in-clinic or virtual appointments with specialists in seconds",
                color: "#0062cc"
              },
              {
                icon: "fas fa-video",
                title: "Secure Telemedicine",
                description: "HIPAA-compliant video consultations from anywhere",
                color: "#6a1b9a"
              },
              {
                icon: "fas fa-file-medical",
                title: "Digital Health Records",
                description: "Access your complete medical history anytime",
                color: "#d32f2f"
              },
              {
                icon: "fas fa-prescription",
                title: "E-Prescriptions",
                description: "Get prescriptions sent directly to your pharmacy",
                color: "#388e3c"
              },
              {
                icon: "fas fa-bell",
                title: "Smart Reminders",
                description: "Never miss appointments or medications",
                color: "#ff6b6b"
              },
              {
                icon: "fas fa-chart-line",
                title: "Health Analytics",
                description: "Track your vitals and health progress over time",
                color: "#ff9800"
              }
            ].map((feature, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div style={{
                  background: "white",
                  borderRadius: "8px",
                  padding: "30px",
                  height: "100%",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                  borderTop: `3px solid ${feature.color}`,
                  transition: "all 0.3s ease"
                }}>
                  <div style={{
                    width: "60px",
                    height: "60px",
                    background: `${feature.color}20`,
                    color: feature.color,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: "1.5rem"
                  }}>
                    <i className={feature.icon}></i>
                  </div>
                  <h3 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    color: "#333",
                    fontSize: "1.3rem",
                    textAlign: "center",
                    marginBottom: "15px"
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{ 
                    color: "#666", 
                    textAlign: "center",
                    marginBottom: "20px"
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Features */}
      <section id="for-doctors" className="py-5" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: "#0062cc",
              position: "relative",
              display: "inline-block",
              paddingBottom: "15px"
            }}>
              Features for Doctors
              <span style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "3px",
                background: "#0062cc",
                borderRadius: "3px"
              }}></span>
            </h2>
            <p style={{ color: "#666", maxWidth: "700px", margin: "0 auto" }}>
              Tools designed to enhance your practice and patient care
            </p>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img 
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Doctor using Docon" 
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
                }}
              />
            </div>
            <div className="col-lg-6">
              <ul className="feature-list" style={{ listStyle: "none", padding: 0 }}>
                {[
                  {
                    icon: "fas fa-user-md",
                    title: "Comprehensive Patient Profiles",
                    description: "Access complete medical histories, allergies, and previous treatments"
                  },
                  {
                    icon: "fas fa-comment-medical",
                    title: "Virtual Consultations",
                    description: "Conduct secure video visits with integrated EHR access"
                  },
                  {
                    icon: "fas fa-notes-medical",
                    title: "Smart Documentation",
                    description: "AI-assisted clinical notes and diagnosis coding"
                  },
                  {
                    icon: "fas fa-clock",
                    title: "Schedule Optimization",
                    description: "Intelligent calendar management to maximize efficiency"
                  }
                ].map((item, index) => (
                  <li key={index} style={{ marginBottom: "25px" }}>
                    <div className="d-flex">
                      <div style={{
                        width: "50px",
                        height: "50px",
                        background: "#0062cc20",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "15px",
                        color: "#0062cc",
                        fontSize: "1.2rem",
                        flexShrink: 0
                      }}>
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <h4 style={{
                          fontFamily: "'Montserrat', sans-serif",
                          color: "#333",
                          fontSize: "1.2rem",
                          marginBottom: "5px"
                        }}>
                          {item.title}
                        </h4>
                        <p style={{ color: "#666", margin: 0 }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Features */}
      <section id="for-clinics" className="py-5" style={{ background: "white" }}>
        <div className="container">
          <div className="section-header text-center mb-5">
            <h2 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
              color: "#0062cc",
              position: "relative",
              display: "inline-block",
              paddingBottom: "15px"
            }}>
              Features for Clinics & Hospitals
              <span style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "80px",
                height: "3px",
                background: "#0062cc",
                borderRadius: "3px"
              }}></span>
            </h2>
            <p style={{ color: "#666", maxWidth: "700px", margin: "0 auto" }}>
              Streamline operations and enhance patient care with our enterprise solutions
            </p>
          </div>

          <div className="row">
            <div className="col-md-4 mb-4">
              <div style={{
                background: "#f8f9fa",
                borderRadius: "8px",
                padding: "30px",
                height: "100%"
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#0062cc",
                  fontSize: "1.3rem",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center"
                }}>
                  <i className="fas fa-users me-3"></i> Patient Management
                </h3>
                <ul style={{ color: "#555", paddingLeft: "20px" }}>
                  <li className="mb-2">Centralized patient database</li>
                  <li className="mb-2">Automated appointment reminders</li>
                  <li className="mb-2">Digital intake forms</li>
                  <li className="mb-2">Waitlist management</li>
                  <li>No-show tracking</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div style={{
                background: "#f8f9fa",
                borderRadius: "8px",
                padding: "30px",
                height: "100%"
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#0062cc",
                  fontSize: "1.3rem",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center"
                }}>
                  <i className="fas fa-clinic-medical me-3"></i> Clinic Operations
                </h3>
                <ul style={{ color: "#555", paddingLeft: "20px" }}>
                  <li className="mb-2">Staff scheduling</li>
                  <li className="mb-2">Room management</li>
                  <li className="mb-2">Inventory tracking</li>
                  <li className="mb-2">Billing integration</li>
                  <li>Insurance verification</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4 mb-4">
              <div style={{
                background: "#f8f9fa",
                borderRadius: "8px",
                padding: "30px",
                height: "100%"
              }}>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#0062cc",
                  fontSize: "1.3rem",
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center"
                }}>
                  <i className="fas fa-chart-bar me-3"></i> Analytics & Reporting
                </h3>
                <ul style={{ color: "#555", paddingLeft: "20px" }}>
                  <li className="mb-2">Performance dashboards</li>
                  <li className="mb-2">Financial reports</li>
                  <li className="mb-2">Patient volume trends</li>
                  <li className="mb-2">Quality metrics</li>
                  <li>Custom reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 text-center" style={{ 
        background: "linear-gradient(135deg, #0062cc, #004080)",
        color: "white"
      }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            marginBottom: "20px"
          }}>
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p style={{ 
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto 30px",
            opacity: 0.9
          }}>
            Whether you're a patient, doctor, or healthcare organization, Docon has the tools you need.
          </p>
          <div className="d-flex justify-content-center flex-wrap" style={{ gap: "15px" }}>
            <Link 
              to="/signup" 
              className="btn btn-light btn-lg" 
              style={{
                padding: "12px 30px",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "1rem"
              }}
            >
              Sign Up Now
            </Link>
            <Link 
              to="/contactus" 
              className="btn btn-outline-light btn-lg" 
              style={{
                padding: "12px 30px",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "1rem"
              }}
            >
              Request Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};