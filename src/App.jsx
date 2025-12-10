import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Weddings from './pages/Weddings.jsx';
import Corporate from './pages/Corporate.jsx';
import Portraits from './pages/Portraits.jsx';
import MusicProduction from './pages/MusicProduction.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weddings" element={<Weddings />} />
        <Route path="/corporate" element={<Corporate />} />
        <Route path="/portraits" element={<Portraits />} />
        <Route path="/music-production" element={<MusicProduction />} />
      </Routes>
    </div>
  );
}

export default App;