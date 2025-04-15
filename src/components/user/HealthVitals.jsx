import React, { useState, useEffect } from 'react';

const HealthVitals = () => {
  const [vitals, setVitals] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchVitals = async () => {
      try {
        // Replace with actual API call
        // const response = await fetch('/api/health-vitals');
        // const data = await response.json();
        
        // Mock data
        const mockData = {
          bloodPressure: '120/80 mmHg',
          heartRate: '72 bpm',
          temperature: '98.6°F',
          weight: '68 kg',
          height: '175 cm',
          bmi: '22.2',
          lastUpdated: '2023-06-15 10:30 AM',
          oxygenSaturation: '98%'
        };
        
        setVitals(mockData);
      } catch (error) {
        console.error('Error fetching health vitals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVitals();
  }, []);

  if (loading) {
    return <div style={styles.loading}>Loading health vitals...</div>;
  }

  if (!vitals) {
    return <div style={styles.noData}>No health vitals data available</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h3 style={styles.title}>Health Vitals</h3>
        <span style={styles.lastUpdated}>Last updated: {vitals.lastUpdated}</span>
      </div>
      
      <div style={styles.vitalsGrid}>
        <VitalCard title="Blood Pressure" value={vitals.bloodPressure} status="normal" />
        <VitalCard title="Heart Rate" value={vitals.heartRate} status="normal" />
        <VitalCard title="Temperature" value={vitals.temperature} status="normal" />
        <VitalCard title="Weight" value={vitals.weight} status="healthy" />
        <VitalCard title="Height" value={vitals.height} />
        <VitalCard title="BMI" value={vitals.bmi} status="healthy" />
        <VitalCard title="Oxygen Saturation" value={vitals.oxygenSaturation} status="normal" />
      </div>
      
      <div style={styles.actions}>
        <button style={styles.primaryButton}>Sync Wearable Device</button>
        <button style={styles.secondaryButton}>View History</button>
      </div>
    </div>
  );
};

const VitalCard = ({ title, value, status }) => {
  return (
    <div style={styles.vitalCard}>
      <h4 style={styles.vitalTitle}>{title}</h4>
      <p style={styles.vitalValue}>{value}</p>
      {status && (
        <p style={status === 'normal' || status === 'healthy' 
          ? styles.vitalStatusGood 
          : styles.vitalStatusWarning
        }>
          {status === 'normal' ? 'Normal' : status === 'healthy' ? 'Healthy' : 'Warning'}
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  title: {
    margin: 0,
    color: '#333',
    fontSize: '1.25rem',
  },
  lastUpdated: {
    color: '#666',
    fontSize: '0.9rem',
  },
  loading: {
    padding: '1rem',
    textAlign: 'center',
    color: '#666',
  },
  noData: {
    padding: '1rem',
    textAlign: 'center',
    color: '#666',
    fontStyle: 'italic',
  },
  vitalsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem',
  },
  vitalCard: {
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    padding: '1rem',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  vitalTitle: {
    margin: '0 0 0.5rem',
    fontSize: '1rem',
    color: '#555',
  },
  vitalValue: {
    margin: '0 0 0.25rem',
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#1976d2',
  },
  vitalStatusGood: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#4caf50',
  },
  vitalStatusWarning: {
    margin: 0,
    fontSize: '0.9rem',
    color: '#f44336',
  },
  actions: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
  },
  primaryButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#1976d2',
    border: 'none',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#1565c0',
    },
  },
  secondaryButton: {
    padding: '0.75rem 1.5rem',
    backgroundColor: 'transparent',
    border: '1px solid #1976d2',
    color: '#1976d2',
    borderRadius: '4px',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#e3f2fd',
    },
  },
};

export default HealthVitals;
