// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {
//   faCalendarAlt,
//   faFileMedical,
//   faPrescriptionBottleAlt,
//   faUserMd,
//   faHeartbeat,
//   faBell
// } from '@fortawesome/free-solid-svg-icons';
// import { PatientNavbar } from "../layout/PatientNavbar";

// export const  Dashboard = () => {
//   // Sample data - replace with actual API calls
//   const upcomingAppointments = [
//     { id: 1, doctor: 'Dr. Sarah Johnson', date: 'Today, 2:30 PM', specialty: 'Cardiology' },
//     { id: 2, doctor: 'Dr. Michael Chen', date: 'May 25, 10:00 AM', specialty: 'General Medicine' }
//   ];

//   const recentPrescriptions = [
//     { id: 1, medication: 'Atorvastatin', date: 'May 10, 2023', status: 'Active' },
//     { id: 2, medication: 'Metformin', date: 'April 28, 2023', status: 'Active' }
//   ];

//   const healthMetrics = {
//     bloodPressure: '120/80',
//     heartRate: '72',
//     glucoseLevel: '98',
//     lastUpdated: 'Today, 8:30 AM'
//   };

//   return (
//     <div><PatientNavbar></PatientNavbar>
//     <div className="patient-dashboard" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
//       <br />
//       {/* Header
//       <div className="dashboard-header py-4" style={{
//         background: "linear-gradient(135deg, rgba(0,123,255,0.9) 0%, rgba(106,27,154,0.9) 100%)",
//         color: 'white',
//         marginBottom: '2rem'
//       }}>
//         <div className="container">
//           <div className="d-flex justify-content-between align-items-center">
//             <h1 style={{
//               fontFamily: "'Montserrat', sans-serif",
//               fontWeight: 700,
//               fontSize: '1.8rem',
//               marginBottom: 0
//             }}>
//               <FontAwesomeIcon icon={faUserMd} className="me-3" />
//               Patient Dashboard
//             </h1>
//             <div className="d-flex align-items-center">
//               <div className="position-relative me-4">
//                 <Link to="/notifications" className="text-white" style={{ fontSize: '1.2rem' }}>
//                   <FontAwesomeIcon icon={faBell} />
//                   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
//                     3
//                   </span>
//                 </Link>
//               </div>
//               <div className="d-flex align-items-center">
//                 <div style={{
//                   width: '40px',
//                   height: '40px',
//                   background: 'rgba(255,255,255,0.3)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   marginRight: '10px'
//                 }}>
//                   <i className="fas fa-user"></i>
//                 </div>
//                 <span style={{ fontWeight: 500 }}>John Doe</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}

//       {/* Main Content */}
//       <div className="container">
//         <div className="row">
//           {/* Quick Stats Cards */}
//           <div className="col-md-4 mb-4">
//             <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px' }}>
//               <div className="card-body text-center">
//                 <div style={{
//                   width: '60px',
//                   height: '60px',
//                   background: 'rgba(0,123,255,0.1)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   margin: '0 auto 20px',
//                   color: '#007bff',
//                   fontSize: '1.5rem'
//                 }}>
//                   <FontAwesomeIcon icon={faCalendarAlt} />
//                 </div>
//                 <h5 style={{ color: '#333', marginBottom: '10px' }}>Upcoming Appointments</h5>
//                 <h2 style={{ color: '#007bff', marginBottom: '15px' }}>2</h2>
//                 <Link to="/appointments" className="btn btn-sm btn-outline-primary" style={{ borderRadius: '20px' }}>
//                   View All
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px' }}>
//               <div className="card-body text-center">
//                 <div style={{
//                   width: '60px',
//                   height: '60px',
//                   background: 'rgba(106,27,154,0.1)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   margin: '0 auto 20px',
//                   color: '#6a1b9a',
//                   fontSize: '1.5rem'
//                 }}>
//                   <FontAwesomeIcon icon={faPrescriptionBottleAlt} />
//                 </div>
//                 <h5 style={{ color: '#333', marginBottom: '10px' }}>Active Prescriptions</h5>
//                 <h2 style={{ color: '#6a1b9a', marginBottom: '15px' }}>2</h2>
//                 <Link to="/prescriptions" className="btn btn-sm btn-outline-primary" style={{ borderRadius: '20px' }}>
//                   View All
//                 </Link>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px' }}>
//               <div className="card-body text-center">
//                 <div style={{
//                   width: '60px',
//                   height: '60px',
//                   background: 'rgba(76,175,80,0.1)',
//                   borderRadius: '50%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   margin: '0 auto 20px',
//                   color: '#4caf50',
//                   fontSize: '1.5rem'
//                 }}>
//                   <FontAwesomeIcon icon={faHeartbeat} />
//                 </div>
//                 <h5 style={{ color: '#333', marginBottom: '10px' }}>Health Metrics</h5>
//                 <h2 style={{ color: '#4caf50', marginBottom: '15px' }}>Normal</h2>
//                 <Link to="/health-metrics" className="btn btn-sm btn-outline-primary" style={{ borderRadius: '20px' }}>
//                   View Details
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Upcoming Appointments */}
//         <div className="row mb-4">
//           <div className="col-lg-6">
//             <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
//               <div className="card-header bg-white border-0" style={{
//                 borderTopLeftRadius: '12px',
//                 borderTopRightRadius: '12px',
//                 padding: '1.25rem 1.5rem'
//               }}>
//                 <h5 className="mb-0" style={{ fontWeight: 600 }}>
//                   <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
//                   Upcoming Appointments
//                 </h5>
//               </div>
//               <div className="card-body">
//                 {upcomingAppointments.length > 0 ? (
//                   <div className="list-group list-group-flush">
//                     {upcomingAppointments.map(appointment => (
//                       <div key={appointment.id} className="list-group-item border-0 px-0 py-3">
//                         <div className="d-flex justify-content-between align-items-center">
//                           <div>
//                             <h6 className="mb-1" style={{ fontWeight: 600 }}>{appointment.doctor}</h6>
//                             <p className="mb-1 text-muted" style={{ fontSize: '0.85rem' }}>
//                               {appointment.specialty}
//                             </p>
//                           </div>
//                           <div className="text-end">
//                             <span className="badge bg-primary bg-opacity-10 text-primary" style={{ fontWeight: 500 }}>
//                               {appointment.date}
//                             </span>
//                             <div className="mt-2">
//                               <button className="btn btn-sm btn-outline-primary me-2" style={{ borderRadius: '20px' }}>
//                                 Reschedule
//                               </button>
//                               <button className="btn btn-sm btn-primary" style={{ borderRadius: '20px' }}>
//                                 Join Call
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-4">
//                     <p className="text-muted">No upcoming appointments</p>
//                     <Link to="/book-appointment" className="btn btn-primary" style={{ borderRadius: '20px' }}>
//                       Book an Appointment
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Recent Prescriptions */}
//           <div className="col-lg-6">
//             <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
//               <div className="card-header bg-white border-0" style={{
//                 borderTopLeftRadius: '12px',
//                 borderTopRightRadius: '12px',
//                 padding: '1.25rem 1.5rem'
//               }}>
//                 <h5 className="mb-0" style={{ fontWeight: 600 }}>
//                   <FontAwesomeIcon icon={faPrescriptionBottleAlt} className="me-2 text-primary" />
//                   Recent Prescriptions
//                 </h5>
//               </div>
//               <div className="card-body">
//                 {recentPrescriptions.length > 0 ? (
//                   <div className="list-group list-group-flush">
//                     {recentPrescriptions.map(prescription => (
//                       <div key={prescription.id} className="list-group-item border-0 px-0 py-3">
//                         <div className="d-flex justify-content-between align-items-center">
//                           <div>
//                             <h6 className="mb-1" style={{ fontWeight: 600 }}>{prescription.medication}</h6>
//                             <p className="mb-1 text-muted" style={{ fontSize: '0.85rem' }}>
//                               Issued: {prescription.date}
//                             </p>
//                           </div>
//                           <div>
//                             <span className={`badge ${prescription.status === 'Active' ? 'bg-success bg-opacity-10 text-success' : 'bg-secondary bg-opacity-10 text-secondary'}`} style={{ fontWeight: 500 }}>
//                               {prescription.status}
//                             </span>
//                             <div className="mt-2">
//                               <Link to={`/prescriptions/${prescription.id}`} className="btn btn-sm btn-outline-primary" style={{ borderRadius: '20px' }}>
//                                 View Details
//                               </Link>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 ) : (
//                   <div className="text-center py-4">
//                     <p className="text-muted">No recent prescriptions</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Health Metrics */}
//         <div className="row mb-4">
//           <div className="col-12">
//             <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
//               <div className="card-header bg-white border-0" style={{
//                 borderTopLeftRadius: '12px',
//                 borderTopRightRadius: '12px',
//                 padding: '1.25rem 1.5rem'
//               }}>
//                 <h5 className="mb-0" style={{ fontWeight: 600 }}>
//                   <FontAwesomeIcon icon={faHeartbeat} className="me-2 text-primary" />
//                   Health Metrics
//                 </h5>
//                 <p className="mb-0 text-muted" style={{ fontSize: '0.85rem' }}>
//                   Last updated: {healthMetrics.lastUpdated}
//                 </p>
//               </div>
//               <div className="card-body">
//                 <div className="row text-center">
//                   <div className="col-md-3 mb-3 mb-md-0">
//                     <div className="p-3" style={{ borderRadius: '10px', background: 'rgba(0,123,255,0.05)' }}>
//                       <h6 className="text-muted">Blood Pressure</h6>
//                       <h3 style={{ color: '#007bff', fontWeight: 700 }}>{healthMetrics.bloodPressure}</h3>
//                       <p className="mb-0 text-success" style={{ fontSize: '0.85rem' }}>
//                         <i className="fas fa-check-circle me-1"></i> Normal
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-md-3 mb-3 mb-md-0">
//                     <div className="p-3" style={{ borderRadius: '10px', background: 'rgba(220,53,69,0.05)' }}>
//                       <h6 className="text-muted">Heart Rate</h6>
//                       <h3 style={{ color: '#dc3545', fontWeight: 700 }}>{healthMetrics.heartRate} bpm</h3>
//                       <p className="mb-0 text-success" style={{ fontSize: '0.85rem' }}>
//                         <i className="fas fa-check-circle me-1"></i> Normal
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-md-3 mb-3 mb-md-0">
//                     <div className="p-3" style={{ borderRadius: '10px', background: 'rgba(40,167,69,0.05)' }}>
//                       <h6 className="text-muted">Glucose Level</h6>
//                       <h3 style={{ color: '#28a745', fontWeight: 700 }}>{healthMetrics.glucoseLevel} mg/dL</h3>
//                       <p className="mb-0 text-success" style={{ fontSize: '0.85rem' }}>
//                         <i className="fas fa-check-circle me-1"></i> Normal
//                       </p>
//                     </div>
//                   </div>
//                   <div className="col-md-3">
//                     <div className="p-3 h-100 d-flex flex-column justify-content-center" style={{ borderRadius: '10px', background: 'rgba(108,117,125,0.05)' }}>
//                       <Link to="/health-metrics" className="btn btn-outline-primary" style={{ borderRadius: '20px' }}>
//                         View All Metrics
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Quick Actions */}
//         <div className="row">
//           <div className="col-12">
//             <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
//               <div className="card-header bg-white border-0" style={{
//                 borderTopLeftRadius: '12px',
//                 borderTopRightRadius: '12px',
//                 padding: '1.25rem 1.5rem'
//               }}>
//                 <h5 className="mb-0" style={{ fontWeight: 600 }}>
//                   Quick Actions
//                 </h5>
//               </div>
//               <div className="card-body">
//                 <div className="row text-center">
//                   <div className="col-md-2 col-4 mb-3">
//                     <Link to="/book-appointment" className="text-decoration-none">
//                       <div className="p-3" style={{ borderRadius: '10px', background: 'rgba(0,123,255,0.05)' }}>
//                         <div style={{
//                           width: '50px',
//                           height: '50px',
//                           background: 'rgba(0,123,255,0.1)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           margin: '0 auto 10px',
//                           color: '#007bff',
//                           fontSize: '1.25rem'
//                         }}>
//                           <FontAwesomeIcon icon={faCalendarAlt} />
//                         </div>
//                         <span className="text-dark" style={{ fontSize: '0.85rem' }}>Book Appointment</span>
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="col-md-2 col-4 mb-3">
//                     <Link to="/telemedicine" className="text-decoration-none">
//                       <div className="p-3" style={{ borderRadius: '10px', background: 'rgba(106,27,154,0.05)' }}>
//                         <div style={{
//                           width: '50px',
//                           height: '50px',
//                           background: 'rgba(106,27,154,0.1)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           margin: '0 auto 10px',
//                           color: '#6a1b9a',
//                           fontSize: '1.25rem'
//                         }}>
//                           <FontAwesomeIcon icon={faUserMd} />
//                         </div>
//                         <span className="text-dark" style={{ fontSize: '0.85rem' }}>Telemedicine</span>
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="col-md-2 col-4 mb-3">
//                     <Link to="/prescriptions" className="text-decoration-none">
//                       <div className="p-3" style={{ borderRadius: '10px', background: 'rgba(40,167,69,0.05)' }}>
//                         <div style={{
//                           width: '50px',
//                           height: '50px',
//                           background: 'rgba(40,167,69,0.1)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           margin: '0 auto 10px',
//                           color: '#28a745',
//                           fontSize: '1.25rem'
//                         }}>
//                           <FontAwesomeIcon icon={faPrescriptionBottleAlt} />
//                         </div>
//                         <span className="text-dark" style={{ fontSize: '0.85rem' }}>Prescriptions</span>
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="col-md-2 col-4 mb-3">
//                     <Link to="/medical-records" className="text-decoration-none">
//                       <div className="p-3" style={{ borderRadius: '10px', background: 'rgba(255,193,7,0.05)' }}>
//                         <div style={{
//                           width: '50px',
//                           height: '50px',
//                           background: 'rgba(255,193,7,0.1)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           margin: '0 auto 10px',
//                           color: '#ffc107',
//                           fontSize: '1.25rem'
//                         }}>
//                           <FontAwesomeIcon icon={faFileMedical} />
//                         </div>
//                         <span className="text-dark" style={{ fontSize: '0.85rem' }}>Medical Records</span>
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="col-md-2 col-4 mb-3">
//                     <Link to="/health-metrics" className="text-decoration-none">
//                       <div className="p-3" style={{ borderRadius: '10px', background: 'rgba(220,53,69,0.05)' }}>
//                         <div style={{
//                           width: '50px',
//                           height: '50px',
//                           background: 'rgba(220,53,69,0.1)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           margin: '0 auto 10px',
//                           color: '#dc3545',
//                           fontSize: '1.25rem'
//                         }}>
//                           <FontAwesomeIcon icon={faHeartbeat} />
//                         </div>
//                         <span className="text-dark" style={{ fontSize: '0.85rem' }}>Health Metrics</span>
//                       </div>
//                     </Link>
//                   </div>
//                   <div className="col-md-2 col-4 mb-3">
//                     <Link to="/find-doctor" className="text-decoration-none">
//                       <div className="p-3" style={{ borderRadius: '10px', background: 'rgba(23,162,184,0.05)' }}>
//                         <div style={{
//                           width: '50px',
//                           height: '50px',
//                           background: 'rgba(23,162,184,0.1)',
//                           borderRadius: '50%',
//                           display: 'flex',
//                           alignItems: 'center',
//                           justifyContent: 'center',
//                           margin: '0 auto 10px',
//                           color: '#17a2b8',
//                           fontSize: '1.25rem'
//                         }}>
//                           <i className="fas fa-search"></i>
//                         </div>
//                         <span className="text-dark" style={{ fontSize: '0.85rem' }}>Find a Doctor</span>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };
// export default Dashboard




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import HealthVitals from "./HealthVitals";
// import PatientNavbar from "../layout/PatientNavbar";

// export const Dashboard = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const userId = localStorage.getItem("Id");

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`/getprofileByUser/${userId}`);
//         console.log(res.data);
//         setProfile(res.data.data[0]); // ✅ Access first profile
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) fetchProfile();
//     else {
//       console.warn("No user ID found in localStorage");
//       setLoading(false);
//     }
//   }, []);

//   return (
//     <div>
//       <PatientNavbar />
//       {loading ? (
//         <div>Loading...</div>
//       ) : !profile ? (
//         <div>
//           <h1>No profile found. <br /> Please setup your profile in My Profile Section.</h1>
//         </div>
//       ) : (
//         <div className="card p-4 shadow mx-auto my-5" style={{ maxWidth: "600px" }}>
//           <h2 className="mb-4">Patient Profile</h2>

//           <h4>Personal Details</h4>
//           <p><strong>Full Name:</strong> {profile.fullname}</p>
//           <p><strong>Age:</strong> {profile.age}</p>
//           <p><strong>Gender:</strong> {profile.gender}</p>
//           <p><strong>Height:</strong> {profile.height} cm</p>
//           <p><strong>Weight:</strong> {profile.weight} kg</p>

//           <h4>Address</h4>
//           <p><strong>State:</strong> {profile.state}</p>
//           <p><strong>City:</strong> {profile.city}</p>

//           <h4>Contact Details</h4>
//           <p><strong>Phone:</strong> {profile.phone}</p>

//           <h4>Medical History</h4>
//           <p><strong>Allergies:</strong> {profile.allergies || "None"}</p>
//           <p><strong>Current Medications:</strong> {profile.medications || "None"}</p>
//         </div>
//       )}
//       {/* <HealthVitals /> */}
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import PatientNavbar from "../layout/PatientNavbar";

// export const Dashboard = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const userId = localStorage.getItem("Id");

//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get(`/getprofileByUser/${userId}`);
//         console.log(res.data);
//         setProfile(res.data.data[0]); // ✅ Access first profile
//       } catch (err) {
//         console.error("Error fetching profile:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (userId) fetchProfile();
//     else {
//       console.warn("No user ID found in localStorage");
//       setLoading(false);
//     }
//   }, []);

//   return (
//     <div>
//       <PatientNavbar />
//       {loading ? (
//         <div>Loading...</div>
//       ) : !profile ? (
//         <div>
//           <h1>
//             No profile found. <br /> Please setup your profile in My Profile Section.
//           </h1>
//         </div>
//       ) : (
//         <div className="card p-4 shadow mx-auto my-5" style={{ maxWidth: "600px" }}>
//           <h2 className="mb-4 text-center">Patient Profile</h2>

//           {profile.image && (
//             <div className="text-center mb-4">
//               <img
//                 src={profile.image}
//                 alt="Profile"
//                 className="rounded-circle shadow"
//                 style={{ width: "150px", height: "150px", objectFit: "cover" }}
//               />
//             </div>
//           )}

//           <h4>Personal Details</h4>
//           <p><strong>Full Name:</strong> {profile.fullname}</p>
//           <p><strong>Age:</strong> {profile.age}</p>
//           <p><strong>Gender:</strong> {profile.gender}</p>
//           <p><strong>Height:</strong> {profile.height} cm</p>
//           <p><strong>Weight:</strong> {profile.weight} kg</p>

//           <h4>Address</h4>
//           <p><strong>State:</strong> {profile.state}</p>
//           <p><strong>City:</strong> {profile.city}</p>

//           <h4>Contact Details</h4>
//           <p><strong>Phone:</strong> {profile.phone}</p>

//           <h4>Medical History</h4>
//           <p><strong>Allergies:</strong> {profile.allergies || "None"}</p>
//           <p><strong>Current Medications:</strong> {profile.medications || "None"}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dashboard;


// ----------------FINAL CODE -----------------------------------

import React, { useEffect, useState } from "react";
import axios from "axios";
import PatientNavbar from "../layout/PatientNavbar";

export const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("profile");

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
};

  // Sample health vitals data - replace with real data from your API
  const [healthVitals, setHealthVitals] = useState({
    heartRate: 72,
    bloodPressure: "120/80",
    bloodSugar: 95,
    oxygenLevel: 98,
    temperature: 98.6,
    lastUpdated: new Date().toISOString()
  });

  useEffect(() => {
    const userId = localStorage.getItem("Id");

    const fetchProfile = async () => {
      try {
        const res = await axios.get(`/getprofileByUser/${userId}`);
        setProfile(res.data.data[0]);
      } catch (err) {
        console.error("Error fetching profile:", err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) fetchProfile();
    else {
      console.warn("No user ID found in localStorage");
      setLoading(false);
    }
  }, []);

  const renderVitalCard = (icon, title, value, unit, status = "normal") => {
    const statusColors = {
      normal: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger"
    };

    

    return (
      <div className="col-md-4 mb-4">
        <div className={`card h-100 border-0 shadow-sm rounded-3 overflow-hidden ${statusColors[status]}-light`}>
          <div className="card-body text-center p-3">
            <div className={`icon-circle mb-3 mx-auto ${statusColors[status]}`}>
              <i className={`fas ${icon} text-white`}></i>
            </div>
            <h5 className="text-muted mb-1">{title}</h5>
            <h3 className="mb-0">{value} <small className="text-muted">{unit}</small></h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="dashboard-container" style={{ minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
      <PatientNavbar />
      
      {loading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
          <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : !profile ? (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: "70vh" }}>
          <div className="text-center p-5 bg-white rounded-4 shadow" style={{ maxWidth: "600px" }}>
            <div className="health-icon mb-4">
              <i className="fas fa-user-md text-primary"></i>
              <i className="fas fa-plus text-secondary"></i>
            </div>
            <h3 className="mb-3">Complete Your Health Profile</h3>
            <p className="text-muted mb-4">
              Setup your profile to unlock personalized health insights and features.
            </p>
            <button 
              className="btn btn-primary px-4 py-2 rounded-pill"
              onClick={() => window.location.href = "/patientprofile"}
            >
              <i className="fas fa-edit me-2"></i> Setup Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="container py-4">
          {/* Profile Header with Tabs */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="profile-header-card bg-white rounded-4 shadow-sm p-4">
                <div className="d-flex align-items-center">
                  {profile.image && (
                    <div className="profile-avatar me-4">
                      <img
                        src={profile.image}
                        alt="Profile"
                        className="rounded-circle shadow"
                        style={{ width: "80px", height: "80px", objectFit: "cover", border: "3px solid #fff" }}
                      />
                    </div>
                  )}
                  <div>
                    <h2 className="mb-1">{profile.fullname}</h2>
                    <div className="d-flex flex-wrap">
                      <span className="badge bg-primary-light text-primary me-2 mb-2">
                        <i className="fas fa-user me-1"></i> {profile.gender}
                      </span>
                      <span className="badge bg-primary-light text-primary me-2 mb-2">
                        <i className="fas fa-birthday-cake me-1"></i> {profile.age} years
                      </span>
                      <span className="badge bg-primary-light text-primary me-2 mb-2">
                        <i className="fas fa-ruler-vertical me-1"></i> {profile.height} cm
                      </span>
                      <span className="badge bg-primary-light text-primary mb-2">
                        <i className="fas fa-weight me-1"></i> {profile.weight} kg
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="row mb-4">
            <div className="col-12">
              <ul className="nav nav-tabs nav-justified" id="dashboardTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "profile" ? "active" : ""}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <i className="fas fa-user-circle me-2"></i> Profile
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "vitals" ? "active" : ""}`}
                    onClick={() => setActiveTab("vitals")}
                  >
                    <i className="fas fa-heartbeat me-2"></i> Health Vitals
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className={`nav-link ${activeTab === "history" ? "active" : ""}`}
                    onClick={() => setActiveTab("history")}
                  >
                    <i className="fas fa-history me-2"></i> Medical History
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {/* Profile Tab */}
            {activeTab === "profile" && (
              <div className="row">
                <div className="col-lg-8">
                  <div className="card border-0 shadow-sm rounded-3 mb-4">
                    <div className="card-header bg-white border-0 py-3">
                      <h4 className="mb-0">
                        <i className="fas fa-info-circle text-primary me-2"></i>
                        Personal Information
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="text-muted small">Full Name</label>
                          <p className="h5">{profile.fullname}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="text-muted small">Date of Birth</label>
                          <p className="h5">{formatDate(profile.dob || "Not specified")}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="text-muted small">Gender</label>
                          <p className="h5">{profile.gender}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="text-muted small">Blood Type</label>
                          <p className="h5">{profile.bloodType || "Unknown"}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card border-0 shadow-sm rounded-3">
                    <div className="card-header bg-white border-0 py-3">
                      <h4 className="mb-0">
                        <i className="fas fa-map-marker-alt text-primary me-2"></i>
                        Contact Information
                      </h4>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label className="text-muted small">Email</label>
                          <p className="h5">{profile.email || "Not specified"}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="text-muted small">Phone</label>
                          <p className="h5">{profile.phone}</p>
                        </div>
                        {/* <div className="col-12 mb-3">
                          <label className="text-muted small">Address</label>
                          <p className="h5">{profile.address || "Not specified"}</p>
                        </div> */}
                        <div className="col-md-6 mb-3">
                          <label className="text-muted small">City</label>
                          <p className="h5">{profile.city}</p>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label className="text-muted small">State</label>
                          <p className="h5">{profile.state}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="card border-0 shadow-sm rounded-3">
                    <div className="card-header bg-white border-0 py-3">
                      <h4 className="mb-0">
                        <i className="fas fa-bell text-primary me-2"></i>
                        Quick Actions
                      </h4>
                    </div>
                    <div className="card-body">
                      <a href="/appointments">
                      <button className="btn btn-outline-primary rounded-pill w-100 mb-2">
                        <i className="fas fa-calendar-plus me-2"></i> Book Appointment
                      </button></a>
                      <a href="/patientprescription">
                      <button className="btn btn-outline-primary rounded-pill w-100 mb-2">
                        <i className="fas fa-prescription me-2"></i>Prescription
                      </button></a>
                      <a href="/doctorprofiles">
                      <button className="btn btn-outline-primary rounded-pill w-100">
                        <i className="fas fa-file-medical me-2"></i> View Doctors
                      </button></a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Health Vitals Tab */}
            {activeTab === "vitals" && (
              <div>
                <div className="row mb-4">
                  {renderVitalCard("fa-heart", "Heart Rate", healthVitals.heartRate, "bpm", 
                    healthVitals.heartRate > 100 ? "warning" : "normal")}
                  {renderVitalCard("fa-tint", "Blood Pressure", healthVitals.bloodPressure, "mmHg",
                    healthVitals.bloodPressure.split('/')[0] > 130 ? "warning" : "normal")}
                  {renderVitalCard("fa-flask", "Blood Sugar", healthVitals.bloodSugar, "mg/dL",
                    healthVitals.bloodSugar > 140 ? "warning" : "normal")}
                  {renderVitalCard("fa-lungs", "Oxygen Level", healthVitals.oxygenLevel, "%",
                    healthVitals.oxygenLevel < 95 ? "warning" : "normal")}
                  {renderVitalCard("fa-thermometer-half", "Temperature", healthVitals.temperature, "°F",
                    healthVitals.temperature > 99.5 ? "warning" : "normal")}
                </div>

                <div className="card border-0 shadow-sm rounded-3 mb-4">
                  <div className="card-header bg-white border-0 py-3">
                    <h4 className="mb-0">
                      <i className="fas fa-chart-line text-primary me-2"></i>
                      Health Trends
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="health-chart-placeholder bg-light rounded-3 p-4 text-center text-muted">
                      <i className="fas fa-chart-area mb-3" style={{ fontSize: "2rem" }}></i>
                      <p>Health data visualization will appear here</p>
                    </div>
                  </div>
                </div>

                <div className="card border-0 shadow-sm rounded-3">
                  <div className="card-header bg-white border-0 py-3">
                    <h4 className="mb-0">
                      <i className="fas fa-comment-medical text-primary me-2"></i>
                      Health Insights
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="alert alert-success">
                      <i className="fas fa-check-circle me-2"></i>
                      Your blood pressure is within normal range. Keep it up!
                    </div>
                    <div className="alert alert-info">
                      <i className="fas fa-info-circle me-2"></i>
                      Consider increasing your daily water intake to 8 glasses.
                    </div>
                    <div className="alert alert-warning">
                      <i className="fas fa-exclamation-triangle me-2"></i>
                      Your blood sugar levels are slightly elevated. Monitor your carbohydrate intake.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Medical History Tab */}
            {activeTab === "history" && (
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm rounded-3 h-100">
                    <div className="card-header bg-white border-0 py-3">
                      <h4 className="mb-0">
                        <i className="fas fa-allergies text-primary me-2"></i>
                        Allergies
                      </h4>
                    </div>
                    <div className="card-body">
                      {profile.allergies ? (
                        <ul className="list-group list-group-flush">
                          {profile.allergies.split(',').map((allergy, index) => (
                            <li key={index} className="list-group-item border-0 px-0">
                              <i className="fas fa-circle text-danger me-2" style={{ fontSize: "0.5rem" }}></i>
                              {allergy.trim()}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-center text-muted py-4">
                          <i className="fas fa-check-circle text-success mb-3" style={{ fontSize: "2rem" }}></i>
                          <p>No known allergies</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="col-md-6 mb-4">
                  <div className="card border-0 shadow-sm rounded-3 h-100">
                    <div className="card-header bg-white border-0 py-3">
                      <h4 className="mb-0">
                        <i className="fas fa-prescription-bottle-alt text-primary me-2"></i>
                        Medications
                      </h4>
                    </div>
                    <div className="card-body">
                      {profile.medications ? (
                        <ul className="list-group list-group-flush">
                          {profile.medications.split(',').map((med, index) => (
                            <li key={index} className="list-group-item border-0 px-0">
                              <i className="fas fa-pills text-primary me-2"></i>
                              {med.trim()}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-center text-muted py-4">
                          <i className="fas fa-check-circle text-success mb-3" style={{ fontSize: "2rem" }}></i>
                          <p>No current medications</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .dashboard-container {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .profile-header-card {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border: 1px solid rgba(0, 102, 204, 0.1);
        }
        .health-icon {
          position: relative;
          font-size: 3rem;
        }
        .health-icon .fa-plus {
          position: absolute;
          right: -10px;
          bottom: -10px;
          font-size: 1.5rem;
          background: white;
          border-radius: 50%;
          padding: 5px;
        }
        .icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .nav-tabs .nav-link {
          border: none;
          color: #6c757d;
          font-weight: 500;
          padding: 1rem;
          position: relative;
        }
        .nav-tabs .nav-link.active {
          color: #0066cc;
          background: transparent;
        }
        .nav-tabs .nav-link.active:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: #0066cc;
          border-radius: 3px 3px 0 0;
        }
        .badge.bg-primary-light {
          background-color: rgba(0, 102, 204, 0.1);
        }
        .health-chart-placeholder {
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .card {
          transition: all 0.3s ease;
        }
        .card:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;