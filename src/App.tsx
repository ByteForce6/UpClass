import { Routes, Route } from "react-router-dom";
import UpClassDashboard from "./views/administrator/UpClassDashboard";
import UpClassDashAlunmo from "./views/students/UpClassDashAlunmo";

import Home from "./views/home";
import Login from "./views/login";
// import NotFound from "./views/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/admin" element={<UpClassDashboard />} />
      <Route path="/students" element={<UpClassDashAlunmo />} />

      <Route path="/login" element={<Login />} />


      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
