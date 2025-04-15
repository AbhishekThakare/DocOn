// import axios from "axios";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { data, useNavigate } from "react-router-dom";

// export const Signup = () => {
//   const { register, handleSubmit } = useForm();
//   //navigation...
//   const navigate = useNavigate();

//   const submitHandler = async(data) => {
//     console.log(data);
//     data.roleId = "67bd39d90d07b9633d60535d"

//     const res = await axios.post("/user",data)
//     //res.status
//     if(res.status === 201){
//       alert("User created successfully")
//       navigate("/login")
//     }
//     else{
//       alert("User not created")
//     }

//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <form onSubmit={handleSubmit(submitHandler)}>
//         <div>
//           <label>First Name</label>
//           <input type="text" {...register("firstName")} />
//         </div>
//         <div>
//           <label>Last Name</label>
//           <input type="text" {...register("lastName")} />
//         </div>
//         <div>
//           <label>Email</label>
//           <input type="text" {...register("email")} />
//         </div>
//         <div>
//           <label>password</label>
//           <input type="text" {...register("password")} />
//         </div>
//         <div>
//           <label>AGE</label>
//           <input type="text" {...register("age")} />
//         </div>
//         <div>
//           <input type="submit"></input>
//         </div>
//       </form>
//     </div>
//   );
// };
// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// export const Signup = () => {
//   const { register, handleSubmit } = useForm();
//   const navigate = useNavigate();

//   const submitHandler = async (data) => {
//     console.log(data);
//     data.roleId = '67c680b3948e9ea00c7eef53';

//     try {
//       const res = await axios.post('/user', data);
//       if (res.status === 201) {
//         toast.success('🎉 User Created Successfully!🎉', {
//           position: 'top-center',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           theme: 'colored',
//           style: { backgroundColor: '#007bff', color: '#fff' }, 
//         });

//         setTimeout(() => navigate('/login'), 1000);
//       } else {
//         throw new Error('User not created');
//       }
//     } catch (error) {
//       toast.error('❌ Something went wrong! Please try again.', {
//         position: 'top-center ',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         theme: 'colored',
//         style: { backgroundColor: '#007bff', color: '#fff' }, // Blue toast
//       });
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: 'url("Images/bgloginin.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: 700,
//       }}
//     >
//       <ToastContainer />
//       <div className="container mt-5">
//         <div className="row justify-content-center" style={{ width: '60vw' }}>
//           <div className="col-md-6">
//             <div className="card">
//               <div className="card-header bg-primary text-white text-center"  style={{
//     background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
//     boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
//   }}>
//                 <h4>Signup</h4>
//               </div>
//               <div className="card-body">
//                 <form onSubmit={handleSubmit(submitHandler)}>
//                   <div className="mb-3">
//                     <label htmlFor="name" className="form-label">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       id="name"
//                       placeholder="Enter your full name"
//                       required
//                       {...register('fullName')}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="email" className="form-label">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       className="form-control"
//                       id="email"
//                       placeholder="Enter your email"
//                       required
//                       {...register('email')}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="password" className="form-label">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="password"
//                       placeholder="Enter your password"
//                       required
//                       {...register('password')}
//                     />
//                   </div>
//                   <div className="mb-3">
//                     <label htmlFor="confirm-password" className="form-label">
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       className="form-control"
//                       id="confirm-password"
//                       placeholder="Confirm your password"
//                       required
//                       {...register('confirmPassword')}
//                     />
//                   </div>
//                   <div className="mb-3 form-check">
//                     <input
//                       type="checkbox"
//                       className="form-check-input"
//                       id="terms"
//                       required
//                       {...register('checkbox')}
//                     />
//                     <label className="form-check-label" htmlFor="terms">
//                       I agree to the terms and conditions
//                     </label>
//                   </div>
//                   <button type="submit" className="btn btn-primary w-100"  style={{
//     background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
//     boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
//   }}>
//                     Signup
//                   </button>
//                 </form>
//                 <div className="text-center mt-3">
//                   <p>
//                     Already have an account? <Link to={'/login'}>Login</Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from '../layout/Navbar';

export const Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    // Assign role ID based on selection
    data.roleId = data.role === 'user' ? '67c680b3948e9ea00c7eef53' : '67c68196948e9ea00c7eef55';

    try {
      const res = await axios.post('/user', data);
      if (res.status === 201) {
        toast.success('🎉 Account created successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
          style: { backgroundColor: '#0062cc' }
        });
        setTimeout(() => navigate('/login'), 1000);
      }
    } catch (error) {
      toast.error('❌ Registration failed. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
        style: { backgroundColor: '#d32f2f' }
      });
    }
  };

  return (
    <div><Navbar></Navbar>
    <div style={{
      minHeight: '100vh',
      background: " url('/Images/fpbg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <ToastContainer />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card" style={{
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
              border: 'none',
              backgroundColor: 'rgba(255, 255, 255, 0.95)'
            }}>
              {/* Card Header */}
              <div className="card-header text-center py-4" style={{
                background: "linear-gradient(135deg, #0062cc 0%, #004080 100%)",
                color: 'white',
                borderBottom: 'none'
              }}>
                <div style={{
                  width: '70px',
                  height: '70px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 15px'
                }}>
                  <i className="fas fa-user-plus" style={{ fontSize: '1.8rem' }}></i>
                </div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: '700',
                  margin: '0',
                  fontSize: '1.8rem'
                }}>
                  Create Your Account
                </h3>
                <p className="mb-0 mt-2" style={{ opacity: 0.9, fontSize: '0.95rem' }}>
                  Join our healthcare platform today
                </p>
              </div>
              
              {/* Card Body */}
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit(submitHandler)}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="fullName" className="form-label" style={{
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '8px',
                        fontSize: '0.95rem'
                      }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                        id="fullName"
                        placeholder="Enter your full name"
                        {...register("fullName", { required: "Full name is required" })}
                        style={{
                          border: '1px solid #ced4da',
                          padding: '12px 15px',
                          borderRadius: '6px'
                        }}
                      />
                      {errors.fullName && (
                        <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem' }}>
                          {errors.fullName.message}
                        </div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label" style={{
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '8px',
                        fontSize: '0.95rem'
                      }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        placeholder="Enter your email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        style={{
                          border: '1px solid #ced4da',
                          padding: '12px 15px',
                          borderRadius: '6px'
                        }}
                      />
                      {errors.email && (
                        <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem' }}>
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="password" className="form-label" style={{
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '8px',
                        fontSize: '0.95rem'
                      }}>
                        Password *
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        placeholder="Create a password"
                        {...register("password", { 
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters"
                          }
                        })}
                        style={{
                          border: '1px solid #ced4da',
                          padding: '12px 15px',
                          borderRadius: '6px'
                        }}
                      />
                      {errors.password && (
                        <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem' }}>
                          {errors.password.message}
                        </div>
                      )}
                    </div>
                    
                    <div className="col-md-6 mb-3">
                      <label htmlFor="confirmPassword" className="form-label" style={{
                        fontWeight: '600',
                        color: '#333',
                        marginBottom: '8px',
                        fontSize: '0.95rem'
                      }}>
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        placeholder="Confirm your password"
                        {...register("confirmPassword", { 
                          required: "Please confirm your password",
                          validate: value => 
                            value === watch('password') || "Passwords do not match"
                        })}
                        style={{
                          border: '1px solid #ced4da',
                          padding: '12px 15px',
                          borderRadius: '6px'
                        }}
                      />
                      {errors.confirmPassword && (
                        <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem' }}>
                          {errors.confirmPassword.message}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Role Selection */}
                  <div className="mb-4">
                    <label className="form-label" style={{
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                      fontSize: '0.95rem'
                    }}>
                      I am registering as *
                    </label>
                    <div className="d-flex gap-3">
                      <div className="form-check flex-grow-1" style={{ margin: 0 }}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="userRole"
                          value="user"
                          {...register("role", { required: "Please select a role" })}
                          style={{
                            width: '18px',
                            height: '18px',
                            marginTop: '0'
                          }}
                        />
                        <label className="form-check-label" htmlFor="userRole" style={{
                          marginLeft: '8px',
                          color: '#555',
                          fontSize: '0.9rem'
                        }}>
                          Patient
                        </label>
                      </div>
                      <div className="form-check flex-grow-1" style={{ margin: 0 }}>
                        <input
                          className="form-check-input"
                          type="radio"
                          id="doctorRole"
                          value="doctor"
                          {...register("role")}
                          style={{
                            width: '18px',
                            height: '18px',
                            marginTop: '0'
                          }}
                        />
                        <label className="form-check-label" htmlFor="doctorRole" style={{
                          marginLeft: '8px',
                          color: '#555',
                          fontSize: '0.9rem'
                        }}>
                          Doctor
                        </label>
                      </div>
                    </div>
                    {errors.role && (
                      <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem' }}>
                        {errors.role.message}
                      </div>
                    )}
                  </div>
                  
                  {/* Terms Agreement */}
                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        className={`form-check-input ${errors.terms ? 'is-invalid' : ''}`}
                        type="checkbox"
                        id="terms"
                        {...register("terms", { 
                          required: "You must accept the terms and conditions"
                        })}
                        style={{
                          width: '18px',
                          height: '18px',
                          marginTop: '0'
                        }}
                      />
                      <label className="form-check-label" htmlFor="terms" style={{
                        marginLeft: '8px',
                        color: '#555',
                        fontSize: '0.9rem'
                      }}>
                        I agree to the <Link to="/terms" style={{ color: '#0062cc' }}>Terms and Conditions</Link> *
                      </label>
                      {errors.terms && (
                        <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem' }}>
                          {errors.terms.message}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn w-100 py-2 mb-3"
                    style={{
                      background: "linear-gradient(135deg, #0062cc 0%, #004080 100%)",
                      color: 'white',
                      fontWeight: '600',
                      borderRadius: '6px',
                      border: 'none',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Create Account
                  </button>
                  
                  {/* Login Link */}
                  <div className="text-center" style={{ color: '#666', fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '0' }}>
                      Already have an account?{' '}
                      <Link to="/login" style={{
                        color: '#0062cc',
                        fontWeight: '600',
                        textDecoration: 'none'
                      }}>
                        LogIn
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};






