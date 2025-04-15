// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { 
//   faUser, 
//   faCalendarAlt, 
//   faFileMedical, 
//   faPrescription, 
//   faVideo, 
//   faBell,
//   faSignOutAlt,
//   faUserCircle,
//   faCog,
//   faUserDoctor
// } from '@fortawesome/free-solid-svg-icons';

// export const PatientNavbar = () => {
//   const navigate = useNavigate();
// const [userName, setUserName] = useState("John Doe");

//   useEffect(() => {
//     // Retrieve user data from localStorage
//     // const userData = JSON.parse(localStorage.getItem("userData"));
//     // if (userData && userData.name) {
//     //   setUserName(userData.name);
//     // }
//     const username = localStorage.getItem("name");
//     setUserName(username);
//   }, []);
//   const handleLogout = () => {
//     // Perform logout actions (clear tokens, etc.)
//     localStorage.removeItem('authToken');
//     localStorage.removeItem('userData');
    
//     // Redirect to login page
//     navigate('/login');
    
//     // Optional: Refresh the page to clear state
//     window.location.reload();
//   };

//   return (
//     <div>
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ 
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//       background: "linear-gradient(135deg, #0066cc 0%, #004080 100%)",
//       borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//       padding: '0.75rem 1rem',
//       boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
//     }}>
//       <div className="container-fluid">
//         {/* Brand/Logo */}
//         <Link className="navbar-brand d-flex align-items-center" to="/patientdashboard" style={{
//           fontFamily: "'Roboto', sans-serif",
//           fontWeight: 600,
//           fontSize: "1.4rem",
//           letterSpacing: "0.5px",
//           color: "#fff"
//         }}>
//           <span style={{ 
//             backgroundColor: 'rgba(255,255,255,0.2)',
//             width: '36px',
//             height: '36px',
//             borderRadius: '6px',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginRight: '10px'
//           }}>
//             <FontAwesomeIcon icon={faUser} style={{ color: '#fff', fontSize: '1.1rem' }} />
//           </span>
//           DOCON
//         </Link>

//         {/* Mobile Toggle */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#patientNavbar"
//           aria-controls="patientNavbar"
//           aria-expanded="false"
//           style={{ 
//             border: 'none',
//             boxShadow: 'none'
//           }}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation Links */}
//         <div className="collapse navbar-collapse" id="patientNavbar">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: '1.5rem' }}>
//             <li className="nav-item">
//               <Link 
//                 className="nav-link" 
//                 to="/patientdashboard"
//                 style={{
//                   color: 'rgba(255,255,255,0.9)',
//                   fontWeight: 500,
//                   padding: '8px 16px',
//                   margin: '0 4px',
//                   borderRadius: '4px',
//                   transition: 'all 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center'
//                 }}
//               >
//                 <FontAwesomeIcon icon={faUser} className="me-2" style={{ width: '18px' }} />
//                 Dashboard
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link 
//                 className="nav-link" 
//                 to="/appointments"
//                 style={{
//                   color: 'rgba(255,255,255,0.9)',
//                   fontWeight: 500,
//                   padding: '8px 16px',
//                   margin: '0 4px',
//                   borderRadius: '4px',
//                   transition: 'all 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center'
//                 }}
//               >
//                 <FontAwesomeIcon icon={faCalendarAlt} className="me-2" style={{ width: '18px' }} />
//                 Book Appointments
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link 
//                 className="nav-link" 
//                 to="/myappointments"
//                 style={{
//                   color: 'rgba(255,255,255,0.9)',
//                   fontWeight: 500,
//                   padding: '8px 16px',
//                   margin: '0 4px',
//                   borderRadius: '4px',
//                   transition: 'all 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center'
//                 }}
//               >
//                 <FontAwesomeIcon icon={faFileMedical} className="me-2" style={{ width: '18px' }} />
//                 My Appointments
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link 
//                 className="nav-link" 
//                 to="/doctorprofiles"
//                 style={{
//                   color: 'rgba(255,255,255,0.9)',
//                   fontWeight: 500,
//                   padding: '8px 16px',
//                   margin: '0 4px',
//                   borderRadius: '4px',
//                   transition: 'all 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center'
//                 }}
//               >
//                 <FontAwesomeIcon icon={faUserDoctor} className="me-2" style={{ width: '18px' }} />
//                 Our Doctors
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link 
//                 className="nav-link" 
//                 to="/patientprescription"
//                 style={{
//                   color: 'rgba(255,255,255,0.9)',
//                   fontWeight: 500,
//                   padding: '8px 16px',
//                   margin: '0 4px',
//                   borderRadius: '4px',
//                   transition: 'all 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center'
//                 }}
//               >
//                 <FontAwesomeIcon icon={faPrescription} className="me-2" style={{ width: '18px' }} />
//                 Prescriptions
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link 
//                 className="nav-link" 
//                 to="/telemedicine"
//                 style={{
//                   color: 'rgba(255,255,255,0.9)',
//                   fontWeight: 500,
//                   padding: '8px 16px',
//                   margin: '0 4px',
//                   borderRadius: '4px',
//                   transition: 'all 0.2s ease',
//                   display: 'flex',
//                   alignItems: 'center'
//                 }}
//               >
//                 <FontAwesomeIcon icon={faVideo} className="me-2" style={{ width: '18px' }} />
//                 Telemedicine
//               </Link>
//             </li>
//           </ul>

//           {/* Right-side Items */}
//           <div className="d-flex align-items-center">
//             {/* Notifications */}
//             <div className="position-relative me-3">
//               <Link 
//                 to="/notifications" 
//                 className="text-white position-relative"
//                 style={{ 
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: '40px',
//                   height: '40px',
//                   borderRadius: '50%',
//                   backgroundColor: 'rgba(255,255,255,0.1)',
//                   transition: 'all 0.2s ease'
//                 }}
//               >
//                 <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.1rem' }} />
//                 <span 
//                   className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                   style={{ 
//                     fontSize: '0.65rem',
//                     padding: '4px 5px',
//                     minWidth: '18px'
//                   }}
//                 >
//                   3
//                 </span>
//               </Link>
//             </div>
            
//             {/* User Dropdown */}
//             <div className="dropdown">
//             <button className="btn dropdown-toggle d-flex align-items-center py-2 px-3" type="button" data-bs-toggle="dropdown" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "none", color: "white", borderRadius: "6px" }}>
//               <div style={{ width: "32px", height: "32px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "10px", color: "#fff", fontWeight: "bold" }}>
//                 {userName.charAt(0)}
//               </div>
//               <span style={{ fontWeight: 500 }}>
//   {userName?.split(' ')[0]}
// </span>
//             </button>
//               <ul 
//                 className="dropdown-menu dropdown-menu-end" 
//                 aria-labelledby="patientDropdown" 
//                 style={{
//                   border: 'none',
//                   boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
//                   borderRadius: '6px',
//                   padding: '8px',
//                   minWidth: '200px'
//                 }}
//               >
//                 <li>
//                   <Link 
//                     className="dropdown-item d-flex align-items-center py-2" 
//                     to="/patientprofile"
//                     style={{ 
//                       fontWeight: 500,
//                       borderRadius: '4px',
//                       fontSize: '0.9rem'
//                     }}
//                   >
//                     <FontAwesomeIcon icon={faUserCircle} className="me-2" style={{ color: '#0066cc', width: '18px' }} /> 
//                     My Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     className="dropdown-item d-flex align-items-center py-2" 
//                     to="/settings"
//                     style={{ 
//                       fontWeight: 500,
//                       borderRadius: '4px',
//                       fontSize: '0.9rem'
//                     }}
//                   >
//                     <FontAwesomeIcon icon={faCog} className="me-2" style={{ color: '#0066cc', width: '18px' }} /> 
//                     Settings
//                   </Link>
//                 </li>
//                 <li><hr className="dropdown-divider my-1" style={{ opacity: 0.1 }} /></li>
//                 <li>
//                   <button
//                     className="dropdown-item d-flex align-items-center py-2" 
//                     onClick={handleLogout}
//                     style={{ 
//                       fontWeight: 500,
//                       color: '#ff6b6b',
//                       borderRadius: '4px',
//                       fontSize: '0.9rem',
//                       width: '100%',
//                       textAlign: 'left',
//                       background: 'none',
//                       border: 'none'
//                     }}
//                   >
//                     <FontAwesomeIcon icon={faSignOutAlt} className="me-2" style={{ width: '18px' }} /> 
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Hover Effects */}
//       <style>
//         {`
//           .nav-link:hover {
//             background-color: rgba(255,255,255,0.2) !important;
//             color: #fff !important;
//           }
//           .dropdown-item:hover {
//             background-color: #f8f9fa !important;
//           }
//           .dropdown-toggle:hover {
//             background-color: rgba(255,255,255,0.2) !important;
//           }
//           [notification-bell]:hover {
//             background-color: rgba(255,255,255,0.2) !important;
//           }
//           .logout-btn:hover {
//             background-color: rgba(255,107,107,0.1) !important;
//           }
//         `}
//       </style>
//     </nav>
    
//     </div>
//   );
// };
// export default PatientNavbar;


// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';

// // export const PatientNavbar = () => {
// //   const [activeTab, setActiveTab] = useState('overview');
// //   const [upcomingAppointments] = useState([
// //     { id: 1, doctor: 'Dr. Sarah Johnson', specialty: 'Cardiology', date: '2023-06-15', time: '10:30 AM', type: 'Video Consultation' },
// //     { id: 2, doctor: 'Dr. Michael Chen', specialty: 'Dermatology', date: '2023-06-18', time: '2:15 PM', type: 'In-Clinic' }
// //   ]);

// //   const [medicalHistory] = useState([
// //     { id: 1, date: '2023-05-10', doctor: 'Dr. Sarah Johnson', diagnosis: 'Hypertension', prescription: 'Lisinopril 10mg' },
// //     { id: 2, date: '2023-03-22', doctor: 'Dr. Emily Wong', diagnosis: 'Seasonal Allergies', prescription: 'Cetirizine 10mg' }
// //   ]);

// //   const [prescriptions] = useState([
// //     { id: 1, medication: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', refills: 3, expires: '2023-11-10' },
// //     { id: 2, medication: 'Atorvastatin', dosage: '20mg', frequency: 'At bedtime', refills: 2, expires: '2023-10-15' }
// //   ]);

// //   const [vitals] = useState({
// //     bloodPressure: '120/80',
// //     heartRate: '72 bpm',
// //     temperature: '98.6°F',
// //     weight: '68 kg',
// //     lastUpdated: '2023-06-10'
// //   });

// //   const handleLogout =()=>{
// //     Navigate("/")
// //   }

// //   const renderTabContent = () => {
// //     switch (activeTab) {
// //       case 'overview':
// //         return (
// //           <div style={styles.tabContent}>
// //             <div style={styles.section}>
// //               <h3 style={styles.sectionTitle}>Upcoming Appointments</h3>
// //               {upcomingAppointments.length > 0 ? (
// //                 <div style={styles.appointmentList}>
// //                   {upcomingAppointments.map(appointment => (
// //                     <div key={appointment.id} style={styles.appointmentCard}>
// //                       <div style={styles.appointmentInfo}>
// //                         <h4 style={styles.doctorName}>{appointment.doctor}</h4>
// //                         <p style={styles.specialty}>{appointment.specialty}</p>
// //                         <p style={styles.appointmentTime}>{appointment.date} at {appointment.time}</p>
// //                         <span style={{ 
// //                           ...styles.appointmentType, 
// //                           backgroundColor: appointment.type === 'Video Consultation' ? '#e3f2fd' : '#e8f5e9',
// //                           color: appointment.type === 'Video Consultation' ? '#1976d2' : '#2e7d32'
// //                         }}>
// //                           {appointment.type}
// //                         </span>
// //                       </div>
// //                       <button style={styles.actionButton}>View Details</button>
// //                     </div>
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <p style={styles.noDataText}>No upcoming appointments</p>
// //               )}
// //               <button style={styles.primaryButton}>
// //                 <Link to={"/appointments"} style={{color:"white"}}> Book New Appointment </Link></button>
// //             </div>

// //             <div style={styles.section}>
// //               <h3 style={styles.sectionTitle}>Recent Medical History</h3>
// //               {medicalHistory.length > 0 ? (
// //                 <div style={styles.medicalHistoryList}>
// //                   {medicalHistory.slice(0, 2).map(record => (
// //                     <div key={record.id} style={styles.medicalRecordCard}>
// //                       <div style={styles.recordDate}>{record.date}</div>
// //                       <div style={styles.recordDetails}>
// //                         <p style={styles.recordDoctor}>Seen by: {record.doctor}</p>
// //                         <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
// //                         <p><strong>Prescription:</strong> {record.prescription}</p>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <p style={styles.noDataText}>No medical history available</p>
// //               )}
// //               <button style={styles.secondaryButton}>View Full History</button>
// //             </div>
// //           </div>
// //         );
// //       case 'appointments':
// //         return (
// //           <div style={styles.tabContent}>
// //             <h3 style={styles.sectionTitle}>Your Appointments</h3>
// //             {upcomingAppointments.length > 0 ? (
// //               <div style={styles.fullList}>
// //                 {upcomingAppointments.map(appointment => (
// //                   <div key={appointment.id} style={styles.fullAppointmentCard}>
// //                     <div style={styles.appointmentHeader}>
// //                       <h4 style={styles.doctorName}>{appointment.doctor}</h4>
// //                       <span style={styles.specialtyBadge}>{appointment.specialty}</span>
// //                     </div>
// //                     <div style={styles.appointmentDetails}>
// //                       <div>
// //                         <p style={styles.detailLabel}>Date & Time</p>
// //                         <p style={styles.detailValue}>{appointment.date} at {appointment.time}</p>
// //                       </div>
// //                       <div>
// //                         <p style={styles.detailLabel}>Consultation Type</p>
// //                         <p style={styles.detailValue}>{appointment.type}</p>
// //                       </div>
// //                     </div>
// //                     <div style={styles.appointmentActions}>
// //                       <button style={styles.actionButton}>Reschedule</button>
// //                       <button style={styles.cancelButton}>Cancel</button>
// //                       <button style={styles.primaryButton}>Start Consultation</button>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <p style={styles.noDataText}>No appointments scheduled</p>
// //             )}
// //           </div>
// //         );
// //       case 'medical':
// //         return (
// //           <div style={styles.tabContent}>
// //             <div style={styles.section}>
// //               <h3 style={styles.sectionTitle}>Medical History</h3>
// //               {medicalHistory.length > 0 ? (
// //                 <div style={styles.fullList}>
// //                   {medicalHistory.map(record => (
// //                     <div key={record.id} style={styles.medicalRecordCardFull}>
// //                       <div style={styles.recordHeader}>
// //                         <div style={styles.recordDateFull}>{record.date}</div>
// //                         <div style={styles.recordDoctorFull}>{record.doctor}</div>
// //                       </div>
// //                       <div style={styles.recordDetailsFull}>
// //                         <div>
// //                           <p style={styles.detailLabel}>Diagnosis</p>
// //                           <p style={styles.detailValue}>{record.diagnosis}</p>
// //                         </div>
// //                         <div>
// //                           <p style={styles.detailLabel}>Prescription</p>
// //                           <p style={styles.detailValue}>{record.prescription}</p>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               ) : (
// //                 <p style={styles.noDataText}>No medical history available</p>
// //               )}
// //             </div>
// //           </div>
// //         );
// //       case 'prescriptions':
// //         return (
// //           <div style={styles.tabContent}>
// //             <h3 style={styles.sectionTitle}>Your Prescriptions</h3>
// //             {prescriptions.length > 0 ? (
// //               <div style={styles.prescriptionGrid}>
// //                 {prescriptions.map(prescription => (
// //                   <div key={prescription.id} style={styles.prescriptionCard}>
// //                     <h4 style={styles.medicationName}>{prescription.medication}</h4>
// //                     <div style={styles.prescriptionDetails}>
// //                       <div>
// //                         <p style={styles.detailLabel}>Dosage</p>
// //                         <p style={styles.detailValue}>{prescription.dosage}</p>
// //                       </div>
// //                       <div>
// //                         <p style={styles.detailLabel}>Frequency</p>
// //                         <p style={styles.detailValue}>{prescription.frequency}</p>
// //                       </div>
// //                       <div>
// //                         <p style={styles.detailLabel}>Refills Remaining</p>
// //                         <p style={styles.detailValue}>{prescription.refills}</p>
// //                       </div>
// //                       <div>
// //                         <p style={styles.detailLabel}>Expires On</p>
// //                         <p style={styles.detailValue}>{prescription.expires}</p>
// //                       </div>
// //                     </div>
// //                     <button style={styles.secondaryButton}>Request Refill</button>
// //                   </div>
// //                 ))}
// //               </div>
// //             ) : (
// //               <p style={styles.noDataText}>No active prescriptions</p>
// //             )}
// //           </div>
// //         );
// //       case 'vitals':
// //         return (
// //           <div style={styles.tabContent}>
// //             <h3 style={styles.sectionTitle}>Health Vitals</h3>
// //             <div style={styles.vitalsContainer}>
// //               <div style={styles.vitalCard}>
// //                 <h4 style={styles.vitalTitle}>Blood Pressure</h4>
// //                 <p style={styles.vitalValue}>{vitals.bloodPressure}</p>
// //                 <p style={styles.vitalStatus}>Normal</p>
// //               </div>
// //               <div style={styles.vitalCard}>
// //                 <h4 style={styles.vitalTitle}>Heart Rate</h4>
// //                 <p style={styles.vitalValue}>{vitals.heartRate}</p>
// //                 <p style={styles.vitalStatus}>Normal</p>
// //               </div>
// //               <div style={styles.vitalCard}>
// //                 <h4 style={styles.vitalTitle}>Temperature</h4>
// //                 <p style={styles.vitalValue}>{vitals.temperature}</p>
// //                 <p style={styles.vitalStatus}>Normal</p>
// //               </div>
// //               <div style={styles.vitalCard}>
// //                 <h4 style={styles.vitalTitle}>Weight</h4>
// //                 <p style={styles.vitalValue}>{vitals.weight}</p>
// //                 <p style={styles.vitalStatus}>Healthy</p>
// //               </div>
// //             </div>
// //             <p style={styles.lastUpdated}>Last updated: {vitals.lastUpdated}</p>
// //             <button style={styles.primaryButton}>Sync Wearable Device</button>
// //           </div>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div style={styles.dashboardContainer}>
// //       <header style={styles.header}>
// //         <div style={styles.headerContent}>
// //           <h1 style={styles.logo}>Docon</h1>
// //           <ul>
            
// //           </ul>
// //           <div style={styles.userInfo}>
// //             <span style={styles.userName}>John Doe</span>
// //             <div style={styles.userAvatar}>JD</div>
// //           </div>
// //         </div>
// //       </header>

// //       <div style={styles.mainContent}>
// //         <div style={styles.sidebar}>
// //           <div style={styles.sidebarHeader}>
// //             <h2 style={styles.sidebarTitle}>Patient Dashboard</h2>
// //           </div>
// //           <nav style={styles.nav}>
// //             <button 
// //               style={activeTab === 'overview' ? styles.activeNavButton : styles.navButton}
// //               onClick={() => setActiveTab('overview')}
// //             >
// //               Overview
// //             </button>
// //             <button 
// //               style={activeTab === 'appointments' ? styles.activeNavButton : styles.navButton}
// //               onClick={() => setActiveTab('appointments')}
// //             >
// //               Appointments
// //             </button>
// //             <button 
// //               style={activeTab === 'medical' ? styles.activeNavButton : styles.navButton}
// //               onClick={() => setActiveTab('medical')}
// //             >
// //               Medical History
// //             </button>
// //             <button 
// //               style={activeTab === 'prescriptions' ? styles.activeNavButton : styles.navButton}
// //               onClick={() => setActiveTab('prescriptions')}
// //             >
// //               Prescriptions
// //             </button>
// //             <button 
// //               style={activeTab === 'vitals' ? styles.activeNavButton : styles.navButton}
// //               onClick={() => setActiveTab('vitals')}
// //             >
// //               Health Vitals
// //             </button>
// //           </nav>
// //           <div style={styles.sidebarFooter}>
// //             <button style={styles.settingsButton}>Settings</button>
// //             <button  onClick={handleLogout} className="logout-btn" style={styles.logoutButton}>Log Out</button>
// //           </div>
// //         </div>

// //         <div style={styles.contentArea}>
// //           {renderTabContent()}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   dashboardContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     minHeight: '100vh',
// //     backgroundColor: '#f5f7fa',
// //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// //   },
// //   header: {
// //     backgroundColor: '#1976d2',
// //     color: 'white',
// //     padding: '16px 24px',
// //     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
// //   },
// //   headerContent: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //   },
// //   logo: {
// //     margin: 0,
// //     fontSize: '24px',
// //     fontWeight: '600',
// //   },
// //   userInfo: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '12px',
// //   },
// //   userName: {
// //     fontSize: '16px',
// //   },
// //   userAvatar: {
// //     width: '40px',
// //     height: '40px',
// //     borderRadius: '50%',
// //     backgroundColor: '#ffffff',
// //     color: '#1976d2',
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //     fontWeight: 'bold',
// //   },
// //   mainContent: {
// //     display: 'flex',
// //     flex: 1,
// //     maxWidth: '1200px',
// //     margin: '0 auto',
// //     width: '100%',
// //   },
// //   sidebar: {
// //     width: '250px',
// //     backgroundColor: '#ffffff',
// //     borderRight: '1px solid #e0e0e0',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     padding: '24px 0',
// //   },
// //   sidebarHeader: {
// //     padding: '0 24px 16px',
// //     borderBottom: '1px solid #e0e0e0',
// //     marginBottom: '16px',
// //   },
// //   sidebarTitle: {
// //     margin: 0,
// //     fontSize: '18px',
// //     color: '#333333',
// //   },
// //   nav: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '8px',
// //     padding: '0 16px',
// //     flex: 1,
// //   },
// //   navButton: {
// //     padding: '12px 16px',
// //     textAlign: 'left',
// //     border: 'none',
// //     backgroundColor: 'transparent',
// //     color: '#555555',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '15px',
// //     transition: 'all 0.2s ease',
// //     ':hover': {
// //       backgroundColor: '#f0f0f0',
// //     },
// //   },
// //   activeNavButton: {
// //     padding: '12px 16px',
// //     textAlign: 'left',
// //     border: 'none',
// //     backgroundColor: '#e3f2fd',
// //     color: '#1976d2',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '15px',
// //     fontWeight: '500',
// //   },
// //   sidebarFooter: {
// //     padding: '16px 16px 0',
// //     borderTop: '1px solid #e0e0e0',
// //     marginTop: '16px',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '8px',
// //   },
// //   settingsButton: {
// //     padding: '10px 16px',
// //     textAlign: 'left',
// //     border: 'none',
// //     backgroundColor: 'transparent',
// //     color: '#555555',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     transition: 'all 0.2s ease',
// //     ':hover': {
// //       backgroundColor: '#f0f0f0',
// //     },
// //   },
// //   logoutButton: {
// //     padding: '10px 16px',
// //     textAlign: 'left',
// //     border: 'none',
// //     backgroundColor: 'transparent',
// //     color: '#d32f2f',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     transition: 'all 0.2s ease',
// //     ':hover': {
// //       backgroundColor: '#ffebee',
// //     },
// //   },
// //   contentArea: {
// //     flex: 1,
// //     padding: '24px',
// //     backgroundColor: '#ffffff',
// //   },
// //   tabContent: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '24px',
// //   },
// //   section: {
// //     backgroundColor: '#ffffff',
// //     borderRadius: '8px',
// //     padding: '20px',
// //     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
// //   },
// //   sectionTitle: {
// //     marginTop: 0,
// //     marginBottom: '16px',
// //     color: '#333333',
// //     fontSize: '18px',
// //     fontWeight: '600',
// //   },
// //   appointmentList: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '12px',
// //     marginBottom: '16px',
// //   },
// //   appointmentCard: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: '16px',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '6px',
// //     borderLeft: '4px solid #1976d2',
// //   },
// //   appointmentInfo: {
// //     flex: 1,
// //   },
// //   doctorName: {
// //     margin: '0 0 4px',
// //     fontSize: '16px',
// //     fontWeight: '600',
// //     color: '#333333',
// //   },
// //   specialty: {
// //     margin: '0 0 8px',
// //     fontSize: '14px',
// //     color: '#666666',
// //   },
// //   appointmentTime: {
// //     margin: '0 0 8px',
// //     fontSize: '14px',
// //     color: '#333333',
// //   },
// //   appointmentType: {
// //     display: 'inline-block',
// //     padding: '4px 8px',
// //     borderRadius: '4px',
// //     fontSize: '12px',
// //     fontWeight: '500',
// //   },
// //   actionButton: {
// //     padding: '8px 16px',
// //     backgroundColor: 'transparent',
// //     border: '1px solid #1976d2',
// //     color: '#1976d2',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     transition: 'all 0.2s ease',
// //     ':hover': {
// //       backgroundColor: '#e3f2fd',
// //     },
// //   },
// //   primaryButton: {
// //     padding: '10px 16px',
// //     backgroundColor: '#1976d2',
// //     border: 'none',
// //     color: 'white',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     fontWeight: '500',
// //     transition: 'all 0.2s ease',
// //     ':hover': {
// //       backgroundColor: '#1565c0',
// //     },
// //   },
// //   secondaryButton: {
// //     padding: '10px 16px',
// //     backgroundColor: 'transparent',
// //     border: '1px solid #1976d2',
// //     color: '#1976d2',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     transition: 'all 0.2s ease',
// //     ':hover': {
// //       backgroundColor: '#e3f2fd',
// //     },
// //   },
// //   noDataText: {
// //     color: '#666666',
// //     fontStyle: 'italic',
// //     margin: '16px 0',
// //   },
// //   medicalHistoryList: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '12px',
// //     marginBottom: '16px',
// //   },
// //   medicalRecordCard: {
// //     display: 'flex',
// //     padding: '12px',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '6px',
// //     gap: '16px',
// //   },
// //   recordDate: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#1976d2',
// //     minWidth: '80px',
// //   },
// //   recordDetails: {
// //     flex: 1,
// //     fontSize: '14px',
// //     color: '#333333',
// //   },
// //   recordDoctor: {
// //     margin: '0 0 8px',
// //     color: '#666666',
// //   },
// //   fullList: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '16px',
// //   },
// //   fullAppointmentCard: {
// //     padding: '16px',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '6px',
// //     borderLeft: '4px solid #1976d2',
// //   },
// //   appointmentHeader: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '8px',
// //     marginBottom: '12px',
// //   },
// //   specialtyBadge: {
// //     padding: '4px 8px',
// //     backgroundColor: '#e3f2fd',
// //     color: '#1976d2',
// //     borderRadius: '4px',
// //     fontSize: '12px',
// //     fontWeight: '500',
// //   },
// //   appointmentDetails: {
// //     display: 'flex',
// //     gap: '24px',
// //     marginBottom: '16px',
// //   },
// //   detailLabel: {
// //     margin: '0 0 4px',
// //     fontSize: '12px',
// //     color: '#666666',
// //   },
// //   detailValue: {
// //     margin: 0,
// //     fontSize: '14px',
// //     color: '#333333',
// //     fontWeight: '500',
// //   },
// //   appointmentActions: {
// //     display: 'flex',
// //     gap: '8px',
// //     justifyContent: 'flex-end',
// //   },
// //   cancelButton: {
// //     padding: '8px 16px',
// //     backgroundColor: 'transparent',
// //     border: '1px solid #d32f2f',
// //     color: '#d32f2f',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '14px',
// //     transition: 'all 0.2s ease',
// //     ':hover': {
// //       backgroundColor: '#ffebee',
// //     },
// //   },
// //   medicalRecordCardFull: {
// //     padding: '16px',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '6px',
// //   },
// //   recordHeader: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     marginBottom: '12px',
// //     paddingBottom: '8px',
// //     borderBottom: '1px solid #e0e0e0',
// //   },
// //   recordDateFull: {
// //     fontSize: '14px',
// //     fontWeight: '600',
// //     color: '#1976d2',
// //   },
// //   recordDoctorFull: {
// //     fontSize: '14px',
// //     color: '#666666',
// //   },
// //   recordDetailsFull: {
// //     display: 'flex',
// //     gap: '24px',
// //   },
// //   prescriptionGrid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
// //     gap: '16px',
// //   },
// //   prescriptionCard: {
// //     padding: '16px',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '6px',
// //     borderLeft: '4px solid #4caf50',
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '12px',
// //   },
// //   medicationName: {
// //     margin: 0,
// //     fontSize: '16px',
// //     fontWeight: '600',
// //     color: '#333333',
// //   },
// //   prescriptionDetails: {
// //     display: 'grid',
// //     gridTemplateColumns: '1fr 1fr',
// //     gap: '12px',
// //   },
// //   vitalsContainer: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
// //     gap: '16px',
// //     marginBottom: '16px',
// //   },
// //   vitalCard: {
// //     padding: '16px',
// //     backgroundColor: '#f9f9f9',
// //     borderRadius: '6px',
// //     textAlign: 'center',
// //   },
// //   vitalTitle: {
// //     margin: '0 0 8px',
// //     fontSize: '14px',
// //     color: '#666666',
// //   },
// //   vitalValue: {
// //     margin: '0 0 4px',
// //     fontSize: '24px',
// //     fontWeight: '600',
// //     color: '#1976d2',
// //   },
// //   vitalStatus: {
// //     margin: 0,
// //     fontSize: '12px',
// //     color: '#4caf50',
// //     fontWeight: '500',
// //   },
// //   lastUpdated: {
// //     fontSize: '12px',
// //     color: '#666666',
// //     textAlign: 'right',
// //     margin: '8px 0',
// //   },
// // };


// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// //  import AppointmentList from '../user/AppointmentList';
// // import MedicalHistory from '../user/MedicalHistory';
// // import Prescriptions from '../user/Prescription';
// // import HealthVitals from '../user/HealthVitals';
// // import AppointmentModal from '../user/AppointmentModal';

// // export const PatientNavbar = () => {
// //   const [activeTab, setActiveTab] = useState('appointments');
// //   const [appointments, setAppointments] = useState([]);
// //   const [showModal, setShowModal] = useState(false);
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     // Clear user session or token here if needed
// //     navigate('/login'); // Redirect to login page
// //   };

// //   const addAppointment = (newAppt) => {
// //     setAppointments([...appointments, { ...newAppt, id: Date.now() }]);
// //     setShowModal(false);
// //   };

// //   return (
// //     <div style={styles.dashboardContainer}>
// //       <header style={styles.header}>
// //         <h1 style={styles.logo}>DocOn</h1>
// //         <button style={styles.logoutButton} onClick={handleLogout}>
// //           Logout
// //         </button>
// //       </header>

// //       <div style={styles.mainContent}>
// //         <div style={styles.sidebar}>
// //           <nav style={styles.nav}>
// //             <button
// //               style={activeTab === 'appointments' ? styles.activeNavButton : styles.navButton}
// //               onClick={() => setActiveTab('appointments')}
// //             >
// //               Appointments
// //             </button>
// //             <button
// //               style={activeTab === 'medical' ? styles.activeNavButton : styles.navButton}
// //               onClick={() => setActiveTab('medical')}
// //             >
// //               Medical History
// //             </button>
// //             <button
// //               style={activeTab === 'prescriptions' ? styles.activeNavButton : styles.navButton}
// //               onClick={() => setActiveTab('prescriptions')}
// //             >
// //               Prescriptions
// //             </button>
// //             <button
// //               style={activeTab === 'vitals' ? styles.activeNavButton : styles.navButton}
// //               onClick={() => setActiveTab('vitals')}
// //             >
// //               Health Vitals
// //             </button>
// //           </nav>
// //         </div>

// //         <div style={styles.contentArea}>
// //           {activeTab === 'appointments' && (
// //             <AppointmentList 
// //               appointments={appointments} 
// //               onBookAppointment={() => setShowModal(true)} 
// //             />
// //           )}
// //           {activeTab === 'medical' && <MedicalHistory />}
// //           {activeTab === 'prescriptions' && <Prescriptions />}
// //           {activeTab === 'vitals' && <HealthVitals />}
// //         </div>
// //       </div>

// //       {showModal && (
// //         <AppointmentModal
// //           onClose={() => setShowModal(false)}
// //           onSave={addAppointment}
// //         />
// //       )}
// //     </div>
// //   );
// // };

// // const styles = {
// //   dashboardContainer: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     minHeight: '100vh',
// //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// //   },
// //   header: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //     padding: '1rem 2rem',
// //     backgroundColor: '#1976d2',
// //     color: 'white',
// //   },
// //   logo: {
// //     margin: 0,
// //     fontSize: '1.5rem',
// //   },
// //   logoutButton: {
// //     padding: '0.5rem 1rem',
// //     backgroundColor: 'transparent',
// //     border: '1px solid white',
// //     color: 'white',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     ':hover': {
// //       backgroundColor: 'rgba(255,255,255,0.1)',
// //     },
// //   },
// //   mainContent: {
// //     display: 'flex',
// //     flex: 1,
// //   },
// //   sidebar: {
// //     width: '200px',
// //     backgroundColor: '#f5f5f5',
// //     padding: '1rem',
// //   },
// //   nav: {
// //     display: 'flex',
// //     flexDirection: 'column',
// //     gap: '0.5rem',
// //   },
// //   navButton: {
// //     padding: '0.75rem',
// //     textAlign: 'left',
// //     border: 'none',
// //     backgroundColor: 'transparent',
// //     cursor: 'pointer',
// //     borderRadius: '4px',
// //     ':hover': {
// //       backgroundColor: '#e0e0e0',
// //     },
// //   },
// //   activeNavButton: {
// //     padding: '0.75rem',
// //     textAlign: 'left',
// //     border: 'none',
// //     backgroundColor: '#e3f2fd',
// //     color: '#1976d2',
// //     cursor: 'pointer',
// //     borderRadius: '4px',
// //     fontWeight: '500',
// //   },
// //   contentArea: {
// //     flex: 1,
// //     padding: '1rem',
// //   },
// // };





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   Calendar,
//   FileText,
//   Pill,
//   HeartPulse,
//   Settings,
//   LogOut,
//   User,
//   Bell
// } from 'lucide-react';

//  export const PatientNavbar = ({ children }) => {
//   const [activeTab, setActiveTab] = useState('appointments');
//   const [collapsed, setCollapsed] = useState(false);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   const menuItems = [
//     { id: 'appointments', label: 'Appointments', icon: <Calendar size={20} /> },
//     { id: 'medical', label: 'Medical History', icon: <FileText size={20} /> },
//     { id: 'prescriptions', label: 'Prescriptions', icon: <Pill size={20} /> },
//     { id: 'vitals', label: 'Health Vitals', icon: <HeartPulse size={20} /> },
//     { id: 'profile', label: 'My Profile', icon: <User size={20} /> }
//   ];

//   return (
//     <div style={styles.dashboardContainer}>
//       {/* Top Navbar with Gradient Theme */}
//       <nav style={{
//         ...styles.navbar,
//         background: 'linear-gradient(135deg, #0066cc 0%, #004080 100%)',
//         position: 'sticky',
//         top: 0,
//         zIndex: 1000
//       }}>
//         <div style={styles.navbarLeft}>
//           <button 
//             style={{
//               ...styles.menuButton,
//               color: 'white'
//             }}
//             onClick={() => setCollapsed(!collapsed)}
//           >
//             ☰
//           </button>
//           <h1 style={{
//             ...styles.logo,
//             color: 'white'
//           }}>DOCON</h1>
//         </div>
        
//         <div style={styles.navbarRight}>
//           <button style={{
//             ...styles.notificationButton,
//             color: 'white'
//           }}>
//             <Bell size={20} />
//             <span style={styles.notificationBadge}>3</span>
//           </button>
//           <div style={styles.userProfile}>
//             <div style={{
//               ...styles.avatar,
//               backgroundColor: 'rgba(255,255,255,0.2)',
//               color: 'white'
//             }}>JD</div>
//             <span style={{
//               ...styles.userName,
//               color: 'white'
//             }}>John Doe</span>
//           </div>
//         </div>
//       </nav>

//       <div style={styles.mainContent}>
//         {/* Sidebar with Gradient Theme */}
//         <aside style={{
//           ...styles.sidebar,
//           width: collapsed ? '80px' : '250px',
//           background: 'linear-gradient(135deg, #0066cc 0%, #004080 100%)'
//         }}>
//           <div style={styles.sidebarMenu}>
//             {menuItems.map(item => (
//               <button
//                 key={item.id}
//                 style={{
//                   ...styles.menuItem,
//                   color: activeTab === item.id ? 'white' : 'rgba(255,255,255,0.8)',
//                   backgroundColor: activeTab === item.id ? 'rgba(255,255,255,0.2)' : 'transparent',
//                   borderRight: activeTab === item.id ? '3px solid white' : 'none'
//                 }}
//                 onClick={() => setActiveTab(item.id)}
//               >
//                 <span style={styles.menuIcon}>{React.cloneElement(item.icon, { 
//                   color: activeTab === item.id ? 'white' : 'rgba(255,255,255,0.8)' 
//                 })}</span>
//                 {!collapsed && (
//                   <span style={styles.menuLabel}>{item.label}</span>
//                 )}
//               </button>
//             ))}
//           </div>

//           <div style={styles.sidebarFooter}>
//             <button style={{
//               ...styles.menuItem,
//               color: 'rgba(255,255,255,0.8)'
//             }}>
//               <span style={styles.menuIcon}><Settings size={20} color="rgba(255,255,255,0.8)" /></span>
//               {!collapsed && <span style={styles.menuLabel}>Settings</span>}
//             </button>
//             <button 
//               style={{
//                 ...styles.menuItem,
//                 color: 'rgba(255,255,255,0.8)'
//               }}
//               onClick={handleLogout}
//             >
//               <span style={styles.menuIcon}><LogOut size={20} color="rgba(255,255,255,0.8)" /></span>
//               {!collapsed && <span style={styles.menuLabel}>Logout</span>}
//             </button>
//           </div>
//         </aside>

//         {/* Main Content Area */}
//         <main style={{
//           ...styles.contentArea,
//           marginLeft: collapsed ? '80px' : '250px'
//         }}>
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   dashboardContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     fontFamily: "'Inter', sans-serif",
//     backgroundColor: '#f8f9fa'
//   },
//   navbar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: '0 24px',
//     height: '64px',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//   },
//   navbarLeft: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '16px'
//   },
//   menuButton: {
//     background: 'none',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
//     padding: '8px'
//   },
//   logo: {
//     margin: 0,
//     fontSize: '20px',
//     fontWeight: '700',
//     letterSpacing: '1px'
//   },
//   navbarRight: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '24px'
//   },
//   notificationButton: {
//     background: 'none',
//     border: 'none',
//     position: 'relative',
//     cursor: 'pointer'
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: '-5px',
//     right: '-5px',
//     backgroundColor: '#ff6b6b',
//     color: 'white',
//     borderRadius: '50%',
//     width: '18px',
//     height: '18px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '10px',
//     fontWeight: 'bold'
//   },
//   userProfile: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px'
//   },
//   avatar: {
//     width: '36px',
//     height: '36px',
//     borderRadius: '50%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: '600'
//   },
//   userName: {
//     fontSize: '14px',
//     fontWeight: '500'
//   },
//   mainContent: {
//     display: 'flex',
//     flex: 1
//   },
//   sidebar: {
//     boxShadow: '1px 0 3px rgba(0,0,0,0.1)',
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'fixed',
//     height: 'calc(100vh - 64px)',
//     transition: 'width 0.3s ease',
//     overflow: 'hidden',
//     zIndex: 90
//   },
//   sidebarMenu: {
//     flex: 1,
//     padding: '16px 0',
//     overflowY: 'auto'
//   },
//   menuItem: {
//     display: 'flex',
//     alignItems: 'center',
//     width: '100%',
//     padding: '12px 24px',
//     border: 'none',
//     background: 'none',
//     cursor: 'pointer',
//     textDecoration: 'none',
//     transition: 'all 0.2s ease',
//     gap: '12px',
//     ':hover': {
//       backgroundColor: 'rgba(255,255,255,0.1)'
//     }
//   },
//   menuIcon: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minWidth: '24px'
//   },
//   menuLabel: {
//     fontSize: '14px',
//     fontWeight: '500',
//     whiteSpace: 'nowrap'
//   },
//   sidebarFooter: {
//     padding: '16px 0',
//     borderTop: '1px solid rgba(255,255,255,0.1)'
//   },
//   contentArea: {
//     flex: 1,
//     padding: '24px',
//     transition: 'margin-left 0.3s ease',
//     backgroundColor: '#f8f9fa',
//     minHeight: 'calc(100vh - 64px)'
//   }
// };

// import React from 'react';
// import { useNavigate } from 'react-router-dom';



// export const PatientNavbar = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Here you would typically also handle any logout logic like clearing tokens/session
//     navigate('/'); // Navigate to home page
//   };

//   return (
//     <div>
//       <meta charSet="UTF-8" />
//       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       <title>Patient Portal</title>
//       {/* Bootstrap CSS */}
//       <link
//         href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
//         rel="stylesheet"
//       />
//       {/* Font Awesome for icons */}
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
//       />
//       {/* Top Navbar */}
//       <nav
//         className="navbar navbar-expand-lg navbar-dark"
//         style={{
//           position: "sticky",
//           top: 0,
//           zIndex: 1000,
//           background: "linear-gradient(135deg, #0066cc 0%, #004080 100%)",
//           boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//           height:60
//         }}
//       >
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#" style={{ fontWeight: 600 }}>
//             <i className="fas fa-heartbeat me-2" />
//             DOCON
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <a className="nav-link" href="#" style={{ color: "#ecf0f1" }}>
//                   <i className="fas fa-bell me-1" /> Notifications
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#" style={{ color: "#ecf0f1" }}>
//                   <i className="fas fa-envelope me-1" /> Messages
//                 </a>
//               </li>
//               <li className="nav-item dropdown">
//                 <a
//                   className="nav-link dropdown-toggle"
//                   href="#"
//                   id="navbarDropdown"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                   style={{ color: "#ecf0f1" }}
//                 >
//                   <i className="fas fa-user-circle me-1" /> John Doe
//                 </a>
//                 <ul
//                   className="dropdown-menu dropdown-menu-end"
//                   style={{
//                     border: "none",
//                     boxShadow: "0 2px 15px rgba(0,0,0,0.1)"
//                   }}
//                   aria-labelledby="navbarDropdown"
//                 >
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       <i className="fas fa-user me-2" />
//                       Profile
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="#">
//                       <i className="fas fa-cog me-2" />
//                       Settings
//                     </a>
//                   </li>
//                   <li>
//                     <hr className="dropdown-divider" />
//                   </li>
//                   <li>
//                     <button
//                       className="dropdown-item"
//                       onClick={handleLogout}
//                       style={{ color: "#e74c3c" }}
//                     >
//                       <i className="fas fa-sign-out-alt me-2" />
//                       Logout
//                     </button>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       {/* <div className="container-fluid">
//         <div className="row"> */}
//           {/* Sidebar */}
//           {/* <div
//             className="col-md-3 col-lg-2 d-md-block sidebar collapse"
//             style={{
//               backgroundColor: "#fff",
//               minHeight: "calc(100vh - 56px)",
//               boxShadow: "2px 0 10px rgba(0,0,0,0.05)",
//               paddingTop: 20
//             }}
//           >
//             <div className="position-sticky pt-3">
//               <ul className="nav flex-column">
//                 <li className="nav-item">
//                   <a
//                     className="nav-link active"
//                     href="#"
//                     style={{
//                       color: "#2c3e50",
//                       fontWeight: 500,
//                       borderLeft: "4px solid #3498db",
//                       paddingLeft: 16
//                     }}
//                   >
//                     <i className="fas fa-home me-2" /> Dashboard
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     href="#"
//                     style={{ color: "#7f8c8d", paddingLeft: 20 }}
//                   >
//                     <i className="fas fa-calendar-check me-2" /> Appointments
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     href="#"
//                     style={{ color: "#7f8c8d", paddingLeft: 20 }}
//                   >
//                     <i className="fas fa-prescription me-2" /> Prescriptions
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     href="#"
//                     style={{ color: "#7f8c8d", paddingLeft: 20 }}
//                   >
//                     <i className="fas fa-file-medical me-2" /> Medical Records
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     href="#"
//                     style={{ color: "#7f8c8d", paddingLeft: 20 }}
//                   >
//                     <i className="fas fa-flask me-2" /> Lab Results
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     href="#"
//                     style={{ color: "#7f8c8d", paddingLeft: 20 }}
//                   >
//                     <i className="fas fa-file-invoice-dollar me-2" /> Billing
//                   </a>
//                 </li>
//                 <li className="nav-item mt-3">
//                   <hr />
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     href="#"
//                     style={{ color: "#7f8c8d", paddingLeft: 20 }}
//                   >
//                     <i className="fas fa-question-circle me-2" /> Help Center
//                   </a>
//                 </li>
//                 <li className="nav-item">
//                   <a
//                     className="nav-link"
//                     href="#"
//                     style={{ color: "#7f8c8d", paddingLeft: 20 }}
//                   >
//                     <i className="fas fa-cog me-2" /> Settings
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div> */}
//           {/* Main Content */}
//           {/* <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
//             <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//               <h1 className="h2" style={{ color: "#2c3e50" }}>
//                 Patient Dashboard
//               </h1>
//             </div>
//             <div
//               className="alert alert-info"
//               style={{
//                 backgroundColor: "#e8f4fc",
//                 borderColor: "#b6e0fe",
//                 color: "#2c3e50"
//               }}
//             >
//               <i className="fas fa-info-circle me-2" /> Welcome back! You have 2
//               upcoming appointments this week.
//             </div> */}
//             {/* Your content goes here */}
//           {/* </main>
//         </div>
//       </div> */}
//       {/* Bootstrap JS Bundle with Popper */}
//       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";

// export const PatientNavbar = () => {
//     const { register, handleSubmit, reset } = useForm();
//     const [appointments, setAppointments] = useState([]);
//     const [doctors, setDoctors] = useState([]);

//     // Fetch Appointments from Backend
//     useEffect(() => {
//         const fetchAppointments = async () => {
//             try {
//                 const response = await axios.get(`/getallAppointments`);
//                 console.log("Appointments Data:", response.data);
//                 setAppointments(Array.isArray(response.data) ? response.data : []);
//             } catch (error) {
//                 console.error("Error fetching appointments", error);
//                 setAppointments([]);
//             }
//         };
        
//         const fetchDoctors = async () => {
//             try {
//                 const response = await axios.get(`/getalldoctor`);
//                 console.log("Doctors Data:", response.data);
//                 setDoctors(Array.isArray(response.data) ? response.data : []);
//             } catch (error) {
//                 console.error("Error fetching doctors", error);
//                 setDoctors([]);
//             }
//         };

//         fetchAppointments();
//         fetchDoctors();
//     }, []);

//     // Handle Appointment Submission
//     const onSubmit = async (data) => {
//         try {
//             const response = await axios.post(`/appointments`, data);
//             console.log("Appointment Created:", response.data);
//             alert("Appointment Booked Successfully");
//             setAppointments([...appointments, response.data]);
//             reset();
//         } catch (error) {
//             console.error("Error booking appointment", error);
//         }
//     };

//     // Handle Logout
//     const handleLogout = () => {
//         localStorage.removeItem("token"); // Clear auth token
//         window.location.href = "/login"; // Redirect to login
//     };

//     return (
//         <div className="d-flex">
//             {/* Sidebar */}
//             <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
//                 <h3>Dashboard</h3>
//                 <ul className="nav flex-column">
//                     <li className="nav-item"><a className="nav-link text-white" href="#">Home</a></li>
//                     <li className="nav-item"><a className="nav-link text-white" href="#">Appointments</a></li>
//                     <li className="nav-item"><button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button></li>
//                 </ul>
//             </div>
            
//             {/* Main Content */}
//             <div className="container-fluid">
//                 {/* Navbar */}
//                 <nav className="navbar navbar-light bg-light px-4">
//                     <span className="navbar-brand">Patient Dashboard</span>
//                 </nav>

//                 {/* Appointment Form */}
//                 <div className="p-4">
//                     <h4>Book an Appointment</h4>
//                     <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow-sm" style={{ maxWidth: "400px" }}>
//                         <div className="mb-3">
//                             <label className="form-label">Name</label>
//                             <input type="text" className="form-control" {...register("fullname", { required: true })} />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Email</label>
//                             <input type="email" className="form-control" {...register("email", { required: true })} />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Phone</label>
//                             <input type="number" className="form-control" {...register("phone", { required: true })} />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Doctor</label>
//                             <select className="form-control" {...register("doctor", { required: true })}>
//                                 <option value="">Select Doctor</option>
//                                 {Array.isArray(doctors) && doctors.map((doctor) => (
//                                     <option key={doctor.id} value={doctor.id}>{doctor.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Date</label>
//                             <input type="date" className="form-control" {...register("date", { required: true })} />
//                         </div>
//                         <div className="mb-3">
//                             <label className="form-label">Time</label>
//                             <input type="time" className="form-control" {...register("time", { required: true })} />
//                         </div>
//                         <button type="submit" className="btn btn-primary">Book Appointment</button>
//                     </form>
//                 </div>

//                 {/* Appointments List */}
//                 <div className="p-4">
//                     <h4>Upcoming Appointments</h4>
//                     <table className="table table-striped">
//                         <thead>
//                             <tr>
//                                 <th>Name</th>
//                                 <th>Email</th>
//                                 <th>Doctor</th>
//                                 <th>Date</th>
//                                 <th>Time</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {Array.isArray(appointments) && appointments.map((appointment, index) => (
//                                 <tr key={index}>
//                                     <td>{appointment.name}</td>
//                                     <td>{appointment.email}</td>
//                                     <td>{appointment.doctor}</td>
//                                     <td>{appointment.date}</td>
//                                     <td>{appointment.time}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     );
// };


// ---------------------------FINAL CODE--------------------------------------------------------


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useEffect } from 'react';
import { 
  faUser, 
  faCalendarAlt, 
  faFileMedical, 
  faPrescription, 
  faVideo, 
  faBell,
  faSignOutAlt,
  faUserCircle,
  faCog,
  faUserDoctor
} from '@fortawesome/free-solid-svg-icons';

export const PatientNavbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("John Doe");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Set active link based on current route
    setActiveLink(window.location.pathname);
    
    // Retrieve user data from localStorage
    const username = localStorage.getItem("name");
    if (username) {
      setUserName(username);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
    window.location.reload();
  };

  // Navbar link items data
  const navLinks = [
    { path: "/patientdashboard", icon: faUser, label: "Dashboard" },
    { path: "/appointments", icon: faCalendarAlt, label: "Book Appointments" },
    { path: "/myappointments", icon: faFileMedical, label: "My Appointments" },
    { path: "/doctorprofiles", icon: faUserDoctor, label: "Our Doctors" },
    { path: "/patientprescription", icon: faPrescription, label: "Prescriptions" },
    { path: "/telemedicine", icon: faVideo, label: "Telemedicine" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ 
      position: "sticky",
      top: 0,
      zIndex: 1000,
      background: "linear-gradient(135deg, #0066cc 0%, #004080 100%)",
      borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
      padding: "0.5rem 1.5rem",
      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)"
    }}>
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link 
          className="navbar-brand d-flex align-items-center" 
          to="/patientdashboard"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "1.5rem",
            letterSpacing: "0.5px",
            color: "#fff",
            transition: "all 0.3s ease"
          }}
        >
          <span style={{ 
            backgroundColor: "rgba(255,255,255,0.15)",
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "12px",
            transition: "all 0.3s ease"
          }}>
            <FontAwesomeIcon 
              icon={faUser} 
              style={{ 
                color: "#fff", 
                fontSize: "1.2rem" 
              }} 
            />
          </span>
          <span style={{ position: "relative" }}>
            DOCON
            <span style={{
              position: "absolute",
              bottom: "-3px",
              left: 0,
              width: "100%",
              height: "2px",
              backgroundColor: "rgba(255,255,255,0.5)",
              transform: "scaleX(0)",
              transformOrigin: "right",
              transition: "transform 0.3s ease"
            }} className="brand-underline"></span>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#patientNavbar"
          aria-controls="patientNavbar"
          aria-expanded="false"
          style={{ 
            border: "none",
            boxShadow: "none",
            padding: "0.5rem"
          }}
        >
          <span className="navbar-toggler-icon" style={{ fontSize: "1.1rem" }}></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="patientNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: "1.5rem" }}>
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <Link 
                  className={`nav-link ${activeLink === link.path ? "active" : ""}`} 
                  to={link.path}
                  style={{
                    color: activeLink === link.path ? "#fff" : "rgba(255,255,255,0.85)",
                    fontWeight: 500,
                    padding: "10px 16px",
                    margin: "0 4px",
                    borderRadius: "6px",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    fontSize: "0.95rem"
                  }}
                  onMouseEnter={(e) => {
                    if (activeLink !== link.path) {
                      e.currentTarget.style.color = "#fff";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeLink !== link.path) {
                      e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                    }
                  }}
                >
                  <FontAwesomeIcon 
                    icon={link.icon} 
                    className="me-2" 
                    style={{ 
                      width: "18px",
                      color: activeLink === link.path ? "#fff" : "rgba(255,255,255,0.85)"
                    }} 
                  />
                  {link.label}
                  {activeLink === link.path && (
                    <span style={{
                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60%",
                      height: "3px",
                      backgroundColor: "#fff",
                      borderRadius: "3px 3px 0 0"
                    }}></span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right-side Items */}
          <div className="d-flex align-items-center">
            {/* Notifications */}
            <div className="position-relative me-3">
              <Link 
                to="/notifications" 
                className="position-relative"
                style={{ 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transition: "all 0.2s ease",
                  color: "rgba(255,255,255,0.9)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.9)";
                }}
              >
                <FontAwesomeIcon icon={faBell} style={{ fontSize: "1.1rem" }} />
                <span 
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                  style={{ 
                    fontSize: "0.65rem",
                    padding: "4px 6px",
                    minWidth: "20px",
                    backgroundColor: "#ff4757",
                    border: "2px solid #0066cc"
                  }}
                >
                  3
                </span>
              </Link>
            </div>
            
            {/* User Dropdown */}
            <div className="dropdown">
              <button 
                className="btn dropdown-toggle d-flex align-items-center py-2 px-3" 
                type="button" 
                data-bs-toggle="dropdown" 
                style={{ 
                  backgroundColor: "rgba(255,255,255,0.1)", 
                  border: "none", 
                  color: "white", 
                  borderRadius: "8px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                }}
              >
                <div style={{ 
                  width: "36px", 
                  height: "36px", 
                  backgroundColor: "rgba(255,255,255,0.2)", 
                  borderRadius: "50%", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  marginRight: "10px", 
                  color: "#fff", 
                  fontWeight: "bold",
                  fontSize: "0.95rem"
                }}>
                  {userName?.charAt(0)?.toUpperCase() || "U"}
                </div>
                <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>
                  {userName?.split(' ')[0] || "User"}
                </span>
              </button>
              <ul 
                className="dropdown-menu dropdown-menu-end" 
                aria-labelledby="patientDropdown" 
                style={{
                  border: "none",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  borderRadius: "8px",
                  padding: "8px",
                  minWidth: "220px",
                  borderTop: "3px solid #0066cc",
                  marginTop: "8px"
                }}
              >
                <li>
                  <Link 
                    className="dropdown-item d-flex align-items-center py-2 px-3" 
                    to="/patientprofile"
                    style={{ 
                      fontWeight: 500,
                      borderRadius: "6px",
                      fontSize: "0.92rem",
                      transition: "all 0.2s ease",
                      color: "#333"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f8f9fa";
                      e.currentTarget.style.color = "#0066cc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#333";
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={faUserCircle} 
                      className="me-2" 
                      style={{ 
                        color: "#0066cc", 
                        width: "18px",
                        transition: "all 0.2s ease"
                      }} 
                    /> 
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item d-flex align-items-center py-2 px-3" 
                    to="/settings"
                    style={{ 
                      fontWeight: 500,
                      borderRadius: "6px",
                      fontSize: "0.92rem",
                      transition: "all 0.2s ease",
                      color: "#333"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#f8f9fa";
                      e.currentTarget.style.color = "#0066cc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#333";
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={faCog} 
                      className="me-2" 
                      style={{ 
                        color: "#0066cc", 
                        width: "18px",
                        transition: "all 0.2s ease"
                      }} 
                    /> 
                    Settings
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider my-1" style={{ opacity: 0.1 }} />
                </li>
                <li>
                  <button
                    className="dropdown-item d-flex align-items-center py-2 px-3" 
                    onClick={handleLogout}
                    style={{ 
                      fontWeight: 500,
                      color: "#ff4757",
                      borderRadius: "6px",
                      fontSize: "0.92rem",
                      width: "100%",
                      textAlign: "left",
                      background: "none",
                      border: "none",
                      transition: "all 0.2s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 71, 87, 0.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                    }}
                  >
                    <FontAwesomeIcon 
                      icon={faSignOutAlt} 
                      className="me-2" 
                      style={{ 
                        width: "18px",
                        transition: "all 0.2s ease"
                      }} 
                    /> 
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Global Styles */}
      <style>
        {`
          .navbar-brand:hover .brand-underline {
            transform: scaleX(1);
            transform-origin: left;
          }
          
          .nav-link.active {
            background-color: rgba(255,255,255,0.15) !important;
          }
          
          .dropdown-item:active {
            background-color: #f8f9fa !important;
            color: #0066cc !important;
          }
          
          @media (max-width: 992px) {
            .navbar-nav {
              margin-left: 0 !important;
              padding-top: 1rem;
            }
            
            .nav-item {
              margin-bottom: 0.5rem;
            }
            
            .d-flex.align-items-center {
              margin-top: 1rem;
              padding-top: 1rem;
              border-top: 1px solid rgba(255,255,255,0.1);
              width: 100%;
              justify-content: space-between;
            }
          }
        `}
      </style>
    </nav>
  );
};
export default PatientNavbar;