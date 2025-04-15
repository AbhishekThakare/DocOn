// import axios from 'axios';
// import React from 'react'
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// export const Login = () => {

//   const navigate = useNavigate();

//   const {register, handleSubmit} = useForm();
//   const submitHandler = async(data) => {
//     //console.log(data);
//     //login api... http://localhost:3000/user/login
//     const res = await axios.post("/user/login", data)
//     console.log(res.data)
//     if(res.status === 200){
//       alert("Login Success") //tost...
//       localStorage.setItem("id",res.data.data._id)
//       localStorage.setItem("role",res.data.data.roleId.name)

//       if(res.data.data.roleId.name === "USER"){
//         navigate("/user") //check in app.js
//       }
//     }
//     else{
//       alert("Login Failed")
//     }
//   }

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h1>LOGIN USER</h1>
//       <form onSubmit={handleSubmit(submitHandler)}>
//         <div>
//           <label>EMAIL</label>
//           <input type="text" {...register("email")} placeholder='enter email'/>
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="text" {...register("password")} placeholder='enter password'/>
//         </div>
//         <div>
//           <input type="submit"></input>
//         </div>
//       </form>
//     </div>
//   )
// }
// import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';


// export const Login = () => {
//   const navigate = useNavigate();

//   const {register, handleSubmit} = useForm();
//    const submitHandler = async(data) => {
     
//     try {
//       const res = await axios.post("/user/login", data);
//       if (res.status === 200) {
//         alert("Login Success");
//         localStorage.setItem("id", res.data.data._id);
//         localStorage.setItem("role", res.data.data.roleId.name);

//         if (res.data.data.roleId.name === "USER") {
//           navigate("/appointments");
//         } else if (res.data.data.roleId.name === "DOCTOR") {
//           navigate("/docprofile");
//         }
//       }
//     } catch (error) {
//       alert("Login Failed");
//     }
//   };
//   return (
//     <div style={{ backgroundImage: 'url("Images/bgloginin.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' ,height:700}}>
      
//       <div className="container mt-5">
//   <div className="row justify-content-center" style={{width:'60vw'}}>
//     <div className="col-md-6">
//       <div className="card">
//         <div className="card-header bg-primary text-white text-center"  style={{
//     background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)", // Match gradient from navbar
//     boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
//   }}>
//           <h4>Login</h4>
//         </div>
//         <div className="card-body">
//           <form onSubmit={handleSubmit(submitHandler)}>
//             <div className="mb-3">
//               <label For="email" className="form-label">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 placeholder="Enter your email"
//                 required=""
//                 {...register("email")}
//               />
//             </div>
//             <div className="mb-3">
//               <label For="password" className="form-label">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="Enter your password"
//                 required=""
//                 {...register("password")}
//               />
//             </div>
//             <div className="mb-3 form-check">
//               <input
//                 type="checkbox"
//                 className="form-check-input"
//                 id="remember"
//                 {...register("chechbox")}
//               />
//               <label className="form-check-label" For="remember">
//                 Remember me
//               </label>
//             </div>
//             <button 
//   type="submit" 
//   className="btn w-100" 
//   style={{
//     background: "linear-gradient(90deg, rgba(0,123,255,1) 0%, rgba(255,99,71,1) 100%)",
//     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//     transition: "0.2s ease-in-out",
//     color: "#fff",
//     fontWeight: "bold",
//     padding: "10px",
//     borderRadius: "5px",
//     border: "none",
//     cursor: "pointer"
//   }}
//   onMouseOver={(e) => e.target.style.filter = "brightness(1.1)"}
//   onMouseOut={(e) => e.target.style.filter = "brightness(1)"}
//   onMouseDown={(e) => e.target.style.transform = "scale(0.98)"}
//   onMouseUp={(e) => e.target.style.transform = "scale(1)"}
// >
//   Login
// </button>

//           </form>
//           <div className="text-center mt-3">
//             <p>
//                <Link to={"/resetpassword/:token"}>forgot Password?</Link>
//             </p>
//           </div>
//           <div className="text-center mt-3">
//             <p>
//               Don't have an account? <Link to={"/signup"}>SignUp</Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../layout/Navbar';

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async(data) => {
    try {
      const res = await axios.post("/user/login", data);
      console.log(data)
      console.log(res.data)
      if (res.status === 200) {
        alert("Login Successful");
        localStorage.setItem("Id", res.data.data._id);
        localStorage.setItem("name", res.data.data.fullName);
        localStorage.setItem("email", res.data.data.email);
        localStorage.setItem("role", res.data.data.roleId.name);

        if (res.data.data.roleId.name === "USER") {
          navigate("/patientdashboard");
        } else if (res.data.data.roleId.name === "DOCTOR") {
          navigate("/docdashboard");
        }
      }
    } catch (error) {
      alert("Login Failed. Please check your credentials.");
    }
  };

  return (
<div>    <Navbar></Navbar>
    <div style={{
      minHeight: '100vh',
      background: "url('/Images/fpbg.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-8">
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
                  <i className="fas fa-user-md" style={{ fontSize: '1.8rem' }}></i>
                </div>
                <h3 style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: '700',
                  margin: '0',
                  fontSize: '1.8rem'
                }}>
                  Docon Login
                </h3>
                <p className="mb-0 mt-2" style={{ opacity: 0.9, fontSize: '0.95rem' }}>
                  Access your healthcare account
                </p>
              </div>
              
              {/* Card Body */}
              <div className="card-body p-4 p-md-5">
                <form onSubmit={handleSubmit(submitHandler)}>
                  {/* Email Field */}
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label" style={{
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                      fontSize: '0.95rem'
                    }}>
                      Email Address
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" style={{
                        background: 'rgba(0, 98, 204, 0.1)',
                        border: '1px solid #ced4da',
                        borderRight: 'none',
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px'
                      }}>
                        <i className="fas fa-envelope" style={{ color: '#0062cc' }}></i>
                      </span>
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
                          borderLeft: 'none',
                          padding: '12px 15px',
                          borderTopRightRadius: '6px',
                          borderBottomRightRadius: '6px'
                        }}
                      />
                    </div>
                    {errors.email && (
                      <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem' }}>
                        {errors.email.message}
                      </div>
                    )}
                  </div>
                  
                  {/* Password Field */}
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label" style={{
                      fontWeight: '600',
                      color: '#333',
                      marginBottom: '8px',
                      fontSize: '0.95rem'
                    }}>
                      Password
                    </label>
                    <div className="input-group">
                      <span className="input-group-text" style={{
                        background: 'rgba(0, 98, 204, 0.1)',
                        border: '1px solid #ced4da',
                        borderRight: 'none',
                        borderTopLeftRadius: '6px',
                        borderBottomLeftRadius: '6px'
                      }}>
                        <i className="fas fa-lock" style={{ color: '#0062cc' }}></i>
                      </span>
                      <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        placeholder="Enter your password"
                        {...register("password", { 
                          required: "Password is required",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters"
                          }
                        })}
                        style={{
                          border: '1px solid #ced4da',
                          borderLeft: 'none',
                          padding: '12px 15px',
                          borderTopRightRadius: '6px',
                          borderBottomRightRadius: '6px'
                        }}
                      />
                    </div>
                    {errors.password && (
                      <div className="invalid-feedback d-block" style={{ fontSize: '0.85rem' }}>
                        {errors.password.message}
                      </div>
                    )}
                  </div>
                  
                  {/* Remember Me & Forgot Password */}
                  <div className="mb-4 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                        style={{
                          width: '18px',
                          height: '18px',
                          marginTop: '0',
                          border: '1px solid #ced4da'
                        }}
                        {...register("remember")}
                      />
                      <label className="form-check-label" htmlFor="remember" style={{
                        marginLeft: '8px',
                        color: '#555',
                        fontSize: '0.9rem'
                      }}>
                        Remember me
                      </label>
                    </div>
                    <Link to="/forgotpassword" style={{
                      color: '#0062cc',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '0.9rem'
                    }}>
                      Forgot Password?
                    </Link>
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
                    Log In
                  </button>
                  
                  {/* Sign Up Link */}
                  <div className="text-center mt-3" style={{ color: '#666', fontSize: '0.95rem' }}>
                    <p style={{ marginBottom: '0' }}>
                      Don't have an account?{' '}
                      <Link to="/signup" style={{
                        color: '#0062cc',
                        fontWeight: '600',
                        textDecoration: 'none'
                      }}>
                        Register Now
                      </Link>
                    </p>
                  </div>
                  
                  {/* Divider */}
                  {/* <div className="position-relative my-4">
                    <div style={{
                      height: '1px',
                      background: '#e9ecef',
                      width: '100%'
                    }}></div>
                    <div className="position-absolute top-50 start-50 translate-middle bg-white px-2" style={{
                      color: '#777',
                      fontSize: '0.9rem'
                    }}>
                      OR
                    </div>
                  </div> */}
                  
                  {/* Social Login */}
                  {/* <div className="text-center">
                    <button 
                      type="button" 
                      className="btn btn-outline-primary me-2" 
                      style={{
                        borderRadius: '6px',
                        padding: '8px 15px',
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        borderColor: '#0062cc',
                        color: '#0062cc'
                      }}
                    >
                      <i className="fab fa-google me-2"></i> Google
                    </button>
                    <button 
                      type="button" 
                      className="btn btn-outline-primary" 
                      style={{
                        borderRadius: '6px',
                        padding: '8px 15px',
                        fontWeight: '500',
                        fontSize: '0.9rem',
                        borderColor: '#0062cc',
                        color: '#0062cc'
                      }}
                    >
                      <i className="fab fa-facebook-f me-2"></i> Facebook
                    </button>
                  </div> */}
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