// import React from 'react'
// import { Link } from 'react-router-dom'

// export const DoctorProfiles = () => {
//   return (
    
// <div  style={{backgroundImage: 'url("Images/dbg.jpg")',
//        backgroundSize: 'cover',
// backgroundPosition: 'center',height:700}}>
//   <div className="container mt-4">
//     <h2 className="text-center mb-3">Meet Our Doctors</h2>
//     <div className="input-group mb-4">
//       <input
//         type="text"
//         id="searchDoctor"
//         className="form-control"
//         placeholder="Search doctors by name or specialty..."
//       />
//       <button className="btn btn-primary">Search</button>
//     </div>
//   </div>
//   {/* Doctor Profiles */}
//   <div className="container">
//     <div className="row" id="doctorList">
//       {/* Doctor Card 1 */}
//       <div
//         className="col-md-4 doctor-card"
//         data-name="John Doe"
//         data-specialty="Cardiologist"
//       >
//         <div className="card shadow-lg">
//           <img style={{height:250}}
//             src="/Images/doctor-offering-medical-teleconsultation.jpg"
//             className="card-img-top"
//             alt="Doctor Image"
//           />
//           <div className="card-body text-center">
//             <h5 className="card-title">Dr. John Doe</h5>
//             <p className="text-muted">Cardiologist | 10+ Years Experience</p>
//             {/* <a href="#" className="btn btn-primary">
//               Book Appointment
//             </a> */}
//             <Link className="btn btn-primary" to={"/docprofile"}>About</Link>
//           </div>
//         </div>
//       </div>
//       {/* Doctor Card 2 */}
//       <div
//         className="col-md-4 doctor-card"
//         data-name="Sarah Smith"
//         data-specialty="Dermatologist"
//       >
//         <div className="card shadow-lg">
//           <img style={{height:250}}
//             src="/Images/female-doctor-hospital-with-stethoscope.jpg"
//             className="card-img-top"
//             alt="Doctor Image"
//           />
//           <div className="card-body text-center">
//             <h5 className="card-title">Dr. Sarah Smith</h5>
//             <p className="text-muted">Dermatologist | 8+ Years Experience</p>
//             {/* <a href="#" className="btn btn-primary">
//               Book Appointment
//             </a> */}
//              <Link className="btn btn-primary" to={"/docprofile"}>About</Link>
//           </div>
//         </div>
//       </div>
//       {/* Doctor Card 3 */}
//       <div
//         className="col-md-4 doctor-card"
//         data-name="Michael Lee"
//         data-specialty="Neurologist"
//       >
//         <div className="card shadow-lg">
//           <img style={{height:250}}
//             src="/Images/bearded-doctor-glasses.jpg"
//             className="card-img-top"
//             alt="Doctor Image"
//           />
//           <div className="card-body text-center">
//             <h5 className="card-title">Dr. Michael Lee</h5>
//             <p className="text-muted">Neurologist | 12+ Years Experience</p>
//             {/* <a href="#" className="btn btn-primary">
//               Book Appointment
//             </a> */}
//             <Link className="btn btn-primary" to={"/docprofile"}>About</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>


//   )
// }
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import PatientNavbar from '../layout/PatientNavbar';

// export const DoctorProfiles = () => {
//   const [doctors, setDoctors] = useState([]);

//   useEffect(() => {
//     axios.get('/getalldoctor')
//       .then(response => {
//         setDoctors(response.data.data);
//       })
//       .catch(error => console.error('Error fetching doctors:', error));
//   }, []);

//   const containerStyle = {
//     backgroundColor: '#f9f9f9',
//     padding: '3rem 1rem',
//     borderRadius: '16px',
//   };

//   const cardStyle = {
//     border: 'none',
//     borderRadius: '20px',
//     overflow: 'hidden',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
//   };

//   const cardHoverStyle = {
//     transform: 'translateY(-8px)',
//     boxShadow: '0 12px 25px rgba(0, 0, 0, 0.12)',
//   };

//   const imageStyle = {
//     objectFit: 'cover',
//     height: '260px',
//     borderTopLeftRadius: '20px',
//     borderTopRightRadius: '20px',
//   };

//   const titleStyle = {
//     fontSize: '1.4rem',
//     color: '#004d99',
//     fontWeight: '600',
//   };

//   const headingStyle = {
//     fontFamily: 'Georgia, serif',
//     fontWeight: 'bold',
//     color: '#222',
//     letterSpacing: '0.5px',
//   };

//   const noImageStyle = {
//     height: '260px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f0f0f0',
//     color: '#aaa',
//     fontSize: '1rem',
//     fontStyle: 'italic',
//   };

//   return (
//     <>
//       <PatientNavbar />
//       <div className="container" style={containerStyle}>
//         <h2 className="text-center mb-5" style={headingStyle}>Meet Our Specialists</h2>
//         <div className="row g-4">
//           {doctors.map((doctor, index) => (
//             <div className="col-lg-4 col-md-6" key={index}>
//               <div
//                 className="card h-100"
//                 style={cardStyle}
//                 onMouseEnter={e => {
//                   Object.assign(e.currentTarget.style, cardHoverStyle);
//                 }}
//                 onMouseLeave={e => {
//                   Object.assign(e.currentTarget.style, cardStyle);
//                 }}
//               >
//                 {doctor.image ? (
//                   <img
//                     src={doctor.image}
//                     className="card-img-top"
//                     alt={`${doctor.fullName}'s profile`}
//                     style={imageStyle}
//                   />
//                 ) : (
//                   <div style={noImageStyle}>No Image Available</div>
//                 )}
//                 <div className="card-body p-4">
//                   {/* <h5 className="card-title" style={titleStyle}>{doctor.fullName}</h5> */}
//                   <p style={titleStyle}><strong>Name:</strong> {doctor.fullName}</p>
//                   <p><strong>Qualification:</strong> {doctor.qualification}</p>
//                   <p><strong>Specialization:</strong> {doctor.specialization}</p>
//                   <p><strong>Experience:</strong> {doctor.experience} years</p>
//                   <p><strong>Email:</strong> <a href={`mailto:${doctor.email}`}>{doctor.email}</a></p>
//                   <p><strong>Phone:</strong> {doctor.phone}</p>
//                   <p><strong>Address:</strong> {doctor.address}</p>
//                   <p><strong>About:</strong> {doctor.about}</p>
//                   <p><strong>Registration No:</strong> {doctor.registrationNo}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         {doctors.length === 0 && (
//           <div className="text-center text-muted mt-5">
//             <h5>No doctor profiles found.</h5>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };
// -----------------------------------------------FINAL CODE------------------------------------------------
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PatientNavbar from '../layout/PatientNavbar';
import { 
  FaUserMd, FaGraduationCap, FaStethoscope, FaBriefcase, 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard, FaStar, FaRegStar
} from 'react-icons/fa';
import { ClipLoader } from 'react-spinners';
import { motion } from 'framer-motion';

export const DoctorProfiles = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialtyFilter, setSpecialtyFilter] = useState('all');

  useEffect(() => {
    axios.get('/getalldoctor')
      .then(response => {
        setDoctors(response.data.data);
      })
      .catch(error => console.error('Error fetching doctors:', error))
      .finally(() => setLoading(false));
  }, []);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = specialtyFilter === 'all' || 
                           doctor.specialization.toLowerCase() === specialtyFilter.toLowerCase();
    return matchesSearch && matchesSpecialty;
  });

  const specialties = ['all', ...new Set(doctors.map(doctor => doctor.specialization))];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="doctor-profiles-container" style={{backgroundImage: 'url("Images/dbg.jpg")',
             backgroundSize: 'cover',
      backgroundPosition: 'center'}}>
      <PatientNavbar />
      
      <div className="doctor-profiles-content">
        <div className="section-header">
          <motion.h1 
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our <span className="highlight">Healthcare Heroes</span>
          </motion.h1>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Discover our team of dedicated specialists committed to your wellbeing
          </motion.p>
          
          <motion.div 
            className="search-filter-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="search-box">
              <input
                type="text"
                placeholder="Search doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="search-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>
            
            <div className="specialty-filter">
              <select
                value={specialtyFilter}
                onChange={(e) => setSpecialtyFilter(e.target.value)}
              >
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty}>
                    {specialty === 'all' ? 'All Specialties' : specialty}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>
        </div>

        {loading ? (
          <div className="loading-container">
            <ClipLoader size={50} color="#4f46e5" />
            <p>Finding the best doctors for you...</p>
          </div>
        ) : filteredDoctors.length === 0 ? (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="empty-icon-container">
              <FaUserMd className="empty-icon" />
              <div className="pulse-effect"></div>
            </div>
            <h3>No Matching Doctors Found</h3>
            <p>We couldn't find any doctors matching your criteria. Try adjusting your search.</p>
            <button 
              className="reset-btn"
              onClick={() => {
                setSearchTerm('');
                setSpecialtyFilter('all');
              }}
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div 
            className="doctor-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {filteredDoctors.map((doctor, index) => (
              <motion.div 
                key={index} 
                className={`doctor-card ${hoveredCard === index ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="card-image-container">
                  {doctor.image ? (
                    <img 
                      src={doctor.image} 
                      alt={`${doctor.fullName}'s profile`} 
                      className="card-image"
                    />
                  ) : (
                    <div className="image-placeholder">
                      <FaUserMd className="placeholder-icon" />
                    </div>
                  )}
                  <div className="card-badge">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        i < 4 ? <FaStar key={i} /> : <FaRegStar key={i} />
                      ))}
                    </div>
                    <span>4.8</span>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="doctor-name">{doctor.fullName}</h3>
                  
                  <p className="doctor-specialty">{doctor.specialization}</p>
                  
                  <div className="doctor-details">
                    <div className="detail-item">
                      <FaGraduationCap className="detail-icon" />
                      <span>{doctor.qualification}</span>
                    </div>
                    <div className="detail-item">
                      <FaBriefcase className="detail-icon" />
                      <span>{doctor.experience} years experience</span>
                    </div>
                    <div className="detail-item">
                      <FaEnvelope className="detail-icon" />
                      <span>{doctor.email}</span>
                    </div>
                    <div className="detail-item">
                      <FaPhone className="detail-icon" />
                      <span>{doctor.phone}</span>
                    </div>
                    <div className="detail-item">
                      <FaMapMarkerAlt className="detail-icon" />
                      <span>{doctor.address}</span>
                    </div>
                    <div className="detail-item">
                      <FaIdCard className="detail-icon" />
                      <span>Reg: {doctor.registrationNo}</span>
                    </div>
                  </div>

                  {doctor.about && (
                    <div className="doctor-about">
                      <FaStethoscope className="about-icon" />
                      <p>{doctor.about}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .doctor-profiles-container {
          font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
          background-color: #f8fafc;
          min-height: 100vh;
        }
        
        .doctor-profiles-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3rem 1rem;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .section-title {
          color: #111827;
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          position: relative;
          display: inline-block;
          background: linear-gradient(90deg, #4f46e5, #10b981);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .section-title .highlight {
          display: inline-block;
        }
        
        .section-subtitle {
          color: #6b7280;
          font-size: 1.1rem;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .search-filter-container {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .search-box {
          position: relative;
          width: 300px;
        }
        
        .search-box input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 2.5rem;
          border: 2px solid #e5e7eb;
          border-radius: 50px;
          font-size: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .search-box input:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
        }
        
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
        }
        
        .specialty-filter select {
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 50px;
          font-size: 1rem;
          background-color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          appearance: none;
          padding-right: 2.5rem;
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          background-size: 1em;
        }
        
        .specialty-filter select:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
          gap: 1rem;
        }
        
        .loading-container p {
          color: #6b7280;
          font-size: 1.1rem;
          margin-top: 1rem;
        }
        
        .empty-state {
          text-align: center;
          padding: 3rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          max-width: 500px;
          margin: 0 auto;
        }
        
        .empty-icon-container {
          position: relative;
          margin: 0 auto 1.5rem;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .empty-icon {
          font-size: 3rem;
          color: #d1d5db;
          position: relative;
          z-index: 2;
        }
        
        .pulse-effect {
          position: absolute;
          width: 100%;
          height: 100%;
          background: #f3f4f6;
          border-radius: 50%;
          z-index: 1;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(0.95);
            opacity: 0.7;
          }
        }
        
        .empty-state h3 {
          color: #111827;
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-size: 1.4rem;
        }
        
        .empty-state p {
          color: #6b7280;
          margin-bottom: 1.5rem;
        }
        
        .reset-btn {
          background: #4f46e5;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 5px rgba(79, 70, 229, 0.2);
        }
        
        .reset-btn:hover {
          background: #4338ca;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
        }
        
        .doctor-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .doctor-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        .doctor-card.hovered {
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
        }
        
        .card-image-container {
          height: 220px;
          position: relative;
          overflow: hidden;
        }
        
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .doctor-card.hovered .card-image {
          transform: scale(1.05);
        }
        
        .card-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.5rem 0.75rem;
          border-radius: 50px;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          font-size: 0.9rem;
          color: #111827;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        
        .rating {
          display: flex;
          color: #f59e0b;
          gap: 0.1rem;
        }
        
        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #e5e7eb, #f3f4f6);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .placeholder-icon {
          font-size: 4rem;
          color: #9ca3af;
        }
        
        .card-content {
          padding: 1.5rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .doctor-name {
          color: #111827;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        
        .doctor-specialty {
          color: #4f46e5;
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          position: relative;
          display: inline-block;
        }
        
        .doctor-specialty:after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 2px;
          background-color: #4f46e5;
        }
        
        .doctor-details {
          margin-bottom: 1rem;
        }
        
        .detail-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
          color: #4b5563;
          line-height: 1.5;
        }
        
        .detail-icon {
          color: #4f46e5;
          margin-right: 0.75rem;
          min-width: 20px;
          font-size: 0.9rem;
          margin-top: 0.2rem;
        }
        
        .doctor-about {
          color: #6b7280;
          line-height: 1.6;
          font-size: 0.9rem;
          margin-top: 1rem;
          display: flex;
          gap: 0.5rem;
        }
        
        .about-icon {
          color: #4f46e5;
          margin-top: 0.2rem;
        }
        
        @media (max-width: 768px) {
          .doctor-profiles-content {
            padding: 2rem 1rem;
          }
          
          .section-title {
            font-size: 2rem;
          }
          
          .section-subtitle {
            font-size: 1rem;
          }
          
          .search-filter-container {
            flex-direction: column;
            align-items: center;
          }
          
          .search-box {
            width: 100%;
          }
          
          .specialty-filter {
            width: 100%;
          }
          
          .specialty-filter select {
            width: 100%;
          }
          
          .doctor-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};