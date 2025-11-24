import React from 'react';
import { Link } from 'react-router-dom';

export default function DoctorDashboard() {
  return (
    <div style={{ padding: '20px', border: '5px solid #2c3e50' }}>
      <h1>👨‍⚕️ Panel Lekarza</h1>
      <p>Tutaj będzie grafik i lista pacjentów.</p>
      <Link to="/">Wyloguj (Wróć)</Link>
    </div>
  );
}