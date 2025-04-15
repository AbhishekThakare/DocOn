import React from 'react'

export const EHR = () => {
  return (
   

<>
  {/* Hero Section */}
  <section className="bg-primary text-white text-center py-5" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
    <div className="container">
      <h1>Electronic Health Records </h1>
      <p>
        Manage your medical history securely and efficiently.
      </p>
    </div>
  </section>
  <br />
  {/* Features Section */}
  {/* <section className="container text-center my-5">
    <h2 className="mb-4">Core Features</h2>
    <div className="row g-4">
      <div className="col-md-4">
        <div className="feature-box">
          <i className="feature-icon bi bi-file-medical" />
          <h4>Secure Medical Records</h4>
          <p>
            All patient data is encrypted and securely stored for easy access.
          </p>
        </div>
      </div> */}
      {/* <div className="col-md-4">
        <div className="feature-box">
          <i className="feature-icon bi bi-prescription" />
          <h4>Digital Prescriptions</h4>
          <p>Doctors can generate and share secure prescriptions instantly.</p>
        </div>
      </div> */}
      {/* <div className="col-md-4">
        <div className="feature-box">
          <i className="feature-icon bi bi-share-fill" />
          <h4>Seamless Data Sharing</h4>
          <p>
            Patients can share their medical history with authorized doctors.
          </p>
        </div>
      </div>
    </div>
  </section> */}
  {/* EHR Access Section */}
  <section className="ehr-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-container">
            <h3 className="text-center mb-4">Access Your Medical Records</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Registered Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  required=""
                />
              </div>

              <button type="submit" className="btn btn-primary w-100" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
                Access Records
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Prescription Request Section
  <section className="ehr-section bg-light">
    <div className="container">
      <h2 className="text-center mb-4">Request a New Prescription</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="form-container">
            <form>
              <div className="mb-3">
                <label htmlFor="patient-name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="patient-name"
                  placeholder="Enter your name"
                  required=""
                />
              </div>
              <div className="mb-3">
                <label htmlFor="doctor" className="form-label">
                  Select Doctor
                </label>
                <select className="form-control" id="doctor" required="">
                  <option value="">Choose a doctor</option>
                  <option>Dr. A Sharma - Cardiologist</option>
                  <option>Dr. B Mehta - Neurologist</option>
                  <option>Dr. C Verma - General Physician</option>
                  <option>Dr. D Rao - Pediatrician</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Symptoms / Request
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows={3}
                  placeholder="Describe your condition"
                  defaultValue={""}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Request Prescription
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section> */}
  {/* Contact Section */}
  <section className="bg-light py-5 text-center">
    <div className="container">
      <h3>Need Assistance?</h3>
      <p>Contact our support team for any queries.</p>
      <a href="#" className="btn btn-primary" style={{
    background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  }}>
        Contact Us
      </a>
    </div>
  </section>
</>

  )
}
