import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Encounters from './components/Encounters';
import PatientChart from './components/PatientChart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Navigate to='/login'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/encounters' element={<Encounters/>}/>
        <Route path='/encounters/id' element={<PatientChart/>}/>
      </Routes>
    </div>
  );
}

export default App;
