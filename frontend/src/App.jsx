
import { useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './Component/Banner/Banner';
import Menubar from './Component/Menubar/Menubar';
import Home from './Component/pages/Home';
import Courses from './Component/pages/courses';
import Slide from './Component/pages/slide';
import List from './Component/pages/List';
import Details from './Component/pages/Details';
import Middle from './Component/pages/middle';
import './App.css';

function App() {
  const bannerRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const contactRef=useRef(null);
  const scrollToSection = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, 
        behavior: 'smooth',
      });
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Menubar
                scrollToSection={scrollToSection}
                bannerRef={bannerRef}
                aboutRef={aboutRef}
                coursesRef={coursesRef}
                contactRef={contactRef}
              />

              <div ref={bannerRef}>
                <Banner />
              </div>

              <div ref={aboutRef}>
                <Home />
              </div>

              <Middle />

              <div ref={coursesRef}>
                <Courses />
              </div>

              <Slide />
              <List />
              <div ref={contactRef}>
              <Details />
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
