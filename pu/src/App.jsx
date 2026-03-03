import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import History from "./pages/History";
import Timings from "./pages/Timing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/history" element={<History />} />
        <Route path="/timings" element={<Timings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;