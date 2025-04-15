import React from 'react'

export const HealthRecord = () => {
  return (
    <div>
 <div>
        <div className="container mt-5">
  <h2 className="text-center mb-4">Patient Electronic Health Record</h2>
  <div className="card shadow-lg mb-4">
    <div className="card-body">
      <div className="row">
        <div className="col-md-3 text-center">
          <img
            src="https://via.placeholder.com/150"
            className="rounded-circle img-fluid"
            alt="Patient Image"
          />
        </div>
        <div className="col-md-9">
          <h4>John Doe</h4>
          <p>
            <strong>Age:</strong> 45
          </p>
          <p>
            <strong>Gender:</strong> Male
          </p>
          <p>
            <strong>Blood Type:</strong> O+
          </p>
          <p>
            <strong>Chronic Conditions:</strong> Hypertension, Diabetes
          </p>
          <p>
            <strong>Last Visit:</strong> 2025-02-20
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Medical History */}
  <div className="card shadow-lg mb-4">
    <div className="card-header bg-primary text-white">
      <h5>Medical History</h5>
    </div>
    <div className="card-body">
      <ul>
        <li>Hypertension diagnosed in 2018</li>
        <li>Diabetes diagnosed in 2020</li>
        <li>Last Blood Test showed stable sugar levels</li>
      </ul>
    </div>
  </div>
  {/* Prescriptions */}
  <div className="card shadow-lg mb-4">
    <div className="card-header bg-primary text-white">
      <h5>Prescriptions</h5>
    </div>
    <div className="card-body">
      <ul>
        <li>
          <strong>Lisinopril (10mg daily)</strong> - Blood Pressure Control
        </li>
        <li>
          <strong>Metformin (500mg daily)</strong> - Diabetes Management
        </li>
        <li>
          <strong>Aspirin (75mg daily)</strong> - Preventative Care
        </li>
      </ul>
    </div>
  </div>
  {/* Lab Reports */}
  <div className="card shadow-lg">
    <div className="card-header bg-primary text-white">
      <h5>Lab Reports</h5>
    </div>
    <div className="card-body">
      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th>Date</th>
            <th>Test</th>
            <th>Result</th>
            <th>Doctor's Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2025-01-10</td>
            <td>Blood Sugar (HbA1c)</td>
            <td>6.5% (Stable)</td>
            <td>Diabetes under control</td>
          </tr>
          <tr>
            <td>2024-12-05</td>
            <td>Blood Pressure</td>
            <td>130/85 mmHg</td>
            <td>Continue current medication</td>
          </tr>
          <tr>
            <td>2024-11-20</td>
            <td>Cholesterol</td>
            <td>190 mg/dL</td>
            <td>Maintain diet &amp; exercise</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>


    </div>






    </div>
  )
}
