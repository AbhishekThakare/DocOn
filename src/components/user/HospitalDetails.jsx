import React from 'react'
import { Link } from 'react-router-dom'

export const HospitalDetails = () => {
  return (
    <div>
<>
  <div className="container mt-5">
    <div className="card shadow-lg">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/400x300"
            className="img-fluid rounded-start"
            alt="Clinic/Hospital Image"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">Sunshine Multispeciality Hospital</h2>
            <p className="card-text">
              <strong>Location:</strong> 123, Main Street, New York
            </p>
            <p className="card-text">
              <strong>Contact:</strong> +1 234 567 890 |
              info@sunshinehospital.com
            </p>
            <p className="card-text">
              <strong>Timings:</strong> Mon-Sat (9:00 AM - 8:00 PM)
            </p>
            {/* Rating Section */}
            <p className="card-text">
              <strong>Rating:</strong>
              <span className="text-warning">★ ★ ★ ★ ☆</span> (4.5/5) - 250
              Reviews
            </p>
            {/* <a href="#" className="btn btn-primary">
              Book an Appointment
            </a> */}
           <Link className="btn btn-primary" to={"/appointments"}>Book Appointment</Link> 
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About Section */}
  <section className="container py-5">
    <h2 className="text-center mb-4">
      About Sunshine Multispeciality Hospital
    </h2>
    <div className="row">
      <div className="col-md-6">
        <p>
          Sunshine Multispeciality Hospital is a state-of-the-art healthcare
          facility dedicated to providing high-quality medical care. Equipped
          with advanced technology, experienced doctors, and compassionate
          staff, we offer a wide range of medical services.
        </p>
        <p>
          Our mission is to deliver patient-centric care with a focus on safety,
          efficiency, and innovation. We strive to enhance the well-being of our
          patients through personalized treatments and cutting-edge medical
          practices.
        </p>
      </div>
      <div className="col-md-6 text-center">
        <img
          src="https://via.placeholder.com/500x300"
          className="img-fluid rounded"
          alt="Hospital Image"
        />
      </div>
    </div>
  </section>
  {/* Available Doctors */}
  <section className="container py-5">
    <h2 className="text-center mb-4">Available Doctors</h2>
    <div className="row">
      <div className="col-md-4">
        <div className="card shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            className="card-img-top"
            alt="Doctor Image"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Dr. John Doe</h5>
            <p className="text-muted">Cardiologist | 10+ Years Experience</p>
            <a href="#" className="btn btn-primary">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            className="card-img-top"
            alt="Doctor Image"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Dr. Sarah Smith</h5>
            <p className="text-muted">Dermatologist | 8+ Years Experience</p>
            <a href="#" className="btn btn-primary">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card shadow-lg">
          <img
            src="https://via.placeholder.com/300"
            className="card-img-top"
            alt="Doctor Image"
          />
          <div className="card-body text-center">
            <h5 className="card-title">Dr. Michael Lee</h5>
            <p className="text-muted">Neurologist | 12+ Years Experience</p>
            <a href="#" className="btn btn-primary">
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Our Services */}
  <section className="bg-light py-5">
    <div className="container text-center">
      <h2>Our Services</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Emergency Care"
            className="mb-3 img-fluid rounded"
          />
          <h4>Emergency Care</h4>
          <p>24/7 Emergency and Trauma Care Services.</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Surgery"
            className="mb-3 img-fluid rounded"
          />
          <h4>Surgeries</h4>
          <p>Advanced surgical procedures with expert doctors.</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Diagnostics"
            className="mb-3 img-fluid rounded"
          />
          <h4>Diagnostics</h4>
          <p>State-of-the-art medical tests and imaging facilities.</p>
        </div>
      </div>
    </div>
  </section>
</>





    </div>
   
  )
}
