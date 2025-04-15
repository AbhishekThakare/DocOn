import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../common/contact.css";
import { Navbar } from '../layout/Navbar';


export const ContactUs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  
  const submitHandler = async(data) => {
    try {
      const res = await axios.post("/contact", data);
      if (res.status === 201) {
        alert("Message sent successfully!");
        navigate('/');
      } else {
        throw new Error("Failed to send message");
      }  
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "An error occurred. Please try again."); 
    }  
  };

  return (
    <div className="contact-page" style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar></Navbar>
      {/* Hero Section */}
      <section className="contact-hero py-5" style={{
        background: "linear-gradient(135deg, rgba(0,123,255,0.9) 0%, rgba(106,27,154,0.9) 100%)",
        color: "white",
        textAlign: "center",
        position: "relative"
      }}>
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <h1 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "2.5rem",
            marginBottom: "15px"
          }}>
            Contact Our Healthcare Team
          </h1>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.1rem",
            maxWidth: "700px",
            margin: "0 auto",
            opacity: 0.9
          }}>
            Reach out for support, inquiries, or to schedule a consultation
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container py-5">
        <div className="row">
          {[
            {
              icon: "fas fa-map-marker-alt",
              title: "Our Location",
              content: "123 Healthcare Street, Mumbai, India",
              color: "#0062cc"
            },
            {
              icon: "fas fa-phone-alt",
              title: "Call Us",
              content: "+91 98765 43210",
              color: "#6a1b9a"
            },
            {
              icon: "fas fa-envelope",
              title: "Email Us",
              content: "docontime08@gmail.com",
              color: "#d32f2f"
            }
          ].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="h-100 p-4" style={{
                background: "white",
                borderRadius: "8px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                textAlign: "center",
                transition: "all 0.3s ease"
              }}>
                <div style={{
                  width: "60px",
                  height: "60px",
                  background: `${item.color}20`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: item.color,
                  fontSize: "1.5rem"
                }}>
                  <i className={item.icon}></i>
                </div>
                <h4 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#333",
                  fontSize: "1.25rem",
                  marginBottom: "10px"
                }}>
                  {item.title}
                </h4>
                <p style={{ color: "#666", margin: 0 }}>
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



    


      {/* Contact Form */}
      <section className="py-5" style={{ background: "white" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 p-md-5" style={{
                background: "#f8f9fa",
                borderRadius: "8px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
              }}>
                <h2 className="text-center mb-4" style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#0062cc"
                }}>
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label" style={{ fontWeight: "500" }}>Full Name *</label>
                      <input 
                        type="text" 
                        className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                        id="name" 
                        placeholder="Enter your full name"
                        style={{
                          border: "1px solid #ced4da",
                          borderRadius: "4px",
                          padding: "10px 15px"
                        }}
                        {...register("name", { required: "Name is required" })}
                      />
                      {errors.name && (
                        <div className="invalid-feedback" style={{ display: 'block' }}>
                          {errors.name.message}
                        </div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label" style={{ fontWeight: "500" }}>Email Address *</label>
                      <input 
                        type="email" 
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email" 
                        placeholder="Enter your email"
                        style={{
                          border: "1px solid #ced4da",
                          borderRadius: "4px",
                          padding: "10px 15px"
                        }}
                        {...register("email", { 
                          required: "Email is required", 
                          pattern: { 
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Please enter a valid email address"
                          } 
                        })}
                      />
                      {errors.email && (
                        <div className="invalid-feedback" style={{ display: 'block' }}>
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label" style={{ fontWeight: "500" }}>Subject *</label>
                    <input 
                      type="text" 
                      className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                      id="subject" 
                      placeholder="What is this regarding?"
                      style={{
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                        padding: "10px 15px"
                      }}
                      {...register("subject", { required: "Subject is required" })}
                    />
                    {errors.subject && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {errors.subject.message}
                      </div>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label" style={{ fontWeight: "500" }}>Your Message *</label>
                    <textarea 
                      className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                      id="message" 
                      rows={5}
                      placeholder="How can we help you?"
                      style={{
                        border: "1px solid #ced4da",
                        borderRadius: "4px",
                        padding: "10px 15px"
                      }}
                      {...register("message", { 
                        required: "Message is required",
                        minLength: {
                          value: 20,
                          message: "Message should be at least 20 characters"
                        }
                      })}
                    ></textarea>
                    {errors.message && (
                      <div className="invalid-feedback" style={{ display: 'block' }}>
                        {errors.message.message}
                      </div>
                    )}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn w-100 py-2"
                    style={{
                      background: "linear-gradient(135deg, #007bff, #6a1b9a)",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "1rem",
                      border: "none",
                      borderRadius: "4px",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => e.target.style.opacity = "0.9"}
                    onMouseLeave={(e) => e.target.style.opacity = "1"}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4" style={{
            fontFamily: "'Montserrat', sans-serif",
            color: "#0062cc"
          }}>
            Our Location
          </h2>
          <div className="map-container" style={{
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
            height: "400px"
          }}>
            <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.3912914805555!2d72.49375717477197!3d23.08276771408017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9defab5465ef%3A0x78f0603f56bfb453!2sSAL%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1743005302787!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      
    </div>
  );
};

