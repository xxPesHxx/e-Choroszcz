import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './views/Auth/LoginPage';
import DoctorDashboard from './views/DoctorPanel/DoctorDashboard';
import PatientDashboard from './views/PatientPanel/PatientDashboard';
import PatientDetails from './views/DoctorPanel/PatientDetails';
import RegisterPage from './views/Auth/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/lekarz" element={<DoctorDashboard />} />
        <Route path="/pacjent" element={<PatientDashboard />} />
        <Route path="/details/:id" element={<PatientDetails />} />
        <Route path='/register' element={<RegisterPage /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;