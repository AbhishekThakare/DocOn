import React, { useState, useEffect } from 'react';

const Prescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchPrescriptions = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/prescriptions');
        // const data = await response.json();
        
        // Mock data
        const mockData = [
          {
            id: 1,
            medication: 'Lisinopril',
            dosage: '10mg',
            frequency: 'Once daily',
            prescribedDate: '2023-05-10',
            expires: '2023-11-10',
            refills: 3,
            prescriber: 'Dr. Sarah Johnson'
          },
          {
            id: 2,
            medication: 'Atorvastatin',
            dosage: '20mg',
            frequency: 'At bedtime',
            prescribedDate: '2023-04-15',
            expires: '2023-10-15',
            refills: 2,
            prescriber: 'Dr. Michael Chen'
          }
        ];
        
        setPrescriptions(mockData);
      } catch (error) {
        console.error('Error fetching prescriptions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrescriptions();
  }, []);

  if (loading) {
    return <div style={styles.loading}>Loading prescriptions...</div>;
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Current Prescriptions</h3>
      
      {prescriptions.length > 0 ? (
        <div style={styles.prescriptionsGrid}>
          {prescriptions.map(prescription => (
            <div key={prescription.id} style={styles.prescriptionCard}>
              <div style={styles.medicationHeader}>
                <h4 style={styles.medicationName}>{prescription.medication}</h4>
                <span style={styles.dosage}>{prescription.dosage}</span>
              </div>
              
              <div style={styles.details}>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Frequency:</span>
                  <span>{prescription.frequency}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Prescribed:</span>
                  <span>{prescription.prescribedDate}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Expires:</span>
                  <span>{prescription.expires}</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Refills:</span>
                  <span>{prescription.refills} remaining</span>
                </div>
                <div style={styles.detailRow}>
                  <span style={styles.detailLabel}>Prescriber:</span>
                  <span>{prescription.prescriber}</span>
                </div>
              </div>
              
              <button style={styles.refillButton}>Request Refill</button>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noPrescriptions}>No active prescriptions</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
  },
  title: {
    marginBottom: '1.5rem',
    color: '#333',
    fontSize: '1.25rem',
  },
  loading: {
    padding: '1rem',
    textAlign: 'center',
    color: '#666',
  },
  prescriptionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
  },
  prescriptionCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1rem',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  medicationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.75rem',
    paddingBottom: '0.75rem',
    borderBottom: '1px solid #f0f0f0',
  },
  medicationName: {
    margin: 0,
    fontSize: '1.1rem',
    color: '#1976d2',
  },
  dosage: {
    backgroundColor: '#e3f2fd',
    color: '#1976d2',
    padding: '0.25rem 0.5rem',
    borderRadius: '4px',
    fontSize: '0.8rem',
  },
  details: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  detailLabel: {
    fontWeight: '600',
    color: '#555',
  },
  refillButton: {
    padding: '0.5rem',
    backgroundColor: 'transparent',
    border: '1px solid #1976d2',
    color: '#1976d2',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#e3f2fd',
    },
  },
  noPrescriptions: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
};

export default Prescription;