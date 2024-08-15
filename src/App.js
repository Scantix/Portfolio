// src/App.js
import React from 'react';
import { ThemeProvider } from './inc/ThemeContext';
import Header from './inc/Header';
// Import other components as needed

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        {/* Other components */}
      </div>
    </ThemeProvider>
  );
}

export default App;