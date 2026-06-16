import { Routes, Route } from "react-router-dom";
import UpClassDashboard from "./views/administrator/UpClassDashboard";
import UpClassDashAlunmo from "./views/students/UpClassDashAlunmo";
import { ProfesorIndex } from "./views/teachers/ProfesorIndex";
import { CalificacionesView } from "./views/teachers/CalificacionesView";
import Home from "./views/home";
import Login from "./views/login";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin" element={<UpClassDashboard />} />
      <Route path="/students" element={<UpClassDashAlunmo />} />

      <Route path="/teacher" element={<ProfesorIndex />} />
      <Route path="/teacher/calificaciones" element={<CalificacionesView />} />

      <Route path="/login" element={<Login />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
