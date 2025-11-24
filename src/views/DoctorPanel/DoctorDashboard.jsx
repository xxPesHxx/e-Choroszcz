import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DoctorDashboard() {
  // 1. Stan do przechowywania pacjentów
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. Pobieranie danych po załadowaniu komponentu
  useEffect(() => {
    fetch('http://localhost:3000/patients')
      .then(response => response.json())
      .then(data => {
        setPatients(data);
        setLoading(false);
      })
      .catch(error => console.error('Błąd pobierania danych:', error));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1> Panel Lekarza</h1>
        <Link to="/">Wyloguj</Link>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', background: 'white' }}>
        <h2>Lista Pacjentów</h2>
        
        {loading ? (
          <p>Ładowanie danych...</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {patients.map(patient => (
              <li key={patient.id} style={{ 
                borderBottom: '1px solid #eee', 
                padding: '10px 0',
                display: 'flex',
                justifyContent: 'space-between'
              }}>
                <div>
                  <strong>{patient.firstName} {patient.lastName}</strong><br/>
                  <small>PESEL: {patient.pesel}</small>
                </div>
                <button style={{ cursor: 'pointer' }}>Szczegóły</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}