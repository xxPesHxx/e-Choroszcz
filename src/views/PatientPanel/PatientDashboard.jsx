import React from 'react';
import { Link } from 'react-router-dom';

import '../../DashboardShared.css';

export default function PatientDashboard() {
  return (
    <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1> Panel Pacjenta</h1>
            <Link to="/"  className="dash-btn dash-btn-danger">Wyloguj</Link>
          </div>
    
          <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', background: 'white' }}>
            <p>Tutaj będzie historia wizyt i umawianie terminów.</p>
          </div>
        </div>
  );
}