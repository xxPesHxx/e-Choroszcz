import React from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>System Medyczny - Logowanie</h1>
      <p>Wybierz ścieżkę (tymczasowo, dla testów):</p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <Link to="/lekarz">➡️ Panel Lekarza</Link>
        <Link to="/pacjent">➡️ Panel Pacjenta</Link>
      </div>
    </div>
  );
}