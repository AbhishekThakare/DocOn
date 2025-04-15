// import React, { useState } from 'react';

// export const DoctorNavbar = () => {
//   const [activeTab, setActiveTab] = useState('schedule');
//   const [upcomingAppointments] = useState([
//     { id: 1, patient: 'Robert Johnson', age: 45, gender: 'Male', time: '10:30 AM', type: 'Video Consultation', status: 'Confirmed', reason: 'Follow-up for hypertension' },
//     { id: 2, patient: 'Sarah Williams', age: 32, gender: 'Female', time: '11:15 AM', type: 'In-Clinic', status: 'Confirmed', reason: 'Annual physical exam' },
//     { id: 3, patient: 'Michael Chen', age: 28, gender: 'Male', time: '2:00 PM', type: 'Video Consultation', status: 'Pending', reason: 'Skin rash evaluation' }
//   ]);

//   const [patientRecords] = useState([
//     { id: 1, name: 'Robert Johnson', lastVisit: '2023-05-10', conditions: ['Hypertension', 'Type 2 Diabetes'], nextAppointment: '2023-06-15' },
//     { id: 2, name: 'Sarah Williams', lastVisit: '2023-03-22', conditions: ['Seasonal Allergies'], nextAppointment: '2023-06-18' },
//     { id: 3, name: 'Michael Chen', lastVisit: '2023-04-05', conditions: ['Acne Vulgaris'], nextAppointment: '2023-06-20' }
//   ]);

//   const [todayCompleted] = useState([
//     { id: 1, patient: 'Emma Davis', time: '9:00 AM', diagnosis: 'Upper respiratory infection', prescription: 'Amoxicillin 500mg' },
//     { id: 2, patient: 'David Wilson', time: '10:00 AM', diagnosis: 'Hypertension follow-up', prescription: 'Lisinopril 10mg' }
//   ]);

//   const [messages] = useState([
//     { id: 1, patient: 'Robert Johnson', time: 'Yesterday', subject: 'Medication refill request', unread: true },
//     { id: 2, patient: 'Sarah Williams', time: '2 days ago', subject: 'Test results inquiry', unread: false }
//   ]);

//   const [currentPatient, setCurrentPatient] = useState(null);
//   const [consultationNotes, setConsultationNotes] = useState('');
//   const [prescription, setPrescription] = useState('');
//   const [diagnosis, setDiagnosis] = useState('');

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case 'schedule':
//         return (
//           <div style={styles.tabContent}>
//             <div style={styles.section}>
//               <div style={styles.sectionHeader}>
//                 <h3 style={styles.sectionTitle}>Today's Appointments</h3>
//                 <div style={styles.timeIndicator}>Today, {new Date().toLocaleDateString()}</div>
//               </div>
//               <div style={styles.appointmentFilters}>
//                 <button style={styles.filterButtonActive}>All</button>
//                 <button style={styles.filterButton}>Confirmed</button>
//                 <button style={styles.filterButton}>Pending</button>
//                 <button style={styles.filterButton}>Completed</button>
//               </div>
//               {upcomingAppointments.length > 0 ? (
//                 <div style={styles.appointmentList}>
//                   {upcomingAppointments.map(appointment => (
//                     <div key={appointment.id} style={styles.appointmentCard}>
//                       <div style={styles.appointmentTimeSlot}>
//                         <div style={styles.timeBadge}>{appointment.time}</div>
//                         <div style={styles.typeBadge}>{appointment.type}</div>
//                       </div>
//                       <div style={styles.appointmentDetails}>
//                         <h4 style={styles.patientName}>{appointment.patient}</h4>
//                         <div style={styles.patientMeta}>
//                           <span>{appointment.age} years, {appointment.gender}</span>
//                           <span style={styles.statusBadge}>{appointment.status}</span>
//                         </div>
//                         <p style={styles.reasonText}>{appointment.reason}</p>
//                       </div>
//                       <div style={styles.appointmentActions}>
//                         {appointment.status === 'Pending' && (
//                           <>
//                             <button style={styles.confirmButton}>Confirm</button>
//                             <button style={styles.declineButton}>Decline</button>
//                           </>
//                         )}
//                         {appointment.status === 'Confirmed' && (
//                           <button 
//                             style={styles.primaryButton}
//                             onClick={() => setCurrentPatient(appointment)}
//                           >
//                             Start Consultation
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p style={styles.noDataText}>No appointments scheduled for today</p>
//               )}
//             </div>

//             <div style={styles.section}>
//               <h3 style={styles.sectionTitle}>Completed Today</h3>
//               {todayCompleted.length > 0 ? (
//                 <div style={styles.completedList}>
//                   {todayCompleted.map(appointment => (
//                     <div key={appointment.id} style={styles.completedCard}>
//                       <div style={styles.completedTime}>{appointment.time}</div>
//                       <div style={styles.completedDetails}>
//                         <h4 style={styles.patientName}>{appointment.patient}</h4>
//                         <p><strong>Diagnosis:</strong> {appointment.diagnosis}</p>
//                         <p><strong>Prescription:</strong> {appointment.prescription}</p>
//                       </div>
//                       <button style={styles.secondaryButton}>View Details</button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p style={styles.noDataText}>No completed consultations yet</p>
//               )}
//             </div>
//           </div>
//         );
//       case 'patients':
//         return (
//           <div style={styles.tabContent}>
//             <div style={styles.section}>
//               <div style={styles.sectionHeader}>
//                 <h3 style={styles.sectionTitle}>Patient Records</h3>
//                 <div style={styles.searchBox}>
//                   <input 
//                     type="text" 
//                     placeholder="Search patients..." 
//                     style={styles.searchInput}
//                   />
//                   <button style={styles.searchButton}>
//                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                       <circle cx="11" cy="11" r="8"></circle>
//                       <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//               {patientRecords.length > 0 ? (
//                 <div style={styles.patientTable}>
//                   <div style={styles.tableHeader}>
//                     <div style={styles.tableHeaderCell}>Patient Name</div>
//                     <div style={styles.tableHeaderCell}>Last Visit</div>
//                     <div style={styles.tableHeaderCell}>Conditions</div>
//                     <div style={styles.tableHeaderCell}>Next Appointment</div>
//                     <div style={styles.tableHeaderCell}>Actions</div>
//                   </div>
//                   {patientRecords.map(patient => (
//                     <div key={patient.id} style={styles.tableRow}>
//                       <div style={styles.tableCell}>
//                         <strong>{patient.name}</strong>
//                       </div>
//                       <div style={styles.tableCell}>{patient.lastVisit}</div>
//                       <div style={styles.tableCell}>
//                         {patient.conditions.join(', ')}
//                       </div>
//                       <div style={styles.tableCell}>
//                         {patient.nextAppointment || 'Not scheduled'}
//                       </div>
//                       <div style={styles.tableCell}>
//                         <button style={styles.actionButton}>View</button>
//                         <button style={styles.actionButton}>Message</button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p style={styles.noDataText}>No patient records found</p>
//               )}
//             </div>
//           </div>
//         );
//       case 'consultation':
//         return currentPatient ? (
//           <div style={styles.tabContent}>
//             <div style={styles.consultationHeader}>
//               <h3 style={styles.sectionTitle}>Consultation with {currentPatient.patient}</h3>
//               <button 
//                 style={styles.backButton}
//                 onClick={() => setCurrentPatient(null)}
//               >
//                 Back to schedule
//               </button>
//             </div>
            
//             <div style={styles.consultationGrid}>
//               <div style={styles.patientInfoCard}>
//                 <h4 style={styles.cardTitle}>Patient Information</h4>
//                 <div style={styles.infoGrid}>
//                   <div>
//                     <p style={styles.infoLabel}>Name</p>
//                     <p style={styles.infoValue}>{currentPatient.patient}</p>
//                   </div>
//                   <div>
//                     <p style={styles.infoLabel}>Age</p>
//                     <p style={styles.infoValue}>{currentPatient.age} years</p>
//                   </div>
//                   <div>
//                     <p style={styles.infoLabel}>Gender</p>
//                     <p style={styles.infoValue}>{currentPatient.gender}</p>
//                   </div>
//                   <div>
//                     <p style={styles.infoLabel}>Appointment Type</p>
//                     <p style={styles.infoValue}>{currentPatient.type}</p>
//                   </div>
//                 </div>
//                 <div style={styles.medicalHistory}>
//                   <h5 style={styles.subTitle}>Medical History</h5>
//                   <ul style={styles.historyList}>
//                     <li>Hypertension (diagnosed 2018)</li>
//                     <li>Type 2 Diabetes (diagnosed 2020)</li>
//                     <li>Allergies: Penicillin</li>
//                   </ul>
//                 </div>
//               </div>

//               <div style={styles.consultationMain}>
//                 <div style={styles.consultationNotes}>
//                   <h4 style={styles.cardTitle}>Consultation Notes</h4>
//                   <textarea
//                     style={styles.notesTextarea}
//                     placeholder="Enter your consultation notes here..."
//                     value={consultationNotes}
//                     onChange={(e) => setConsultationNotes(e.target.value)}
//                     rows="8"
//                   ></textarea>
//                 </div>

//                 <div style={styles.diagnosisSection}>
//                   <h4 style={styles.cardTitle}>Diagnosis</h4>
//                   <input
//                     type="text"
//                     style={styles.diagnosisInput}
//                     placeholder="Enter diagnosis..."
//                     value={diagnosis}
//                     onChange={(e) => setDiagnosis(e.target.value)}
//                   />
//                 </div>

//                 <div style={styles.prescriptionSection}>
//                   <h4 style={styles.cardTitle}>Prescription</h4>
//                   <textarea
//                     style={styles.prescriptionTextarea}
//                     placeholder="Enter prescription details..."
//                     value={prescription}
//                     onChange={(e) => setPrescription(e.target.value)}
//                     rows="4"
//                   ></textarea>
//                   <div style={styles.prescriptionActions}>
//                     <button style={styles.secondaryButton}>Common Medications</button>
//                     <button style={styles.primaryButton}>Save Prescription</button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div style={styles.consultationFooter}>
//               <button style={styles.saveButton}>Save as Draft</button>
//               <button style={styles.completeButton}>Complete Consultation</button>
//             </div>
//           </div>
//         ) : (
//           <div style={styles.tabContent}>
//             <div style={styles.centeredMessage}>
//               <h3 style={styles.sectionTitle}>No active consultation</h3>
//               <p style={styles.messageText}>Select a patient from your schedule to begin a consultation.</p>
//               <button 
//                 style={styles.primaryButton}
//                 onClick={() => setActiveTab('schedule')}
//               >
//                 View Schedule
//               </button>
//             </div>
//           </div>
//         );
//       case 'messages':
//         return (
//           <div style={styles.tabContent}>
//             <div style={styles.section}>
//               <h3 style={styles.sectionTitle}>Messages</h3>
//               {messages.length > 0 ? (
//                 <div style={styles.messageList}>
//                   {messages.map(message => (
//                     <div key={message.id} style={styles.messageCard}>
//                       <div style={styles.messageHeader}>
//                         <h4 style={styles.messagePatient}>{message.patient}</h4>
//                         <span style={styles.messageTime}>{message.time}</span>
//                         {message.unread && <span style={styles.unreadBadge}>New</span>}
//                       </div>
//                       <p style={styles.messageSubject}>{message.subject}</p>
//                       <button style={styles.messageButton}>Reply</button>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <p style={styles.noDataText}>No messages</p>
//               )}
//             </div>
//           </div>
//         );
//       case 'reports':
//         return (
//           <div style={styles.tabContent}>
//             <div style={styles.section}>
//               <h3 style={styles.sectionTitle}>Reports & Analytics</h3>
//               <div style={styles.reportGrid}>
//                 <div style={styles.reportCard}>
//                   <h4 style={styles.cardTitle}>Appointments This Month</h4>
//                   <div style={styles.reportValue}>42</div>
//                   <div style={styles.reportTrend}>↑ 12% from last month</div>
//                 </div>
//                 <div style={styles.reportCard}>
//                   <h4 style={styles.cardTitle}>Patient Satisfaction</h4>
//                   <div style={styles.reportValue}>4.8/5</div>
//                   <div style={styles.reportTrend}>Based on 38 reviews</div>
//                 </div>
//                 <div style={styles.reportCard}>
//                   <h4 style={styles.cardTitle}>Most Common Diagnosis</h4>
//                   <div style={styles.reportValue}>Hypertension</div>
//                   <div style={styles.reportTrend}>12 cases this month</div>
//                 </div>
//                 <div style={styles.reportCard}>
//                   <h4 style={styles.cardTitle}>Prescriptions Issued</h4>
//                   <div style={styles.reportValue}>28</div>
//                   <div style={styles.reportTrend}>5 refill requests</div>
//                 </div>
//               </div>
              
//               <div style={styles.chartContainer}>
//                 <h4 style={styles.cardTitle}>Monthly Appointments</h4>
//                 <div style={styles.chartPlaceholder}>
//                   <p style={styles.chartText}>Appointment trends chart would display here</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div style={styles.dashboardContainer}>
//       <header style={styles.header}>
//         <div style={styles.headerContent}>
//           <h1 style={styles.logo}>Docon</h1>
//           <div style={styles.userInfo}>
//             <div style={styles.userDetails}>
//               <span style={styles.userName}>Dr. Sarah Johnson</span>
//               <span style={styles.userRole}>Cardiologist</span>
//             </div>
//             <div style={styles.userAvatar}>SJ</div>
//             <button style={styles.notificationButton}>
//               <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
//                 <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
//               </svg>
//               <span style={styles.notificationBadge}>3</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       <div style={styles.mainContent}>
//         <div style={styles.sidebar}>
//           <div style={styles.sidebarHeader}>
//             <div style={styles.doctorGreeting}>Good afternoon,</div>
//             <h2 style={styles.sidebarTitle}>Dr. Johnson</h2>
//           </div>
//           <nav style={styles.nav}>
//             <button 
//               style={activeTab === 'schedule' ? styles.activeNavButton : styles.navButton}
//               onClick={() => setActiveTab('schedule')}
//             >
//               Schedule
//             </button>
//             <button 
//               style={activeTab === 'patients' ? styles.activeNavButton : styles.navButton}
//               onClick={() => setActiveTab('patients')}
//             >
//               Patients
//             </button>
//             <button 
//               style={activeTab === 'consultation' ? styles.activeNavButton : styles.navButton}
//               onClick={() => setActiveTab('consultation')}
//             >
//               Consultation
//             </button>
//             <button 
//               style={activeTab === 'messages' ? styles.activeNavButton : styles.navButton}
//               onClick={() => setActiveTab('messages')}
//             >
//               Messages
//             </button>
//             <button 
//               style={activeTab === 'reports' ? styles.activeNavButton : styles.navButton}
//               onClick={() => setActiveTab('reports')}
//             >
//               Reports
//             </button>
//           </nav>
//           <div style={styles.sidebarFooter}>
//             <button style={styles.settingsButton}>
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <circle cx="12" cy="12" r="3"></circle>
//                 <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
//               </svg>
//               Settings
//             </button>
//             <button style={styles.logoutButton}>
//               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//                 <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
//                 <polyline points="16 17 21 12 16 7"></polyline>
//                 <line x1="21" y1="12" x2="9" y2="12"></line>
//               </svg>
//               Log Out
//             </button>
//           </div>
//         </div>

//         <div style={styles.contentArea}>
//           {renderTabContent()}
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   dashboardContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     backgroundColor: '#f5f7fa',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   header: {
//     backgroundColor: '#1976d2',
//     color: 'white',
//     padding: '16px 24px',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//   },
//   headerContent: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     maxWidth: '1400px',
//     margin: '0 auto',
//     width: '100%',
//   },
//   logo: {
//     margin: 0,
//     fontSize: '24px',
//     fontWeight: '600',
//   },
//   userInfo: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '20px',
//   },
//   userDetails: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'flex-end',
//   },
//   userName: {
//     fontSize: '16px',
//     fontWeight: '500',
//   },
//   userRole: {
//     fontSize: '14px',
//     opacity: 0.8,
//   },
//   userAvatar: {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#ffffff',
//     color: '#1976d2',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontWeight: 'bold',
//   },
//   notificationButton: {
//     backgroundColor: 'transparent',
//     border: 'none',
//     color: 'white',
//     position: 'relative',
//     cursor: 'pointer',
//     padding: '8px',
//     borderRadius: '50%',
//     ':hover': {
//       backgroundColor: 'rgba(255,255,255,0.1)',
//     },
//   },
//   notificationBadge: {
//     position: 'absolute',
//     top: '-2px',
//     right: '-2px',
//     backgroundColor: '#ff5252',
//     color: 'white',
//     borderRadius: '50%',
//     width: '18px',
//     height: '18px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '10px',
//     fontWeight: 'bold',
//   },
//   mainContent: {
//     display: 'flex',
//     flex: 1,
//     maxWidth: '1400px',
//     margin: '0 auto',
//     width: '100%',
//   },
//   sidebar: {
//     width: '280px',
//     backgroundColor: '#ffffff',
//     borderRight: '1px solid #e0e0e0',
//     display: 'flex',
//     flexDirection: 'column',
//     padding: '24px 0',
//   },
//   sidebarHeader: {
//     padding: '0 24px 16px',
//     borderBottom: '1px solid #e0e0e0',
//     marginBottom: '16px',
//   },
//   doctorGreeting: {
//     fontSize: '14px',
//     color: '#666666',
//     marginBottom: '4px',
//   },
//   sidebarTitle: {
//     margin: 0,
//     fontSize: '20px',
//     color: '#333333',
//     fontWeight: '600',
//   },
//   nav: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '4px',
//     padding: '0 16px',
//     flex: 1,
//   },
//   navButton: {
//     padding: '12px 16px',
//     textAlign: 'left',
//     border: 'none',
//     backgroundColor: 'transparent',
//     color: '#555555',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '15px',
//     transition: 'all 0.2s ease',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//     ':hover': {
//       backgroundColor: '#f0f0f0',
//     },
//   },
//   activeNavButton: {
//     padding: '12px 16px',
//     textAlign: 'left',
//     border: 'none',
//     backgroundColor: '#e3f2fd',
//     color: '#1976d2',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '15px',
//     fontWeight: '500',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '10px',
//   },
//   sidebarFooter: {
//     padding: '16px 16px 0',
//     borderTop: '1px solid #e0e0e0',
//     marginTop: '16px',
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '8px',
//   },
//   settingsButton: {
//     padding: '10px 16px',
//     textAlign: 'left',
//     border: 'none',
//     backgroundColor: 'transparent',
//     color: '#555555',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'all 0.2s ease',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     ':hover': {
//       backgroundColor: '#f0f0f0',
//     },
//   },
//   logoutButton: {
//     padding: '10px 16px',
//     textAlign: 'left',
//     border: 'none',
//     backgroundColor: 'transparent',
//     color: '#d32f2f',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'all 0.2s ease',
//     display: 'flex',
//     alignItems: 'center',
//     gap: '8px',
//     ':hover': {
//       backgroundColor: '#ffebee',
//     },
//   },
//   contentArea: {
//     flex: 1,
//     padding: '24px',
//     backgroundColor: '#ffffff',
//     overflowY: 'auto',
//   },
//   tabContent: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '24px',
//   },
//   section: {
//     backgroundColor: '#ffffff',
//     borderRadius: '8px',
//     padding: '20px',
//     boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//   },
//   sectionHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '16px',
//   },
//   sectionTitle: {
//     margin: 0,
//     color: '#333333',
//     fontSize: '18px',
//     fontWeight: '600',
//   },
//   timeIndicator: {
//     fontSize: '14px',
//     color: '#666666',
//   },
//   appointmentFilters: {
//     display: 'flex',
//     gap: '8px',
//     marginBottom: '16px',
//   },
//   filterButton: {
//     padding: '6px 12px',
//     backgroundColor: 'transparent',
//     border: '1px solid #e0e0e0',
//     color: '#555555',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#f0f0f0',
//     },
//   },
//   filterButtonActive: {
//     padding: '6px 12px',
//     backgroundColor: '#e3f2fd',
//     border: '1px solid #1976d2',
//     color: '#1976d2',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '500',
//   },
//   appointmentList: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//   },
//   appointmentCard: {
//     display: 'flex',
//     padding: '16px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '6px',
//     borderLeft: '4px solid #1976d2',
//     gap: '16px',
//   },
//   appointmentTimeSlot: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '4px',
//     minWidth: '100px',
//   },
//   timeBadge: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#333333',
//   },
//   typeBadge: {
//     fontSize: '12px',
//     color: '#666666',
//   },
//   appointmentDetails: {
//     flex: 1,
//   },
//   patientName: {
//     margin: '0 0 4px',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#333333',
//   },
//   patientMeta: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginBottom: '8px',
//     fontSize: '14px',
//     color: '#666666',
//   },
//   statusBadge: {
//     padding: '2px 6px',
//     backgroundColor: '#e8f5e9',
//     color: '#2e7d32',
//     borderRadius: '4px',
//     fontSize: '12px',
//     fontWeight: '500',
//   },
//   reasonText: {
//     margin: 0,
//     fontSize: '14px',
//     color: '#333333',
//   },
//   appointmentActions: {
//     display: 'flex',
//     gap: '8px',
//     alignItems: 'center',
//   },
//   confirmButton: {
//     padding: '8px 12px',
//     backgroundColor: '#4caf50',
//     border: 'none',
//     color: 'white',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#388e3c',
//     },
//   },
//   declineButton: {
//     padding: '8px 12px',
//     backgroundColor: '#f44336',
//     border: 'none',
//     color: 'white',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#d32f2f',
//     },
//   },
//   primaryButton: {
//     padding: '8px 16px',
//     backgroundColor: '#1976d2',
//     border: 'none',
//     color: 'white',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '500',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#1565c0',
//     },
//   },
//   secondaryButton: {
//     padding: '8px 16px',
//     backgroundColor: 'transparent',
//     border: '1px solid #1976d2',
//     color: '#1976d2',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#e3f2fd',
//     },
//   },
//   noDataText: {
//     color: '#666666',
//     fontStyle: 'italic',
//     margin: '16px 0',
//   },
//   completedList: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//   },
//   completedCard: {
//     display: 'flex',
//     padding: '12px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '6px',
//     gap: '16px',
//     alignItems: 'center',
//   },
//   completedTime: {
//     fontSize: '14px',
//     fontWeight: '600',
//     color: '#1976d2',
//     minWidth: '80px',
//   },
//   completedDetails: {
//     flex: 1,
//     fontSize: '14px',
//     color: '#333333',
//   },
//   searchBox: {
//     display: 'flex',
//     border: '1px solid #e0e0e0',
//     borderRadius: '4px',
//     overflow: 'hidden',
//   },
//   searchInput: {
//     flex: 1,
//     padding: '8px 12px',
//     border: 'none',
//     outline: 'none',
//     fontSize: '14px',
//     ':focus': {
//       borderColor: '#1976d2',
//     },
//   },
//   searchButton: {
//     padding: '8px 12px',
//     backgroundColor: '#f5f5f5',
//     border: 'none',
//     borderLeft: '1px solid #e0e0e0',
//     cursor: 'pointer',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     ':hover': {
//       backgroundColor: '#eeeeee',
//     },
//   },
//   patientTable: {
//     display: 'flex',
//     flexDirection: 'column',
//     border: '1px solid #e0e0e0',
//     borderRadius: '4px',
//     overflow: 'hidden',
//   },
//   tableHeader: {
//     display: 'flex',
//     backgroundColor: '#f5f5f5',
//     padding: '12px 16px',
//     fontWeight: '600',
//     fontSize: '14px',
//     color: '#333333',
//   },
//   tableHeaderCell: {
//     flex: 1,
//   },
//   tableRow: {
//     display: 'flex',
//     padding: '12px 16px',
//     borderBottom: '1px solid #e0e0e0',
//     fontSize: '14px',
//     ':hover': {
//       backgroundColor: '#f9f9f9',
//     },
//   },
//   tableCell: {
//     flex: 1,
//     display: 'flex',
//     gap: '8px',
//     alignItems: 'center',
//   },
//   actionButton: {
//     padding: '6px 12px',
//     backgroundColor: 'transparent',
//     border: '1px solid #e0e0e0',
//     color: '#555555',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '13px',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#f0f0f0',
//     },
//   },
//   consultationHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '16px',
//   },
//   backButton: {
//     padding: '8px 16px',
//     backgroundColor: 'transparent',
//     border: '1px solid #e0e0e0',
//     color: '#555555',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#f0f0f0',
//     },
//   },
//   consultationGrid: {
//     display: 'grid',
//     gridTemplateColumns: '300px 1fr',
//     gap: '24px',
//   },
//   patientInfoCard: {
//     backgroundColor: '#f9f9f9',
//     borderRadius: '8px',
//     padding: '16px',
//   },
//   cardTitle: {
//     margin: '0 0 16px',
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#333333',
//     paddingBottom: '8px',
//     borderBottom: '1px solid #e0e0e0',
//   },
//   infoGrid: {
//     display: 'grid',
//     gridTemplateColumns: '1fr 1fr',
//     gap: '12px',
//     marginBottom: '16px',
//   },
//   infoLabel: {
//     margin: '0 0 4px',
//     fontSize: '12px',
//     color: '#666666',
//   },
//   infoValue: {
//     margin: 0,
//     fontSize: '14px',
//     color: '#333333',
//     fontWeight: '500',
//   },
//   medicalHistory: {
//     marginTop: '16px',
//   },
//   subTitle: {
//     margin: '0 0 8px',
//     fontSize: '14px',
//     fontWeight: '500',
//     color: '#333333',
//   },
//   historyList: {
//     margin: 0,
//     paddingLeft: '20px',
//     fontSize: '14px',
//     color: '#333333',
//   },
//   consultationMain: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '16px',
//   },
//   consultationNotes: {
//     flex: 1,
//   },
//   notesTextarea: {
//     width: '100%',
//     padding: '12px',
//     border: '1px solid #e0e0e0',
//     borderRadius: '4px',
//     fontSize: '14px',
//     resize: 'vertical',
//     minHeight: '150px',
//     ':focus': {
//       outline: 'none',
//       borderColor: '#1976d2',
//       boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
//     },
//   },
//   diagnosisSection: {
//     flex: 1,
//   },
//   diagnosisInput: {
//     width: '100%',
//     padding: '12px',
//     border: '1px solid #e0e0e0',
//     borderRadius: '4px',
//     fontSize: '14px',
//     ':focus': {
//       outline: 'none',
//       borderColor: '#1976d2',
//       boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
//     },
//   },
//   prescriptionSection: {
//     flex: 1,
//   },
//   prescriptionTextarea: {
//     width: '100%',
//     padding: '12px',
//     border: '1px solid #e0e0e0',
//     borderRadius: '4px',
//     fontSize: '14px',
//     resize: 'vertical',
//     minHeight: '100px',
//     marginBottom: '12px',
//     ':focus': {
//       outline: 'none',
//       borderColor: '#1976d2',
//       boxShadow: '0 0 0 2px rgba(25, 118, 210, 0.2)',
//     },
//   },
//   prescriptionActions: {
//     display: 'flex',
//     justifyContent: 'space-between',
//   },
//   consultationFooter: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     gap: '12px',
//     marginTop: '24px',
//     paddingTop: '16px',
//     borderTop: '1px solid #e0e0e0',
//   },
//   saveButton: {
//     padding: '10px 16px',
//     backgroundColor: 'transparent',
//     border: '1px solid #e0e0e0',
//     color: '#555555',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#f0f0f0',
//     },
//   },
//   completeButton: {
//     padding: '10px 16px',
//     backgroundColor: '#4caf50',
//     border: 'none',
//     color: 'white',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//     fontWeight: '500',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#388e3c',
//     },
//   },
//   centeredMessage: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '300px',
//     textAlign: 'center',
//   },
//   messageText: {
//     color: '#666666',
//     margin: '16px 0 24px',
//     maxWidth: '400px',
//   },
//   messageList: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '12px',
//   },
//   messageCard: {
//     padding: '16px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '6px',
//     borderLeft: '4px solid #1976d2',
//   },
//   messageHeader: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '8px',
//   },
//   messagePatient: {
//     margin: 0,
//     fontSize: '16px',
//     fontWeight: '600',
//     color: '#333333',
//   },
//   messageTime: {
//     fontSize: '12px',
//     color: '#666666',
//   },
//   unreadBadge: {
//     padding: '2px 6px',
//     backgroundColor: '#1976d2',
//     color: 'white',
//     borderRadius: '4px',
//     fontSize: '10px',
//     fontWeight: 'bold',
//   },
//   messageSubject: {
//     margin: '0 0 12px',
//     fontSize: '14px',
//     color: '#333333',
//   },
//   messageButton: {
//     padding: '6px 12px',
//     backgroundColor: 'transparent',
//     border: '1px solid #1976d2',
//     color: '#1976d2',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '13px',
//     transition: 'all 0.2s ease',
//     ':hover': {
//       backgroundColor: '#e3f2fd',
//     },
//   },
//   reportGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
//     gap: '16px',
//     marginBottom: '24px',
//   },
//   reportCard: {
//     padding: '16px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '6px',
//     borderLeft: '4px solid #1976d2',
//   },
//   reportValue: {
//     fontSize: '24px',
//     fontWeight: '600',
//     color: '#1976d2',
//     margin: '8px 0',
//   },
//   reportTrend: {
//     fontSize: '12px',
//     color: '#666666',
//   },
//   chartContainer: {
//     marginTop: '24px',
//   },
//   chartPlaceholder: {
//     height: '300px',
//     backgroundColor: '#f9f9f9',
//     borderRadius: '4px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     border: '1px dashed #e0e0e0',
//   },
//   chartText: {
//     color: '#666666',
//     fontStyle: 'italic',
//   },
// };


// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import { 
// //   Calendar,
// //   ClipboardList,
// //   Pill,
// //   Activity,
// //   Users,
// //   MessageSquare,
// //   BarChart2,
// //   Settings,
// //   LogOut,
// //   User,
// //   Bell
// // } from 'lucide-react';

// // export const DoctorNavbar = ({ children }) => {
// //   const [activeTab, setActiveTab] = useState('schedule');
// //   const [collapsed, setCollapsed] = useState(false);
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     navigate('/login');
// //   };

// //   const menuItems = [
// //     { id: 'schedule', label: 'Schedule', icon: <Calendar size={20} /> },
// //     { id: 'patients', label: 'Patients', icon: <Users size={20} /> },
// //     { id: 'records', label: 'Medical Records', icon: <ClipboardList size={20} /> },
// //     { id: 'prescriptions', label: 'Prescriptions', icon: <Pill size={20} /> },
// //     { id: 'vitals', label: 'Patient Vitals', icon: <Activity size={20} /> },
// //     { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} /> },
// //     { id: 'reports', label: 'Reports', icon: <BarChart2 size={20} /> }
// //   ];

// //   return (
// //     <div style={{
// //       display: 'flex',
// //       flexDirection: 'column',
// //       minHeight: '100vh',
// //       fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
// //     }}>
// //       {/* Navbar with Gradient Theme */}
// //       <nav style={{
// //         display: 'flex',
// //         justifyContent: 'space-between',
// //         alignItems: 'center',
// //         padding: '0 32px',
// //         height: '70px',
// //         position: 'sticky',
// //         top: 0,
// //         zIndex: 1000,
// //         background: 'linear-gradient(135deg, #0066cc 0%, #004080 100%)',
// //         boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
// //         color: 'white'
// //       }}>
// //         <div style={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '24px'
// //         }}>
// //           <button 
// //             style={{
// //               background: 'none',
// //               border: 'none',
// //               fontSize: '24px',
// //               cursor: 'pointer',
// //               color: 'white',
// //               padding: '8px',
// //               transition: 'all 0.2s'
// //             }}
// //             onClick={() => setCollapsed(!collapsed)}
// //           >
// //             ☰
// //           </button>
// //           <h1 style={{
// //             margin: 0,
// //             fontSize: '20px',
// //             fontWeight: 600,
// //             color: 'white',
// //             letterSpacing: '0.5px'
// //           }}>DOCON</h1>
// //         </div>
        
// //         <div style={{
// //           display: 'flex',
// //           alignItems: 'center',
// //           gap: '32px'
// //         }}>
// //           <button style={{
// //             position: 'relative',
// //             background: 'none',
// //             border: 'none',
// //             cursor: 'pointer',
// //             color: 'white',
// //             transition: 'all 0.2s'
// //           }}>
// //             <Bell size={20} />
// //             <span style={{
// //               position: 'absolute',
// //               top: '-5px',
// //               right: '-5px',
// //               backgroundColor: '#ff6b6b',
// //               color: 'white',
// //               borderRadius: '50%',
// //               width: '20px',
// //               height: '20px',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //               fontSize: '12px',
// //               fontWeight: 'bold'
// //             }}>5</span>
// //           </button>
// //           <div style={{
// //             display: 'flex',
// //             alignItems: 'center',
// //             gap: '16px'
// //           }}>
// //             <div style={{
// //               width: '40px',
// //               height: '40px',
// //               borderRadius: '50%',
// //               backgroundColor: 'rgba(255, 255, 255, 0.2)',
// //               color: 'white',
// //               display: 'flex',
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //               fontWeight: 600,
// //               fontSize: '14px'
// //             }}>DR</div>
// //             <div style={{
// //               display: 'flex',
// //               flexDirection: 'column'
// //             }}>
// //               <span style={{
// //                 fontSize: '14px',
// //                 fontWeight: 600,
// //                 color: 'white'
// //               }}>Dr. Sarah Johnson</span>
// //               <span style={{
// //                 fontSize: '12px',
// //                 color: 'rgba(255, 255, 255, 0.8)'
// //               }}>Cardiologist</span>
// //             </div>
// //           </div>
// //         </div>
// //       </nav>

// //       <div style={{
// //         display: 'flex',
// //         flex: 1
// //       }}>
// //         {/* Sidebar with Gradient Theme */}
// //         <aside style={{
// //           width: collapsed ? '80px' : '250px',
// //           background: 'linear-gradient(135deg, #0066cc 0%, #004080 100%)',
// //           boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           position: 'fixed',
// //           height: 'calc(100vh - 70px)',
// //           transition: 'width 0.3s ease',
// //           overflow: 'hidden',
// //           zIndex: 900
// //         }}>
// //           <div style={{
// //             flex: 1,
// //             padding: '16px 0',
// //             overflowY: 'auto'
// //           }}>
// //             {menuItems.map(item => (
// //               <button
// //                 key={item.id}
// //                 style={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   width: '100%',
// //                   padding: '12px 24px',
// //                   border: 'none',
// //                   background: activeTab === item.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
// //                   cursor: 'pointer',
// //                   color: activeTab === item.id ? 'white' : 'rgba(255, 255, 255, 0.8)',
// //                   textDecoration: 'none',
// //                   transition: 'all 0.2s ease',
// //                   gap: '16px',
// //                   borderRight: activeTab === item.id ? '3px solid white' : 'none'
// //                 }}
// //                 onClick={() => setActiveTab(item.id)}
// //               >
// //                 <span style={{
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   justifyContent: 'center',
// //                   minWidth: '24px'
// //                 }}>
// //                   {React.cloneElement(item.icon, { 
// //                     color: activeTab === item.id ? 'white' : 'rgba(255, 255, 255, 0.8)' 
// //                   })}
// //                 </span>
// //                 {!collapsed && (
// //                   <span style={{
// //                     fontSize: '14px',
// //                     fontWeight: 500,
// //                     whiteSpace: 'nowrap'
// //                   }}>{item.label}</span>
// //                 )}
// //               </button>
// //             ))}
// //           </div>

// //           <div style={{
// //             padding: '16px 0',
// //             borderTop: '1px solid rgba(255, 255, 255, 0.1)'
// //           }}>
// //             <button style={{
// //               display: 'flex',
// //               alignItems: 'center',
// //               width: '100%',
// //               padding: '12px 24px',
// //               border: 'none',
// //               background: 'transparent',
// //               cursor: 'pointer',
// //               color: 'rgba(255, 255, 255, 0.8)',
// //               textDecoration: 'none',
// //               transition: 'all 0.2s ease',
// //               gap: '16px'
// //             }}>
// //               <span style={{
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 minWidth: '24px'
// //               }}><Settings size={20} color="rgba(255, 255, 255, 0.8)" /></span>
// //               {!collapsed && (
// //                 <span style={{
// //                   fontSize: '14px',
// //                   fontWeight: 500,
// //                   whiteSpace: 'nowrap'
// //                 }}>Settings</span>
// //               )}
// //             </button>
// //             <button 
// //               style={{
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 width: '100%',
// //                 padding: '12px 24px',
// //                 border: 'none',
// //                 background: 'transparent',
// //                 cursor: 'pointer',
// //                 color: 'rgba(255, 255, 255, 0.8)',
// //                 textDecoration: 'none',
// //                 transition: 'all 0.2s ease',
// //                 gap: '16px'
// //               }}
// //               onClick={handleLogout}
// //             >
// //               <span style={{
// //                 display: 'flex',
// //                 alignItems: 'center',
// //                 justifyContent: 'center',
// //                 minWidth: '24px'
// //               }}><LogOut size={20} color="rgba(255, 255, 255, 0.8)" /></span>
// //               {!collapsed && (
// //                 <span style={{
// //                   fontSize: '14px',
// //                   fontWeight: 500,
// //                   whiteSpace: 'nowrap'
// //                 }}>Logout</span>
// //               )}
// //             </button>
// //           </div>
// //         </aside>

// //         {/* Main Content */}
// //         <main style={{
// //           flex: 1,
// //           padding: '32px',
// //           marginLeft: collapsed ? '80px' : '250px',
// //           transition: 'margin-left 0.3s ease',
// //           backgroundColor: '#f7fafc',
// //           minHeight: 'calc(100vh - 70px)'
// //         }}>
// //           {children}
// //         </main>
// //       </div>
// //     </div>
// //   );
// // };


// // import React from 'react'
// // import { useNavigate } from 'react-router-dom';


// // export const DoctorNavbar = () => {
// //   const navigate = useNavigate();
// //   const handleLogout = () => {
// //     // Here you would typically also handle any logout logic like clearing tokens/session
// //     navigate('/'); // Navigate to home page
// //   };
// //   return (
// //     <div><>
// //     <meta charSet="UTF-8" />
// //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// //     <title>Doctor Portal</title>
// //     {/* Bootstrap CSS */}
// //     <link
// //       href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
// //       rel="stylesheet"
// //     />
// //     {/* Font Awesome */}
// //     <link
// //       rel="stylesheet"
// //       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
// //     />
// //     {/* Top Navbar */}
// //     <nav
// //   className="navbar navbar-expand-lg navbar-dark"
// //   style={{
// //     position: "sticky",
// //     top: 0,
// //     zIndex: 1000,
// //     background: "linear-gradient(135deg, #0066cc 0%, #004080 100%)",
// //     boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
// //   }}
// // >
// //   <div className="container-fluid">
// //     <a className="navbar-brand" href="#" style={{ fontWeight: 600 }}>
// //       {/* <i className="fas fa-user-md me-2" /> */}⚕️
// //       DOCTOR PORTAL
// //     </a>
// //     <button
// //       className="navbar-toggler"
// //       type="button"
// //       data-bs-toggle="collapse"
// //       data-bs-target="#navbarNav"
// //     >
// //       <span className="navbar-toggler-icon" />
// //     </button>
// //     <div className="collapse navbar-collapse" id="navbarNav">
// //       <ul className="navbar-nav ms-auto">
// //         <li className="nav-item">
// //           <a className="nav-link" href="#" style={{ color: "#ecf0f1" }}>
// //             <i className="fas fa-bell me-1" />
// //             <span className="position-relative">
// //               Alerts
// //               <span
// //                 className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
// //                 style={{ fontSize: "0.6em" }}
// //               >
// //                 3
// //               </span>
// //             </span>
// //           </a>
// //         </li>
// //         <li className="nav-item">
// //           <a className="nav-link" href="#" style={{ color: "#ecf0f1" }}>
// //             <i className="fas fa-inbox me-1" /> Messages
// //           </a>
// //         </li>
// //         <li className="nav-item dropdown">
// //           <a
// //             className="nav-link dropdown-toggle"
// //             href="#"
// //             id="navbarDropdown"
// //             role="button"
// //             data-bs-toggle="dropdown"
// //             style={{ color: "#ecf0f1" }}
// //           >
// //             <i className="fas fa-user-md me-1" /> Dr. Smith
// //           </a>
// //           <ul
// //             className="dropdown-menu dropdown-menu-end"
// //             style={{ border: "none", boxShadow: "0 2px 15px rgba(0,0,0,0.1)" }}
// //           >
// //             <li>
// //               <a className="dropdown-item" href="#">
// //                 <i className="fas fa-user me-2" />
// //                 Profile
// //               </a>
// //             </li>
// //             <li>
// //               <a className="dropdown-item" href="#">
// //                 <i className="fas fa-calendar me-2" />
// //                 Schedule
// //               </a>
// //             </li>
// //             <li>
// //               <a className="dropdown-item" href="#">
// //                 <i className="fas fa-cog me-2" />
// //                 Settings
// //               </a>
// //             </li>
// //             <li>
// //               <hr className="dropdown-divider" />
// //             </li>
// //             <li>
// //                     <button
// //                       className="dropdown-item"
// //                       onClick={handleLogout}
// //                       style={{ color: "#e74c3c" }}
// //                     >
// //                       <i className="fas fa-sign-out-alt me-2" />
// //                       Logout
// //                     </button>
// //                   </li>
// //           </ul>
// //         </li>
// //       </ul>
// //     </div>
// //   </div>
// // </nav>

    
// //     <div className="container-fluid">
// //       <div className="row">
// //         {/* Sidebar */}
// //         <div
// //           className="col-md-3 col-lg-2 d-md-block sidebar collapse"
// //           style={{
// //             backgroundColor: "#fff",
// //             minHeight: "calc(100vh - 56px)",
// //             boxShadow: "2px 0 10px rgba(0,0,0,0.05)",
// //             paddingTop: 20
// //           }}
// //         >
// //           <div className="position-sticky pt-3">
// //             <div
// //               className="text-center mb-4"
// //               style={{ borderBottom: "1px solid #eee", paddingBottom: 15 }}
// //             >
// //               <img
// //                 src="https://via.placeholder.com/80"
// //                 className="rounded-circle mb-2"
// //                 style={{
// //                   width: 80,
// //                   height: 80,
// //                   objectFit: "cover",
// //                   border: "3px solid #d6eaf8"
// //                 }}
// //               />
// //               <h6 style={{ color: "#1a5276", fontWeight: 600 }}>
// //                 Dr. John Smith
// //               </h6>
// //               <small className="text-muted">Cardiologist</small>
// //             </div>
// //             <ul className="nav flex-column">
// //               <li className="nav-item">
// //                 <a
// //                   className="nav-link active"
// //                   href="#"
// //                   style={{
// //                     color: "#1a5276",
// //                     fontWeight: 500,
// //                     borderLeft: "4px solid #1a5276",
// //                     paddingLeft: 16,
// //                     backgroundColor: "#ebf5fb"
// //                   }}
// //                 >
// //                   <i className="fas fa-tachometer-alt me-2" /> Dashboard
// //                 </a>
// //               </li>
// //               <li className="nav-item">
// //                 <a
// //                   className="nav-link"
// //                   href="#"
// //                   style={{ color: "#566573", paddingLeft: 20 }}
// //                 >
// //                   <i className="fas fa-calendar-day me-2" /> Today's Appointments
// //                   <span
// //                     className="badge bg-primary rounded-pill float-end"
// //                     style={{ fontSize: "0.7em" }}
// //                   >
// //                     12
// //                   </span>
// //                 </a>
// //               </li>
// //               <li className="nav-item">
// //                 <a
// //                   className="nav-link"
// //                   href="#"
// //                   style={{ color: "#566573", paddingLeft: 20 }}
// //                 >
// //                   <i className="fas fa-calendar-alt me-2" /> Schedule
// //                 </a>
// //               </li>
// //               <li className="nav-item">
// //                 <a
// //                   className="nav-link"
// //                   href="#"
// //                   style={{ color: "#566573", paddingLeft: 20 }}
// //                 >
// //                   <i className="fas fa-procedures me-2" /> Patients
// //                 </a>
// //               </li>
// //               <li className="nav-item">
// //                 <a
// //                   className="nav-link"
// //                   href="#"
// //                   style={{ color: "#566573", paddingLeft: 20 }}
// //                 >
// //                   <i className="fas fa-prescription me-2" /> Prescriptions
// //                 </a>
// //               </li>
// //               <li className="nav-item">
// //                 <a
// //                   className="nav-link"
// //                   href="#"
// //                   style={{ color: "#566573", paddingLeft: 20 }}
// //                 >
// //                   <i className="fas fa-file-medical me-2" /> Medical Records
// //                 </a>
// //               </li>
// //               <li className="nav-item">
// //                 <a
// //                   className="nav-link"
// //                   href="#"
// //                   style={{ color: "#566573", paddingLeft: 20 }}
// //                 >
// //                   <i className="fas fa-microscope me-2" /> Lab Results
// //                 </a>
// //               </li>
// //               <li className="nav-item mt-3">
// //                 <hr />
// //               </li>
// //               <li className="nav-item">
// //                 <a
// //                   className="nav-link"
// //                   href="#"
// //                   style={{ color: "#566573", paddingLeft: 20 }}
// //                 >
// //                   <i className="fas fa-chart-line me-2" /> Analytics
// //                 </a>
// //               </li>
// //               <li className="nav-item">
// //                 <a
// //                   className="nav-link"
// //                   href="#"
// //                   style={{ color: "#566573", paddingLeft: 20 }}
// //                 >
// //                   <i className="fas fa-cog me-2" /> Settings
// //                 </a>
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //         {/* Main Content */}
// //         <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
// //           <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
// //             <h1 className="h2" style={{ color: "#1a5276" }}>
// //               Doctor Dashboard
// //             </h1>
// //             <div className="btn-toolbar mb-2 mb-md-0">
// //               <div className="btn-group me-2">
// //                 <button
// //                   type="button"
// //                   className="btn btn-sm btn-outline-secondary"
// //                   style={{ borderColor: "#1a5276", color: "#1a5276" }}
// //                 >
// //                   <i className="fas fa-calendar me-1" /> Today
// //                 </button>
// //                 <button
// //                   type="button"
// //                   className="btn btn-sm btn-outline-secondary"
// //                   style={{ borderColor: "#1a5276", color: "#1a5276" }}
// //                 >
// //                   <i className="fas fa-calendar-week me-1" /> Week
// //                 </button>
// //               </div>
// //               <button
// //                 type="button"
// //                 className="btn btn-sm btn-primary"
// //                 style={{ backgroundColor: "#1a5276", border: "none" }}
// //               >
// //                 <i className="fas fa-plus me-1" /> New Appointment
// //               </button>
// //             </div>
// //           </div>
// //           <div
// //             className="alert alert-primary"
// //             style={{
// //               backgroundColor: "#ebf5fb",
// //               borderColor: "#aed6f1",
// //               color: "#1a5276"
// //             }}
// //           >
// //             <i className="fas fa-info-circle me-2" /> You have 5 pending
// //             consultations and 3 lab results to review.
// //           </div>
// //           {/* Your content goes here */}
// //         </main>
// //       </div>
// //     </div>
// //     {/* Bootstrap JS Bundle with Popper */}
// //     {/* Logout Functionality */}
// //   </>
// //   </div>
// //   )
// // }



// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faUserMd, 
//   faCalendarCheck, 
//   faUserInjured, 
//   faFilePrescription, 
//   faVideo, 
//   faBell,
//   faSignOutAlt,
//   faUserCircle,
//   faCog
// } from '@fortawesome/free-solid-svg-icons';
// import { useState } from 'react';
// import { useEffect } from 'react';

// export const DoctorNavbar= () => {
//   const navigate = useNavigate();
// const [userName, setUserName] = useState("John Doe");

//  useEffect(() => {
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
//     <nav className="navbar navbar-expand-lg navbar-dark" style={{ 
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//       background: "linear-gradient(135deg, #006600 0%, #004d00 100%)",
//       borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
//       padding: '0.75rem 1rem',
//       boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
//     }}>
//       <div className="container-fluid">
//         {/* Brand/Logo */}
//         <Link className="navbar-brand d-flex align-items-center" to="/docdashboard" style={{
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
//             <FontAwesomeIcon icon={faUserMd} style={{ color: '#fff', fontSize: '1.1rem' }} />
//           </span>
//           DOCON
//         </Link>

//         {/* Mobile Toggle */}
//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#doctorNavbar"
//           aria-controls="doctorNavbar"
//           aria-expanded="false"
//           style={{ 
//             border: 'none',
//             boxShadow: 'none'
//           }}
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation Links */}
//         <div className="collapse navbar-collapse" id="doctorNavbar">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: '1.5rem' }}>
//             <li className="nav-item">
//               <Link className="nav-link" to="/docdashboard" style={navLinkStyle}>
//                 <FontAwesomeIcon icon={faUserMd} className="me-2" style={{ width: '18px' }} />
//                 Dashboard
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/doctorappointments" style={navLinkStyle}>
//                 <FontAwesomeIcon icon={faCalendarCheck} className="me-2" style={{ width: '18px' }} />
//                 Appointments
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/doctor-patients" style={navLinkStyle}>
//                 <FontAwesomeIcon icon={faUserInjured} className="me-2" style={{ width: '18px' }} />
//                 Patients
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/doctorprescription" style={navLinkStyle}>
//                 <FontAwesomeIcon icon={faFilePrescription} className="me-2" style={{ width: '18px' }} />
//                 Prescriptions
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/doctelemedicine" style={navLinkStyle}>
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
//                 to="/doctor-notifications" 
//                 className="text-white position-relative"
//                 style={notificationStyle}
//               >
//                 <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.1rem' }} />
//                 <span 
//                   className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//                   style={{ fontSize: '0.65rem', padding: '4px 5px', minWidth: '18px' }}
//                 >
//                   5
//                 </span>
//               </Link>
//             </div>
            
//             {/* User Dropdown */}
//             <div className="dropdown">
//             <button className="btn dropdown-toggle d-flex align-items-center py-2 px-3" type="button" data-bs-toggle="dropdown" style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "none", color: "white", borderRadius: "6px" }}>
//             <div style={{ width: "32px", height: "32px", backgroundColor: "rgba(255,255,255,0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginRight: "10px", color: "#fff", fontWeight: "bold" }}>
//                 {userName.charAt(4)}
//               </div>
//                 <span style={{ fontWeight: 500 }}>
//   {userName}
// </span>
//               </button>
//               <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="doctorDropdown" style={dropdownMenuStyle}>
//                 <li>
//                   <Link className="dropdown-item d-flex align-items-center py-2" to="/mydocprofile" style={dropdownItemStyle}>
//                     <FontAwesomeIcon icon={faUserCircle} className="me-2" style={{ color: '#006600', width: '18px' }} /> 
//                     My Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="dropdown-item d-flex align-items-center py-2" to="/doctor-settings" style={dropdownItemStyle}>
//                     <FontAwesomeIcon icon={faCog} className="me-2" style={{ color: '#006600', width: '18px' }} /> 
//                     Settings
//                   </Link>
//                 </li>
//                 <li><hr className="dropdown-divider my-1" style={{ opacity: 0.1 }} /></li>
//                 <li>
//                   <button className="dropdown-item d-flex align-items-center py-2" onClick={handleLogout} style={logoutButtonStyle}>
//                     <FontAwesomeIcon icon={faSignOutAlt} className="me-2" style={{ width: '18px' }} /> 
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Common styles
// const navLinkStyle = {
//   color: 'rgba(255,255,255,0.9)',
//   fontWeight: 500,
//   padding: '8px 16px',
//   margin: '0 4px',
//   borderRadius: '4px',
//   transition: 'all 0.2s ease',
//   display: 'flex',
//   alignItems: 'center'
// };

// const notificationStyle = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   width: '40px',
//   height: '40px',
//   borderRadius: '50%',
//   backgroundColor: 'rgba(255,255,255,0.1)',
//   transition: 'all 0.2s ease'
// };

// const profileButtonStyle = { ...notificationStyle, padding: '0 12px' };
// const profileIconStyle = { ...notificationStyle, width: '32px', height: '32px', fontWeight: 'bold', fontSize: '0.9rem' };
// const dropdownMenuStyle = { borderRadius: '6px', minWidth: '200px' };
// const dropdownItemStyle = { fontWeight: 500, borderRadius: '4px', fontSize: '0.9rem' };
// const logoutButtonStyle = { ...dropdownItemStyle, color: '#ff6b6b' };


// export  default DoctorNavbar;


// ----------------------------------------------------final code---------------------------------------------------

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserMd, 
  faCalendarCheck, 
  faUserInjured, 
  faFilePrescription, 
  faVideo, 
  faBell,
  faSignOutAlt,
  faUserCircle,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export const DoctorNavbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("John Doe");
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("name");
    if (username) setUserName(username);
    
    // Set active link based on current path
    const path = window.location.pathname;
    setActiveLink(path);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    navigate('/login');
    window.location.reload();
  };

  // Helper function to determine if link is active
  const isActive = (path) => activeLink === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark doctor-navbar">
      <div className="container-fluid">
        {/* Brand/Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/docdashboard">
          <div className="brand-icon-container">
            <FontAwesomeIcon icon={faUserMd} className="brand-icon" />
          </div>
          <span className="brand-text">DOCON</span>
        </Link>

        {/* Mobile Toggle */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#doctorNavbar"
          aria-controls="doctorNavbar"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="doctorNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/docdashboard') ? 'active' : ''}`} 
                to="/docdashboard"
              >
                <FontAwesomeIcon icon={faUserMd} className="nav-icon" />
                <span className="nav-text">Dashboard</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/doctorappointments') ? 'active' : ''}`} 
                to="/doctorappointments"
              >
                <FontAwesomeIcon icon={faCalendarCheck} className="nav-icon" />
                <span className="nav-text">Appointments</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/doctor-patients') ? 'active' : ''}`} 
                to="/doctor-patients"
              >
                <FontAwesomeIcon icon={faUserInjured} className="nav-icon" />
                <span className="nav-text">Patients</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/doctorprescription') ? 'active' : ''}`} 
                to="/doctorprescription"
              >
                <FontAwesomeIcon icon={faFilePrescription} className="nav-icon" />
                <span className="nav-text">Prescriptions</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/doctelemedicine') ? 'active' : ''}`} 
                to="/doctelemedicine"
              >
                <FontAwesomeIcon icon={faVideo} className="nav-icon" />
                <span className="nav-text">Telemedicine</span>
              </Link>
            </li>
          </ul>

          {/* Right-side Items */}
          <div className="navbar-right-container">
            {/* Notifications */}
            <div className="notification-container">
              <Link to="/doctor-notifications" className="notification-bell">
                <FontAwesomeIcon icon={faBell} />
                <span className="notification-badge">5</span>
              </Link>
            </div>
            
            {/* User Dropdown */}
            <div className="dropdown user-dropdown">
              <button 
                className="btn dropdown-toggle user-dropdown-btn" 
                type="button" 
                data-bs-toggle="dropdown"
              >
                <div className="user-avatar">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="user-name">{userName}</span>
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/mydocprofile">
                    <FontAwesomeIcon icon={faUserCircle} className="dropdown-icon" /> 
                    <span>My Profile</span>
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/doctor-settings">
                    <FontAwesomeIcon icon={faCog} className="dropdown-icon" /> 
                    <span>Settings</span>
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button className="dropdown-item logout-item" onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="dropdown-icon" /> 
                    <span>Logout</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DoctorNavbar;

// CSS (can be placed in a separate CSS file or styled-components)
const styles = `
.doctor-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: linear-gradient(135deg, #00695c 0%, #004d40 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
}

.brand-icon-container {
  background-color: rgba(255,255,255,0.2);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  transition: all 0.3s ease;
}

.brand-icon {
  color: #fff;
  font-size: 1.1rem;
}

.brand-text {
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
  color: #fff;
  transition: all 0.3s ease;
}

.navbar-nav {
  margin-left: 1.5rem;
}

.nav-item {
  margin: 0 4px;
}

.nav-link {
  color: rgba(255,255,255,0.85);
  font-weight: 500;
  padding: 10px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
}

.nav-link:hover, .nav-link.active {
  background-color: rgba(255,255,255,0.15);
  color: #fff;
}

.nav-link.active {
  font-weight: 600;
}

.nav-icon {
  width: 18px;
  margin-right: 10px;
  color: rgba(255,255,255,0.8);
}

.nav-text {
  margin-left: 5px;
}

.navbar-right-container {
  display: flex;
  align-items: center;
}

.notification-container {
  position: relative;
  margin-right: 20px;
}

.notification-bell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255,255,255,0.1);
  transition: all 0.3s ease;
  color: #fff;
  position: relative;
}

.notification-bell:hover {
  background-color: rgba(255,255,255,0.2);
}

.notification-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: #d32f2f;
  color: white;
  border-radius: 50%;
  padding: 3px 6px;
  font-size: 0.65rem;
  min-width: 20px;
  text-align: center;
}

.user-dropdown-btn {
  background-color: rgba(255,255,255,0.1);
  border: none;
  color: white;
  border-radius: 6px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
}

.user-dropdown-btn:hover {
  background-color: rgba(255,255,255,0.2);
}

.user-avatar {
  width: 32px;
  height: 32px;
  background-color: rgba(255,255,255,0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;
}

.user-name {
  font-weight: 500;
}

.dropdown-menu {
  border-radius: 8px;
  min-width: 220px;
  border: none;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  background-color: #fff;
  margin-top: 8px;
}

.dropdown-item {
  padding: 8px 16px;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
}

.dropdown-item:hover {
  background-color: #f5f5f5;
  color: #00695c;
}

.dropdown-icon {
  width: 18px;
  margin-right: 10px;
  color: #00695c;
}

.dropdown-divider {
  margin: 5px 0;
  opacity: 0.1;
}

.logout-item {
  color: #d32f2f;
}

.logout-item:hover {
  color: #b71c1c;
  background-color: #ffebee;
}

@media (max-width: 992px) {
  .navbar-collapse {
    padding-top: 15px;
  }
  
  .navbar-right-container {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255,255,255,0.1);
    width: 100%;
    justify-content: flex-end;
  }
}
`;

// Add styles to the document
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);

