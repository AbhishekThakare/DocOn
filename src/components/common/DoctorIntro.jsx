import React from 'react'
import { Link } from 'react-router-dom'
export const DoctorIntro = () => {
  return (
    <div>
   <div>
  <div className="container mt-5">
     <div className="row">
      
       <div className="col-md-4">
         <div className="card shadow-lg">
           <img
            src="https://via.placeholder.com/3"
            className="card-img-top"
            alt="Doctor Image"
          />
          <div className="card-body text-center">
            <h4 className="card-title">Dr. Divyesh prajapati</h4>
            <p className="text-muted">Cardiologist</p>
            <p>
              <i className="bi bi-geo-alt" /> Ahmedabad,Gujarat
            </p>
            <p>
              <i className="bi bi-envelope" /> pdivyesh@email.com
            </p>
            <p>
              <i className="bi bi-telephone" /> +1 123 456 7890
            </p>
            {/* <a href="#" className="btn btn-primary">
              Book Appointment
            </a> */}
            <Link className="btn btn-primary" to={"/appointments"}>Book Appointment</Link> 
          </div>
        </div>
      </div>
      
      <div className="col-md-8">
        <div className="card shadow-lg p-4">
          <h3>About Dr. Divyesh prajapati</h3>
          <p>
            Dr. Divyesh is an experienced cardiologist with over 15 years of
            practice. He specializes in heart-related conditions and has
            successfully treated thousands of patients.
          </p>
          <h4>Specialization</h4>
          <ul>
            <li>Cardiology</li>
            <li>Heart Surgery</li>
            <li>Hypertension Management</li>
          </ul>
          <h4>Experience</h4>
          <ul>
            <li>15+ years in cardiology</li>
            <li>Worked at XYZ Hospital</li>
            <li>Published research in heart diseases</li>
          </ul>
          <h4>Available Timings</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monday - Friday</td>
                <td>10:00 AM - 5:00 PM</td>
              </tr>
              <tr>
                <td>Saturday</td>
                <td>10:00 AM - 2:00 PM</td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>Closed</td>
              </tr>
            </tbody>
          </table>
          <h4>Patient Reviews</h4>
          <div className="mb-3">
            <p>
              <strong>Sarah Williams:</strong> "Dr. Divyesh is amazing! He truly
              cares about his patients."
            </p>
            <p>
              <strong>Michael Brown:</strong> "Highly professional and
              experienced. Best doctor in town!"
            </p>
          </div>
          <a href="#" className="btn btn-primary">
            View All Reviews
          </a>
        </div>
      </div>
    </div>
  </div>
</div>



    </div>
  )
}
