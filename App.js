import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameLogin from './components/GameLogin';
import MemeGenerator from './components/MemeGenerator';
import CommunityInfo from './components/CommunityInfo';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <GameLogin />
                <MemeGenerator />
                <CommunityInfo />
                <ContactForm />
              </>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;