// import React from 'react'
// import { Link } from 'react-router-dom'

// export const Navbar = () => {
//   return (
//     <div style={{border:"1px solid black"}}>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{width:'98.9vw'}}>
//   <div className="container">
//     {/* ======== */}
//     <button
//         className="btn btn-light me-2"
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#sidebar"
//       >
//         ☰
//       </button>
// {/* ----------------- */}
//     <a className="navbar-brand" href="#">
//       Docon
//     </a>
//     {/* <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span className="navbar-toggler-icon" />
//     </button> */}
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav me-auto">
//         <li className="nav-item">
//           {/* <a className="nav-link active" href="#">
//             Home
//           </a> */}
//           <Link  className="nav-link active" to={"/"}>Home</Link>
//         </li>
//         <li className="nav-item">
//           {/* <a className="nav-link active" href="#">
//             Home
//           </a> */}
//           <Link  className="nav-link " to={"/clinicshospital"}>Clinics/Hospitals</Link>
//         </li>
//         {/* <li className="nav-item"> */}
//           {/* <a className="nav-link" href="#">
//             Doctor Profiles
//           </a> */}
//           <Link className="nav-link" to={"/doctorprofiles"}>Doctor Profiles</Link>
//         {/* </li> */}
//         {/* <li className="nav-item">
//           {/* <a className="nav-link" href="#">
//             Patient Profile
//           </a> */}
//           {/* <Link className="nav-link" to={"/patientprofile"}>Patient Profile</Link> */}
//         {/* </li> */}
//         {/* <li className="nav-item"> */}
//           {/* <a className="nav-link" href="#">
//             Patient Profile
//           </a> */}
//           {/* <Link className="nav-link" to={"/hospitaldetails"}>Patient Profile</Link> */}
//         {/* </li> */} 
        
//       </ul>
//       <ul className="navbar-nav">
//         <li className="nav-item">
//          {/* <a className="nav-link btn btn-light text-primary px-3" href="#"> 
//             Login / Signup
            
//           </a>  */}
//           <div style={{border:"1px solid black",background:'white',borderRadius:"10px",color:"white"}}>
//           <Link className="nav-link btn btn-light text-primary px-3" to={"/login"}>Login/Signup</Link>

//           </div>
//         </li>
//       </ul>
//     </div>
//   </div>
  
// </nav>



// <div className="offcanvas offcanvas-start bg-light" id="sidebar">
//     <div className="offcanvas-header">
//       <h5 className="offcanvas-title">Navigation</h5>
//       <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
//     </div>
//     <div className="offcanvas-body">
//       <ul className="list-group">
//         <li className="list-group-item">
//           <a href="#" className="text-decoration-none">
//             🏠 Home
//           </a>
//         </li>
//         <li className="list-group-item">
//           <a href="#" className="text-decoration-none">
//             👨‍⚕️ Doctor Profile
//           </a>
//         </li>
//         <li className="list-group-item">
//           <a href="#" className="text-decoration-none">
//             🧑‍🦱 Patient Profile
//           </a>
//         </li>
//         <li className="list-group-item">
//           <a href="#" className="text-decoration-none">
//             📅 Book Appointment
//           </a>
//         </li>
//         <li className="list-group-item">
//           <a href="#" className="text-decoration-none">
//             💊 Prescriptions
//           </a>
//         </li>
//         <li className="list-group-item">
//           <a href="#" className="text-decoration-none">
//             📁 Medical Records
//           </a>
//         </li>
//       </ul>
//     </div>
//   </div>




// //     </div>


//   )
// }
// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <div style={{ borderBottom: "1px solid rgb(1, 8, 16)" , width:"100vw" }}>
//       {/* Navbar */}
//       <nav
//         className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm"
//         style={{ width: "100vw" ,borderTop: "3px solid transparent", 
//           borderLeft: "3px solid transparent", 
//           borderRight: "3px solid transparent",
//           background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", 
//           borderImage: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", 
//           borderImageSlice: 1 }}
//       >
//         <div className="container">
//           {/* Sidebar Toggle Button */}
//           <button
//             className="btn btn-light me-2"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#sidebar"
//             aria-controls="sidebar"
//             style={{ fontSize: "1.5rem", fontWeight: "bold" }}
//           >
//             ☰
//           </button>

//           {/* Logo */}
//           <Link className="navbar-brand fw-bold fs-4" to="/">
//             Docon
//           </Link>


//         <button
//     className="navbar-toggler"
//       type="button"
//     data-bs-toggle="collapse"
//       data-bs-target="#navbarNav"
//       aria-controls="navbarNav"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//    >
//      <span className="navbar-toggler-icon" />
//     </button> 
    
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <Link className="nav-link active" to="/">
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/clinicshospital">
//                   Clinics/Hospitals
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/doctorprofiles">
//                   Doctor Profiles
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/general">
//                  General
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/articles">
//                  Articles
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/contactus">
//                  Contact Us
//                 </Link>
//               </li>
//             </ul>

//             {/* Login Button */}
//             <ul className="navbar-nav">
              
//               <li className="nav-item">
//                 <Link
//                   className="nav-link btn px-4 py-2"
//                   to="/login"
//                   style={{
//                     background: "white",
//                     borderRadius: "10px",
//                     color: "#007bff",
//                     fontWeight: "bold",
//                     transition: "0.3s",
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.target.style.background = "#007bff") &
//                     (e.target.style.color = "white")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.target.style.background = "white") &
//                     (e.target.style.color = "#007bff")
//                   }
//                 >
//                   Login/Signup
//                 </Link>
//               </li>
              
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Offcanvas Sidebar */}
//       <div
//         className="offcanvas offcanvas-start bg-light"
//         id="sidebar"
//         tabIndex="-1"
//       >
//         <div className="offcanvas-header">
//           <h5 className="offcanvas-title fw-bold">Navigation</h5>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body">
//           <ul className="list-group">
//             <li className="list-group-item">
//               <Link to="/" className="text-decoration-none text-dark">
//                 🏠 Home
//               </Link>
//             </li>
//             {/* <li className="list-group-item">
//               <Link to="/doctorprofiles" className="text-decoration-none text-dark">
//                 👨‍⚕️ Doctor Profiles
//               </Link>
//             </li>
//             <li className="list-group-item">
//               <Link to="/clinicshospital" className="text-decoration-none text-dark">
//                 🏥 Clinics/Hospitals
//               </Link>
//             </li> */}
//             <li className="list-group-item">
//               <Link to="/appointments" className="text-decoration-none text-dark">
//                 📅 Book Appointment
//               </Link>
//             </li>
//             <li className="list-group-item">
//               <Link to="/prescriptions" className="text-decoration-none text-dark">
//                 💊 E-Prescriptions
//               </Link>
//             </li>
//             <li className="list-group-item">
//               <Link to="/ehr" className="text-decoration-none text-dark">
//                 📁 Medical Records
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };



// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <div className="navbar-container" style={{ 
//       width: "100vw",
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//       boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
//     }}>
//       {/* Navbar */}
//       <nav
//         className="navbar navbar-expand-lg navbar-dark"
//         style={{ 
//           width: "100vw",
//           background: "linear-gradient(135deg, rgba(0,123,255,0.95) 0%, rgba(106,27,154,0.95) 100%)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)",
//           borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
//         }}
//       >
//         <div className="container">
//           {/* Animated Sidebar Toggle Button */}
//           <button
//             className="btn me-2 sidebar-toggle"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#sidebar"
//             aria-controls="sidebar"
//             style={{ 
//               fontSize: "1.5rem",
//               fontWeight: "bold",
//               color: "white",
//               background: "rgba(255,255,255,0.2)",
//               borderRadius: "50%",
//               width: "45px",
//               height: "45px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               transition: "all 0.3s ease"
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = "rgba(255,255,255,0.3)";
//               e.target.style.transform = "rotate(90deg)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = "rgba(255,255,255,0.2)";
//               e.target.style.transform = "rotate(0deg)";
//             }}
//           >
//             ☰
//           </button>

//           {/* Logo with Animation */}
//           <Link 
//             className="navbar-brand fw-bold fs-4 d-flex align-items-center" 
//             to="/"
//             style={{
//               fontFamily: "'Montserrat', sans-serif",
//               letterSpacing: "1px",
//               position: "relative",
//               color: "white"
//             }}
//           >
//             <span 
//               className="logo-icon"
//               style={{
//                 display: "inline-block",
//                 marginRight: "10px",
//                 fontSize: "1.8rem",
//                 animation: "pulse 2s infinite"
//               }}
//             >
//               ⚕️
//             </span>
//             <span className="logo-text">
//               <span style={{ fontWeight: 800 }}>DOC</span>
//               <span style={{ fontWeight: 300 }}>ON</span>
//             </span>
//           </Link>

//           {/* Animated Toggler Button */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             style={{
//               border: "none",
//               outline: "none",
//               boxShadow: "none"
//             }}
//           >
//             <span className="navbar-toggler-icon" />
//           </button> 
          
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <Link 
//                   className="nav-link" 
//                   to="/"
//                   style={{
//                     position: "relative",
//                     color: "rgba(255,255,255,0.9)",
//                     fontWeight: 500,
//                     padding: "10px 15px",
//                     borderRadius: "8px",
//                     transition: "all 0.3s ease"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "rgba(255,255,255,0.15)";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "transparent";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   <i className="fas fa-home me-2"></i>Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className="nav-link" 
//                   to="/clinicshospital"
//                   style={{
//                     position: "relative",
//                     color: "rgba(255,255,255,0.9)",
//                     fontWeight: 500,
//                     padding: "10px 15px",
//                     borderRadius: "8px",
//                     transition: "all 0.3s ease"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "rgba(255,255,255,0.15)";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "transparent";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   <i className="fas fa-hospital me-2"></i>Clinics/Hospitals
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className="nav-link" 
//                   to="/doctorprofiles"
//                   style={{
//                     position: "relative",
//                     color: "rgba(255,255,255,0.9)",
//                     fontWeight: 500,
//                     padding: "10px 15px",
//                     borderRadius: "8px",
//                     transition: "all 0.3s ease"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "rgba(255,255,255,0.15)";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "transparent";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   <i className="fas fa-user-md me-2"></i>Doctors
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link 
//                   className="nav-link" 
//                   to="/articles"
//                   style={{
//                     position: "relative",
//                     color: "rgba(255,255,255,0.9)",
//                     fontWeight: 500,
//                     padding: "10px 15px",
//                     borderRadius: "8px",
//                     transition: "all 0.3s ease"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "rgba(255,255,255,0.15)";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "transparent";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   <i className="fas fa-newspaper me-2"></i>Articles
//                 </Link>
//               </li>
//             </ul>

//             {/* Login Button with Animation */}
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link px-4 py-2 login-btn"
//                   to="/login"
//                   style={{
//                     background: "rgba(255,255,255,0.9)",
//                     borderRadius: "50px",
//                     color: "#007bff",
//                     fontWeight: "bold",
//                     transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//                     boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
//                     position: "relative",
//                     overflow: "hidden"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "#007bff";
//                     e.target.style.color = "white";
//                     e.target.style.transform = "translateY(-3px)";
//                     e.target.style.boxShadow = "0 7px 20px rgba(0, 123, 255, 0.4)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "rgba(255,255,255,0.9)";
//                     e.target.style.color = "#007bff";
//                     e.target.style.transform = "translateY(0)";
//                     e.target.style.boxShadow = "0 4px 15px rgba(0, 123, 255, 0.3)";
//                   }}
//                 >
//                   <span className="login-text">
//                     <i className="fas fa-sign-in-alt me-2"></i>Login/Signup
//                   </span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Enhanced Offcanvas Sidebar */}
//       <div
//         className="offcanvas offcanvas-start"
//         id="sidebar"
//         tabIndex="-1"
//         style={{
//           background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,248,255,0.98) 100%)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)"
//         }}
//       >
//         <div className="offcanvas-header border-bottom">
//           <div className="d-flex align-items-center">
//             <span className="me-2" style={{ fontSize: "1.8rem" }}>⚕️</span>
//             <h5 className="offcanvas-title fw-bold mb-0">DOCON MENU</h5>
//           </div>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body p-0">
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item border-0 py-3 px-4 hover-effect">
//               <Link to="/" className="text-decoration-none text-dark d-flex align-items-center">
//                 <span className="icon-circle me-3" style={{ 
//                   background: "rgba(0,123,255,0.1)", 
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}>
//                   <i className="fas fa-home text-primary"></i>
//                 </span>
//                 <span className="fw-medium">Home</span>
//               </Link>
//             </li>
//             <li className="list-group-item border-0 py-3 px-4 hover-effect">
//               <Link to="/appointments" className="text-decoration-none text-dark d-flex align-items-center">
//                 <span className="icon-circle me-3" style={{ 
//                   background: "rgba(76,175,80,0.1)", 
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}>
//                   <i className="fas fa-calendar-check text-success"></i>
//                 </span>
//                 <span className="fw-medium">Book Appointment</span>
//               </Link>
//             </li>
//             <li className="list-group-item border-0 py-3 px-4 hover-effect">
//               <Link to="/prescriptions" className="text-decoration-none text-dark d-flex align-items-center">
//                 <span className="icon-circle me-3" style={{ 
//                   background: "rgba(255,152,0,0.1)", 
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}>
//                   <i className="fas fa-prescription text-warning"></i>
//                 </span>
//                 <span className="fw-medium">E-Prescriptions</span>
//               </Link>
//             </li>
//             <li className="list-group-item border-0 py-3 px-4 hover-effect">
//               <Link to="/ehr" className="text-decoration-none text-dark d-flex align-items-center">
//                 <span className="icon-circle me-3" style={{ 
//                   background: "rgba(156,39,176,0.1)", 
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}>
//                   <i className="fas fa-file-medical text-purple"></i>
//                 </span>
//                 <span className="fw-medium">Medical Records</span>
//               </Link>
//             </li>
//             <li className="list-group-item border-0 py-3 px-4 hover-effect">
//               <Link to="/doctorprofiles" className="text-decoration-none text-dark d-flex align-items-center">
//                 <span className="icon-circle me-3" style={{ 
//                   background: "rgba(244,67,54,0.1)", 
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}>
//                   <i className="fas fa-user-md text-danger"></i>
//                 </span>
//                 <span className="fw-medium">Doctor Profiles</span>
//               </Link>
//             </li>
//           </ul>
          
//           <div className="px-4 py-3 border-top">
//             <Link 
//               to="/login" 
//               className="btn btn-primary w-100 py-2 rounded-pill fw-bold"
//               style={{
//                 background: "linear-gradient(135deg, rgba(0,123,255,1) 0%, rgba(106,27,154,1) 100%)",
//                 border: "none",
//                 boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)"
//               }}
//             >
//               <i className="fas fa-sign-in-alt me-2"></i>Login / Register
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
//   return (
//     <div className="navbar-container" style={{ 
//       width: "100vw",
//       position: "sticky",
//       top: 0,
//       zIndex: 1000,
//       boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)"
//     }}>
//       {/* Navbar */}
//       <nav
//         className="navbar navbar-expand-lg navbar-dark"
//         style={{ 
//           width: "100vw",
//           background: "linear-gradient(135deg, rgba(0,123,255,0.95) 0%, rgba(106,27,154,0.95) 100%)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)",
//           borderBottom: "1px solid rgba(255, 255, 255, 0.2)"
//         }}
//       >
//         <div className="container">
//           {/* Animated Sidebar Toggle Button */}
//           <button
//             className="btn me-2 sidebar-toggle"
//             type="button"
//             data-bs-toggle="offcanvas"
//             data-bs-target="#sidebar"
//             aria-controls="sidebar"
//             style={{ 
//               fontSize: "1.5rem",
//               fontWeight: "bold",
//               color: "white",
//               background: "rgba(255,255,255,0.2)",
//               borderRadius: "50%",
//               width: "45px",
//               height: "45px",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               transition: "all 0.3s ease"
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.background = "rgba(255,255,255,0.3)";
//               e.target.style.transform = "rotate(90deg)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.background = "rgba(255,255,255,0.2)";
//               e.target.style.transform = "rotate(0deg)";
//             }}
//           >
//             ☰
//           </button>

//           {/* Logo with Animation */}
//           <Link 
//             className="navbar-brand fw-bold fs-4 d-flex align-items-center" 
//             to="/"
//             style={{
//               fontFamily: "'Montserrat', sans-serif",
//               letterSpacing: "1px",
//               position: "relative",
//               color: "white"
//             }}
//           >
//             <span 
//               className="logo-icon"
//               style={{
//                 display: "inline-block",
//                 marginRight: "10px",
//                 fontSize: "1.8rem",
//                 animation: "pulse 2s infinite"
//               }}
//             >
//               ⚕️
//             </span>
//             <span className="logo-text">
//               <span style={{ fontWeight: 800 }}>DOC</span>
//               <span style={{ fontWeight: 300 }}>ON</span>
//             </span>
//           </Link>

//           {/* Animated Toggler Button */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             style={{
//               border: "none",
//               outline: "none",
//               boxShadow: "none"
//             }}
//           >
//             <span className="navbar-toggler-icon" />
//           </button> 
          
//           <div className="collapse navbar-collapse" id="navbarNav">
//             <ul className="navbar-nav me-auto">
//               <li className="nav-item">
//                 <Link 
//                   className="nav-link" 
//                   to="/"
//                   style={{
//                     position: "relative",
//                     color: "rgba(255,255,255,0.9)",
//                     fontWeight: 500,
//                     padding: "10px 15px",
//                     borderRadius: "8px",
//                     transition: "all 0.3s ease"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "rgba(255,255,255,0.15)";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "transparent";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   <i className="fas fa-home me-2"></i>Home
//                 </Link>
//               </li>
              
//               <li className="nav-item">
//                 <Link 
//                   className="nav-link" 
//                   to="/articles"
//                   style={{
//                     position: "relative",
//                     color: "rgba(255,255,255,0.9)",
//                     fontWeight: 500,
//                     padding: "10px 15px",
//                     borderRadius: "8px",
//                     transition: "all 0.3s ease"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "rgba(255,255,255,0.15)";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "transparent";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   <i className="fas fa-newspaper me-2"></i>Articles
//                 </Link>
//               </li>
              
//               <li className="nav-item">
//                 <Link 
//                   className="nav-link" 
//                   to="/specialties"
//                   style={{
//                     position: "relative",
//                     color: "rgba(255,255,255,0.9)",
//                     fontWeight: 500,
//                     padding: "10px 15px",
//                     borderRadius: "8px",
//                     transition: "all 0.3s ease"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "rgba(255,255,255,0.15)";
//                     e.target.style.transform = "translateY(-2px)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "transparent";
//                     e.target.style.transform = "translateY(0)";
//                   }}
//                 >
//                   <i className="fas fa-star me-2"></i>Our Specialties
//                 </Link>
//               </li>
//             </ul>

//             {/* Login Button */}
//             <ul className="navbar-nav">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link px-4 py-2 login-btn"
//                   to="/login"
//                   style={{
//                     background: "rgba(255,255,255,0.9)",
//                     borderRadius: "50px",
//                     color: "#007bff",
//                     fontWeight: "bold",
//                     transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//                     boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)",
//                     position: "relative",
//                     overflow: "hidden"
//                   }}
//                   onMouseEnter={(e) => {
//                     e.target.style.background = "#007bff";
//                     e.target.style.color = "white";
//                     e.target.style.transform = "translateY(-3px)";
//                     e.target.style.boxShadow = "0 7px 20px rgba(0, 123, 255, 0.4)";
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.background = "rgba(255,255,255,0.9)";
//                     e.target.style.color = "#007bff";
//                     e.target.style.transform = "translateY(0)";
//                     e.target.style.boxShadow = "0 4px 15px rgba(0, 123, 255, 0.3)";
//                   }}
//                 >
//                   <span className="login-text">
//                     <i className="fas fa-sign-in-alt me-2"></i>Login/Signup
//                   </span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       {/* Offcanvas Sidebar */}
//       <div
//         className="offcanvas offcanvas-start"
//         id="sidebar"
//         tabIndex="-1"
//         style={{
//           background: "linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(240,248,255,0.98) 100%)",
//           backdropFilter: "blur(10px)",
//           WebkitBackdropFilter: "blur(10px)"
//         }}
//       >
//         <div className="offcanvas-header border-bottom">
//           <div className="d-flex align-items-center">
//             <span className="me-2" style={{ fontSize: "1.8rem" }}>⚕️</span>
//             <h5 className="offcanvas-title fw-bold mb-0">DOCON MENU</h5>
//           </div>
//           <button
//             type="button"
//             className="btn-close"
//             data-bs-dismiss="offcanvas"
//             aria-label="Close"
//           ></button>
//         </div>
//         <div className="offcanvas-body p-0">
//           <ul className="list-group list-group-flush">
//             <li className="list-group-item border-0 py-3 px-4 hover-effect">
//               <Link to="/" className="text-decoration-none text-dark d-flex align-items-center">
//                 <span className="icon-circle me-3" style={{ 
//                   background: "rgba(0,123,255,0.1)", 
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}>
//                   <i className="fas fa-home text-primary"></i>
//                 </span>
//                 <span className="fw-medium">Home</span>
//               </Link>
//             </li>
//             <li className="list-group-item border-0 py-3 px-4 hover-effect">
//               <Link to="/articles" className="text-decoration-none text-dark d-flex align-items-center">
//                 <span className="icon-circle me-3" style={{ 
//                   background: "rgba(76,175,80,0.1)", 
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}>
//                   <i className="fas fa-newspaper text-success"></i>
//                 </span>
//                 <span className="fw-medium">Articles</span>
//               </Link>
//             </li>
//             <li className="list-group-item border-0 py-3 px-4 hover-effect">
//               <Link to="/specialties" className="text-decoration-none text-dark d-flex align-items-center">
//                 <span className="icon-circle me-3" style={{ 
//                   background: "rgba(255,152,0,0.1)", 
//                   width: "40px",
//                   height: "40px",
//                   borderRadius: "50%",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center"
//                 }}>
//                   <i className="fas fa-star text-warning"></i>
//                 </span>
//                 <span className="fw-medium">Our Specialties</span>
//               </Link>
//             </li>
//           </ul>
          
//           <div className="px-4 py-3 border-top">
//             <Link 
//               to="/login" 
//               className="btn btn-primary w-100 py-2 rounded-pill fw-bold"
//               style={{
//                 background: "linear-gradient(135deg, rgba(0,123,255,1) 0%, rgba(106,27,154,1) 100%)",
//                 border: "none",
//                 boxShadow: "0 4px 15px rgba(0, 123, 255, 0.3)"
//               }}
//             >
//               <i className="fas fa-sign-in-alt me-2"></i>Login / Register
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* CSS Animations */}
//       <style>
//         {`
//           @keyframes pulse {
//             0% { transform: scale(1); }
//             50% { transform: scale(1.1); }
//             100% { transform: scale(1); }
//           }
          
//           .hover-effect {
//             transition: all 0.3s ease;
//           }
//           .hover-effect:hover {
//             background-color: rgba(0, 0, 0, 0.05) !important;
//             transform: translateX(5px);
//           }
//         `}
//       </style>
//     </div>
//   );
// };


import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm" 
         style={{
           position: "sticky",
           top: 0,
           zIndex: 1000,
           background: "linear-gradient(135deg, #0066cc 0%, #004080 100%)"
         }}>
      <div className="container">
        {/* Logo */}
        <Link 
          className="navbar-brand d-flex align-items-center" 
          to="/"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600,
            letterSpacing: "0.5px"
          }}
        >
          <span className="me-2" style={{ fontSize: "1.5rem" }}>⚕️</span>
          <span>
            <span style={{ fontWeight: 700 }}>DOC</span>
            <span style={{ fontWeight: 300 }}>ON</span>
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                  padding: "8px 12px",
                  borderRadius: "4px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/features"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                  padding: "8px 12px",
                  borderRadius: "4px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                Features
              </Link>
            </li>
            
            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/articles"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                  padding: "8px 12px",
                  borderRadius: "4px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                Medical Articles
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                className="nav-link" 
                to="/contactus"
                style={{
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 500,
                  padding: "8px 12px",
                  borderRadius: "4px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Auth Buttons */}
          <div className="d-flex">
            <Link
              className="btn btn-outline-light me-2"
              to="/login"
              style={{
                fontWeight: 500,
                borderRadius: "4px",
                transition: "all 0.2s ease"
              }}
            >
              Login
            </Link>
            <Link
              className="btn btn-light"
              to="/signup"
              style={{
                fontWeight: 500,
                color: "#0066cc",
                borderRadius: "4px",
                transition: "all 0.2s ease"
              }}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};