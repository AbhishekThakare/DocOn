// // import React from "react";
// // import { useForm } from "react-hook-form";
// // import { useNavigate} from "react-router-dom";
// // import axios from "axios";
// // import { PatientNavbar } from "../layout/PatientNavbar";

// // export const Appointment = () => {
  
// //   const {register,handleSubmit,formState: { errors }} = useForm();
// //   const navigate = useNavigate();

// //   const submitHandler = async(data) => {
// //   console.log(data);

// //     try {
// //       const res = await axios.post("/appointments",data);
// //       console.log(res.data)
// //       if (res.status === 201){
// //           alert("appointment confirmed");
// //             navigate('/doctorprofiles');
// //       } else {
// //         throw new Error("Appointment booking failed");

// //       }  
// //     } catch (error) {
// //       console.error("Error:", error.response?.data || error.message);
// //   alert(error.response?.data?.message || "Failed to book an appointment."); 
// //     }  
// //   };

// //   return (
// //     <div>
// //       <PatientNavbar></PatientNavbar>
     
// //       {/* Hero Section */}
// //       <header className="bg-primary text-white text-center py-5" style={{
// //     background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
// //     boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
// //   }}>
// //         <h1>Book Your Appointment</h1>
// //         <p className="lead">Schedule a consultation with a doctor easily.</p>
// //       </header>

// //       {/* Appointment Form Section */}
// //       <div className="container my-5">
// //         <div className="appointment-container bg-primary-light p-4">
// //           <h3 className="text-center text-primary mb-3">Fill in Your Details</h3>
// //           <form onSubmit={handleSubmit(submitHandler)}>
// //             <div className="mb-3">
// //               <label className="form-label">Full Name</label>
// //               <input
// //                 type="text"
// //                 className="form-control"
// //                 placeholder="Enter your full name"
// //                 {...register("fullName", { required: "Full Name is required" })}
// //               />
// //               {errors.fullName && <p className="text-danger">{errors.fullName.message}</p>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Email</label>
// //               <input
// //                 type="email"
// //                 className="form-control"
// //                 placeholder="Enter your email"
// //                 {...register("email", { required: "Email is required" })}
// //               />
// //               {errors.email && <p className="text-danger">{errors.email.message}</p>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Phone Number</label>
// //               <input
// //                 type="tel"
// //                 className="form-control"
// //                 placeholder="Enter your phone number"
// //                 {...register("phone", { required: "Phone Number is required" })}
// //               />
// //               {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Select Doctor</label>
// //               <select className="form-select" {...register("doctor", { required: "Please select a doctor" })}>
// //                 <option value="">Choose a doctor</option>
// //                 <option value="Dr. John Doe">Dr. John Doe - Cardiologist</option>
// //                 <option value="Dr. Jane Smith">Dr. Jane Smith - Neurologist</option>
// //                 <option value="Dr. Emily Brown">Dr. Emily Brown - Dermatologist</option>
// //               </select>
// //               {errors.doctor && <p className="text-danger">{errors.doctor.message}</p>}
// //             </div> 

// //             <div className="mb-3">
// //               <label className="form-label">Select Date</label>
// //               <input type="date" className="form-control" {...register("date", { required: "Please select a date" })} />
// //               {errors.date && <p className="text-danger">{errors.date.message}</p>}
// //             </div>

// //             <div className="mb-3">
// //               <label className="form-label">Select Time</label>
// //               <input type="time" className="form-control" {...register("time", { required: "Please select a time" })} />
// //               {errors.time && <p className="text-danger">{errors.time.message}</p>}
// //             </div> 

// //             <div className="mb-3">
// //               <label className="form-label">Appointment Type</label>
// //               <div className="form-check">
// //                 <input
// //                   className="form-check-input"
// //                   type="radio"
// //                   {...register("appointmentType", { required: "Please select an appointment type" })}
// //                   value="Online Consultation"
// //                   id="online"
// //                 />
// //                 <label className="form-check-label" htmlFor="online">
// //                   Online Consultation
// //                 </label>
// //               </div>
// //               <div className="form-check">
// //                 <input
// //                   className="form-check-input"
// //                   type="radio"
// //                   {...register("appointmentType")}
// //                   value="In-Clinic Visit"
// //                   id="offline"
// //                 />
// //                 <label className="form-check-label" htmlFor="offline">
// //                   In-Clinic Visit
// //                 </label>
// //               </div>
// //               {errors.appointmentType && <p className="text-danger">{errors.appointmentType.message}</p>}
// //             </div> 

// //             <div className="mb-3">
// //               <label className="form-label">Additional Notes (Optional)</label>
// //               <textarea className="form-control" rows={3} placeholder="Any specific concerns?" {...register("notes")} />
// //             </div>

// //             <div className="d-grid">
// //               <button type="submit" className="btn btn-primary btn-lg" style={{
// //     background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
// //     boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
// //   }}>
// //                 Confirm Appointment
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { PatientNavbar } from '../layout/PatientNavbar';

// export const Appointment = () => {
//   const navigate = useNavigate();

//   // Sample appointment data
//   const upcomingAppointments = [
//     {
//       id: 1,
//       doctor: 'Dr. Sarah Johnson',
//       specialty: 'Cardiology',
//       date: '2023-06-15',
//       time: '10:30 AM',
//       status: 'Confirmed',
//       avatar: 'https://randomuser.me/api/portraits/women/43.jpg'
//     },
//     {
//       id: 2,
//       doctor: 'Dr. Michael Chen',
//       specialty: 'Dermatology',
//       date: '2023-06-18',
//       time: '2:15 PM',
//       status: 'Confirmed',
//       avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
//     }
//   ];

//   const pastAppointments = [
//     {
//       id: 3,
//       doctor: 'Dr. Emily Wilson',
//       specialty: 'General Medicine',
//       date: '2023-05-20',
//       time: '9:00 AM',
//       status: 'Completed',
//       avatar: 'https://randomuser.me/api/portraits/women/65.jpg'
//     },
//     {
//       id: 4,
//       doctor: 'Dr. Robert Garcia',
//       specialty: 'Orthopedics',
//       date: '2023-04-12',
//       time: '11:45 AM',
//       status: 'Completed',
//       avatar: 'https://randomuser.me/api/portraits/men/75.jpg'
//     }
//   ];

//   const handleBookAppointment = () => {
//     navigate('/book-appointment');
//   };

//   return (
//     <div><PatientNavbar></PatientNavbar>
//     <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
//       <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
//         <h1 className="h2" style={{ color: '#2c3e50' }}>
//           <i className="fas fa-calendar-check me-2"></i> My Appointments
//         </h1>
//         <button 
//           className="btn btn-primary" 
//           onClick={handleBookAppointment}
//           style={{ backgroundColor: '#3498db', border: 'none' }}
//         >
//           <i className="fas fa-plus me-1"></i> Book New Appointment
//         </button>
//       </div>

//       <div className="row">
//         <div className="col-md-12">
//           {/* Upcoming Appointments */}
//           <div className="card mb-4" style={{ border: 'none', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
//             <div className="card-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #eee' }}>
//               <h5 className="mb-0" style={{ color: '#2c3e50' }}>
//                 <i className="fas fa-calendar-alt me-2"></i> Upcoming Appointments
//               </h5>
//             </div>
//             <div className="card-body">
//               {upcomingAppointments.length > 0 ? (
//                 <div className="table-responsive">
//                   <table className="table table-hover">
//                     <thead>
//                       <tr>
//                         <th scope="col">Doctor</th>
//                         <th scope="col">Specialty</th>
//                         <th scope="col">Date</th>
//                         <th scope="col">Time</th>
//                         <th scope="col">Status</th>
//                         <th scope="col">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {upcomingAppointments.map((appointment) => (
//                         <tr key={appointment.id}>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <img
//                                 src={appointment.avatar}
//                                 alt={appointment.doctor}
//                                 className="rounded-circle me-3"
//                                 style={{ width: '40px', height: '40px', objectFit: 'cover' }}
//                               />
//                               {appointment.doctor}
//                             </div>
//                           </td>
//                           <td>{appointment.specialty}</td>
//                           <td>{appointment.date}</td>
//                           <td>{appointment.time}</td>
//                           <td>
//                             <span className={`badge ${appointment.status === 'Confirmed' ? 'bg-success' : 'bg-warning'}`}>
//                               {appointment.status}
//                             </span>
//                           </td>
//                           <td>
//                             <button className="btn btn-sm btn-outline-primary me-2">
//                               <i className="fas fa-edit"></i> Reschedule
//                             </button>
//                             <button className="btn btn-sm btn-outline-danger">
//                               <i className="fas fa-times"></i> Cancel
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <div className="text-center py-4">
//                   <i className="fas fa-calendar-times fa-3x mb-3" style={{ color: '#bdc3c7' }}></i>
//                   <h5 style={{ color: '#7f8c8d' }}>No upcoming appointments</h5>
//                   <p className="text-muted">Book an appointment with your doctor</p>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Past Appointments */}
//           <div className="card" style={{ border: 'none', boxShadow: '0 2px 15px rgba(0,0,0,0.05)' }}>
//             <div className="card-header" style={{ backgroundColor: '#f8f9fa', borderBottom: '1px solid #eee' }}>
//               <h5 className="mb-0" style={{ color: '#2c3e50' }}>
//                 <i className="fas fa-history me-2"></i> Past Appointments
//               </h5>
//             </div>
//             <div className="card-body">
//               {pastAppointments.length > 0 ? (
//                 <div className="table-responsive">
//                   <table className="table table-hover">
//                     <thead>
//                       <tr>
//                         <th scope="col">Doctor</th>
//                         <th scope="col">Specialty</th>
//                         <th scope="col">Date</th>
//                         <th scope="col">Time</th>
//                         <th scope="col">Status</th>
//                         <th scope="col">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {pastAppointments.map((appointment) => (
//                         <tr key={appointment.id}>
//                           <td>
//                             <div className="d-flex align-items-center">
//                               <img
//                                 src={appointment.avatar}
//                                 alt={appointment.doctor}
//                                 className="rounded-circle me-3"
//                                 style={{ width: '40px', height: '40px', objectFit: 'cover' }}
//                               />
//                               {appointment.doctor}
//                             </div>
//                           </td>
//                           <td>{appointment.specialty}</td>
//                           <td>{appointment.date}</td>
//                           <td>{appointment.time}</td>
//                           <td>
//                             <span className="badge bg-secondary">{appointment.status}</span>
//                           </td>
//                           <td>
//                             <button className="btn btn-sm btn-outline-primary">
//                               <i className="fas fa-file-medical"></i> View Details
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               ) : (
//                 <div className="text-center py-4">
//                   <i className="fas fa-calendar-check fa-3x mb-3" style={{ color: '#bdc3c7' }}></i>
//                   <h5 style={{ color: '#7f8c8d' }}>No past appointments</h5>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//     </div>
//   );
// };

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { PatientNavbar } from "../layout/PatientNavbar";
// import { useState ,useEffect } from "react";
// export const Appointment = () => {
  
//   const [doctors, setDoctors] = useState([]);
  
//   useEffect(() => {
//     getAllDoctors();
//   }, []);

//   const getAllDoctors = async () => {
//     const res = await axios.get("/getalldoctor");
//     setDoctors(res.data.data);
//   };

//   const {register,handleSubmit,formState: { errors, isSubmitting },
// } = useForm();
//   const navigate = useNavigate();

//   const submitHandler = async (data) => {
//     try {
//       const userId = localStorage.getItem("Id"); // Get user ID
//       if (!userId) {
//         alert("User not logged in. Please login first.");
//         return;
//       }
      

//       // Split the selected doctor value to get ID and name
//     const [doctorEmail, doctorName] = data.doctor.split("|");

//     // Prepare the appointment data
//     const appointmentData = {
//       ...data,
//       userId,
//       doctorEmail,
//       doctorName,
//     };

//       const res = await axios.post("/appointments", appointmentData);

//       if (res.status === 201) {
//         alert("Booking confirmed");
//         navigate("/myappointments", {
//           state: {
//             successMessage: "Your appointment has been confirmed!",
//             appointmentDetails: res.data,
//           },
//         });
//       } else {
//         throw new Error("Appointment booking failed");
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Failed to book an appointment.");
//     }
//   };

//   return (
//     <div className="appointment-page" style={{ 
//       minHeight: "100vh", 
//       backgroundColor: "#f5f7fa",
//       fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
//     }}>
//       <PatientNavbar />
      
//       {/* Hero Section */}
//       <section className="appointment-hero" style={{
//         background: "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
//         color: "white",
//         padding: "5rem 0 4rem",
//         marginBottom: "3rem",
//         position: "relative",
//         overflow: "hidden"
//       }}>
//         <div className="container text-center position-relative">
//           <div style={{
//             position: "absolute",
//             top: "-50px",
//             right: "-50px",
//             width: "200px",
//             height: "200px",
//             borderRadius: "50%",
//             background: "rgba(255, 255, 255, 0.05)"
//           }}></div>
//           <div style={{
//             position: "absolute",
//             bottom: "-30px",
//             left: "-30px",
//             width: "150px",
//             height: "150px",
//             borderRadius: "50%",
//             background: "rgba(255, 255, 255, 0.05)"
//           }}></div>
//           <h1 className="display-4 fw-bold mb-3" style={{ 
//             textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
//             fontWeight: "700",
//             letterSpacing: "0.5px"
//           }}>
//             Book Your Appointment
//           </h1>
//           <p className="lead mb-0" style={{ 
//             fontSize: "1.25rem", 
//             opacity: 0.9,
//             maxWidth: "700px",
//             margin: "0 auto"
//           }}>
//             Schedule your consultation with our board-certified specialists
//           </p>
//         </div>
//       </section>

//       {/* Appointment Form Section */}
//       <div className="container mb-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="card border-0" style={{
//               borderRadius: "12px",
//               overflow: "hidden",
//               boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
//               border: "1px solid rgba(0,0,0,0.05)"
//             }}>
//               <div className="card-header bg-white py-4 border-0" style={{
//                 borderBottom: "1px solid rgba(0,0,0,0.05)"
//               }}>
//                 <h3 className="text-center mb-0" style={{
//                   color: "#2c3e50",
//                   fontWeight: "600",
//                   letterSpacing: "0.3px",
//                   fontSize: "1.5rem"
//                 }}>
//                   <i className="bi bi-calendar-plus me-2" style={{ color: "#3498db" }}></i>
//                   Appointment Details
//                 </h3>
//               </div>
//               <div className="card-body p-4 p-md-5" style={{ backgroundColor: "#fdfdfd" }}>
//                 <form onSubmit={handleSubmit(submitHandler)}>
//                   <div className="row">
//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <input
//                           type="text"
//                           className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
//                           id="fullName"
//                           placeholder="John Doe"
//                           {...register("fullName", { required: "Full Name is required" })}
//                           style={{ 
//                             height: "calc(3.5rem + 2px)",
//                             borderColor: errors.fullName ? "#e74c3c" : "#ced4da"
//                           }}
//                         />
//                         <label htmlFor="fullName" style={{ 
//                           color: errors.fullName ? "#e74c3c" : "#495057",
//                           fontWeight: "500"
//                         }}>
//                           Full Name
//                         </label>
//                         {errors.fullName && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.9rem" }}>
//                             {errors.fullName.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <input
//                           type="email"
//                           className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                           id="email"
//                           placeholder="name@example.com"
//                           {...register("email", { 
//                             required: "Email is required",
//                             pattern: {
//                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                               message: "Invalid email address"
//                             }
//                           })}
//                           style={{ 
//                             height: "calc(3.5rem + 2px)",
//                             borderColor: errors.email ? "#e74c3c" : "#ced4da"
//                           }}
//                         />
//                         <label htmlFor="email" style={{ 
//                           color: errors.email ? "#e74c3c" : "#495057",
//                           fontWeight: "500"
//                         }}>
//                           Email Address
//                         </label>
//                         {errors.email && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.9rem" }}>
//                             {errors.email.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <input
//                           type="tel"
//                           className={`form-control ${errors.phone ? "is-invalid" : ""}`}
//                           id="phone"
//                           placeholder="+1 (123) 456-7890"
//                           {...register("phone", { 
//                             required: "Phone Number is required",
//                             pattern: {
//                               value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{3,6}$/im,
//                               message: "Invalid phone number"
//                             }
//                           })}
//                           style={{ 
//                             height: "calc(3.5rem + 2px)",
//                             borderColor: errors.phone ? "#e74c3c" : "#ced4da"
//                           }}
//                         />
//                         <label htmlFor="phone" style={{ 
//                           color: errors.phone ? "#e74c3c" : "#495057",
//                           fontWeight: "500"
//                         }}>
//                           Phone Number
//                         </label>
//                         {errors.phone && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.9rem" }}>
//                             {errors.phone.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>
// {/* 
//                     <div className="mb-3">
//                 <label className="form-label">Select Doctor</label>
//                 <select
//                   className="form-select"
//                   {...register("doctorId")}
//                   onChange={(event) => getCityByStateId(event.target.value)}
//                 >
//                   <option>SELECT STATE</option>
//                   {doctors?.map((doctor) => (
//                     <option key={doctor._id} value={doctor._id}>{doctor.name}</option>
//                   ))}
//                 </select>
//               </div> */}



// <div className="col-md-6 mb-4">
//   <div className="form-floating">
//     <select
//       className={`form-select ${errors.doctor ? "is-invalid" : ""}`}
//       id="doctor"
//       {...register("doctor", { required: "Please select a doctor" })}
//       style={{ 
//         height: "calc(3.5rem + 2px)",
//         borderColor: errors.doctor ? "#e74c3c" : "#ced4da"
//       }}
//     >
//       <option value="">SELECT DOCTOR</option>
//       {doctors?.map((doctor) => (
//         <option key={doctor._id} value={`${doctor.email}|${doctor.fullName}`}>
//           {doctor.fullName}
//         </option>
//       ))}
//     </select>
//     <label htmlFor="doctor" style={{ 
//       color: errors.doctor ? "#e74c3c" : "#495057",
//       fontWeight: "500"
//     }}>
//       Select Doctor
//     </label>
//     {errors.doctor && (
//       <div className="invalid-feedback" style={{ fontSize: "0.9rem" }}>
//         {errors.doctor.message}
//       </div>
//     )}
//   </div>
// </div>

//                     </div>

//                   <div className="row">
//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <input
//                           type="date"
//                           className={`form-control ${errors.date ? "is-invalid" : ""}`}
//                           id="date"
//                           min={new Date().toISOString().split("T")[0]}
//                           {...register("date", { required: "Please select a date" })}
//                           style={{ 
//                             height: "calc(3.5rem + 2px)",
//                             borderColor: errors.date ? "#e74c3c" : "#ced4da"
//                           }}
//                         />
//                         <label htmlFor="date" style={{ 
//                           color: errors.date ? "#e74c3c" : "#495057",
//                           fontWeight: "500"
//                         }}>
//                           Appointment Date
//                         </label>
//                         {errors.date && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.9rem" }}>
//                             {errors.date.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                       {/* <input
//   type="time"
//   className={`form-control ${errors.time ? "is-invalid" : ""}`}
//   id="time"
//   {...register("time", { required: "Please select a time" })}
// /> */}


// <select
//   className={`form-select ${errors.time ? "is-invalid" : ""}`}
//   id="time"
//   {...register("time", { required: "Please select a time slot" })}
// >
//   <option value="">Select a time slot</option>
//   <option value="9:00 AM to 10:00 AM">9:00 AM to 10:00 AM</option>
//   <option value="10:00 AM to 11:00 AM">10:00 AM to 11:00 AM</option>
//   <option value="11:00 AM to 12:00 PM">11:00 AM to 12:00 PM</option>
//   <option value="12:00 PM to 1:00 PM">12:00 PM to 1:00 PM</option>
//   <option value="1:00 PM to 2:00 PM">1:00 PM to 2:00 PM</option>
//   <option value="2:00 PM to 3:00 PM">2:00 PM to 3:00 PM</option>
//   <option value="3:00 PM to 4:00 PM">3:00 PM to 4:00 PM</option>
//   <option value="4:00 PM to 5:00 PM">4:00 PM to 5:00 PM</option>
//   <option value="5:00 PM to 6:00 PM">5:00 PM to 6:00 PM</option>
// </select>

//                         <label htmlFor="time" style={{ 
//                           color: errors.time ? "#e74c3c" : "#495057",
//                           fontWeight: "500"
//                         }}>
//                           Appointment Time
//                         </label>
//                         {errors.time && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.9rem" }}>
//                             {errors.time.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <label className="form-label fw-semibold mb-3" style={{ 
//                       color: "#2c3e50",
//                       fontSize: "1rem"
//                     }}>
//                       Appointment Type
//                     </label>
//                     <div className="d-flex gap-4">
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           {...register("appointmentType", { required: "Please select an appointment type" })}
//                           value="Online Consultation"
//                           id="online"
//                           style={{ 
//                             width: "1.2em", 
//                             height: "1.2em", 
//                             marginTop: "0.2em",
//                             borderColor: errors.appointmentType ? "#e74c3c" : "#adb5bd"
//                           }}
//                         />
//                         <label className="form-check-label ms-2" htmlFor="online" style={{ 
//                           fontSize: "1rem",
//                           color: "#2c3e50",
//                           fontWeight: "500"
//                         }}>
//                           <i className="bi bi-camera-video-fill me-2" style={{ color: "#3498db" }}></i>
//                           Online Consultation
//                         </label>
//                       </div>
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           {...register("appointmentType")}
//                           value="In-Clinic Visit"
//                           id="offline"
//                           style={{ 
//                             width: "1.2em", 
//                             height: "1.2em", 
//                             marginTop: "0.2em",
//                             borderColor: errors.appointmentType ? "#e74c3c" : "#adb5bd"
//                           }}
//                         />
//                         <label className="form-check-label ms-2" htmlFor="offline" style={{ 
//                           fontSize: "1rem",
//                           color: "#2c3e50",
//                           fontWeight: "500"
//                         }}>
//                           <i className="bi bi-building me-2" style={{ color: "#3498db" }}></i>
//                           In-Clinic Visit
//                         </label>
//                       </div>
//                     </div>
//                     {errors.appointmentType && (
//                       <div className="text-danger mt-2" style={{ fontSize: "0.9rem" }}>
//                         {errors.appointmentType.message}
//                       </div>
//                     )}
//                   </div>

//                   <div className="mb-4">
//                     <div className="form-floating">
//                       <textarea
//                         className="form-control"
//                         id="notes"
//                         placeholder="Leave additional notes here"
//                         style={{ 
//                           height: "120px",
//                           borderColor: "#ced4da"
//                         }}
//                         {...register("notes")}
//                       ></textarea>
//                       <label htmlFor="notes" style={{ 
//                         color: "#495057",
//                         fontWeight: "500"
//                       }}>
//                         Additional Notes (Optional)
//                       </label>
//                     </div>
//                   </div>

//                   <div className="d-grid mt-4">
//                     <button
//                       type="submit"
//                       className="btn btn-lg py-3"
//                       disabled={isSubmitting}
//                       style={{
//                         background: "linear-gradient(135deg, #3498db 0%, #2c3e50 100%)",
//                         border: "none",
//                         borderRadius: "8px",
//                         fontWeight: "600",
//                         letterSpacing: "0.5px",
//                         transition: "all 0.3s ease",
//                         boxShadow: "0 4px 15px rgba(44, 62, 80, 0.2)",
//                         color: "white",
//                         fontSize: "1.1rem"
//                       }}
//                       onMouseOver={(e) => {
//                         e.target.style.transform = "translateY(-2px)";
//                         e.target.style.boxShadow = "0 6px 20px rgba(44, 62, 80, 0.3)";
//                       }}
//                       onMouseOut={(e) => {
//                         e.target.style.transform = "translateY(0)";
//                         e.target.style.boxShadow = "0 4px 15px rgba(44, 62, 80, 0.2)";
//                       }}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                           Processing...
//                         </>
//                       ) : (
//                         <>
//                           <i className="bi bi-check-circle-fill me-2"></i>
//                           Confirm Appointment
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// ------------------------------------------FINAL CODE-----------------------------------------

// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { PatientNavbar } from "../layout/PatientNavbar";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const Appointment = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
  
//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const res = await axios.get("/getalldoctor");
//         setDoctors(res.data.data);
//       } catch (error) {
//         toast.error("Failed to load doctors. Please try again later.");
//         console.error("Error fetching doctors:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
    
//     fetchDoctors();
//   }, []);

//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors, isSubmitting },
//     reset
//   } = useForm();
  
//   const navigate = useNavigate();

//   const submitHandler = async (data) => {
//     try {
//       const userId = localStorage.getItem("Id");
//       if (!userId) {
//         toast.error("Please login to book an appointment");
//         navigate("/login");
//         return;
//       }

//       const [doctorEmail, doctorName] = data.doctor.split("|");
//       const appointmentData = {
//         ...data,
//         userId,
//         doctorEmail,
//         doctorName,
//       };

//       const res = await axios.post("/appointments", appointmentData);

//       if (res.status === 201) {
//         toast.success("Appointment booked successfully!", {
//           autoClose: 1500, // Show for 1.5 seconds
//           hideProgressBar: true,
//         });
//         setTimeout(() => {
//           reset();
//           navigate("/myappointments", {
//             state: {
//               successMessage: "Your appointment has been confirmed!",
//               appointmentDetails: res.data,
//             },
//           });
//         }, 1500); // Navigate after 1.5 seconds
//       }
//     } catch (error) {
//       console.error("Error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Failed to book appointment");
//     }
//   };

//   return (
//     <div className="appointment-page" style={{ 
//       minHeight: "100vh", 
//       backgroundColor: "#f8fafc",
//       fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
//     }}>
//       <PatientNavbar />
//       <ToastContainer 
//         position="top-center"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
      
//       {/* Hero Section */}
//       <section className="appointment-hero" style={{
//         background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
//         color: "white",
//         padding: "6rem 0 5rem",
//         marginBottom: "3rem",
//         position: "relative",
//         overflow: "hidden"
//       }}>
//         <div className="container text-center position-relative">
//           <div style={{
//             position: "absolute",
//             top: "-50px",
//             right: "-50px",
//             width: "200px",
//             height: "200px",
//             borderRadius: "50%",
//             background: "rgba(255, 255, 255, 0.1)"
//           }}></div>
//           <div style={{
//             position: "absolute",
//             bottom: "-30px",
//             left: "-30px",
//             width: "150px",
//             height: "150px",
//             borderRadius: "50%",
//             background: "rgba(255, 255, 255, 0.1)"
//           }}></div>
//           <h1 className="display-4 fw-bold mb-3" style={{ 
//             fontWeight: "700",
//             letterSpacing: "-0.5px",
//             lineHeight: "1.2"
//           }}>
//             Book Your Appointment
//           </h1>
//           <p className="lead mb-0" style={{ 
//             fontSize: "1.25rem", 
//             opacity: 0.9,
//             maxWidth: "700px",
//             margin: "0 auto"
//           }}>
//             Schedule your consultation with our board-certified specialists
//           </p>
//         </div>
//       </section>

//       {/* Appointment Form Section */}
//       <div className="container mb-5">
//         <div className="row justify-content-center">
//           <div className="col-lg-8">
//             <div className="card border-0" style={{
//               borderRadius: "16px",
//               overflow: "hidden",
//               boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               border: "1px solid rgba(226, 232, 240, 0.7)"
//             }}>
//               <div className="card-header bg-white py-4 border-0" style={{
//                 borderBottom: "1px solid rgba(226, 232, 240, 0.7)"
//               }}>
//                 <h3 className="text-center mb-0" style={{
//                   color: "#1e293b",
//                   fontWeight: "600",
//                   fontSize: "1.75rem"
//                 }}>
//                   <i className="fas fa-calendar-plus me-2" style={{ color: "#2563eb" }}></i>
//                   Appointment Details
//                 </h3>
//               </div>
//               <div className="card-body p-4 p-md-5" style={{ backgroundColor: "#ffffff" }}>
//                 <form onSubmit={handleSubmit(submitHandler)}>
//                   <div className="row">
//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <input
//                           type="text"
//                           className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
//                           id="fullName"
//                           placeholder="John Doe"
//                           {...register("fullName", { required: "Full Name is required" })}
//                           style={{ 
//                             height: "56px",
//                             borderColor: errors.fullName ? "#dc2626" : "#e2e8f0",
//                             backgroundColor: "#f8fafc"
//                           }}
//                         />
//                         <label htmlFor="fullName" style={{ 
//                           color: errors.fullName ? "#dc2626" : "#64748b",
//                           fontWeight: "500"
//                         }}>
//                           Full Name
//                         </label>
//                         {errors.fullName && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.875rem" }}>
//                             {errors.fullName.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <input
//                           type="email"
//                           className={`form-control ${errors.email ? "is-invalid" : ""}`}
//                           id="email"
//                           placeholder="name@example.com"
//                           {...register("email", { 
//                             required: "Email is required",
//                             pattern: {
//                               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                               message: "Invalid email address"
//                             }
//                           })}
//                           style={{ 
//                             height: "56px",
//                             borderColor: errors.email ? "#dc2626" : "#e2e8f0",
//                             backgroundColor: "#f8fafc"
//                           }}
//                         />
//                         <label htmlFor="email" style={{ 
//                           color: errors.email ? "#dc2626" : "#64748b",
//                           fontWeight: "500"
//                         }}>
//                           Email Address
//                         </label>
//                         {errors.email && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.875rem" }}>
//                             {errors.email.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <input
//                           type="tel"
//                           className={`form-control ${errors.phone ? "is-invalid" : ""}`}
//                           id="phone"
//                           placeholder="+1 (123) 456-7890"
//                           {...register("phone", { 
//                             required: "Phone Number is required",
//                             pattern: {
//                               value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{3,6}$/im,
//                               message: "Invalid phone number"
//                             }
//                           })}
//                           style={{ 
//                             height: "56px",
//                             borderColor: errors.phone ? "#dc2626" : "#e2e8f0",
//                             backgroundColor: "#f8fafc"
//                           }}
//                         />
//                         <label htmlFor="phone" style={{ 
//                           color: errors.phone ? "#dc2626" : "#64748b",
//                           fontWeight: "500"
//                         }}>
//                           Phone Number
//                         </label>
//                         {errors.phone && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.875rem" }}>
//                             {errors.phone.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <select
//                           className={`form-select ${errors.doctor ? "is-invalid" : ""}`}
//                           id="doctor"
//                           {...register("doctor", { required: "Please select a doctor" })}
//                           disabled={isLoading}
//                           style={{ 
//                             height: "56px",
//                             borderColor: errors.doctor ? "#dc2626" : "#e2e8f0",
//                             backgroundColor: "#f8fafc"
//                           }}
//                         >
//                           <option value="">SELECT DOCTOR</option>
//                           {doctors?.map((doctor) => (
//                             <option key={doctor._id} value={`${doctor.email}|${doctor.fullName}`}>
//                                {doctor.fullName} ({doctor.specialization})
//                             </option>
//                           ))}
//                         </select>
//                         <label htmlFor="doctor" style={{ 
//                           color: errors.doctor ? "#dc2626" : "#64748b",
//                           fontWeight: "500"
//                         }}>
//                           Select Doctor
//                         </label>
//                         {errors.doctor && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.875rem" }}>
//                             {errors.doctor.message}
//                           </div>
//                         )}
//                         {isLoading && (
//                           <div className="position-absolute top-50 end-0 translate-middle-y me-3">
//                             <div className="spinner-border spinner-border-sm text-primary" role="status">
//                               <span className="visually-hidden">Loading...</span>
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row">
//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <input
//                           type="date"
//                           className={`form-control ${errors.date ? "is-invalid" : ""}`}
//                           id="date"
//                           min={new Date().toISOString().split("T")[0]}
//                           {...register("date", { required: "Please select a date" })}
//                           style={{ 
//                             height: "56px",
//                             borderColor: errors.date ? "#dc2626" : "#e2e8f0",
//                             backgroundColor: "#f8fafc"
//                           }}
//                         />
//                         <label htmlFor="date" style={{ 
//                           color: errors.date ? "#dc2626" : "#64748b",
//                           fontWeight: "500"
//                         }}>
//                           Appointment Date
//                         </label>
//                         {errors.date && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.875rem" }}>
//                             {errors.date.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>

//                     <div className="col-md-6 mb-4">
//                       <div className="form-floating">
//                         <select
//                           className={`form-select ${errors.time ? "is-invalid" : ""}`}
//                           id="time"
//                           {...register("time", { required: "Please select a time slot" })}
//                           style={{ 
//                             height: "56px",
//                             borderColor: errors.time ? "#dc2626" : "#e2e8f0",
//                             backgroundColor: "#f8fafc"
//                           }}
//                         >
//                           <option value="">Select a time slot</option>
//                           {["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"].map(time => (
//                             <option key={time} value={`${time}:00 - ${parseInt(time)+1}:00`}>
//                               {time} - {parseInt(time)+1}:00
//                             </option>
//                           ))}
//                         </select>
//                         <label htmlFor="time" style={{ 
//                           color: errors.time ? "#dc2626" : "#64748b",
//                           fontWeight: "500"
//                         }}>
//                           Appointment Time
//                         </label>
//                         {errors.time && (
//                           <div className="invalid-feedback" style={{ fontSize: "0.875rem" }}>
//                             {errors.time.message}
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-4">
//                     <label className="form-label fw-semibold mb-3" style={{ 
//                       color: "#1e293b",
//                       fontSize: "1rem"
//                     }}>
//                       Appointment Type
//                     </label>
//                     <div className="d-flex gap-4">
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           {...register("appointmentType", { required: "Please select an appointment type" })}
//                           value="Online Consultation"
//                           id="online"
//                           style={{ 
//                             width: "1.2em", 
//                             height: "1.2em", 
//                             marginTop: "0.2em",
//                             borderColor: errors.appointmentType ? "#dc2626" : "#cbd5e1"
//                           }}
//                         />
//                         <label className="form-check-label ms-2" htmlFor="online" style={{ 
//                           fontSize: "1rem",
//                           color: "#1e293b",
//                           fontWeight: "500"
//                         }}>
//                           <i className="fas fa-video me-2" style={{ color: "#2563eb" }}></i>
//                           Online Consultation
//                         </label>
//                       </div>
//                       <div className="form-check">
//                         <input
//                           className="form-check-input"
//                           type="radio"
//                           {...register("appointmentType")}
//                           value="In-Clinic Visit"
//                           id="offline"
//                           style={{ 
//                             width: "1.2em", 
//                             height: "1.2em", 
//                             marginTop: "0.2em",
//                             borderColor: errors.appointmentType ? "#dc2626" : "#cbd5e1"
//                           }}
//                         />
//                         <label className="form-check-label ms-2" htmlFor="offline" style={{ 
//                           fontSize: "1rem",
//                           color: "#1e293b",
//                           fontWeight: "500"
//                         }}>
//                           <i className="fas fa-hospital me-2" style={{ color: "#2563eb" }}></i>
//                           In-Clinic Visit
//                         </label>
//                       </div>
//                     </div>
//                     {errors.appointmentType && (
//                       <div className="text-danger mt-2" style={{ fontSize: "0.875rem" }}>
//                         {errors.appointmentType.message}
//                       </div>
//                     )}
//                   </div>

//                   <div className="mb-4">
//                     <div className="form-floating">
//                       <textarea
//                         className="form-control"
//                         id="notes"
//                         placeholder="Leave additional notes here"
//                         style={{ 
//                           height: "120px",
//                           borderColor: "#e2e8f0",
//                           backgroundColor: "#f8fafc"
//                         }}
//                         {...register("notes")}
//                       ></textarea>
//                       <label htmlFor="notes" style={{ 
//                         color: "#64748b",
//                         fontWeight: "500"
//                       }}>
//                         Additional Notes (Optional)
//                       </label>
//                     </div>
//                   </div>

//                   <div className="d-grid mt-4">
//                     <button
//                       type="submit"
//                       className="btn btn-lg py-3"
//                       disabled={isSubmitting}
//                       style={{
//                         background: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
//                         border: "none",
//                         borderRadius: "12px",
//                         fontWeight: "600",
//                         letterSpacing: "0.5px",
//                         transition: "all 0.3s ease",
//                         boxShadow: "0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.12)",
//                         color: "white",
//                         fontSize: "1.1rem"
//                       }}
//                       onMouseOver={(e) => {
//                         e.target.style.transform = "translateY(-2px)";
//                         e.target.style.boxShadow = "0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.15)";
//                       }}
//                       onMouseOut={(e) => {
//                         e.target.style.transform = "translateY(0)";
//                         e.target.style.boxShadow = "0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.12)";
//                       }}
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
//                           Processing...
//                         </>
//                       ) : (
//                         <>
//                           <i className="fas fa-calendar-check me-2"></i>
//                           Confirm Appointment
//                         </>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };





import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { PatientNavbar } from "../layout/PatientNavbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Appointment = () => {
  const [doctors, setDoctors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [selectedDoctorEmail, setSelectedDoctorEmail] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [userEmail, setUserEmail] = useState("");


  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const doctorWatch = watch("doctor");
  const dateWatch = watch("date");

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await axios.get("/getalldoctor");
        setDoctors(res.data.data);
      } catch (error) {
        toast.error("Failed to load doctors. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };


    const email = localStorage.getItem("email");
  if (email) setUserEmail(email);

    fetchDoctors();
  }, []);

  useEffect(() => {
    const fetchBookedSlots = async () => {
      const [email] = doctorWatch?.split("|") || [];
      const date = dateWatch;
      if (!email || !date) return;

      try {
        const res = await axios.get("/appointments/booked-slots", {
          params: { doctorEmail: email, date },
        });
        setBookedSlots(res.data.bookedSlots || []);
        setSelectedDoctorEmail(email);
        setSelectedDate(date);
      } catch (error) {
        // toast.error("Error fetching booked slots.");
        console.error(error);
      }
    };

    fetchBookedSlots();
  }, [doctorWatch, dateWatch]);

  const submitHandler = async (data) => {
    try {
      const userId = localStorage.getItem("Id");
      if (!userId) {
        toast.error("Please login to book an appointment");
        navigate("/login");
        return;
      }

      const [doctorEmail, doctorName] = data.doctor.split("|");

      const appointmentData = {
        ...data,
        userId,
        doctorEmail,
        doctorName,
      };

      const res = await axios.post("/appointments", appointmentData);

      if (res.status === 201) {
        toast.success("Appointment booked successfully!", {
          autoClose: 1500,
          hideProgressBar: true,
        });

        setTimeout(() => {
          reset();
          navigate("/myappointments", {
            state: {
              successMessage: "Your appointment has been confirmed!",
              appointmentDetails: res.data,
            },
          });
        }, 1500);
      }
    } catch (error) {
      const errMsg = error.response?.data?.message || "Failed to book appointment";
      toast.error(errMsg);
    }
  };

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "13:00 PM",
    "14:00 PM", "15:00 PM", "16:00 PM", "17:00 PM",
  ];

  return (
    <div className="appointment-page" style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      <PatientNavbar />
      <ToastContainer position="top-center" theme="colored" />
      <div className="container py-5">
        <h2 className="text-center mb-4">Book Your Appointment</h2>
        <form onSubmit={handleSubmit(submitHandler)} className="card p-4 shadow-sm">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
                {...register("fullName", { required: "Full Name is required" })}
              />
              {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
            </div>
            <div className="col-md-6 mb-3">
  <label>Email</label>
  <input
    type="email"
    className="form-control"
    value={userEmail}
    readOnly
    {...register("email")}
  />
</div>

          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Phone</label>
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                {...register("phone", {
                  required: "Phone Number is required",
                  pattern: {
                    value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,3}[-\s.]?[0-9]{3,6}$/im,
                    message: "Invalid phone number",
                  },
                })}
              />
              {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label>Select Doctor</label>
              <select
                className={`form-select ${errors.doctor ? "is-invalid" : ""}`}
                {...register("doctor", { required: "Please select a doctor" })}
              >
                <option value="">-- Select Doctor --</option>
                {doctors.map((doc) => (
                  <option key={doc._id} value={`${doc.email}|${doc.fullName}`}>
                    {doc.fullName} ({doc.specialization})
                  </option>
                ))}
              </select>
              {errors.doctor && <div className="invalid-feedback">{errors.doctor.message}</div>}
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label>Date</label>
              <input
                type="date"
                className={`form-control ${errors.date ? "is-invalid" : ""}`}
                min={new Date().toISOString().split("T")[0]}
                {...register("date", { required: "Please select a date" })}
              />
              {errors.date && <div className="invalid-feedback">{errors.date.message}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label>Time</label>
              <select
                className={`form-select ${errors.time ? "is-invalid" : ""}`}
                {...register("time", { required: "Please select a time slot" })}
              >
                <option value="">-- Select Time --</option>
                {timeSlots.map((time) => {
                  const formatted = `${time} - ${parseInt(time) + 1}:00`;
                  const isDisabled = bookedSlots.includes(formatted);
                  return (
                    <option key={time} value={formatted} disabled={isDisabled}>
                      {formatted} {isDisabled ? " (Booked)" : ""}
                    </option>
                  );
                })}
              </select>
              {errors.time && <div className="invalid-feedback">{errors.time.message}</div>}
            </div>
          </div>

          <div className="mb-3">
            <label>Appointment Type</label>
            <div className="d-flex gap-4">
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  value="Online Consultation"
                  {...register("appointmentType", { required: "Select type" })}
                />
                <label className="form-check-label">Online Consultation</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  value="In-Clinic Visit"
                  {...register("appointmentType")}
                />
                <label className="form-check-label">In-Clinic Visit</label>
              </div>
            </div>
            {errors.appointmentType && (
              <div className="text-danger mt-1">{errors.appointmentType.message}</div>
            )}
          </div>

          <div className="mb-4">
            <label>Additional Notes</label>
            <textarea className="form-control" rows={3} {...register("notes")} />
          </div>

          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
