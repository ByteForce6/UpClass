import { Routes, Route } from "react-router-dom";
import UpClassDashboard from "./views/administrator/UpClassDashboard";
import CursosView from "./views/administrator/CursosView";
import InstructoresView from "./views/administrator/InstructoresView";
import AlumnosView from "./views/administrator/AlumnosView";
import Calificaciones from "./views/students/Calificaciones";
import Home from "./views/home";
import Login from "./views/login";
import { ProfesorIndex } from "./views/teachers/ProfesorIndex";
import { CalificacionesView } from "./views/teachers/CalificacionesView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UpClassDashboard />} />
      <Route path="/cursos" element={<CursosView />} />
      <Route path="/instructores" element={<InstructoresView />} />
      <Route path="/alumnos" element={<AlumnosView />} />
      <Route path="/students" element={<Calificaciones />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/teacher" element={<ProfesorIndex />} />
      <Route path="/teacher/calificaciones" element={<CalificacionesView />} />
    </Routes>
  );
}

export default App;
