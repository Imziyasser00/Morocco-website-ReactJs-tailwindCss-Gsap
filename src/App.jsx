import Cities from "./components/Cities";
import CityDetails from "./components/CityDetails";
import Intro from "./components/Intro";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="min-w-screen min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/city/:cityName" element={<CityDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
