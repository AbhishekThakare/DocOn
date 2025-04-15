// import React from "react";
// import axios from "axios";
// import { useForm, useFieldArray } from "react-hook-form";
// import "bootstrap/dist/css/bootstrap.min.css";

// export const MyDoctorProfile = () => {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm({
//     defaultValues: {
//       specializations: [{ value: "" }],
//       timings: [
//         { day: "Monday - Friday", time: "10:00 AM - 5:00 PM" },
//         { day: "Saturday", time: "10:00 AM - 2:00 PM" },
//         { day: "Sunday", time: "Closed" },
//       ],
//       reviews: [{ author: "", text: "" }],
//     },
//   });

//   const {
//     fields: specializationFields,
//     append: appendSpecialization,
//     remove: removeSpecialization,
//   } = useFieldArray({
//     control,
//     name: "specializations",
//   });

//   const {
//     fields: reviewFields,
//     append: appendReview,
//     remove: removeReview,
//   } = useFieldArray({
//     control,
//     name: "reviews",
//   });

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post("/docprofile",data); // ✅ replace with your actual API URL
//       console.log("Doctor Profile Submitted:", response.data);
//       alert("Profile saved successfully!");
//     } catch (error) {
//       console.error("Submission failed:", error.response?.data || error.message);
//       alert("Failed to save profile.");
//     }
//   };

//   return (  
//       <div className="container mt-5">
//       <h2>Doctor Profile Setup</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
//         {/* Doctor Basic Info */}
//         <div className="col-md-6">
//           <label className="form-label">Full Name</label>
//           <input
//             className="form-control"
//             {...register("name", { required: "Name is required" })}
//           />
//           {errors.name && <p className="text-danger">{errors.name.message}</p>}
//         </div>

//         <div className="col-md-6">
//           <label className="form-label">Specialization</label>
//           <input
//             className="form-control"
//             {...register("mainSpecialization", { required: "Specialization is required" })}
//           />
//           {errors.mainSpecialization && <p className="text-danger">{errors.mainSpecialization.message}</p>}
//         </div>

//         <div className="col-md-4">
//           <label className="form-label">Location</label>
//           <input
//             className="form-control"
//             {...register("location", { required: "Location is required" })}
//           />
//         </div>

//         <div className="col-md-4">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             className="form-control"
//             {...register("email", { required: "Email is required" })}
//           />
//         </div>

//         <div className="col-md-4">
//           <label className="form-label">Phone</label>
//           <input
//             type="tel"
//             className="form-control"
//             {...register("phone", {
//               required: "Phone number is required",
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: "Invalid phone number",
//               },
//             })}
//           />
//         </div>

//         <div className="col-12">
//           <label className="form-label">Bio</label>
//           <textarea
//             className="form-control"
//             rows="3"
//             {...register("bio")}
//             placeholder="Short bio about the doctor"
//           />
//         </div>

//         <div className="col-md-3">
//           <label className="form-label">Experience (Years)</label>
//           <input
//             type="number"
//             className="form-control"
//             {...register("experience", { required: true, min: 1 })}
//           />
//         </div>

//         {/* Specializations List */}
//         <div className="col-12">
//           <label className="form-label">Specializations</label>
//           {specializationFields.map((item, index) => (
//             <div key={item.id} className="input-group mb-2">
//               <input
//                 className="form-control"
//                 {...register(`specializations.${index}.value`, {
//                   required: "Required",
//                 })}
//               />
//               <button
//                 type="button"
//                 className="btn btn-danger"
//                 onClick={() => removeSpecialization(index)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="btn btn-secondary"
//             onClick={() => appendSpecialization({ value: "" })}
//           >
//             + Add Specialization
//           </button>
//         </div>

//         {/* Available Timings */}
//         <div className="col-12">
//           <label className="form-label">Available Timings</label>
//           {["Monday - Friday", "Saturday", "Sunday"].map((day, index) => (
//             <div className="row mb-2" key={day}>
//               <div className="col-md-4">
//                 <input
//                   className="form-control"
//                   value={day}
//                   disabled
//                   readOnly
//                 />
//               </div>
//               <div className="col-md-8">
//                 <input
//                   className="form-control"
//                   {...register(`timings.${index}.time`, { required: true })}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Reviews (optional) */}
//         <div className="col-12">
//           <label className="form-label">Patient Reviews</label>
//           {reviewFields.map((item, index) => (
//             <div key={item.id} className="mb-2">
//               <input
//                 className="form-control mb-1"
//                 placeholder="Author Name"
//                 {...register(`reviews.${index}.author`)}
//               />
//               <textarea
//                 className="form-control mb-1"
//                 rows="2"
//                 placeholder="Review Text"
//                 {...register(`reviews.${index}.text`)}
//               />
//               <button
//                 type="button"
//                 className="btn btn-sm btn-danger"
//                 onClick={() => removeReview(index)}
//               >
//                 Remove Review
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="btn btn-secondary mt-2"
//             onClick={() => appendReview({ author: "", text: "" })}
//           >
//             + Add Review
//           </button>
//         </div>

//         <div className="col-12">
//           <button type="submit" className="btn btn-primary">
//             Save Profile
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';

// export const MyDoctorProfile = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (formData) => {
//     const doctorId = localStorage.getItem('Id');
  
//     if (!doctorId) {
//       console.error('Doctor ID not found in localStorage');
//       return;
//     }
  
//     // Add doctorId to the formData object
//     const dataToSend = {
//       ...formData,
//       doctorId, // add the ID to the payload
//     };
  
//     try {
//       const response = await axios.post(`/adddoctor`, dataToSend);
  
//       console.log('Profile saved:', response.data);
//       alert('Profile updated successfully!');
//     } catch (error) {
//       console.error('Error updating profile:', error.response?.data || error.message);
//       alert('Failed to update profile');
//     }
//   };
  
//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Doctor Profile Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

//         {/* Full Name */}
//         <div className="col-md-6">
//           <label className="form-label">Full Name</label>
//           <input
//             type="text"
//             className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
//             {...register('fullName', { required: 'Full name is required' })}
//           />
//           {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
//         </div>

//         {/* Specialization */}
//         <div className="col-md-6">
//           <label className="form-label">Specialization</label>
//           <input
//             type="text"
//             className={`form-control ${errors.specialization ? 'is-invalid' : ''}`}
//             {...register('specialization', { required: 'Specialization is required' })}
//           />
//           {errors.specialization && <div className="invalid-feedback">{errors.specialization.message}</div>}
//         </div>

//         {/* Qualification */}
//         <div className="col-md-6">
//           <label className="form-label">Qualification</label>
//           <input
//             type="text"
//             className={`form-control ${errors.qualification ? 'is-invalid' : ''}`}
//             {...register('qualification', { required: 'Qualification is required' })}
//           />
//           {errors.qualification && <div className="invalid-feedback">{errors.qualification.message}</div>}
//         </div>

//         {/* Experience */}
//         <div className="col-md-6">
//           <label className="form-label">Experience (Years)</label>
//           <input
//             type="number"
//             className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
//             {...register('experience', {
//               required: 'Experience is required',
//               min: { value: 0, message: 'Experience must be positive' },
//             })}
//           />
//           {errors.experience && <div className="invalid-feedback">{errors.experience.message}</div>}
//         </div>

//         {/* Email */}
//         <div className="col-md-6">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//             {...register('email', {
//               required: 'Email is required',
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: 'Invalid email address',
//               },
//             })}
//           />
//           {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
//         </div>

//         {/* Phone Number */}
//         <div className="col-md-6">
//           <label className="form-label">Phone Number</label>
//           <input
//             type="text"
//             className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
//             {...register('phone', {
//               required: 'Phone number is required',
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: 'Invalid phone number',
//               },
//             })}
//           />
//           {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
//         </div>

//         {/* Registration Number */}
//         <div className="col-md-6">
//           <label className="form-label">Registration Number</label>
//           <input
//             type="text"
//             className={`form-control ${errors.registrationNo ? 'is-invalid' : ''}`}
//             {...register('registrationNo', { required: 'Registration number is required' })}
//           />
//           {errors.registrationNo && <div className="invalid-feedback">{errors.registrationNo.message}</div>}
//         </div>

//         {/* Clinic Address */}
//         <div className="col-12">
//           <label className="form-label">Clinic Address</label>
//           <textarea
//             className={`form-control ${errors.address ? 'is-invalid' : ''}`}
//             rows="2"
//             {...register('address', { required: 'Clinic address is required' })}
//           />
//           {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
//         </div>

//         {/* About */}
//         <div className="col-12">
//           <label className="form-label">About</label>
//           <textarea
//             className={`form-control ${errors.about ? 'is-invalid' : ''}`}
//             rows="3"
//             {...register('about', { required: 'About section is required' })}
//           />
//           {errors.about && <div className="invalid-feedback">{errors.about.message}</div>}
//         </div>

//         {/* Submit */}
//         <div className="col-12">
//           <button type="submit" className="btn btn-primary">Save Profile</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// import React, { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export const MyDoctorProfile = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();

//   const [isUpdate, setIsUpdate] = useState(false);
//   const navigate = useNavigate();

//   const doctorId = localStorage.getItem('Id');

//   useEffect(() => {
//     if (!doctorId) return;

//     axios.get(`/doctor/${doctorId}`)
//       .then((res) => {
//         if (res.data) {
//           reset(res.data);
//           setIsUpdate(true);
//         }
//       })
//       .catch((err) => {
//         console.error('Failed to fetch doctor profile:', err);
//       });
//   }, [doctorId, reset]);

//   const onSubmit = async (data) => {
//     if (!doctorId) {
//       alert('Doctor ID not found. Please log in again.');
//       return;
//     }

//     const formData = new FormData();

//     // Append all fields
//     Object.keys(data).forEach((key) => {
//       if (key !== 'image') {
//         formData.append(key, data[key]);
//       }
//     });

//     // Append the image file if present
//     const fileInput = document.querySelector('input[name="image"]');
//     if (fileInput && fileInput.files.length > 0) {
//       formData.append('image', fileInput.files[0]);
//     }

//     try {
//       const response = isUpdate
//         ? await axios.put(`/updatedocprofile/${doctorId}`, formData, {
//             headers: { 'Content-Type': 'multipart/form-data' },
//           })
//         : await axios.post(`/adddocfile`, formData, {
//             headers: { 'Content-Type': 'multipart/form-data' },
//           });

//       alert(isUpdate ? 'Profile updated successfully!' : 'Profile saved successfully!');
//       navigate('/docdashboard');
//     } catch (error) {
//       console.error('Error saving profile:', error.response?.data || error.message);
//       alert('Failed to save profile');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Doctor Profile Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

//         {/* Image Upload */}
//         <div className="col-md-6">
//           <label className="form-label">Profile Picture</label>
//           <input type="file" className="form-control" {...register('image')} name="image" />
//         </div>

//         {/* Full Name */}
//         <div className="col-md-6">
//           <label className="form-label">Full Name</label>
//           <input
//             type="text"
//             className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
//             {...register('fullName', { required: 'Full name is required' })}
//           />
//           {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
//         </div>

//         {/* Specialization */}
//         <div className="col-md-6">
//           <label className="form-label">Specialization</label>
//           <input
//             type="text"
//             className={`form-control ${errors.specialization ? 'is-invalid' : ''}`}
//             {...register('specialization', { required: 'Specialization is required' })}
//           />
//           {errors.specialization && <div className="invalid-feedback">{errors.specialization.message}</div>}
//         </div>

//         {/* Qualification */}
//         <div className="col-md-6">
//           <label className="form-label">Qualification</label>
//           <input
//             type="text"
//             className={`form-control ${errors.qualification ? 'is-invalid' : ''}`}
//             {...register('qualification', { required: 'Qualification is required' })}
//           />
//           {errors.qualification && <div className="invalid-feedback">{errors.qualification.message}</div>}
//         </div>

//         {/* Experience */}
//         <div className="col-md-6">
//           <label className="form-label">Experience (Years)</label>
//           <input
//             type="number"
//             className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
//             {...register('experience', {
//               required: 'Experience is required',
//               min: { value: 0, message: 'Experience must be positive' },
//             })}
//           />
//           {errors.experience && <div className="invalid-feedback">{errors.experience.message}</div>}
//         </div>

//         {/* Email */}
//         <div className="col-md-6">
//           <label className="form-label">Email</label>
//           <input
//             type="email"
//             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
//             {...register('email', {
//               required: 'Email is required',
//               pattern: {
//                 value: /^\S+@\S+$/i,
//                 message: 'Invalid email address',
//               },
//             })}
//           />
//           {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
//         </div>

//         {/* Phone Number */}
//         <div className="col-md-6">
//           <label className="form-label">Phone Number</label>
//           <input
//             type="text"
//             className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
//             {...register('phone', {
//               required: 'Phone number is required',
//               pattern: {
//                 value: /^[0-9]{10}$/,
//                 message: 'Invalid phone number',
//               },
//             })}
//           />
//           {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
//         </div>

//         {/* Registration Number */}
//         <div className="col-md-6">
//           <label className="form-label">Registration Number</label>
//           <input
//             type="text"
//             className={`form-control ${errors.registrationNo ? 'is-invalid' : ''}`}
//             {...register('registrationNo', { required: 'Registration number is required' })}
//           />
//           {errors.registrationNo && <div className="invalid-feedback">{errors.registrationNo.message}</div>}
//         </div>

//         {/* Clinic Address */}
//         <div className="col-12">
//           <label className="form-label">Clinic Address</label>
//           <textarea
//             className={`form-control ${errors.address ? 'is-invalid' : ''}`}
//             rows="2"
//             {...register('address', { required: 'Clinic address is required' })}
//           />
//           {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
//         </div>

//         {/* About */}
//         <div className="col-12">
//           <label className="form-label">About</label>
//           <textarea
//             className={`form-control ${errors.about ? 'is-invalid' : ''}`}
//             rows="3"
//             {...register('about', { required: 'About section is required' })}
//           />
//           {errors.about && <div className="invalid-feedback">{errors.about.message}</div>}
//         </div>

//         {/* Buttons */}
//         <div className="col-12 d-flex gap-3">
//           <button type="submit" className="btn btn-primary">
//             {isUpdate ? 'Update Profile' : 'Save Profile'}
//           </button>
//           {isUpdate && (
//             <button type="button" className="btn btn-secondary" onClick={() => reset()}>
//               Cancel Edit
//             </button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };


import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MyDoctorProfile = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  const doctorId = localStorage.getItem('Id');

  useEffect(() => {
    if (!doctorId) return;

    axios.get(`/doctor/${doctorId}`)
      .then((res) => {
        if (res.data) {
          reset(res.data);
          setIsUpdate(true);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch doctor profile:', err);
      });
  }, [doctorId, reset]);

  const onSubmit = async (data) => {
    if (!doctorId) {
      alert('Doctor ID not found. Please log in again.');
      return;
    }

    const formData = new FormData();

    // Append all fields except 'image' to the FormData
    Object.keys(data).forEach((key) => {
      if (key !== 'image') {
        formData.append(key, data[key]);
      }
    });

    // Add doctorId to the FormData to send it to the backend
    formData.append('doctorId', doctorId);

    // Append the image file if present
    const fileInput = document.querySelector('input[name="image"]');
    if (fileInput && fileInput.files.length > 0) {
      formData.append('image', fileInput.files[0]);
    }

    try {
      const response = isUpdate
        ? await axios.put(`/updatedocprofile/${doctorId}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
        : await axios.post(`/adddocfile`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          });

      alert(isUpdate ? 'Profile updated successfully!' : 'Profile saved successfully!');
      navigate('/docdashboard');
    } catch (error) {
      console.error('Error saving profile:', error.response?.data || error.message);
      alert('Failed to save profile');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Doctor Profile Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="row g-3">

        {/* Image Upload */}
        <div className="col-md-6">
          <label className="form-label">Profile Picture</label>
          <input type="file" className="form-control" {...register('image')} name="image" />
        </div>

        {/* Full Name */}
        <div className="col-md-6">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            {...register('fullName', { required: 'Full name is required' })}
          />
          {errors.fullName && <div className="invalid-feedback">{errors.fullName.message}</div>}
        </div>

        {/* Specialization */}
        <div className="col-md-6">
          <label className="form-label">Specialization</label>
          <input
            type="text"
            className={`form-control ${errors.specialization ? 'is-invalid' : ''}`}
            {...register('specialization', { required: 'Specialization is required' })}
          />
          {errors.specialization && <div className="invalid-feedback">{errors.specialization.message}</div>}
        </div>

        {/* Qualification */}
        <div className="col-md-6">
          <label className="form-label">Qualification</label>
          <input
            type="text"
            className={`form-control ${errors.qualification ? 'is-invalid' : ''}`}
            {...register('qualification', { required: 'Qualification is required' })}
          />
          {errors.qualification && <div className="invalid-feedback">{errors.qualification.message}</div>}
        </div>

        {/* Experience */}
        <div className="col-md-6">
          <label className="form-label">Experience (Years)</label>
          <input
            type="number"
            className={`form-control ${errors.experience ? 'is-invalid' : ''}`}
            {...register('experience', {
              required: 'Experience is required',
              min: { value: 0, message: 'Experience must be positive' },
            })}
          />
          {errors.experience && <div className="invalid-feedback">{errors.experience.message}</div>}
        </div>

        {/* Email */}
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
        </div>

        {/* Phone Number */}
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Invalid phone number',
              },
            })}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone.message}</div>}
        </div>

        {/* Registration Number */}
        <div className="col-md-6">
          <label className="form-label">Registration Number</label>
          <input
            type="text"
            className={`form-control ${errors.registrationNo ? 'is-invalid' : ''}`}
            {...register('registrationNo', { required: 'Registration number is required' })}
          />
          {errors.registrationNo && <div className="invalid-feedback">{errors.registrationNo.message}</div>}
        </div>

        {/* Clinic Address */}
        <div className="col-12">
          <label className="form-label">Clinic Address</label>
          <textarea
            className={`form-control ${errors.address ? 'is-invalid' : ''}`}
            rows="2"
            {...register('address', { required: 'Clinic address is required' })}
          />
          {errors.address && <div className="invalid-feedback">{errors.address.message}</div>}
        </div>

        {/* About */}
        <div className="col-12">
          <label className="form-label">About</label>
          <textarea
            className={`form-control ${errors.about ? 'is-invalid' : ''}`}
            rows="3"
            {...register('about', { required: 'About section is required' })}
          />
          {errors.about && <div className="invalid-feedback">{errors.about.message}</div>}
        </div>

        {/* Buttons */}
        <div className="col-12 d-flex gap-3">
          <button type="submit" className="btn btn-primary">
            {isUpdate ? 'Update Profile' : 'Save Profile'}
          </button>
          {isUpdate && (
            <button type="button" className="btn btn-secondary" onClick={() => reset()}>
              Cancel Edit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
