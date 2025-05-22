

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './Component/Banner/Banner';
import Menubar from './Component/Menubar/Menubar';
import Home from './Component/pages/Home'; 
import Courses from './Component/pages/courses'
import Slide from './Component/pages/slide'
import List from './Component/pages/List'
import Details from './Component/pages/Details'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
               <Menubar />
              <Banner />
             
              <Home />
              <Courses />
              <Slide />
              <List />
              <Details />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
