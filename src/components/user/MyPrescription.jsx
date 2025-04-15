// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import PatientNavbar from "../layout/PatientNavbar";

// export const MyPrescription = () => {
//   const userId = localStorage.getItem("Id"); // or email, depending on backend filtering
//   const [prescriptions, setPrescriptions] = useState([]);

//   useEffect(() => {
//     const fetchPrescriptions = async () => {
//       try {
//         const res = await axios.get(`/getPrescriptionByUser/${userId}`);
//         console.log("Fetched prescriptions:", res.data);
//         setPrescriptions(res.data.data); // adjust if response structure differs
//       } catch (err) {
//         console.error("Failed to fetch prescriptions", err);
//         alert("Unable to load prescriptions. Please try again.");
//       }
//     };

//     if (userId) {
//       fetchPrescriptions();
//     }
//   }, [userId]);

//   return (
//     <div><PatientNavbar></PatientNavbar>
//     <div className="container mt-5">
//       <h2 className="mb-4">Your Prescriptions</h2>

//       {prescriptions.length === 0 ? (
//         <p>No prescriptions found.</p>
//       ) : (
//         prescriptions.map((prescription, idx) => (
//           <div key={idx} className="card mb-3 shadow-sm">
//             <div className="card-body">
//               <h5 className="card-title">{prescription.patientName}</h5> 
//               <p><strong>Age:</strong> {prescription.age}</p>
//               <p><strong>Gender:</strong> {prescription.gender}</p>
//               <p><strong>Symptoms:</strong> {prescription.symptoms}</p>
//               <p><strong>Diagnosis:</strong> {prescription.diagnosis}</p>
//               <p><strong>Prescription:</strong> {prescription.prescription}</p>
//               {prescription.notes && <p><strong>Notes:</strong> {prescription.notes}</p>}
//               <p className="text-muted"><small>Issued on: {new Date(prescription.createdAt).toLocaleString()}</small></p>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//     </div>
//   );
// };


// ------------------------------------FINAL CODE-----------------------------------------------------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientNavbar from "../layout/PatientNavbar";

export const MyPrescription = () => {
  const userId = localStorage.getItem("Id");
  const [prescriptions, setPrescriptions] = useState([]);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const res = await axios.get(`/getPrescriptionByUser/${userId}`);
        setPrescriptions(res.data.data);
      } catch (err) {
        console.error("Failed to fetch prescriptions", err);
        alert("Unable to load prescriptions. Please try again.");
      }
    };

    if (userId) {
      fetchPrescriptions();
    }
  }, [userId]);

  const toggleExpand = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  // Inline styles
  const styles = {
    page: {
      background: 'linear-gradient(135deg, #f5f7fa 0%, #e4f0fb 100%)',
      minHeight: '100vh'
    },
    header: {
      position: 'relative',
      paddingBottom: '1.5rem',
      textAlign: 'center',
      marginBottom: '2rem'
    },
    textGradient: {
      background: 'linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent',
      display: 'inline-block'
    },
    underline: {
      width: '80px',
      height: '4px',
      background: 'linear-gradient(90deg, #3a7bd5 0%, #00d2ff 100%)',
      margin: '0 auto',
      borderRadius: '2px'
    },
    card: {
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1)',
      background: 'white',
      cursor: 'pointer',
      overflow: 'hidden',
      position: 'relative',
      marginBottom: '1.5rem'
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.12)'
    },
    cardHeader: {
      background: 'linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%)',
      color: 'white',
      padding: '1.25rem 1.5rem',
      position: 'relative'
    },
    decoration: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100px',
      height: '100px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      transform: 'translate(30%, -30%)'
    },
    dateBadge: {
      background: 'rgba(255, 255, 255, 0.2)',
      color: 'white',
      fontWeight: 500,
      padding: '0.35em 0.75em',
      borderRadius: '50px'
    },
    detailBox: {
      background: 'rgba(58, 123, 213, 0.08)',
      padding: '0.5rem',
      borderRadius: '8px',
      textAlign: 'center'
    },
    detailLabel: {
      display: 'block',
      fontSize: '0.75rem',
      color: '#6c757d',
      fontWeight: 500
    },
    detailValue: {
      display: 'block',
      fontSize: '1.1rem',
      fontWeight: 600,
      color: '#3a7bd5'
    },
    section: {
      marginBottom: '1.25rem',
      position: 'relative'
    },
    sectionHeader: {
      color: '#3a7bd5',
      fontWeight: 600,
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center'
    },
    prescriptionText: {
      whiteSpace: 'pre-line',
      fontFamily: '"Courier New", monospace',
      background: 'rgba(58, 123, 213, 0.05)',
      padding: '0.75rem',
      borderRadius: '6px',
      borderLeft: '3px solid #3a7bd5'
    },
    emptyState: {
      textAlign: 'center',
      padding: '3rem 1rem'
    },
    pulseIcon: {
      width: '80px',
      height: '80px',
      background: 'rgba(58, 123, 213, 0.1)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 2rem',
      animation: 'pulse 2s infinite'
    }
  };

  // For animations, we still need to inject a style tag
  const animationStyles = `
    @keyframes pulse {
      0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(58, 123, 213, 0.7); }
      70% { transform: scale(1); box-shadow: 0 0 0 12px rgba(58, 123, 213, 0); }
      100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(58, 123, 213, 0); }
    }
  `;

  return (
    <div style={styles.page}>
      {/* Inject animation styles */}
      <style>{animationStyles}</style>
      
      <PatientNavbar />
      <div className="container mt-4 mb-5">
        <div style={styles.header}>
          <h2 className="display-5 fw-bold" style={styles.textGradient}>
            Your Medical Prescriptions
          </h2>
          <p className="lead text-muted">All your prescriptions in one place</p>
          <div style={styles.underline}></div>
        </div>

        {prescriptions.length === 0 ? (
          <div style={styles.emptyState}>
            <div style={styles.pulseIcon}>
              <i className="bi bi-prescription2 fs-1" style={{color: '#3a7bd5', fontSize: '2.5rem'}}></i>
            </div>
            <h4 className="mt-4 fw-bold">No prescriptions yet</h4>
            <p className="text-muted mx-auto" style={{maxWidth: '500px'}}>
              When your doctor issues prescriptions, they'll appear here for easy access and reference.
            </p>
            <button className="btn btn-outline-primary mt-3">
              <i className="bi bi-plus-circle me-2"></i>Request Prescription
            </button>
          </div>
        ) : (
          <div className="row g-4">
            {prescriptions.map((prescription, idx) => (
              <div key={idx} className="col-lg-6">
                <div 
                  style={{
                    ...styles.card,
                    ...(expandedCard === idx ? styles.cardHover : {}),
                    ...(window.innerWidth <= 768 ? {marginLeft: '-15px', marginRight: '-15px', borderRadius: 0} : {})
                  }}
                  onClick={() => toggleExpand(idx)}
                >
                  <div style={styles.cardHeader}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <h5 className="mb-0 fw-bold">{prescription.patientName}</h5>
                        <small className="text-muted">Prescription #{prescriptions.length - idx}</small>
                      </div>
                      <span style={styles.dateBadge}>
                        {new Date(prescription.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>
                    </div>
                    <div style={styles.decoration}></div>
                  </div>
                  
                  <div className="card-body position-relative">
                    <div style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      opacity: '0.05',
                      fontSize: '8rem',
                      zIndex: 0
                    }}>
                      <i className="bi bi-prescription2"></i>
                    </div>
                    
                    <div className="row mb-3">
                      <div className="col-6">
                        <div style={styles.detailBox}>
                          <span style={styles.detailLabel}>Age</span>
                          <span style={styles.detailValue}>{prescription.age}</span>
                        </div>
                      </div>
                      <div className="col-6">
                        <div style={styles.detailBox}>
                          <span style={styles.detailLabel}>Gender</span>
                          <span style={styles.detailValue}>{prescription.gender}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div style={styles.section}>
                      <div style={styles.sectionHeader}>
                        <i className="bi bi-clipboard-pulse me-2"></i>
                        <span>Symptoms</span>
                      </div>
                      <p className="section-content">{prescription.symptoms}</p>
                    </div>
                    
                    <div style={styles.section}>
                      <div style={styles.sectionHeader}>
                        <i className="bi bi-clipboard2-heart me-2"></i>
                        <span>Diagnosis</span>
                      </div>
                      <p className="section-content">{prescription.diagnosis}</p>
                    </div>
                    
                    <div style={styles.section}>
                      <div style={styles.sectionHeader}>
                        <i className="bi bi-capsule me-2"></i>
                        <span>Prescription</span>
                      </div>
                      <p style={styles.prescriptionText}>{prescription.prescription}</p>
                    </div>
                    
                    {prescription.notes && (
                      <div style={{
                        ...styles.section,
                        background: 'rgba(248, 249, 250, 0.7)',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        borderLeft: '3px solid #6c757d'
                      }}>
                        <div style={styles.sectionHeader}>
                          <i className="bi bi-journal-text me-2"></i>
                          <span>Doctor's Notes</span>
                        </div>
                        <p style={{fontStyle: 'italic', color: '#6c757d'}}>{prescription.notes}</p>
                      </div>
                    )}
                    
                    <div className="text-center mt-3">
                      <button className="btn btn-sm btn-outline-primary" style={{
                        borderRadius: '50px',
                        padding: '0.25rem 1rem',
                        fontSize: '0.8rem'
                      }}>
                        {expandedCard === idx ? 'Show Less' : 'Show More'}
                      </button>
                    </div>
                  </div>
                  
                  <div className="card-footer text-muted text-center">
                    <small>
                      Valid until: {new Date(new Date(prescription.createdAt).setMonth(new Date(prescription.createdAt).getMonth() + 6)).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};