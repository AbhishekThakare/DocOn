import React, { useState, useEffect } from 'react';

const MedicalHistory = () => {
  const [medicalHistory, setMedicalHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchMedicalHistory = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/medical-history');
        // const data = await response.json();
        
        // Mock data
        const mockData = [
          {
            id: 1,
            date: '2023-05-10',
            doctor: 'Dr. Sarah Johnson',
            diagnosis: 'Hypertension',
            notes: 'Prescribed Lisinopril 10mg, follow up in 3 months'
          },
          {
            id: 2,
            date: '2023-03-22',
            doctor: 'Dr. Emily Wong',
            diagnosis: 'Seasonal Allergies',
            notes: 'Recommended daily antihistamines during pollen season'
          }
        ];
        
        setMedicalHistory(mockData);
      } catch (error) {
        console.error('Error fetching medical history:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMedicalHistory();
  }, []);

  if (loading) {
    return <div style={styles.loading}>Loading medical history...</div>;
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Medical History</h3>
      
      {medicalHistory.length > 0 ? (
        <div style={styles.historyList}>
          {medicalHistory.map(record => (
            <div key={record.id} style={styles.recordCard}>
              <div style={styles.recordHeader}>
                <span style={styles.recordDate}>{record.date}</span>
                <span style={styles.recordDoctor}>{record.doctor}</span>
              </div>
              <div style={styles.recordBody}>
                <p style={styles.diagnosis}>
                  <strong>Diagnosis:</strong> {record.diagnosis}
                </p>
                {record.notes && (
                  <p style={styles.notes}>
                    <strong>Notes:</strong> {record.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={styles.noRecords}>No medical records found</p>
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
  historyList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  recordCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1rem',
    backgroundColor: '#fff',
  },
  recordHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.5rem',
    paddingBottom: '0.5rem',
    borderBottom: '1px solid #f0f0f0',
  },
  recordDate: {
    fontWeight: '600',
    color: '#1976d2',
  },
  recordDoctor: {
    color: '#666',
  },
  recordBody: {
    marginTop: '0.5rem',
  },
  diagnosis: {
    margin: '0.5rem 0',
    color: '#333',
  },
  notes: {
    margin: '0.5rem 0',
    color: '#555',
  },
  noRecords: {
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
};

export default MedicalHistory;