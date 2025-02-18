import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HomePagel from "./pages/homepagel";
import HomePager from "./pages/homepager";
import HomePage from './pages/homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'font-awesome/css/font-awesome.min.css';
import './App.css'

  const App = () => {
    return (
        <Router>
          <Routes>
            <Route path = "/" element={<HomePage />} />          
          </Routes>
        </Router>
    );
  };


export default App
