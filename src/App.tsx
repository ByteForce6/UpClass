import { Routes, Route } from "react-router-dom";
import UpClassDashboard from "./views/administrator/UpClassDashboard";
import CursosView from "./views/administrator/CursosView";
import InstructoresView from "./views/administrator/InstructoresView";
import AlumnosView from "./views/administrator/AlumnosView";
import Calificaciones from "./views/students/Calificaciones";
import CatalogoCursos from "./views/students/CatalogoCursos";
import Home from "./views/home";
import Login from "./views/login";


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

      <Route path="/xd" element={<CatalogoCursos />} />

      <Route path="*" element={<CatalogoCursos />} />
    </Routes>
  );
}

export default App;
