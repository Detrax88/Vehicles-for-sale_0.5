import { useState } from 'react'
import {useTheme} from './contexts/ThemeContext.jsx'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import NavBar from './components/NavBar';
import About from './components/About';


function App() {
  const {isDarkMode, toggleTheme} = useTheme();
 

  return (
        <>
    <div style={{ padding: '2rem', textAlign: 'right' }}>
      <h3>{isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</h3>
      
      <button onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        fontSize: '0.7rem',
        cursor: 'pointer',
        backgroundColor: 'var(--button-bg)',
        color: 'var(--button-text)',
        border: 'none',
        borderRadius: '5px',
        marginBottom: '1rem',
      }}>
        Toggle Theme {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
    

      
    <div className="NavBarDiv">
      <NavBar />
    
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
       </>
  );
}
 
  


export default App 