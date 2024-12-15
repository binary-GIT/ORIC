import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login'
// import Form from './pages/Form/form'
// import Form2 from './pages/Form/form2';
// import Form3 from './pages/Form/form3';
// import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/home/home';
import Form from './pages/RIC Forms/Ricform';
import RICForm2 from './pages/RIC Forms/RICform2';

//import Navbar from './components/Navbar/Navbar';
// import Navbar from './components/Navbar/Navbar';
// import FirstForm from './components/Forms/FirstForm';
// import SecondForm from './components/Forms/SecondForm';
// import ThirdForm from './components/Forms/ThirdForm';




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


        {/*<Route path="/navbar" element={<Navbar />} /> */}
        {/* <Route path="/home" element={<FirstForm/>} /> */}
        {/* <Route path='/form' element={<FirstForm />} /> */}
        {/* <Route path='/form2' element={<SecondForm />} /> */}
        {/* <Route path='/form3' element={<ThirdForm />} /> */}



      </Routes>
    </Router>
  );
}

export default App;
