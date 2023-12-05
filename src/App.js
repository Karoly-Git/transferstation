// React Imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Page Imports
import Home from "./components/Home";
import PermitNumbering from "./components/permit_numbering/PermitNumbering";
// Component Imports
import MobileNavigation from "./components/MobileNavigation";
// MRF Sub Pages Imports
import MrfCrane from "./components/mrf/mrf-crane/MRF_Crane";
import MrfBaler from "./components/mrf/mrf-baler/MRF_Baler";
import MrfDressing from "./components/mrf/mrf-dressing/MRF_Dressing";
import MrfCollections from "./components/mrf/mrf-collections/MRF_Collections";
import MrfAdmin from "./components/mrf/mrf-admin/MRF_Admin";
// TS Sub Pages Imports
import TsAdmin from "./components/ts/ts-admin/TS_Admin";
import TsCompactorLog from "./components/ts/ts-compactors/TS_Compactors";
// Style Imports
import "./css/App.css";
// Animation Imports
import { motion as m } from 'framer-motion';

export default function App() {
  return (
    <m.div className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Router>
        <MobileNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/permit-numbering" element={<PermitNumbering />} />

          <Route path="/mrf/logs/crane" element={<MrfCrane />} />
          <Route path="/mrf/logs/baler" element={<MrfBaler />} />
          <Route path="/mrf/logs/dressing" element={<MrfDressing />} />
          <Route path="/mrf/logs/collections" element={<MrfCollections />} />
          <Route path="/mrf/admin" element={<MrfAdmin />} />

          <Route path="/ts/logs/compactor-log" element={<TsCompactorLog />} />
          <Route path="/ts/admin" element={<TsAdmin />} />

          <Route path="*" element={<h2>Page not found</h2>}></Route>
        </Routes>
      </Router>
    </m.div>
  );
}
