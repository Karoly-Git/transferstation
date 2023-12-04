// React Imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Page Imports
import Home from "./components/Home";
import PermitNumbering from "./components/permit_numbering/PermitNumbering";
// Component Imports
import MobileNavigation from "./components/MobileNavigation";
// MRF Sub Pages Imports
import MrfCrane from "./components/MRF_Crane";
import MrfBaler from "./components/MRF_Baler";
import MrfDressing from "./components/MRF_Dressing";
import MrfCollectionTracker from "./components/MRF_Collection-tracker";
import MrfAdmin from "./components/MRF_Admin";
// TS Sub Pages Imports
import TsAdmin from "./components/TS_Admin";
import TsCompactorLog from "./components/TS_Compactor-log";
// Style Imports
import "./css/App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <MobileNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transferstation" element={<Home />} />

          <Route path="/mrf/logs/crane" element={<MrfCrane />} />
          <Route path="/mrf/logs/baler" element={<MrfBaler />} />
          <Route path="/mrf/logs/dressing" element={<MrfDressing />} />
          <Route path="/mrf/logs/collection-tracker" element={<MrfCollectionTracker />} />
          <Route path="/mrf/permit-numbering" element={<PermitNumbering />} />
          <Route path="/mrf/admin" element={<MrfAdmin />} />

          <Route path="/ts/logs/compactor-log" element={<TsCompactorLog />} />
          <Route path="/ts/admin" element={<TsAdmin />} />

          <Route path="*" element={<h2>Page not found</h2>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
