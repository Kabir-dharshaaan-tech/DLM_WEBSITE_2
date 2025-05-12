import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './Component/Banner/Banner';
import Menubar from './Component/Menubar/Menubar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={[<Menubar/>,<Banner />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
