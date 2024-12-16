import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login'
import Home from './pages/home/home';
import Form from './pages/RIC Forms/Ricform';
import RICForm2 from './pages/RIC Forms/RICform2';
import About from './pages/AboutUs/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/form" element={<Form />} />
        <Route path="/form2" element={<Form2 />} />
        <Route path="/form3" element={<Form3 />} /> */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path='form1' element={<Form />} />
        <Route path='form2' element={<RICForm2 />} />
        <Route path='aboutus' element={<About />} />
        <Route path='contact' element={<Contact />} />

      </Routes>
    </Router>
  );
}

export default App;
