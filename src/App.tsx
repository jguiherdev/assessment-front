import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
         <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
      <header className="App-header">
        
        
      </header>

      <div>
          <Routes>
            <Route path="/" element={<Register />} />
          </Routes>
         
        </div>
    </div>
  );
}

export default App;
