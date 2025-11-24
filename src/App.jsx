// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importujemy nasze nowo utworzone widoki
import LoginPage from './views/Auth/LoginPage';
import DoctorDashboard from './views/DoctorPanel/DoctorDashboard';
import PatientDashboard from './views/PatientPanel/PatientDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Strona główna to Logowanie */}
        <Route path="/" element={<LoginPage />} />
        
        {/* Ścieżki dla Lekarza */}
        <Route path="/lekarz" element={<DoctorDashboard />} />
        
        {/* Ścieżki dla Pacjenta */}
        <Route path="/pacjent" element={<PatientDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;