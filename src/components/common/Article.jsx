import React from 'react';
import { Link } from 'react-router-dom';
import "../common/general.css";
import { Navbar } from '../layout/Navbar';

export const Article = () => {
  return (
    <div className="articles-page" style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar></Navbar>
      {/* Hero Section */}
      <section className="articles-hero py-5" style={{
        background: "linear-gradient(135deg, rgba(0,123,255,0.9) 0%, rgba(106,27,154,0.9) 100%)",
        color: "white",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <h1 style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
            fontSize: "2.8rem",
            marginBottom: "20px"
          }}>
            Health & Wellness Resources
          </h1>
          <p style={{
            fontFamily: "'Open Sans', sans-serif",
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto",
            opacity: 0.9
          }}>
            Evidence-based articles written by healthcare professionals to guide your wellness journey
          </p>
        </div>
      </section>

      {/* Article Categories */}
      <div className="container py-4">
        <div className="d-flex justify-content-center flex-wrap">
          {['All Topics', 'Preventive Care', 'Chronic Conditions', 'Mental Health', 'Nutrition', 'Fitness'].map((category, index) => (
            <button
              key={index}
              className="btn btn-outline-primary mx-2 mb-2"
              style={{
                borderRadius: "20px",
                fontWeight: "500",
                borderWidth: "2px",
                transition: "all 0.3s ease"
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Article List */}
      <section className="container py-5">
        <div className="row">
          {[
            {
              id: 1,
              title: "10 Evidence-Based Superfoods for Optimal Health",
              excerpt: "Discover the top nutrient-dense foods that can boost your immune system and reduce disease risk.",
              category: "Nutrition",
              image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              date: "May 15, 2023"
            },
            {
              id: 2,
              title: "Managing Stress: A Physician's Guide to Mental Wellbeing",
              excerpt: "Clinical strategies for reducing stress and improving your mental health in today's fast-paced world.",
              category: "Mental Health",
              image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              date: "April 28, 2023"
            },
            {
              id: 3,
              title: "Cardiovascular Exercise: Protecting Your Heart Health",
              excerpt: "The most effective exercises for maintaining heart health and preventing cardiovascular disease.",
              category: "Fitness",
              image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              date: "April 10, 2023"
            },
            {
              id: 4,
              title: "The Science of Meditation and Brain Health",
              excerpt: "How regular meditation practice can physically change your brain and reduce anxiety.",
              category: "Mental Health",
              image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              date: "March 22, 2023"
            },
            {
              id: 5,
              title: "Hydration: The Foundation of Physical Health",
              excerpt: "Understanding how proper hydration affects every system in your body and recognizing dehydration signs.",
              category: "Preventive Care",
              image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              date: "March 15, 2023"
            },
            {
              id: 6,
              title: "Sustainable Weight Management Strategies",
              excerpt: "Evidence-based approaches to healthy weight loss that you can maintain long-term.",
              category: "Nutrition",
              image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              date: "February 28, 2023"
            }
          ].map((article) => (
            <div className="col-lg-4 col-md-6 mb-4" key={article.id}>
              <div className="article-card h-100" style={{
                background: "white",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
                transition: "all 0.3s ease"
              }}>
                <div style={{ height: "200px", overflow: "hidden" }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease"
                    }}
                  />
                </div>
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge" style={{
                      background: "#6a1b9a20",
                      color: "#6a1b9a",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      fontSize: "0.8rem",
                      fontWeight: "600"
                    }}>
                      {article.category}
                    </span>
                    <small className="text-muted">{article.date}</small>
                  </div>
                  <h4 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.25rem",
                    marginBottom: "15px",
                    color: "#333"
                  }}>
                    {article.title}
                  </h4>
                  <p style={{ color: "#666", marginBottom: "20px" }}>
                    {article.excerpt}
                  </p>
                  <Link
                    to={`/articles/${article.id}`}
                    className="d-flex align-items-center"
                    style={{
                      color: "#007bff",
                      fontWeight: "600",
                      textDecoration: "none"
                    }}
                  >
                    Read Article <i className="fas fa-chevron-right ms-2" style={{ fontSize: "0.8rem" }}></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submit Article Section */}
      <section className="py-5" style={{ background: "white" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-5" style={{
                background: "#f8f9fa",
                borderRadius: "8px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)"
              }}>
                <h2 className="text-center mb-4" style={{
                  fontFamily: "'Montserrat', sans-serif",
                  color: "#007bff"
                }}>
                  Contribute Your Expertise
                </h2>
                <p className="text-center mb-5" style={{ color: "#666" }}>
                  Are you a healthcare professional with insights to share? Submit your article for consideration in our resource library.
                </p>
                
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label" style={{ fontWeight: "500" }}>Your Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Dr. Jane Smith"
                        style={{
                          border: "1px solid #dee2e6",
                          borderRadius: "4px",
                          padding: "10px"
                        }}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="credentials" className="form-label" style={{ fontWeight: "500" }}>Credentials</label>
                      <input
                        type="text"
                        className="form-control"
                        id="credentials"
                        placeholder="MD, MPH"
                        style={{
                          border: "1px solid #dee2e6",
                          borderRadius: "4px",
                          padding: "10px"
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{ fontWeight: "500" }}>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="your@email.com"
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "4px",
                        padding: "10px"
                      }}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label" style={{ fontWeight: "500" }}>Article Title</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter article title"
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "4px",
                        padding: "10px"
                      }}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="category" className="form-label" style={{ fontWeight: "500" }}>Category</label>
                    <select 
                      className="form-select"
                      id="category"
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "4px",
                        padding: "10px"
                      }}
                    >
                      <option>Select a category</option>
                      <option>Preventive Care</option>
                      <option>Chronic Conditions</option>
                      <option>Mental Health</option>
                      <option>Nutrition</option>
                      <option>Fitness</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="content" className="form-label" style={{ fontWeight: "500" }}>Article Content</label>
                    <textarea
                      className="form-control"
                      id="content"
                      rows={6}
                      style={{
                        border: "1px solid #dee2e6",
                        borderRadius: "4px",
                        padding: "10px"
                      }}
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary w-100 py-2"
                    style={{
                      background: "linear-gradient(135deg, #007bff, #6a1b9a)",
                      border: "none",
                      fontWeight: "600",
                      fontSize: "1rem"
                    }}
                  >
                    Submit Article
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};