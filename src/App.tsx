import { Routes, Route } from "react-router-dom";
import UpClassDashboard from "./views/UpClassDashboard";
import Calificaciones from "./views/students/Calificaciones";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UpClassDashboard />} />
      <Route path="/students" element={<Calificaciones />} />
    </Routes>
  );
}

export default App;
