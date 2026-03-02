import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;