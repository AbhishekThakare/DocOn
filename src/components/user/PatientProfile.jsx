// import React from 'react'

// export const PatientProfile = () => {
//   return (
//     <div className="container mt-5">
//     <div className="row">
//       {/* Profile Card */}
//       <div className="col-md-4">
//         <div className="card shadow-lg">
//           <img
//             src="https://via.placeholder.com/300"
//             className="card-img-top"
//             alt="Patient Image"
//           />
//           <div className="card-body text-center">
//             <h4 className="card-title">John Doe</h4>
//             <p className="text-muted">Age: 30 | Male</p>
//             <p>
//               <i className="bi bi-geo-alt" /> New York, USA
//             </p>
//             <p>
//               <i className="bi bi-envelope" /> johndoe@email.com
//             </p>
//             <p>
//               <i className="bi bi-telephone" /> +1 123 456 7890
//             </p>
//             <a href="#" className="btn btn-primary">
//               Edit Profile
//             </a>
//           </div>
//         </div>
//       </div>
//       {/* Patient Information */}
//       <div className="col-md-8">
//         <div className="card shadow-lg p-4">
//           <h3>Medical History</h3>
//           <ul>
//             <li>Diabetes - Diagnosed in 2015</li>
//             <li>High Blood Pressure - Diagnosed in 2018</li>
//             <li>Previous Surgeries: Appendix Removal (2020)</li>
//           </ul>
//           <h4>Recent Prescriptions</h4>
//           <ul>
//             <li>Metformin (500mg) - Twice a day</li>
//             <li>Lisinopril (10mg) - Once a day</li>
//           </ul>
//           <h4>Upcoming Appointments</h4>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Doctor</th>
//                 <th>Date</th>
//                 <th>Time</th>
//                 <th>Type</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Dr. Smith (Cardiologist)</td>
//                 <td>March 10, 2025</td>
//                 <td>10:00 AM</td>
//                 <td>In-Clinic</td>
//               </tr>
//               <tr>
//                 <td>Dr. Adams (Endocrinologist)</td>
//                 <td>March 15, 2025</td>
//                 <td>02:00 PM</td>
//                 <td>Online Consultation</td>
//               </tr>
//             </tbody>
//           </table>
//           <h4>Health Records</h4>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Date</th>
//                 <th>Doctor</th>
//                 <th>Diagnosis</th>
//                 <th>Download</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Feb 20, 2025</td>
//                 <td>Dr. John Smith</td>
//                 <td>Routine Check-up</td>
//                 <td>
//                   <a href="#" className="btn btn-sm btn-primary">
//                     Download
//                   </a>
//                 </td>
//               </tr>
//               <tr>
//                 <td>Jan 10, 2025</td>
//                 <td>Dr. Emily Brown</td>
//                 <td>Diabetes Consultation</td>
//                 <td>
//                   <a href="#" className="btn btn-sm btn-primary">
//                     Download
//                   </a>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//           <h4>Doctor's Notes</h4>
//           <p>
//             "John should maintain a low-carb diet and continue regular check-ups
//             every 3 months." - Dr. Adams
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
  
  
//   )
// }


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import "bootstrap/dist/css/bootstrap.min.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// // Indian States and Cities
// const statesAndCities = {
//   "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
//   "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
//   "Delhi": ["New Delhi", "Dwarka", "Rohini"],
//   "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
//   "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi"],
//   "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
//   "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
//   "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
//   "West Bengal": ["Kolkata", "Darjeeling", "Asansol"]
// };

// export const PatientProfile = () => {

//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [selectedState, setSelectedState] = useState("");
//   const [cities, setCities] = useState([]);

//   // Update cities based on selected state
//   const handleStateChange = (e) => {
//     const state = e.target.value;
//     setSelectedState(state);
//     setCities(statesAndCities[state] || []);
//   };


//   const onSubmit = async (data) => {
//     try {
//       const userId = localStorage.getItem("Id");
//       if (!userId) {
//         alert("User ID not found. Please log in again.");
//         return;
//       }
  
//       const payload = { ...data, userId };
  
//       const response = await axios.post("/profile", payload);
  
//       if (response.status === 200 || response.status === 201) {
//         console.log("Server response:", response.data);
//         alert("Profile submitted successfully!");
//         navigate("/patientdashboard");
//       } else {
//         console.error("Unexpected response:", response);
//         alert("Something went wrong. Please try again.");
//       }
  
//     } catch (error) {
//       console.error("Submission error:", error);
//       alert("An error occurred while submitting. Please try again.");
//     }
//   };
  

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Patient Profile Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="card p-4 shadow">
        
//         {/* Personal Details */}
//         <h4>Personal Details</h4>
//         <div className="mb-3">
//           <label className="form-label">Full Name</label>
//           <input className="form-control" {...register("fullname", { required: "Name is required" })} />
//           <p className="text-danger">{errors.name?.message}</p>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Age</label>
//           <input type="number" className="form-control" {...register("age", { required: "Age is required", min: 1 })} />
//           <p className="text-danger">{errors.age?.message}</p>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Gender</label>
//           <select className="form-select" {...register("gender", { required: "Gender is required" })}>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>
//           <p className="text-danger">{errors.gender?.message}</p>
//         </div>


//         <div className="mb-3">
//           <label className="form-label">Height (cm)</label>
//           <input type="number" className="form-control" {...register("height", { required: "Height is required", min: 50, max: 250 })} />
//           <p className="text-danger">{errors.height?.message}</p>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Weight (kg)</label>
//           <input type="number" className="form-control" {...register("weight", { required: "Weight is required", min: 10, max: 300 })} />
//           <p className="text-danger">{errors.weight?.message}</p>
//         </div>

//         {/* Address Section */}
//         <h4>Address</h4>
//         <div className="mb-3">
//           <label className="form-label">State</label>
//           <select className="form-select" {...register("state", { required: "State is required" })} onChange={handleStateChange}>
//             <option value="">Select State</option>
//             {Object.keys(statesAndCities).map((state) => (
//               <option key={state} value={state}>{state}</option>
//             ))}
//           </select>
//           <p className="text-danger">{errors.state?.message}</p>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">City</label>
//           <select className="form-select" {...register("city", { required: "City is required" })} disabled={!selectedState}>
//             <option value="">Select City</option>
//             {cities.map((city) => (
//               <option key={city} value={city}>{city}</option>
//             ))}
//           </select>
//           <p className="text-danger">{errors.city?.message}</p>
//         </div>

//         {/* Contact Details */}
//         <h4>Contact Details</h4>
//         <div className="mb-3">
//           <label className="form-label">Phone Number</label>
//           <input className="form-control" {...register("phone", { required: "Phone number is required", pattern: { value: /^\d{10}$/, message: "Phone must be 10 digits" } })} />
//           <p className="text-danger">{errors.phone?.message}</p>
//         </div>

//         {/* Medical History */}
//         <h4>Medical History</h4>
//         <div className="mb-3">
//           <label className="form-label">Allergies</label>
//           <textarea className="form-control" rows="2" {...register("allergies")} />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Current Medications</label>
//           <textarea className="form-control" rows="2" {...register("medications")} />
//         </div>

//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };


import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const statesAndCities = {
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra"],
  "West Bengal": ["Kolkata", "Darjeeling", "Asansol"]
};

export const PatientProfile = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem("Id");
        if (!userId) return;

        const response = await axios.get(`/getprofileByUser/${userId}`);
        if (response.status === 200 && response.data) {
          const data = response.data;
          setProfileData(data);
          setSelectedState(data.state);
          setCities(statesAndCities[data.state] || []);
          Object.keys(data).forEach((key) => {
            setValue(key, data[key]);
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [setValue]);

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setCities(statesAndCities[state] || []);
  };

  const onSubmit = async (data) => {
    try {
      const userId = localStorage.getItem("Id");
      if (!userId) {
        alert("User ID not found. Please log in again.");
        return;
      }
  
      const formData = new FormData();
  
      // Append all fields to formData
      Object.keys(data).forEach((key) => {
        formData.append(key, data[key]);
      });
  
      // Append the file
      const fileInput = document.querySelector('input[name="image"]');
      if (fileInput && fileInput.files.length > 0) {
        formData.append("image", fileInput.files[0]);
      }
  
      const response = profileData
        ? await axios.put(`/updateprofile/${userId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        : await axios.post("/profile", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
  
      if (response.status === 200 || response.status === 201) {
        alert(profileData ? "Profile updated successfully!" : "Profile submitted successfully!");
        navigate("/patientdashboard");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting. Please try again.");
    }
  };
  
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Patient Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-4 shadow">

        {/* Personal Details */}
        <h4>Personal Details</h4>

        <div className="mb-3">
                <label className="form-label">Select YOUR PROFILE PHOTO</label>
                <input type="file" {...register("image")}></input>
              </div>

        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            className="form-control"
            {...register("fullname", { required: "Name is required" })}
            disabled={profileData && !isEditMode}
          />
          <p className="text-danger">{errors.fullname?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            {...register("age", { required: "Age is required", min: 1 })}
            disabled={profileData && !isEditMode}
          />
          <p className="text-danger">{errors.age?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select
            className="form-select"
            {...register("gender", { required: "Gender is required" })}
            disabled={profileData && !isEditMode}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <p className="text-danger">{errors.gender?.message}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            {...register("dob", { required: "Date of birth is required" })}
            disabled={profileData && !isEditMode}
          />
          <p className="text-danger">{errors.dob?.message}</p>
        </div>

        
        <div className="mb-3">
          <label className="form-label">Height (cm)</label>
          <input
            type="number"
            className="form-control"
            {...register("height", { required: "Height is required", min: 50, max: 250 })}
            disabled={profileData && !isEditMode}
          />
          <p className="text-danger">{errors.height?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Weight (kg)</label>
          <input
            type="number"
            className="form-control"
            {...register("weight", { required: "Weight is required", min: 10, max: 300 })}
            disabled={profileData && !isEditMode}
          />
          <p className="text-danger">{errors.weight?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">Blood Type</label>
          <select
            className="form-select"
            {...register("bloodType", { required: "Blood type is required" })}
            disabled={profileData && !isEditMode}
          >
            <option value="">Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
          <p className="text-danger">{errors.bloodType?.message}</p>
        </div>

        {/* Address Section */}
        <h4>Address</h4>
        <div className="mb-3">
          <label className="form-label">State</label>
          <select
            className="form-select"
            {...register("state", { required: "State is required" })}
            onChange={handleStateChange}
            disabled={profileData && !isEditMode}
          >
            <option value="">Select State</option>
            {Object.keys(statesAndCities).map((state) => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
          <p className="text-danger">{errors.state?.message}</p>
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <select
            className="form-select"
            {...register("city", { required: "City is required" })}
            disabled={!selectedState || (profileData && !isEditMode)}
          >
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
          <p className="text-danger">{errors.city?.message}</p>
        </div>

        {/* Contact Details */}
        <h4>Contact Details</h4>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            className="form-control"
            {...register("phone", {
              required: "Phone number is required",
              pattern: { value: /^\d{10}$/, message: "Phone must be 10 digits" }
            })}
            disabled={profileData && !isEditMode}
          />
          <p className="text-danger">{errors.phone?.message}</p>
        </div>
        
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format",
              },
            })}
            disabled={profileData && !isEditMode}
          />
          <p className="text-danger">{errors.email?.message}</p>
        </div>

        {/* Medical History */}
        <h4>Medical History</h4>
        <div className="mb-3">
          <label className="form-label">Allergies</label>
          <textarea
            className="form-control"
            rows="2"
            {...register("allergies")}
            disabled={profileData && !isEditMode}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Current Medications</label>
          <textarea
            className="form-control"
            rows="2"
            {...register("medications")}
            disabled={profileData && !isEditMode}
          />
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2">
          {profileData && !isEditMode && (
            <button
              type="button"
              className="btn btn-warning"
              onClick={() => setIsEditMode(true)}
            >
              Edit Profile
            </button>
          )}
          {(isEditMode || !profileData) && (
            <button type="submit" className="btn btn-primary">
              {profileData ? "Update Profile" : "Submit Profile"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};



