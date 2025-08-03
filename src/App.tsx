import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResumoExecutivo from './components/ResumoExecutivo';
import PerdasDetalhadas from './components/PerdasDetalhadas';
import OportunidadesPerdidas from './components/OportunidadesPerdidas';
import BenchmarkConclusao from './components/BenchmarkConclusao';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32">
        <Hero />
        <ResumoExecutivo />
        <PerdasDetalhadas />
        <OportunidadesPerdidas />
        <BenchmarkConclusao />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;