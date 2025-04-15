import React from 'react'
import "../common/general.css"
export const General = () => {
  return (
    <>
    {/* Hero Section */}
    <section className="bg-primary text-white text-center py-5" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
      <div className="container">
        <h1>Find the Right Doctor</h1>
        <p>Search for specialists based on your health concerns.</p>
      </div>
    </section>
    
    {/* Doctor Specialties Section */}
    <section className="container text-center my-5">
      <h2 className="mb-4">Choose a Specialty</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <div className="doctor-card">
            <i className="doctor-icon bi bi-heart-pulse" />
            <h4>Cardiologist</h4>
            <p>For heart-related diseases and treatments.</p>
            <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
              Find Cardiologists
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="doctor-card">
            <i className="doctor-icon bi bi-brain" />
            <h4>Neurologist</h4>
            <p>For brain and nervous system disorders.</p>
            <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
              Find Neurologists
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="doctor-card">
            <i className="doctor-icon bi bi-eye" />
            <h4>Ophthalmologist</h4>
            <p>For vision and eye-related issues.</p>
            <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
              Find Eye Specialists
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="doctor-card">
            <i className="doctor-icon bi bi-virus" />
            <h4>Dermatologist</h4>
            <p>For skin, hair, and nail disorders.</p>
            <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
              Find Dermatologists
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="doctor-card">
            <i className="doctor-icon bi bi-bandaid" />
            <h4>Orthopedic</h4>
            <p>For bone and joint problems.</p>
            <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
              Find Orthopedic Doctors
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="doctor-card">
            <i className="doctor-icon bi bi-people" />
            <h4>Pediatrician</h4>
            <p>For child health and diseases.</p>
            <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
              Find Pediatricians
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="doctor-card">
            <i className="doctor-icon bi bi-person-hearts" />
            <h4>Psychiatrist</h4>
            <p>For mental health and therapy.</p>
            <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
              Find Psychiatrists
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="doctor-card">
            <i className="doctor-icon bi bi-lungs" />
            <h4>Pulmonologist</h4>
            <p>For lung and respiratory disorders.</p>
            <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
              Find Pulmonologists
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="doctor-card">
            <i className="doctor-icon bi bi-droplet" />
            <h4>Endocrinologist</h4>
            <p>For hormone and diabetes management.</p>
            <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
              Find Endocrinologists
            </a>
          </div>
        </div>
      </div>
    </section>
    {/* Contact Section */}
    <section className="bg-light py-5 text-center">
      <div className="container">
        <h3>Need Help Finding a Doctor?</h3>
        <p>Contact our support team for personalized assistance.</p>
        <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }} >
          Contact Us
        </a>
      </div>
    </section>
  </>
  )}  