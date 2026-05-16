import { Routes, Route } from "react-router-dom";
import UpClassDashboard from "./pages/UpClassDashboard";
import Calificaciones from "./pages/students/Calificaciones";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UpClassDashboard />} />
      <Route path="/students" element={<Calificaciones />} />
    </Routes>
  );
}

export default App;
