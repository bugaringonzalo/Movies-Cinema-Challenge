import './App.css';
import Landing from './components/Landing';
import Home from './components/Home';
import Detail from './components/Detail';
import NavBar from './components/NavBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {

  const [popular, setPopular] = useState([]);

  const location = useLocation();

  useEffect(() => {

  },[]);

  return (
    <div className="App">
      <div>{location.pathname === '/' ? null : <NavBar />}</div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
