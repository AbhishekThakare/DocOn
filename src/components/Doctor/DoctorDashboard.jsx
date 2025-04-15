// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DoctorNavbar from '../layout/DoctorNavbar';

// export const DoctorDashboard = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const doctorId = localStorage.getItem("Id");
//     if (!doctorId) {
//       alert("Doctor ID not found in localStorage.");
//       return;
//     }

//     const fetchDoctorProfile = async () => {
//       try {
//         const res = await axios.get(`/doctor/${doctorId}`);
//         console.log("Fetched doctor profile:", res.data);
//         setProfile(res.data.data); // ✅ fetch from .data
//       } catch (err) {
//         console.error(err);
//         alert("Failed to fetch doctor profile.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctorProfile();
//   }, []);

//   if (loading) return <div className="container mt-5">Loading...</div>;

//   if (!profile) return <div className="container mt-5">Doctor profile not found.</div>;

//   return (
//     <div><DoctorNavbar></DoctorNavbar>
//     <div className="container mt-5">
//       <h2 className="mb-4">Doctor Profile</h2>
//       <div className="card shadow-sm p-4">
//       {profile.image && (
//             <div className="text-center mb-4">
//               <img
//                 src={profile.image}
//                 alt="Profile"
//                 className="rounded-circle shadow"
//                 style={{ width: "150px", height: "150px", objectFit: "cover" }}
//               />
//             </div>
//           )}
//         <div className="row">
//           <ProfileField label="Full Name" value={profile.fullName} />
//           <ProfileField label="Specialization" value={profile.specialization} />
//           <ProfileField label="Qualification" value={profile.qualification} />
//           <ProfileField label="Experience" value={`${profile.experience} years`} />
//           <ProfileField label="Email" value={profile.email} />
//           <ProfileField label="Phone" value={profile.phone} />
//           <ProfileField label="Registration Number" value={profile.registrationNo} />
//           <ProfileField label="Clinic Address" value={profile.address} full />
//           <ProfileField label="About" value={profile.about} full />
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// // Reusable component for cleaner layout
// const ProfileField = ({ label, value, full }) => (
//   <div className={`col-md-${full ? '12' : '6'} mb-3`}>
//     <strong>{label}:</strong>
//     <div>{value || "—"}</div>
//   </div>
// );

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import DoctorNavbar from '../layout/DoctorNavbar';

// export const DoctorDashboard = () => {
//   const [profile, setProfile] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const doctorId = localStorage.getItem("Id");
//     if (!doctorId) {
//       alert("Doctor ID not found in localStorage.");
//       return;
//     }

//     const fetchDoctorProfile = async () => {
//       try {
//         const res = await axios.get(`/doctor/${doctorId}`);
//         console.log("Fetched doctor profile:", res.data);
//         setProfile(res.data.data);
//       } catch (err) {
//         console.error(err);
//         alert("Failed to fetch doctor profile.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctorProfile();
//   }, []);

//   return (
//     <div>
//       <DoctorNavbar />
//       <div className="container mt-5">
//         {loading ? (
//           <div>Loading...</div>
//         ) : !profile ? (
//           <div>Doctor profile not found.</div>
//         ) : (
//           <>
//             <h2 className="mb-4">Doctor Profile</h2>
//             <div className="card shadow-sm p-4">
//               {profile.image && (
//                 <div className="text-center mb-4">
//                   <img
//                     src={profile.image}
//                     alt="Profile"
//                     className="rounded-circle shadow"
//                     style={{ width: "150px", height: "150px", objectFit: "cover" }}
//                   />
//                 </div>
//               )}
//               <div className="row">
//                 <ProfileField label="Full Name" value={profile.fullName} />
//                 <ProfileField label="Specialization" value={profile.specialization} />
//                 <ProfileField label="Qualification" value={profile.qualification} />
//                 <ProfileField label="Experience" value={`${profile.experience} years`} />
//                 <ProfileField label="Email" value={profile.email} />
//                 <ProfileField label="Phone" value={profile.phone} />
//                 <ProfileField label="Registration Number" value={profile.registrationNo} />
//                 <ProfileField label="Clinic Address" value={profile.address} full />
//                 <ProfileField label="About" value={profile.about} full />
//               </div>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// // Reusable component for cleaner layout
// const ProfileField = ({ label, value, full }) => (
//   <div className={`col-md-${full ? '12' : '6'} mb-3`}>
//     <strong>{label}:</strong>
//     <div>{value || "—"}</div>
//   </div>
// );

// -------------------------------final code--------------------------------------------
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorNavbar from '../layout/DoctorNavbar';

export const DoctorDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const doctorId = localStorage.getItem("Id");
    if (!doctorId) {
      alert("Doctor ID not found in localStorage.");
      return;
    }

    const fetchDoctorProfile = async () => {
      try {
        const res = await axios.get(`/doctor/${doctorId}`);
        setProfile(res.data.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch doctor profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorProfile();
  }, []);

  return (
    <div className="doctor-dashboard bg-white min-h-screen">
      <DoctorNavbar />
      
      <div className="container py-5">
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-grow text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-4 text-muted fs-5">Loading your profile...</p>
          </div>
        ) : !profile ? (
          <div className="alert alert-warning text-center">Doctor profile not found.</div>
        ) : (
          <>
            <div className="row justify-content-center mb-5">
              <div className="col-lg-10 text-center">
                <h1 className="display-4 fw-bold text-dark mb-3">My Professional Profile</h1>
                <div className="mx-auto" style={{
                  width: '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #00695c, #004d40)',
                  borderRadius: '2px'
                }}></div>
              </div>
            </div>
            
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                  <div className="card-body p-0">
                    <div className="row g-0">
                      {/* Profile Image Column */}
                      <div className="col-md-4 d-flex align-items-center justify-content-center p-4 bg-light">
                        {profile.image && (
                          <div className="position-relative">
                            <img
                              src={profile.image}
                              alt="Profile"
                              className="img-fluid rounded-circle shadow-lg"
                              style={{ 
                                width: "220px", 
                                height: "220px", 
                                objectFit: "cover",
                                border: '4px solid #00695c'
                              }}
                            />
                            <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle p-2 border border-3 border-white">
                              <i className="fas fa-user-md text-white fs-4"></i>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Profile Details Column */}
                      <div className="col-md-8 p-4">
                        <div className="d-flex justify-content-between align-items-start mb-4">
                          <div>
                            <h2 className="text-dark mb-1">{profile.fullName}</h2>
                            <h4 className="text-primary">{profile.specialization}</h4>
                          </div>
                          <span className="badge rounded-pill bg-teal-100 text-teal-800 fs-6 px-3 py-2 shadow-sm" style={{background: 'linear-gradient(135deg, #00695c 0%, #004d40 100%)'}}>
                            <i className="fas fa-id-card me-2"></i>
                            {profile.registrationNo}
                          </span>
                        </div>
                        
                        <div className="row g-3 mb-4">
                          <div className="col-md-6">
                            <div className="p-3 rounded-3 bg-teal-50">
                              <h6 className="text-uppercase text-teal-800 mb-2 small">
                                <i className="fas fa-graduation-cap me-2"></i>
                                Qualification
                              </h6>
                              <p className="mb-0 fs-5 text-dark">{profile.qualification}</p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="p-3 rounded-3 bg-teal-50">
                              <h6 className="text-uppercase text-teal-800 mb-2 small">
                                <i className="fas fa-clock me-2"></i>
                                Experience
                              </h6>
                              <p className="mb-0 fs-5 text-dark">{profile.experience} years</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="row g-3">
                          <ProfileField 
                            label="Email" 
                            value={profile.email} 
                            icon="envelope"
                          />
                          <ProfileField 
                            label="Phone" 
                            value={profile.phone} 
                            icon="phone-alt"
                          />
                          <ProfileField 
                            label="Clinic Address" 
                            value={profile.address} 
                            full 
                            icon="map-marked-alt"
                          />
                          <ProfileField 
                            label="About" 
                            value={profile.about} 
                            full 
                            icon="stethoscope"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const ProfileField = ({ label, value, full, icon }) => (
  <div className={`col-md-${full ? '12' : '6'}`}>
    <div className="p-3 rounded-3 mb-3 bg-teal-50 transition-all hover:shadow-sm">
      <h6 className="text-uppercase text-teal-800 mb-2 small">
        <i className={`fas fa-${icon} me-2 text-teal-600`}></i>
        {label}
      </h6>
      <p className="mb-0 text-dark" style={{ 
        fontSize: '1.05rem',
        lineHeight: '1.6'
      }}>
        {value || <span className="text-muted">Not specified</span>}
      </p>
    </div>
  </div>
);