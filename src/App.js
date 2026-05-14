import './App.css';
import React, { useState, useEffect } from 'react';
import Users from './Users.js';
import Edizione2025 from './Edizione2025.js';
import Edizione2026 from './Edizione2026.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fab } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":id" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {

  const [activeEdition, setActiveEdition] = useState(0); // 0 = nuova, 1 = 2025
  const [slideDir, setSlideDir] = useState(null);
  const [isAppearing, setIsAppearing] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [anchors] = useState(document.getElementsByClassName('anchor'));

  useEffect(() => {
    const listenToScroll = () => {
      if (!anchors.length) return;
      const rect = anchors[anchors.length-1].getBoundingClientRect();
      if (rect.top < 600) {
        isVisible && setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, [anchors, isVisible]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAppearing(false);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const switchEdition = (idx) => {
    if (idx === activeEdition) return;
    setSlideDir(idx > activeEdition ? 'right' : 'left');
    setActiveEdition(idx);
    setIsVisible(true);
    window.scrollTo(0, 0);
  };

  const scroll = () => {
    for (let i = 0; i < anchors.length - 1; i++) {
      const anchor = anchors[i];
      const rect = anchor.getBoundingClientRect();
      if (rect.top >= -300 && rect.top < 300) {
        anchors[i+1].scrollIntoView({behavior: 'smooth'});
        return;
      }
    }
  };

  return (
    <div className="App">
      {/* <img alt="Draghi" src="./dragons.svg" className="birds appearing" /> */}
      <img alt="Chefs" src="./chefs.svg" className="people appearing" />

      {/* Navigation pill */}
      <nav className="edition-nav">
        <button
          className={`edition-btn ${activeEdition === 0 ? 'active' : ''}`}
          onClick={() => switchEdition(0)}
        >
          ✦ 2026
        </button>
        <button
          className={`edition-btn ${activeEdition === 1 ? 'active' : ''}`}
          onClick={() => switchEdition(1)}
        >
          2025
        </button>
      </nav>

      {/* FAB scroll button — always fixed, works for whichever edition is visible */}
      <Fab
        className={`button fixed ${isAppearing ? 'appearing' : 'bouncing'} ${isVisible ? '' : 'hidden'}`}
        onClick={scroll}
      >
        <ArrowDownwardIcon />
      </Fab>

      {/* ===================== SECONDA EDIZIONE ===================== */}
      {activeEdition === 0 && (
        <div key="new" className={`edition-slide${slideDir ? ` slide-from-${slideDir}` : ''}`}>
          <Edizione2026 />
        </div>
      )}

      {/* ===================== EDIZIONE 2025 ===================== */}
      {activeEdition === 1 && (
        <div key="2025" className={`edition-slide${slideDir ? ` slide-from-${slideDir}` : ''}`}>
          <Edizione2025 />
        </div>
      )}

    </div>
  );
}

export default App;