import { Routes, Route } from "react-router-dom";
import UpClassDashboard from "./pages/UpClassDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UpClassDashboard />} />
    </Routes>
  );
}

export default App;
