// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useState } from 'react'
// import { PatientNavbar } from '../layout/PatientNavbar'
// export const MyAppointments = () => {

//     const [appointments, setappointments] = useState([])

//     const cancelAppointment = async (id) => {
//         try {
//             await axios.delete(`/appointment/${id}`);
//             alert("Appointment cancelled successfully!");
//             getallAppointments(); // Refresh the list after deletion
//         } catch (error) {
//             console.error("Error cancelling appointment", error);
//             alert("Failed to cancel appointment");
//         }
//     };
    

//     const getallAppointments = async ()=>{
//         const res = await axios.get("/getallAppointment")
//         console.log(res.data)
//         setappointments(res.data.data)
//     }

//     useEffect (()=>{
//         getallAppointments()
//     },[])

//   return (
//     <div> <PatientNavbar></PatientNavbar>
//     <div style={{textAlign:"center"}}>
//         MY APPOINTMENTS
// <table className='table table-dark'>
//     <thead>
//         <tr>
//             <th>doctorId</th>
//             <th>date</th>
//             <th>time</th>
//             <th>cancel</th>
//         </tr>
//     </thead>
//     <tbody>
//         {
//             appointments?.map((appointment)=>{
//                 return <tr>
//                     <td>{appointment.doctorname}</td>
//                     <td>{appointment.date}</td>
//                     <td>{appointment.time}</td>
//                     <td>
//                 <button 
//                     className="btn btn-danger" 
//                     onClick={() => cancelAppointment(appointment._id)}
//                 >
//                     Cancel
//                 </button>
//             </td>
//                 </tr>

//             })
//         }
//     </tbody>
// </table>
//     </div>
//     </div>

//   )
// }

// ---------------------------------------------------------------------------------------------------------
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { PatientNavbar } from "../layout/PatientNavbar";

// export const MyAppointments = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const getUserAppointments = async () => {
//         try {
//             setLoading(true);
//             const userId = localStorage.getItem("Id");

//             if (!userId) {
//                 setError("User not logged in. Please login first.");
//                 setLoading(false);
//                 return;
//             }

//             const res = await axios.get(`/getAppointmentsByUser/${userId}`);
//             setAppointments(res.data.data);
//             setError(null);
//         } catch (error) {
//             console.error("Error fetching user appointments", error);
//             setError("Failed to load appointments. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getUserAppointments();
//     }, []);

//     const handleCancelAppointment = async (id) => {
//         try {
//             const res = await axios.delete(`/appointment/${id}`);
//             alert(res.data.message || "Appointment cancelled successfully!");
//             getUserAppointments();
//         } catch (error) {
//             console.error("Error cancelling appointment:", error);
//             alert(error.response?.data?.message || "Failed to cancel appointment");
//         }
//     };

//     const formatDate = (dateString) => {
//         return new Date(dateString).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
//     };

//     return (
//         <div style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif", backgroundColor: "#f5f7fa", minHeight: "100vh" }}>
//             <PatientNavbar />
//             <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
//                 <h1 style={{ color: "#2c3e50", fontSize: "2rem", fontWeight: "300", marginBottom: "2rem", textAlign: "center", borderBottom: "1px solid #e0e0e0", paddingBottom: "1rem" }}>
//                     My Appointments
//                 </h1>

//                 {error && <div style={{ backgroundColor: "#f8d7da", color: "#721c24", padding: "1rem", borderRadius: "4px", marginBottom: "1rem", textAlign: "center" }}>{error}</div>}

//                 {loading ? (
//                     <div style={{ display: "flex", justifyContent: "center", padding: "2rem" }}>
//                         <div style={{ border: "4px solid #f3f3f3", borderTop: "4px solid #3498db", borderRadius: "50%", width: "40px", height: "40px", animation: "spin 1s linear infinite" }}></div>
//                     </div>
//                 ) : appointments.length === 0 ? (
//                     <div style={{ textAlign: "center", padding: "2rem", color: "#7f8c8d" }}>
//                         <h3>No Appointments Scheduled</h3>
//                         <p>You don't have any upcoming appointments.</p>
//                     </div>
//                 ) : (
//                     <div style={{ backgroundColor: "white", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", overflow: "hidden" }}>
//                         <table style={{ width: "100%", borderCollapse: "collapse" }}>
//                             <thead>
//                                 <tr style={{ backgroundColor: "#34495e", color: "white", textAlign: "left" }}>
//                                     <th style={{ padding: "1rem", fontWeight: "500" }}>Doctor</th>
//                                     <th style={{ padding: "1rem", fontWeight: "500" }}>Date</th>
//                                     <th style={{ padding: "1rem", fontWeight: "500" }}>Time</th>
//                                     <th style={{ padding: "1rem", fontWeight: "500" }}>Type</th>
//                                     <th style={{ padding: "1rem", fontWeight: "500" }}>Action</th>
//                                     <th style={{ padding: "1rem", fontWeight: "500" }}>Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {appointments.map((appointment, index) => (
//                                     <tr key={index} style={{ borderBottom: "1px solid #e0e0e0", backgroundColor: index % 2 === 0 ? "white" : "#f8f9fa" }}>
//                                         <td style={{ padding: "1rem", color: "#34495e" }}>{appointment.doctorName}</td>
//                                         <td style={{ padding: "1rem", color: "#34495e" }}>{formatDate(appointment.date)}</td>
//                                         <td style={{ padding: "1rem", color: "#34495e" }}>{appointment.time}</td>
//                                         <td style={{ padding: "1rem", color: "#34495e" }}>{appointment.appointmentType}</td>
//                                         <td style={{ padding: "1rem" }}>
//                                             <button
//                                                 style={{
//                                                     backgroundColor: "#e74c3c",
//                                                     color: "white",
//                                                     border: "none",
//                                                     padding: "0.5rem 1rem",
//                                                     borderRadius: "4px",
//                                                     cursor: "pointer",
//                                                     transition: "all 0.3s ease",
//                                                 }}
//                                                 onClick={() => handleCancelAppointment(appointment._id)}
//                                                 disabled={loading}
//                                             >
//                                                 Cancel
//                                             </button>
//                                         </td>
//                                         <td style={{ padding: "1rem", color: "#34495e" }}>
//                                             {appointment.status === "Confirmed" ? "Confirmed" : "Pending"}
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { CalendarCheck, ClockHistory, PersonBadge } from 'react-bootstrap-icons';
// import { PatientNavbar } from '../layout/PatientNavbar';

// export const MyAppointments = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const getAppointments = async () => {
//         try {
//             setLoading(true);
//             const res = await axios.get("/getallAppointment");
//             setAppointments(res.data.data);
//         } catch (err) {
//             setError("Failed to fetch appointments. Please try again later.");
//             console.error("Error fetching appointments:", err);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getAppointments();
//     }, []);

//     const formatDate = (dateString) => {
//         const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
//         return new Date(dateString).toLocaleDateString(undefined, options);
//     };

//     const formatTime = (timeString) => {
//         return new Date(`1970-01-01T${timeString}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     // Inline styles
//     const styles = {
//         container: {
//             padding: '2rem',
//             maxWidth: '1200px',
//             margin: '0 auto',
//             fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
//         },
//         card: {
//             borderRadius: '12px',
//             overflow: 'hidden',
//             boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//             border: 'none'
//         },
//         cardHeader: {
//             backgroundColor: '#2c3e50',
//             color: 'white',
//             padding: '1.5rem',
//             borderBottom: 'none'
//         },
//         cardTitle: {
//             marginBottom: '0',
//             display: 'flex',
//             alignItems: 'center',
//             fontSize: '1.75rem'
//         },
//         alert: {
//             borderRadius: '8px',
//             marginBottom: '1.5rem'
//         },
//         spinnerContainer: {
//             textAlign: 'center',
//             padding: '3rem 0',
//             color: '#6c757d'
//         },
//         spinner: {
//             width: '3rem',
//             height: '3rem'
//         },
//         emptyState: {
//             textAlign: 'center',
//             padding: '3rem 0',
//             color: '#6c757d'
//         },
//         emptyStateImg: {
//             maxWidth: '200px',
//             opacity: '0.7',
//             filter: 'grayscale(50%)',
//             marginBottom: '1rem'
//         },
//         tableContainer: {
//             overflowX: 'auto',
//             borderRadius: '8px',
//             marginBottom: '0'
//         },
//         table: {
//             width: '100%',
//             marginBottom: '0',
//             borderCollapse: 'collapse'
//         },
//         tableHeader: {
//             backgroundColor: '#34495e',
//             color: 'white',
//             textAlign: 'left'
//         },
//         tableHeaderCell: {
//             padding: '1rem',
//             verticalAlign: 'middle',
//             fontWeight: '500'
//         },
//         tableCell: {
//             padding: '1rem',
//             verticalAlign: 'middle',
//             borderBottom: '1px solid #dee2e6'
//         },
//         doctorCell: {
//             fontWeight: '600'
//         },
//         mutedText: {
//             color: '#6c757d',
//             fontSize: '0.875rem',
//             display: 'block',
//             marginTop: '0.25rem'
//         },
//         cardFooter: {
//             backgroundColor: '#f8f9fa',
//             color: '#6c757d',
//             textAlign: 'right',
//             padding: '0.75rem 1.5rem',
//             fontSize: '0.875rem',
//             borderTop: '1px solid rgba(0, 0, 0, 0.05)'
//         },
//         icon: {
//             marginRight: '0.5rem'
//         }
//     };

//     return (
//         <div><PatientNavbar></PatientNavbar>
//         <div style={styles.container}>
//             <div style={styles.card}>
//                 <div style={styles.cardHeader}>
//                     <h2 style={styles.cardTitle}>
//                         <CalendarCheck style={styles.icon} />
//                         My Appointments
//                     </h2>
//                 </div>
                
//                 <div style={{ padding: '1.5rem' }}>
//                     {error && (
//                         <div style={{ ...styles.alert, backgroundColor: '#f8d7da', color: '#721c24', padding: '1rem', border: '1px solid #f5c6cb' }}>
//                             {error}
//                             <button 
//                                 onClick={() => setError(null)} 
//                                 style={{ float: 'right', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
//                             >
//                                 ×
//                             </button>
//                         </div>
//                     )}

//                     {loading ? (
//                         <div style={styles.spinnerContainer}>
//                             <div 
//                                 style={{ 
//                                     ...styles.spinner, 
//                                     border: '0.25em solid currentColor', 
//                                     borderRightColor: 'transparent',
//                                     borderRadius: '50%',
//                                     display: 'inline-block',
//                                     animation: 'spin 0.75s linear infinite'
//                                 }} 
//                             />
//                             <p style={{ marginTop: '1rem' }}>Loading your appointments...</p>
//                         </div>
//                     ) : appointments.length === 0 ? (
//                         <div style={styles.emptyState}>
//                             <div style={styles.emptyStateImg}>
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
//                                     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//                                     <line x1="16" y1="2" x2="16" y2="6"></line>
//                                     <line x1="8" y1="2" x2="8" y2="6"></line>
//                                     <line x1="3" y1="10" x2="21" y2="10"></line>
//                                     <line x1="10" y1="14" x2="14" y2="14"></line>
//                                     <line x1="12" y1="12" x2="12" y2="16"></line>
//                                 </svg>
//                             </div>
//                             <h5 style={{ marginBottom: '0.5rem' }}>No Appointments Scheduled</h5>
//                             <p style={{ color: '#6c757d' }}>You don't have any upcoming appointments.</p>
//                         </div>
//                     ) : (
//                         <div style={styles.tableContainer}>
//                             <table style={styles.table}>
//                                 <thead>
//                                     <tr style={styles.tableHeader}>
//                                         <th style={styles.tableHeaderCell}>
//                                             <PersonBadge style={styles.icon} />
//                                             Doctor
//                                         </th>
//                                         <th style={styles.tableHeaderCell}>
//                                             <CalendarCheck style={styles.icon} />
//                                             Date
//                                         </th>
//                                         <th style={styles.tableHeaderCell}>
//                                             <ClockHistory style={styles.icon} />
//                                             Time
//                                         </th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {appointments.map((appointment, index) => (
//                                         <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'white' }}>
//                                             <td style={{ ...styles.tableCell, ...styles.doctorCell }}>
//                                                 <strong>{appointment.doctorname}</strong>
//                                                 <small style={styles.mutedText}>Specialization</small>
//                                             </td>
//                                             <td style={styles.tableCell}>
//                                                 {formatDate(appointment.date)}
//                                             </td>
//                                             <td style={styles.tableCell}>
//                                                 {formatTime(appointment.time)}
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     )}
//                 </div>
                
//                 <div style={styles.cardFooter}>
//                     <small>Last updated: {new Date().toLocaleString()}</small>
//                 </div>
//             </div>
//         </div>
//         </div>
//     );
// };
// ------------------------ FINAL CODE-----------------------------------------------------------------------

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { PatientNavbar } from "../layout/PatientNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const MyAppointments = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const getUserAppointments = async () => {
//         try {
//             setLoading(true);
//             const userId = localStorage.getItem("Id");

//             if (!userId) {
//                 setError("User not logged in. Please login first.");
//                 toast.error("Please login to view appointments");
//                 setLoading(false);
//                 return;
//             }

//             const res = await axios.get(`/getAppointmentsByUser/${userId}`);
//             setAppointments(res.data.data);
//             setError(null);
//         } catch (error) {
//             console.error("Error fetching user appointments", error);
//             setError("Failed to load appointments. Please try again.");
//             toast.error("Failed to load appointments");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         getUserAppointments();
//     }, []);

//     const handleCancelAppointment = async (id) => {
//         try {
//             const res = await axios.delete(`/appointment/${id}`);
//             toast.success(res.data.message || "Appointment cancelled successfully!", {
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//             getUserAppointments();
//         } catch (error) {
//             console.error("Error cancelling appointment:", error);
//             toast.error(error.response?.data?.message || "Failed to cancel appointment", {
//                 position: "top-right",
//                 autoClose: 3000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//             });
//         }
//     };

//     const formatDate = (dateString) => {
//         return new Date(dateString).toLocaleDateString(undefined, { 
//             year: "numeric", 
//             month: "long", 
//             day: "numeric",
//             weekday: "short"
//         });
//     };

//     const formatTime = (timeString) => {
//         if (!timeString) return "";
//         return timeString.replace(/:00/g, "").replace(" - ", " - ");
//     };

//     return (
//         <div style={{ 
//             fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", 
//             backgroundColor: "#f8fafc", 
//             minHeight: "100vh" 
//         }}>
//             <PatientNavbar />
//             <ToastContainer />
            
//             <div style={{ 
//                 maxWidth: "1200px", 
//                 margin: "0 auto", 
//                 padding: "2rem 1rem"
//             }}>
//                 <div style={{ 
//                     marginBottom: "2rem",
//                     textAlign: "center"
//                 }}>
//                     <h1 style={{ 
//                         color: "#1e293b", 
//                         fontSize: "2rem", 
//                         fontWeight: "600", 
//                         marginBottom: "0.5rem"
//                     }}>
//                         My Appointments
//                     </h1>
//                     <p style={{ 
//                         color: "#64748b", 
//                         fontSize: "1rem",
//                         marginBottom: "1.5rem"
//                     }}>
//                         View and manage your upcoming appointments
//                     </p>
//                 </div>

//                 {error && (
//                     <div style={{ 
//                         backgroundColor: "#fee2e2", 
//                         color: "#b91c1c", 
//                         padding: "1rem", 
//                         borderRadius: "0.5rem", 
//                         marginBottom: "1.5rem", 
//                         textAlign: "center",
//                         borderLeft: "4px solid #dc2626"
//                     }}>
//                         {error}
//                     </div>
//                 )}

//                 {loading ? (
//                     <div style={{ 
//                         display: "flex", 
//                         justifyContent: "center", 
//                         padding: "3rem",
//                         alignItems: "center"
//                     }}>
//                         <div style={{ 
//                             border: "4px solid rgba(59, 130, 246, 0.1)", 
//                             borderTop: "4px solid #3b82f6", 
//                             borderRadius: "50%", 
//                             width: "40px", 
//                             height: "40px", 
//                             animation: "spin 1s linear infinite"
//                         }}></div>
//                     </div>
//                 ) : appointments.length === 0 ? (
//                     <div style={{ 
//                         textAlign: "center", 
//                         padding: "3rem", 
//                         backgroundColor: "white",
//                         borderRadius: "0.5rem",
//                         boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)"
//                     }}>
//                         <div style={{ 
//                             fontSize: "5rem", 
//                             color: "#e2e8f0", 
//                             marginBottom: "1rem"
//                         }}>
//                             <i className="far fa-calendar"></i>
//                         </div>
//                         <h3 style={{ 
//                             color: "#334155", 
//                             marginBottom: "0.5rem"
//                         }}>
//                             No Appointments Scheduled
//                         </h3>
//                         <p style={{ 
//                             color: "#64748b",
//                             marginBottom: "1.5rem"
//                         }}>
//                             You don't have any upcoming appointments.
//                         </p>
//                         <button
//                             style={{
//                                 backgroundColor: "#3b82f6",
//                                 color: "white",
//                                 border: "none",
//                                 padding: "0.75rem 1.5rem",
//                                 borderRadius: "0.375rem",
//                                 cursor: "pointer",
//                                 fontWeight: "500",
//                                 fontSize: "1rem",
//                                 transition: "all 0.2s ease",
//                                 boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)"
//                             }}
//                             onMouseOver={(e) => e.target.style.backgroundColor = "#2563eb"}
//                             onMouseOut={(e) => e.target.style.backgroundColor = "#3b82f6"}
//                         >
//                             Book an Appointment
//                         </button>
//                     </div>
//                 ) : (
//                     <div style={{ 
//                         backgroundColor: "white", 
//                         borderRadius: "0.5rem", 
//                         boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)", 
//                         overflow: "hidden"
//                     }}>
//                         <div style={{ 
//                             overflowX: "auto",
//                             WebkitOverflowScrolling: "touch"
//                         }}>
//                             <table style={{ 
//                                 width: "100%", 
//                                 borderCollapse: "collapse",
//                                 minWidth: "600px"
//                             }}>
//                                 <thead>
//                                     <tr style={{ 
//                                         backgroundColor: "#f1f5f9",
//                                         color: "#334155",
//                                         textAlign: "left"
//                                     }}>
//                                         <th style={{ 
//                                             padding: "1rem", 
//                                             fontWeight: "600",
//                                             fontSize: "0.875rem",
//                                             textTransform: "uppercase",
//                                             letterSpacing: "0.05em",
//                                             color: "#64748b"
//                                         }}>Doctor</th>
//                                         <th style={{ 
//                                             padding: "1rem", 
//                                             fontWeight: "600",
//                                             fontSize: "0.875rem",
//                                             textTransform: "uppercase",
//                                             letterSpacing: "0.05em",
//                                             color: "#64748b"
//                                         }}>Date</th>
//                                         <th style={{ 
//                                             padding: "1rem", 
//                                             fontWeight: "600",
//                                             fontSize: "0.875rem",
//                                             textTransform: "uppercase",
//                                             letterSpacing: "0.05em",
//                                             color: "#64748b"
//                                         }}>Time</th>
//                                         <th style={{ 
//                                             padding: "1rem", 
//                                             fontWeight: "600",
//                                             fontSize: "0.875rem",
//                                             textTransform: "uppercase",
//                                             letterSpacing: "0.05em",
//                                             color: "#64748b"
//                                         }}>Type</th>
//                                         <th style={{ 
//                                             padding: "1rem", 
//                                             fontWeight: "600",
//                                             fontSize: "0.875rem",
//                                             textTransform: "uppercase",
//                                             letterSpacing: "0.05em",
//                                             color: "#64748b"
//                                         }}>Status</th>
//                                         <th style={{ 
//                                             padding: "1rem", 
//                                             fontWeight: "600",
//                                             fontSize: "0.875rem",
//                                             textTransform: "uppercase",
//                                             letterSpacing: "0.05em",
//                                             color: "#64748b"
//                                         }}>Action</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {appointments.map((appointment, index) => (
//                                         <tr key={index} style={{ 
//                                             borderBottom: "1px solid #e2e8f0",
//                                             transition: "background-color 0.2s ease",
//                                             ":hover": {
//                                                 backgroundColor: "#f8fafc"
//                                             }
//                                         }}>
//                                             <td style={{ 
//                                                 padding: "1rem",
//                                                 color: "#1e293b",
//                                                 fontWeight: "500"
//                                             }}>Dr. {appointment.doctorName}</td>
//                                             <td style={{ 
//                                                 padding: "1rem",
//                                                 color: "#475569"
//                                             }}>{formatDate(appointment.date)}</td>
//                                             <td style={{ 
//                                                 padding: "1rem",
//                                                 color: "#475569"
//                                             }}>{formatTime(appointment.time)}</td>
//                                             <td style={{ 
//                                                 padding: "1rem",
//                                                 color: "#475569"
//                                             }}>
//                                                 <span style={{
//                                                     backgroundColor: appointment.appointmentType === "Online Consultation" ? "#dbeafe" : "#e0f2fe",
//                                                     color: appointment.appointmentType === "Online Consultation" ? "#1d4ed8" : "#0369a1",
//                                                     padding: "0.25rem 0.5rem",
//                                                     borderRadius: "0.25rem",
//                                                     fontSize: "0.875rem",
//                                                     fontWeight: "500"
//                                                 }}>
//                                                     {appointment.appointmentType}
//                                                 </span>
//                                             </td>
//                                             <td style={{ 
//                                                 padding: "1rem",
//                                             }}>
//                                                 <span style={{
//                                                     backgroundColor: appointment.status === "Confirmed" ? "#dcfce7" : "#fef3c7",
//                                                     color: appointment.status === "Confirmed" ? "#166534" : "#92400e",
//                                                     padding: "0.25rem 0.5rem",
//                                                     borderRadius: "0.25rem",
//                                                     fontSize: "0.875rem",
//                                                     fontWeight: "500"
//                                                 }}>
//                                                     {appointment.status}
//                                                 </span>
//                                             </td>
//                                             <td style={{ 
//                                                 padding: "1rem",
//                                             }}>
//                                                 <button
//                                                     style={{
//                                                         backgroundColor: "transparent",
//                                                         color: "#dc2626",
//                                                         border: "1px solid #fecaca",
//                                                         padding: "0.5rem 1rem",
//                                                         borderRadius: "0.375rem",
//                                                         cursor: "pointer",
//                                                         fontWeight: "500",
//                                                         fontSize: "0.875rem",
//                                                         transition: "all 0.2s ease",
//                                                         ":hover": {
//                                                             backgroundColor: "#fee2e2"
//                                                         }
//                                                     }}
//                                                     onClick={() => handleCancelAppointment(appointment._id)}
//                                                     disabled={loading}
//                                                 >
//                                                     Cancel
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))}
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>
//                 )}
//             </div>

//             <style>{`
//                 @keyframes spin {
//                     0% { transform: rotate(0deg); }
//                     100% { transform: rotate(360deg); }
//                 }
//             `}</style>
//         </div>
//     );
// };

// ---------------------------------------------------FINAL CODE----------------------------------------------


import axios from "axios";
import React, { useEffect, useState } from "react";
import { PatientNavbar } from "../layout/PatientNavbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners';
import { FaCalendarAlt, FaUserMd, FaClock, FaNotesMedical, FaTimes } from 'react-icons/fa';

export const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cancellingId, setCancellingId] = useState(null);

    const getUserAppointments = async () => {
        try {
            setLoading(true);
            const userId = localStorage.getItem("Id");

            if (!userId) {
                setError("User not logged in. Please login first.");
                setLoading(false);
                return;
            }

            const res = await axios.get(`/getAppointmentsByUser/${userId}`);
            setAppointments(res.data.data);
            setError(null);
        } catch (error) {
            console.error("Error fetching user appointments", error);
            setError("Failed to load appointments. Please try again.");
            showErrorToast("Failed to load appointments");
        } finally {
            setLoading(false);
        }
    };

    const showErrorToast = (message) => {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                background: '#ff6b6b',
                color: '#fff',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)',
                borderLeft: '4px solid #ff0000'
            },
            icon: <FaTimes style={{ color: '#fff' }} />
        });
    };

    const showSuccessToast = (message) => {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {
                background: '#51cf66',
                color: '#fff',
                fontWeight: 'bold',
                boxShadow: '0 4px 12px rgba(81, 207, 102, 0.3)'
            }
        });
    };

    useEffect(() => {
        getUserAppointments();
    }, []);

    const handleCancelAppointment = async (id) => {
        try {
            setCancellingId(id);
            const res = await axios.delete(`/appointment/${id}`);
            showSuccessToast(res.data.message || "Appointment cancelled successfully!");
            getUserAppointments();
        } catch (error) {
            console.error("Error cancelling appointment:", error);
            showErrorToast(error.response?.data?.message || "Failed to cancel appointment");
        } finally {
            setCancellingId(null);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString(undefined, { 
            year: "numeric", 
            month: "long", 
            day: "numeric" 
        });
    };

    return (
        <div className="appointments-container" style={{backgroundImage: 'url("Images/blur-hospital.jpg")',
            backgroundSize: 'cover',
     backgroundPosition: 'center'}}>
            <PatientNavbar />
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                toastStyle={{ 
                    background: '#ff6b6b',
                    color: '#fff',
                    fontWeight: 'bold'
                }}
                progressStyle={{ background: 'rgba(255, 0, 0, 0.5)' }}
            />
            
            <div className="appointments-content">
                <div className="header-section">
                    <h1 className="appointments-title">
                        <FaCalendarAlt className="title-icon" />
                        My Appointments
                    </h1>
                    <div className="appointment-stats">
                        <div className="stat-card">
                            <span className="stat-number">{appointments.length}</span>
                            <span className="stat-label">Total Appointments</span>
                        </div>
                        <div className="stat-card">
                            <span className="stat-number">
                                {appointments.filter(a => a.status === 'Confirmed').length}
                            </span>
                            <span className="stat-label">Confirmed</span>
                        </div>
                    </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                {loading ? (
                    <div className="loading-container">
                        <ClipLoader size={50} color={"#ff6b6b"} loading={loading} />
                    </div>
                ) : appointments.length === 0 ? (
                    <div className="no-appointments">
                        <div className="empty-state">
                            <FaCalendarAlt className="empty-icon" />
                            <h3>No Appointments Scheduled</h3>
                            <p>You don't have any upcoming appointments.</p>
                        </div>
                    </div>
                ) : (
                    <div className="appointments-grid">
                        {appointments.map((appointment, index) => (
                            <div key={index} className={`appointment-card ${appointment.status.toLowerCase()}`}>
                                <div className="card-header">
                                    <div className="doctor-info">
                                        <FaUserMd className="card-icon" />
                                        <h3>{appointment.doctorName}</h3>
                                    </div>
                                    <span className={`status-badge ${appointment.status.toLowerCase()}`}>
                                        {appointment.status}
                                    </span>
                                </div>
                                
                                <div className="card-details">
                                    <div className="detail-item">
                                        <FaCalendarAlt className="detail-icon" />
                                        <span>{formatDate(appointment.date)}</span>
                                    </div>
                                    <div className="detail-item">
                                        <FaClock className="detail-icon" />
                                        <span>{appointment.time}</span>
                                    </div>
                                    <div className="detail-item">
                                        <FaNotesMedical className="detail-icon" />
                                        <span>{appointment.appointmentType}</span>
                                    </div>
                                </div>
                                
                                <div className="card-actions">
                                    <button
                                        className={`cancel-btn ${cancellingId === appointment._id ? 'cancelling' : ''}`}
                                        onClick={() => handleCancelAppointment(appointment._id)}
                                        disabled={cancellingId === appointment._id}
                                    >
                                        {cancellingId === appointment._id ? (
                                            <ClipLoader size={15} color={"#ffffff"} />
                                        ) : (
                                            <>
                                                <FaTimes className="btn-icon" />
                                                Cancel
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <style jsx>{`
                .appointments-container {
                    font-family: 'Poppins', 'Segoe UI', Roboto, sans-serif;
                    background-color: #f8f9fa;
                    min-height: 100vh;
                }
                
                .appointments-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem 1rem;
                }
                
                .header-section {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                    flex-wrap: wrap;
                    gap: 1rem;
                }
                
                .appointments-title {
                    color: #2c3e50;
                    font-size: 2rem;
                    font-weight: 600;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .title-icon {
                    color:rgb(107, 159, 255);
                }
                
                .appointment-stats {
                    display: flex;
                    gap: 1rem;
                }
                
                .stat-card {
                    background: white;
                    padding: 1rem 1.5rem;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                    text-align: center;
                    min-width: 120px;
                }
                
                .stat-number {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: #2c3e50;
                    display: block;
                }
                
                .stat-label {
                    font-size: 0.85rem;
                    color: #7f8c8d;
                }
                
                .error-message {
                    background: linear-gradient(90deg, #ff6b6b, #ff8787);
                    color: white;
                    padding: 1rem;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    text-align: center;
                    font-weight: 500;
                    box-shadow: 0 4px 6px rgba(255, 107, 107, 0.2);
                }
                
                .loading-container {
                    display: flex;
                    justify-content: center;
                    padding: 3rem;
                }
                
                .no-appointments {
                    text-align: center;
                    padding: 3rem;
                }
                
                .empty-state {
                    background: white;
                    padding: 3rem 2rem;
                    border-radius: 12px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                    max-width: 500px;
                    margin: 0 auto;
                }
                
                .empty-icon {
                    font-size: 3rem;
                    color: #adb5bd;
                    margin-bottom: 1rem;
                }
                
                .empty-state h3 {
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: #495057;
                }
                
                .empty-state p {
                    color: #6c757d;
                }
                
                .appointments-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 1.5rem;
                }
                
                .appointment-card {
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border-top: 4px solid;
                }
                
                .appointment-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
                }
                
                .appointment-card.confirmed {
                    border-top-color: #51cf66;
                }
                
                .appointment-card.pending {
                    border-top-color: #fcc419;
                }
                
                .card-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem 1.5rem 1rem;
                    border-bottom: 1px solid #f1f3f5;
                }
                
                .doctor-info {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }
                
                .card-icon {
                    color: #495057;
                    font-size: 1.1rem;
                }
                
                .doctor-info h3 {
                    margin: 0;
                    font-size: 1.1rem;
                    color: #2c3e50;
                }
                
                .status-badge {
                    padding: 0.35rem 0.75rem;
                    border-radius: 50px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }
                
                .status-badge.confirmed {
                    background-color: #ebfbee;
                    color: #2b8a3e;
                }
                
                .status-badge.pending {
                    background-color: #fff9db;
                    color: #e67700;
                }
                
                .card-details {
                    padding: 1.5rem;
                }
                
                .detail-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    margin-bottom: 1rem;
                }
                
                .detail-item:last-child {
                    margin-bottom: 0;
                }
                
                .detail-icon {
                    color: #868e96;
                    min-width: 20px;
                }
                
                .card-actions {
                    padding: 0 1.5rem 1.5rem;
                    display: flex;
                    justify-content: flex-end;
                }
                
                .cancel-btn {
                    background: linear-gradient(90deg, #ff6b6b, #ff8787);
                    color: white;
                    border: none;
                    padding: 0.6rem 1.2rem;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    font-size: 0.85rem;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    box-shadow: 0 2px 4px rgba(255, 107, 107, 0.3);
                }
                
                .cancel-btn:hover {
                    background: linear-gradient(90deg, #ff5252, #ff6b6b);
                    box-shadow: 0 4px 8px rgba(255, 107, 107, 0.4);
                    transform: translateY(-1px);
                }
                
                .cancel-btn:disabled {
                    background: #adb5bd;
                    cursor: not-allowed;
                    transform: none;
                    box-shadow: none;
                }
                
                .cancel-btn.cancelling {
                    background: #fcc419;
                }
                
                .btn-icon {
                    font-size: 0.9rem;
                }
                
                @media (max-width: 768px) {
                    .appointments-content {
                        padding: 1rem;
                    }
                    
                    .header-section {
                        flex-direction: column;
                        align-items: flex-start;
                    }
                    
                    .appointment-stats {
                        width: 100%;
                        justify-content: space-between;
                    }
                    
                    .appointments-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};