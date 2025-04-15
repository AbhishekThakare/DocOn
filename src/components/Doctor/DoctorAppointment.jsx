// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DoctorNavbar from '../layout/DoctorNavbar';

// export const DoctorAppointment = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const doctorEmail = localStorage.getItem('email'); // Fetch doctor email from local storage (or from auth context)

//     const cancelAppointment = async (id) => {
//         try {
//             setLoading(true);
//             await axios.delete(`/appointment/${id}`);
//             setError(null);
//             getallAppointments();
//         } catch (error) {
//             console.error("Error cancelling appointment", error);
//             setError("Failed to cancel appointment. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const approveAppointment = async (id) => {
//         try {
//             await axios.put(`/updateappointment/${id}`, { status: "Approved" });
//             alert("Appointment approved successfully!");
//             setAppointments((prevAppointments) =>
//                 prevAppointments.map((appointment) =>
//                     appointment._id === id ? { ...appointment, status: "Approved" } : appointment
//                 )
//             );
//         } catch (error) {
//             console.error("Error approving appointment", error);
//             alert("Failed to approve appointment");
//         }
//     };

//     const getallAppointments = async () => {
//         try {
//             if (!doctorEmail) {
//                 console.error("Doctor email not found.");
//                 return;
//             }
//             const res = await axios.get(`/appointments?doctorEmail=${doctorEmail}`);
//             console.log(res.data);
//             setAppointments(res.data.data);
//         } catch (error) {
//             console.error("Error fetching appointments", error);
//         }
//     };

//     useEffect(() => {
//         getallAppointments();
//     }, []);

//     return (
//         <div>
//             <DoctorNavbar />
//             <div style={{ textAlign: "center" }}>
//                 <h2>MY APPOINTMENTS</h2>
//                 <table className='table table-dark'>
//                     <thead>
//                         <tr>
//                             <th>Patient Name</th>
//                             <th>Email</th>
//                             <th>Date</th>
//                             <th>Time</th>
//                             <th>Type</th>
//                             <th>Cancel</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {appointments?.map((appointment) => (
//                             <tr key={appointment._id}>
//                                 <td>{appointment.fullName}</td>
//                                 <td>{appointment.email}</td>
//                                 <td>{appointment.date}</td>
//                                 <td>{appointment.time}</td>
//                                 <td>{appointment.appointmentType}</td>
//                                 <td>
//                                     <button
//                                         className="btn btn-danger"
//                                         onClick={() => cancelAppointment(appointment._id)}
//                                     >
//                                         Cancel
//                                     </button>
//                                 </td>
//                                 <td>
//                                     {appointment.status === "Approved" ? (
//                                         <button className="btn btn-secondary" disabled>
//                                             Approved
//                                         </button>
//                                     ) : (
//                                         <button
//                                             className="btn btn-success"
//                                             onClick={() => approveAppointment(appointment._id)}
//                                         >
//                                             Approve
//                                         </button>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DoctorNavbar from '../layout/DoctorNavbar';

// export const DoctorAppointment = () => {
//     const [appointments, setAppointments] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const doctorEmail = localStorage.getItem('email');

//     const cancelAppointment = async (id) => {
//         try {
//             setLoading(true);
//             await axios.delete(`/appointment/${id}`);
//             setError(null);
//             getallAppointments();
//         } catch (error) {
//             console.error("Error cancelling appointment", error);
//             setError("Failed to cancel appointment. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const approveAppointment = async (id) => {
//         try {
//             await axios.put(`/updateappointment/${id}`, { status: "Confirmed" });
//             alert("Appointment confirmed successfully!");
//             setAppointments((prevAppointments) =>
//                 prevAppointments.map((appointment) =>
//                     appointment._id === id ? { ...appointment, status: "Confirmed" } : appointment
//                 )
//             );
//         } catch (error) {
//             console.error("Error confirming appointment", error);
//             alert("Failed to confirm appointment");
//         }
//     };

//     const getallAppointments = async () => {
//         try {
//             if (!doctorEmail) {
//                 console.error("Doctor email not found.");
//                 return;
//             }
//             const res = await axios.get(`/appointments?doctorEmail=${doctorEmail}`);
//             setAppointments(res.data.data);
//         } catch (error) {
//             console.error("Error fetching appointments", error);
//         }
//     };

//     useEffect(() => {
//         getallAppointments();
//     }, []);

//     return (
//         <div>
//             <DoctorNavbar />
//             <div style={{ textAlign: "center" }}>
//                 <h2>MY APPOINTMENTS</h2>
//                 <table className='table table-dark'>
//                     <thead>
//                         <tr>
//                             <th>Patient Name</th>
//                             <th>Email</th>
//                             <th>Date</th>
//                             <th>Time</th>
//                             <th>Type</th>
//                             <th>Cancel</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {appointments?.map((appointment) => (
//                             <tr key={appointment._id}>
//                                 <td>{appointment.fullName}</td>
//                                 <td>{appointment.email}</td>
//                                 <td>{appointment.date}</td>
//                                 <td>{appointment.time}</td>
//                                 <td>{appointment.appointmentType}</td>
//                                 <td>
//                                     <button
//                                         className="btn btn-danger"
//                                         onClick={() => cancelAppointment(appointment._id)}
//                                     >
//                                         Cancel
//                                     </button>
//                                 </td>
//                                 <td>
//                                     {appointment.status === "Confirmed" ? (
//                                         <button className="btn btn-secondary" disabled>
//                                             Confirmed
//                                         </button>
//                                     ) : (
//                                         <button
//                                             className="btn btn-success"
//                                             onClick={() => approveAppointment(appointment._id)}
//                                         >
//                                             Confirm
//                                         </button>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// -------------------------------------FINAL CODE-------------------------------------------------
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorNavbar from '../layout/DoctorNavbar';

export const DoctorAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('all');
    const doctorEmail = localStorage.getItem('email');

    const cancelAppointment = async (id) => {
        try {
            setLoading(true);
            await axios.delete(`/appointment/${id}`);
            setError(null);
            getallAppointments();
        } catch (error) {
            console.error("Error cancelling appointment", error);
            setError("Failed to cancel appointment. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const approveAppointment = async (id) => {
        try {
            await axios.put(`/updateappointment/${id}`, { status: "Confirmed" });
            alert("Appointment confirmed successfully!");
            setAppointments((prevAppointments) =>
                prevAppointments.map((appointment) =>
                    appointment._id === id ? { ...appointment, status: "Confirmed" } : appointment
                )
            );
        } catch (error) {
            console.error("Error confirming appointment", error);
            alert("Failed to confirm appointment");
        }
    };

    const getallAppointments = async () => {
        try {
            if (!doctorEmail) {
                console.error("Doctor email not found.");
                return;
            }
            const res = await axios.get(`/appointments?doctorEmail=${doctorEmail}`);
            setAppointments(res.data.data);
        } catch (error) {
            console.error("Error fetching appointments", error);
        }
    };

    const filteredAppointments = () => {
        switch (activeTab) {
            case 'pending':
                return appointments.filter(app => app.status === 'Pending');
            case 'confirmed':
                return appointments.filter(app => app.status === 'Confirmed');
            case 'cancelled':
                return appointments.filter(app => app.status === 'Cancelled');
            default:
                return appointments;
        }
    };

    useEffect(() => {
        getallAppointments();
    }, []);

    return (
        <div className="doctor-appointments" style={{ backgroundColor: '#f8f9fa' }}>
            <DoctorNavbar />
            
            <div className="container py-4">
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h1 className="h3 mb-0 text-primary">Appointment Dashboard</h1>
                            <div className="btn-group" role="group">
                                <button 
                                    type="button" 
                                    className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setActiveTab('all')}
                                >
                                    All
                                </button>
                                <button 
                                    type="button" 
                                    className={`btn ${activeTab === 'pending' ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setActiveTab('pending')}
                                >
                                    Pending
                                </button>
                                <button 
                                    type="button" 
                                    className={`btn ${activeTab === 'confirmed' ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setActiveTab('confirmed')}
                                >
                                    Confirmed
                                </button>
                                <button 
                                    type="button" 
                                    className={`btn ${activeTab === 'cancelled' ? 'btn-primary' : 'btn-outline-primary'}`}
                                    onClick={() => setActiveTab('cancelled')}
                                >
                                    Cancelled
                                </button>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mb-3">
                            <div className="me-3">
                                <div className="d-flex align-items-center">
                                    <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-2" style={{
                                        width: '24px',
                                        height: '24px'
                                    }}>
                                        <i className="fas fa-calendar-check text-white" style={{ fontSize: '12px' }}></i>
                                    </div>
                                    <span className="text-muted">Total: {appointments.length}</span>
                                </div>
                            </div>
                            <div className="me-3">
                                <div className="d-flex align-items-center">
                                    <div className="rounded-circle bg-warning d-flex align-items-center justify-content-center me-2" style={{
                                        width: '24px',
                                        height: '24px'
                                    }}>
                                        <i className="fas fa-clock text-white" style={{ fontSize: '12px' }}></i>
                                    </div>
                                    <span className="text-muted">Pending: {appointments.filter(a => a.status === 'Pending').length}</span>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex align-items-center">
                                    <div className="rounded-circle bg-success d-flex align-items-center justify-content-center me-2" style={{
                                        width: '24px',
                                        height: '24px'
                                    }}>
                                        <i className="fas fa-check text-white" style={{ fontSize: '12px' }}></i>
                                    </div>
                                    <span className="text-muted">Confirmed: {appointments.filter(a => a.status === 'Confirmed').length}</span>
                                </div>
                            </div>
                        </div>

                        {error && (
                            <div className="alert alert-danger alert-dismissible fade show mb-4">
                                {error}
                                <button type="button" className="btn-close" onClick={() => setError(null)}></button>
                            </div>
                        )}

                        <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                            <div className="card-body p-0">
                                {filteredAppointments().length === 0 ? (
                                    <div className="text-center p-5">
                                        <div className="mb-4">
                                            <i className="fas fa-calendar-times text-muted" style={{ fontSize: '3rem', opacity: 0.5 }}></i>
                                        </div>
                                        <h4 className="text-muted mb-2">No Appointments Found</h4>
                                        <p className="text-muted">You don't have any {activeTab !== 'all' ? activeTab : ''} appointments scheduled.</p>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="table table-hover align-middle mb-0">
                                            <thead className="bg-light">
                                                <tr>
                                                    <th className="ps-4">Patient</th>
                                                    <th>Details</th>
                                                    <th>Date & Time</th>
                                                    <th>Type</th>
                                                    <th>Status</th>
                                                    <th className="text-end pe-4">Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredAppointments().map((appointment) => (
                                                    <tr key={appointment._id}>
                                                        <td className="ps-4">
                                                            <div className="d-flex align-items-center">
                                                                <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center me-3" style={{
                                                                    width: '40px',
                                                                    height: '40px'
                                                                }}>
                                                                    <i className="fas fa-user text-primary"></i>
                                                                </div>
                                                                <div>
                                                                    <div className="fw-medium">{appointment.fullName}</div>
                                                                    {/* <div className="text-muted small">
                                                                        {appointment.gender || 'Not specified'} • {appointment.age || '—'} yrs
                                                                    </div> */}
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="small">{appointment.email}</div>
                                                            <div className="text-muted small">
                                                                {appointment.phone || 'No phone'}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="fw-medium">{new Date(appointment.date).toLocaleDateString()}</div>
                                                            <div className="text-muted small">{appointment.time}</div>
                                                        </td>
                                                        <td>
                                                            <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-1">
                                                                {appointment.appointmentType || 'General'}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <span className={`badge rounded-pill px-3 py-1 ${
                                                                appointment.status === 'Confirmed' ? 'bg-success' : 
                                                                appointment.status === 'Cancelled' ? 'bg-danger' : 'bg-warning text-dark'
                                                            }`}>
                                                                {appointment.status}
                                                            </span>
                                                        </td>
                                                        <td className="pe-4 text-end">
                                                            {appointment.status === "Confirmed" ? (
                                                                <button 
                                                                    className="btn btn-sm btn-outline-danger me-2"
                                                                    onClick={() => cancelAppointment(appointment._id)}
                                                                    disabled={loading}
                                                                >
                                                                    {loading ? (
                                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                    ) : (
                                                                        'Cancel'
                                                                    )}
                                                                </button>
                                                            ) : appointment.status === "Pending" ? (
                                                                <div className="d-flex justify-content-end">
                                                                    <button 
                                                                        className="btn btn-sm btn-outline-danger me-2"
                                                                        onClick={() => cancelAppointment(appointment._id)}
                                                                        disabled={loading}
                                                                    >
                                                                        {loading ? (
                                                                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                                        ) : (
                                                                            'Reject'
                                                                        )}
                                                                    </button>
                                                                    <button 
                                                                        className="btn btn-sm btn-success"
                                                                        onClick={() => approveAppointment(appointment._id)}
                                                                    >
                                                                        Confirm
                                                                    </button>
                                                                </div>
                                                            ) : null}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};