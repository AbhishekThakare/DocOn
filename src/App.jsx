// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { UserSidebar } from './components/layout/UserSidebar'
// // import './App.css'
// import "./assets/adminlte.css"
// import "./assets/adminlte.min.css"
// import { Route, Routes} from 'react-router-dom'
// import { UserProfile } from './components/user/UserProfile'
// import { Login } from './components/common/Login'
// import { Signup } from './components/common/Signup'
// import { Navbar } from './components/layout/Navbar'
// import { Home } from './components/common/Home'
// import { DoctorProfiles } from './components/common/DoctorProfiles'
// import { PatientProfile } from './components/common/PatientProfile'
// import { ClinicsHospital } from './components/common/ClinicsHospital'
// import axios from 'axios'
// import "./assets/adminlte.css";
// import "./assets/adminlte.min.css";
// import { useLocation } from 'react-router-dom'
// import { useEffect } from 'react'

// function App() {
//   //axios.defaults.baseURL = "http://localhost:8000";
//   axios.defaults.baseURL = "http://localhost:3000";
  
//   const location = useLocation();

//   useEffect(() => {
//     if (location.pathname === "/login" || location.pathname === "/signup") {
//       document.body.className = ""; // Remove the unwanted class for login and signup
//     } else {
//       document.body.className =
//         "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
//     }
//   }, [location.pathname]);

//   return (
//     <div className={location.pathname === "/login" || location.pathname === "/signup" ? "" : "app-wrapper"}>
//       {/* <Navbar></Navbar>   */}
//       <Routes>
//        {/* <Route path='/' element={<Home></Home>}></Route>
//       <Route path='/clinicshospital' element={<ClinicsHospital></ClinicsHospital>}></Route>
//       <Route path='/doctorprofiles' element={<DoctorProfiles></DoctorProfiles>}></Route>
//       <Route path='/patientprofile' element={<PatientProfile></PatientProfile>}></Route>   */}
//       <Route path='/login' element= {<Login></Login>}></Route>
//       <Route path='/signup' element = {<Signup></Signup>}></Route>
//       </Routes>
//          {/* <Route path="/user" element={<UserSidebar />}/>
//           <Route path="profile" element={<UserProfile />} /> */}
         
//         {/* <Route path="/agency" element={<AgencySidebar />}>
//            <Route path="addscreen" element={<AddScreen />} /> 
//          </Route>  */}
     
//     </div>
//   );
// }

// export default App;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserSidebar } from './components/layout/UserSidebar'
// import './App.css'
import "./assets/adminlte.css"
import "./assets/adminlte.min.css"
import { Route, Routes} from 'react-router-dom'
import { Login } from './components/common/Login'
import { Signup } from './components/common/Signup'
import { Navbar } from './components/layout/Navbar'
import { Home } from './components/common/Home'
import { DoctorProfiles } from './components/user/DoctorProfiles'
import { PatientProfile } from './components/user/PatientProfile'
import { ClinicsHospital } from './components/user/ClinicsHospital'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Appointment } from './components/user/Appointment'
import { EHR } from './components/user/EHR'
import { DoctorIntro } from './components/common/DoctorIntro'
import { HospitalDetails } from './components/user/HospitalDetails'
import { General } from './components/common/General'
import { ContactUs } from './components/common/ContactUs'
import { Article } from './components/common/Article'
import { ResetPassword } from './components/common/ResetPassword'
import { Features } from './components/common/Features'
import { PatientNavbar } from './components/layout/PatientNavbar'
import ForgotPassword from './components/common/ForgotPassword'
import { DoctorNavbar } from './components/layout/DoctorNavbar'
import MedicalHistory from './components/user/MedicalHistory'
import HealthVitals from './components/user/HealthVitals'
import Prescription from './components/user/Prescription'
import { Faq } from './components/common/Faq'
import Dashboard from './components/user/DashBoard'
import { MyAppointments } from './components/user/MyAppointments'
import { DoctorAppointment } from './components/Doctor/DoctorAppointment'
import { ServicesPage } from './components/common/ServicesPage'
import { CreatePrescription } from './components/Doctor/CreatePrescription'
import { MyPrescription } from './components/user/MyPrescription'
import { Telemedicine } from './components/user/Telemedicine'
import { MyDoctorProfile } from './components/Doctor/MyDoctorProfile'
import { DoctorDashboard } from './components/Doctor/DoctorDashboard'
import DocTelemedicine from './components/Doctor/DocTelemedicine'




function App() {
  const [count, setCount] = useState(0)
  axios.defaults.baseURL = "http://localhost:3000";

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/signup") {
      document.body.className = ""; 
    } else {
      document.body.className =
        "layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded";
    }
  }, [location.pathname]);
  

  return (
    <div className={location.pathname === "/login" || location.pathname === "/signup" ? "" : "app-wrapper"}>
    {/* <body className='layout-fixed sidebar-expand-lg bg-body-tertiary sidebar-open app-loaded'> */}
      <div className="app-wrapper app-main">

        {/* <Navbar></Navbar>  */}
      
        <Routes>

        <Route path='/navbar' element={<Navbar></Navbar>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/patientnavbar' element={<PatientNavbar></PatientNavbar>}></Route>
        <Route path='/doctornavbar' element={<DoctorNavbar></DoctorNavbar>}></Route>
        <Route path='/clinicshospital' element={<ClinicsHospital></ClinicsHospital>}></Route>
        <Route path='/appointments' element={<Appointment></Appointment>}></Route>
        <Route path='/myappointments' element={<MyAppointments></MyAppointments>}></Route>
        <Route path='/doctorappointments' element={<DoctorAppointment></DoctorAppointment>}></Route>
        <Route path='/doctorprofiles' element={<DoctorProfiles></DoctorProfiles>}></Route>
        <Route path='/patientprofile' element={<PatientProfile></PatientProfile>}></Route>
        <Route path='/login' element= {<Login></Login>}></Route>
        <Route path='/signup' element = {<Signup></Signup>}></Route>
        <Route path='/docprofile' element={<DoctorIntro></DoctorIntro>}></Route>
        <Route path='/hospitaldetails' element={<HospitalDetails></HospitalDetails>}></Route>
        <Route path='/general' element={<General></General>}></Route>
        <Route path='/ehr' element={<EHR></EHR>}></Route>
        <Route path='/healthrecord' element={<EHR></EHR>}></Route>
        <Route path='/contactus' element={<ContactUs></ContactUs>}></Route>
        <Route path='/articles' element={<Article></Article>}></Route>
        <Route path='/features' element={<Features></Features>}></Route>
        <Route path='/patientdashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword></ResetPassword>}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword></ForgotPassword>}></Route>
        <Route path='/medicalhistory' element={<MedicalHistory></MedicalHistory>}></Route>
        <Route path='/healthvitals' element={<HealthVitals></HealthVitals>}></Route>
        <Route path='/prescription' element={<Prescription></Prescription>}></Route>
        <Route path='/faq' element={<Faq></Faq>} ></Route>
        <Route path='/servicespage' element={<ServicesPage></ServicesPage>} ></Route>
        <Route path='/patientprofile' element={<PatientProfile></PatientProfile>} ></Route>
        <Route path='/doctorprescription' element={<CreatePrescription></CreatePrescription>} ></Route>
        <Route path='/patientprescription' element={<MyPrescription></MyPrescription>} ></Route>
        <Route path='/telemedicine' element={<Telemedicine></Telemedicine>} ></Route>
        <Route path='/doctelemedicine' element={<DocTelemedicine></DocTelemedicine>} ></Route>
        <Route path='/mydocprofile' element={<MyDoctorProfile></MyDoctorProfile>}></Route>
        <Route path='/docdashboard' element={<DoctorDashboard></DoctorDashboard>}></Route>
        </Routes> 

        {/* <UserSidebar></UserSidebar> */}
         {/* <Routes>
          <Route path='/login' element= {<Login></Login>}></Route>
          <Route path='/signup' element = {<Signup></Signup>}></Route>
          <Route path="/user" element = {<UserSidebar></UserSidebar>}>
          <Route path='profile' element = {<UserProfile></UserProfile>}></Route>
          </Route>
          <Route path='/navbar' element={<Navbar/>}></Route> 
          

        </Routes>  */}
      </div>
      </div>
    // </body>
  )
} 

export default App
