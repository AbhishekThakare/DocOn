// import React from "react";
// import { useForm } from "react-hook-form";
// import axios from "axios";

// export const CreatePrescription = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//     reset
//   } = useForm();

//   const onSubmit = async (data) => {
//     try {
//       const res = await axios.post("/prescription", data); 
//       console.log("Prescription saved:", res.data);
  
//       if (res.status === 201) {
//         alert("Prescription submitted successfully!");
//         reset(); 
//       } else {
//         throw new Error("Appointment booking failed");
//       }
//     } catch (error) {
//       console.error("Error submitting prescription:", error);
//       alert("Something went wrong. Please try again.");
//     }
//   };
  
//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Doctor's Prescription Form</h2>
//       <form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow-sm bg-light">
//         <div className="mb-3">
//           <label className="form-label">Patient Name</label>
//           <input
//             className="form-control"
//             {...register("patientName", { required: "Patient name is required" })}
//           />
//           {errors.patientName && <small className="text-danger">{errors.patientName.message}</small>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Age</label>
//           <input
//             type="number"
//             className="form-control"
//             {...register("age", {
//               required: "Age is required",
//               min: { value: 0, message: "Age must be at least 0" }
//             })}
//           />
//           {errors.age && <small className="text-danger">{errors.age.message}</small>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Gender</label>
//           <select className="form-select" {...register("gender", { required: "Gender is required" })}>
//             <option value="">Select</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//           {errors.gender && <small className="text-danger">{errors.gender.message}</small>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Symptoms</label>
//           <textarea
//             className="form-control"
//             rows="2"
//             {...register("symptoms", { required: "Symptoms are required" })}
//           ></textarea>
//           {errors.symptoms && <small className="text-danger">{errors.symptoms.message}</small>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Diagnosis</label>
//           <textarea
//             className="form-control"
//             rows="2"
//             {...register("diagnosis", { required: "Diagnosis is required" })}
//           ></textarea>
//           {errors.diagnosis && <small className="text-danger">{errors.diagnosis.message}</small>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Prescription</label>
//           <textarea
//             className="form-control"
//             rows="3"
//             {...register("prescription", { required: "Prescription is required" })}
//           ></textarea>
//           {errors.prescription && <small className="text-danger">{errors.prescription.message}</small>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Notes (Optional)</label>
//           <textarea className="form-control" rows="2" {...register("notes")}></textarea>
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Submit Prescription
//         </button>
//       </form>
//     </div>
//   );
// };



import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import PatientNavbar from "../layout/PatientNavbar";
import DoctorNavbar from "../layout/DoctorNavbar";

export const CreatePrescription = () => {
    const doctorEmail = localStorage.getItem("email"); 
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm();

  // 🔄 Fetch appointments by doctor email
    // useEffect(() => {
    //     if (!doctorEmail) return;

    //     const fetchAppointments = async () => {
    //     try {
    //         const res = await axios.get(`/appointments?doctorEmail=${doctorEmail}`);
    //         console.log("🚀 appointments API response:", res.data);
    //         setAppointments(Array.isArray(res.data) ? res.data : []);
    //     } catch (error) {
    //         console.error("Error fetching appointments:", error);
    //         alert("Failed to load appointments.");
    //     }
    //     };

    //     fetchAppointments();
    // }, [doctorEmail]);


    const fetchAppointments = async () => {
        try {
            if (!doctorEmail) {
                console.error("Doctor email not found.");
                return;
            }
            const res = await axios.get(`/appointments?doctorEmail=${doctorEmail}`);
            console.log(res.data);
            setAppointments(res.data.data);
        } catch (error) {
            console.error("Error fetching appointments", error);
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, [doctorEmail]);


    useEffect(() => {
        if (selectedAppointment) {
          setValue("patientName", selectedAppointment.fullName || "");
        }
      }, [selectedAppointment, setValue]);


  const onSubmit = async (formData) => {
    if (!selectedAppointment) return;

    const payload = {
      ...formData,
      userId: selectedAppointment.userId // assuming userId is available from the appointment
    };

    try {
      const res = await axios.post("/prescription", payload);

      console.log("Prescription saved:", res.data);

      if (res.status === 201) {
        alert("Prescription submitted successfully!");
        reset();
        setSelectedAppointment(null); // reset the form and selection
      } else {
        throw new Error("Prescription submission failed");
      }
    } catch (error) {
      console.error("Error submitting prescription:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div> <DoctorNavbar></DoctorNavbar>
    <div className="container mt-5">
      <h2 className="mb-4">Select Appointment</h2>

      <select
  className="form-select mb-4"
  value={selectedAppointment?._id || ""}
  onChange={(e) => {
    const selectedId = e.target.value;
    const selected = appointments.find((appt) => appt._id === selectedId);
    setSelectedAppointment(selected);
  }}
>
  <option value="">Select an appointment</option>
  {appointments.map((appt) => (
    <option key={appt._id} value={appt._id}>
      {appt.appointmentType} - {new Date(appt.date).toLocaleDateString()} - {appt.fullName
      }
    </option>
  ))}
</select>


      {selectedAppointment && (
        <>
          <h2 className="mb-4">Doctor's Prescription Form</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="border p-4 rounded shadow-sm bg-light"
          >
            {/* FORM FIELDS */}
            {/* <div className="mb-3">
              <label className="form-label">Patient Name</label>
              <input
                className="form-control"
                defaultValue={selectedAppointment.fullName}
                {...register("patientName", { required: "Patient name is required" })}
              />
              {errors.patientName && (
                <small className="text-danger">{errors.fullName.message}</small>
              )}
            </div> */}


<div className="mb-3">
  <label className="form-label">Patient Name</label>
  <input
    className="form-control"
    {...register("patientName", { required: "Patient name is required" })}
  />
  {errors.patientName && (
    <small className="text-danger">{errors.patientName.message}</small>
  )}
</div>


            {/* Age */}
            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                {...register("age", {
                  required: "Age is required",
                  min: { value: 0, message: "Age must be at least 0" }
                })}
              />
              {errors.age && <small className="text-danger">{errors.age.message}</small>}
            </div>

            {/* Gender */}
            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <small className="text-danger">{errors.gender.message}</small>
              )}
            </div>

            {/* Symptoms */}
            <div className="mb-3">
              <label className="form-label">Symptoms</label>
              <textarea
                className="form-control"
                rows="2"
                {...register("symptoms", { required: "Symptoms are required" })}
              ></textarea>
              {errors.symptoms && (
                <small className="text-danger">{errors.symptoms.message}</small>
              )}
            </div>

            {/* Diagnosis */}
            <div className="mb-3">
              <label className="form-label">Diagnosis</label>
              <textarea
                className="form-control"
                rows="2"
                {...register("diagnosis", { required: "Diagnosis is required" })}
              ></textarea>
              {errors.diagnosis && (
                <small className="text-danger">{errors.diagnosis.message}</small>
              )}
            </div>

            {/* Prescription */}
            <div className="mb-3">
              <label className="form-label">Prescription</label>
              <textarea
                className="form-control"
                rows="3"
                {...register("prescription", { required: "Prescription is required" })}
              ></textarea>
              {errors.prescription && (
                <small className="text-danger">{errors.prescription.message}</small>
              )}
            </div>

            {/* Notes */}
            <div className="mb-3">
              <label className="form-label">Notes (Optional)</label>
              <textarea className="form-control" rows="2" {...register("notes")}></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Prescription
            </button>
          </form>
        </>
      )}
    </div>
    </div>
  );
};




// ----------------------------------------------final code----------------------------------------------
