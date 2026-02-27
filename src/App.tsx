import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { States } from './pages/States';
import { StatePage } from './pages/StatePage';
import { CityPage } from './pages/CityPage';
import { Contact } from './pages/Contact';
import { Sitemap } from './pages/Sitemap';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/estados" element={<States />} />
          <Route path="/estados/:stateSlug" element={<StatePage />} />
          <Route path="/estados/:stateSlug/:citySlug" element={<CityPage />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/mapa-do-site" element={<Sitemap />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
