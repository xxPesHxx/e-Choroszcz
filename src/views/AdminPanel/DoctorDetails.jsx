import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import '../../DashboardShared.css';

export default function DoctorDetails() {
  const { id } = useParams(); // Pobiera ID z paska adresu
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Pobieramy dane z naszego nowego pliku API
    fetch(`/api/get-doctor?id=${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Nie udało się pobrać danych');
        return res.json();
      })
      .then(data => {
        setDoctor(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Obsługa stanów ładowania i błędów
  if (loading) return <div style={{ padding: 20 }}>Ładowanie danych doktora...</div>;
  if (error) return <div style={{ padding: 20, color: 'red' }}>Błąd: {error}</div>;
  if (!doctor) return <div style={{ padding: 20 }}>Nie znaleziono doktora.</div>;

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1> Doktor: {doctor.first_name} {doctor.last_name} </h1>
        <Link to="/admin" className="dash-btn dash-btn-return">Wróć do listy</Link>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', background: 'white' }}>
        <h2>Dane Doktora:</h2>

        <ul>
          <li><strong>Imię:</strong> {doctor.first_name}</li>
          <li><strong>Nazwisko:</strong> {doctor.last_name}</li>
          <li><strong>Specializacja:</strong> {doctor.specialization}</li>
          <li><strong>Email:</strong> {doctor.email}</li>
        </ul>
      </div>
    </div>
  );
}