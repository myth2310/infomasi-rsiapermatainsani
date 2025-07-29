import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import JadwalDokter from './pages/JadwalDokter';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jadwal-dokter" element={<JadwalDokter />} />
    </Routes>
  );
}

export default App;
