// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// export const ClinicsHospital = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const clinics = [
//     {
//       name: "City Hospital",
//       location: "Ahmedabad, GUJARAT",
//       specialties: "Cardiology, Neurology, Orthopedics",
//       contact: "+1 123 456 7890",
//       img: "https://via.placeholder.com/300x200",
//     },
//     {
//       name: "Green Valley Clinic",
//       location: "Surat, GUJARAT",
//       specialties: "Pediatrics, Gynecology, Dermatology",
//       contact: "+1 987 654 3210",
//       img: "https://via.placeholder.com/300x200",
//     },
//     {
//       name: "Sunrise Medical Center",
//       location: "Amravati, MAHARASTRA",
//       specialties: "Oncology, ENT, General Surgery",
//       contact: "+1 555 666 7770",
//       img: "https://via.placeholder.com/300x200",
//     },
//   ];

//   const filteredClinics = clinics.filter(
//     (clinic) =>
//       clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       clinic.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       clinic.specialties.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div  style={{backgroundImage: 'url("Images/blur-hospital.jpg")',
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',height:"100vw",width:"100vw"}}>
//       <div className="container mt-4">
//         <div className="row">
//           <div className="col-md-12">
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search for clinics or hospitals..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="container mt-4">
//         <div className="row">
//           {filteredClinics.length > 0 ? (
//             filteredClinics.map((clinic, index) => (
//               <div className="col-md-4" key={index}>
//                 <div className="card shadow-lg">
//                   <img src={clinic.img} className="card-img-top" alt="Clinic" />
//                   <div className="card-body">
//                     <h4 className="card-title">{clinic.name}</h4>
//                     <p className="text-muted">{clinic.location}</p>
//                     <p>
//                       <strong>Specialties:</strong> {clinic.specialties}
//                     </p>
//                     <p>
//                       <strong>Contact:</strong> {clinic.contact}
//                     </p>
//                     <Link className="btn btn-primary" to={"/hospitaldetails"}>
//                       About Us
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-md-12 text-center mt-4">
//               <p>No clinics or hospitals found.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };




import React from 'react'
import { Link } from 'react-router-dom'

export const ClinicsHospital = () => {
  return (
    <div style={{backgroundImage: 'url("Images/blur-hospital.jpg")',
       backgroundSize: 'cover',
backgroundPosition: 'center',height:700}}>
  <div className="container mt-4">
    <h2 className="text-center mb-3">Clinics/Hospitals</h2>
    <div className="input-group mb-4">
      <input
        type="text"
        id="searchDoctor"
        className="form-control"
        placeholder="Search Clinics and Hospitals"
      />
      <button className="btn btn-primary">Search</button>
    </div>
  </div>
 

  <div className="container mt-4">
    <div className="row">
      
      <div className="col-md-4">
        <div className="card shadow-lg">
          <img style={{height:250}}
            src="/Images/th (1).jpeg"
            className="card-img-top"
            alt="Clinic Image"
          />
          <div className="card-body">
            <h4 className="card-title">City Hospital</h4> &nbsp;
            <p className="text-muted">Ahmedabad ,GUJARAT</p>
            <p>
              <strong>Specialties:</strong> Cardiology, Neurology, Orthopedics
            </p>
            <p>
              <strong>Contact:</strong> +1 123 456 7890
            </p>
            {/* <a href="#" className="btn btn-primary">
              Book Appointment
            </a> */}
            <Link className="btn btn-primary" to={"/hospitaldetails"}>About Us</Link>
          </div>
        </div>
      </div>
      
      <div className="col-md-4">
        <div className="card shadow-lg">
          <img style={{height:250}}
            src="/Images/th.jpeg"
            className="card-img-top"
            alt="Clinic Image"
          />
          <div className="card-body">
            <h4 className="card-title">Green Valley Clinic</h4> &nbsp;
            <p className="text-muted">Surat , GUJARAT</p>
            <p>
              <strong>Specialties:</strong> Pediatrics, Gynecology, Dermatology
            </p>
            <p>
              <strong>Contact:</strong> +1 987 654 3210
            </p>
            {/* <a href="#" className="btn btn-primary">
              Book Appointment
            </a> */}
            <Link className="btn btn-primary" to={"/hospitaldetails"}>About Us</Link>
          </div>
        </div>
      </div>
    
      <div className="col-md-4">
        <div className="card shadow-lg">
          <img style={{height:250}}
            src="/Images/SCSEDexterior.jpg"
            className="card-img-top"
            alt="Clinic Image"
          />
          <div className="card-body">
            <h4 className="card-title">Sunrise Medical Center</h4> &nbsp;
            <p className="text-muted">Amravati, MAHARASTRA</p>
            <p>
              <strong>Specialties:</strong> Oncology, ENT, General Surgery
            </p>
            <p>
              <strong>Contact:</strong> +1 555 666 7770
            </p>
            {/* <a href="#" className="btn btn-primary">
              Book Appointment
            </a> */}
            <Link className="btn btn-primary" to={"/hospitaldetails"}>About Us</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}  
