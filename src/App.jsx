import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { PlayProvider } from './contexts/Play';

function App() {
  //this is what am using to render your page and handle the 3D effect you added and also allowing multipy pages using router
  function Site() {
    return (
      <>
      <PlayProvider>
        <Home />
      </PlayProvider>
      </>
      
    )
  }

  return (
    <Router>
      { /* here i render my navbar to be avalible in all screen*/}

      {/* here i link the page to be able to route using react-router-dom*/}
      <Routes>
        <Route path="/" element={<Site />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
